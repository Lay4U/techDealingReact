import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<NewsPage />} />
      <Route path={'/:category'} element={<NewsPage />} />
    </Routes>
  );
};

export default App;


// import NewsList from './components/NewsList';
// import Categories from './components/Categories';
// import { useState, useCallback } from 'react';
//
// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => setCategory(category), []);
//
//   return (
//     <>
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </>
//   );
// }
//
// export default App;

// import { useState } from 'react';
// import axios from 'axios'
//
// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=30272bb9acab4b2cb173b4470a2335fb',
//       );
//       setData(response.data)
//     } catch(e){
//       console.log(e);
//     }
//     // axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
//     //   setData(response.data);
//     // })
//   }
//
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
//     </div>
//   )
// }
//
// export default App;