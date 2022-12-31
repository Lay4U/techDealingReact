import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import * as express from 'express';
import * as path from 'path';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './modules';
import thunk from 'redux-thunk';
import React from 'react';
import { Provider } from 'react-redux';
import PreloadContext from './lib/PreloadContext';
import createSagaMiddleware, { END } from 'redux-saga';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';


const manifest = JSON.parse(
  fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8'),
);
const chunks = Object.keys(manifest.files)
  .filter(key => /chunk\.js$/.exec(key))
  .map(key => `<sciprt src='${manifest.files[key]}'></sciprt>`)
  .join('');

function createPage(root, tags) {
  return `<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset='utf-8' />
<link rel='shortcut icon' href='/favicon.ico' />
<meta
name='viewport'
content='width=device-width, initial-scale=1, shrink-ti-fit=no'
/>
<meta name='theme-color' content='#000000' />
<title>React App</title>
<!--<link href= '${manifest.files['main.cs']}' rel='stylesheet' />-->
${tags.styles}
${tags.links}
</head>
<body>
<noscript>You need to enable Javascript to run this 앱</noscript>
<div id = 'root'>
${root}
</div>
${tags.scripts}
<!--<script src='${manifest.files['runtime-main.js']}'></script>-->
<!-- ${chunks}-->
<!--<script src='${manifest.files['main.js']}'></script>-->
</body>
</html>
`;
}


const app = express();

const serverRender = async (req, res, next) => {
  const context = {};
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

  const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();

  const preloadContext = {
    done: false,
    promises: [],
  };

  const extractor = new ChunkExtractor({ statsFile });

  const jsx = (
    <ChunkExtractorManager extractor={extractor}>
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
    </ChunkExtractorManager>
  );
  ReactDOMServer.renderToStaticMarkup(jsx);
  store.dispatch(END);
  try {
    await sagaPromise;
    await Promise.all(preloadContext.promises);
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx);

  const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
  const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`;
  res.send(createPage(root, stateScript));

  const tags = {
    scripts: stateScript + extractor.getScriptTags(),
    links: extractor.getLinkTags(),
    styles: extractor.getStyleTags()
  }
  const serve = express.static(path.resolve('./build'), {
    index: false,
  });

  app.use(serve);
  app.use(serverRender);

  app.listen(5000, () => {
    console.log('running on http://localhost:5000');
  });
};

console.log(html);
