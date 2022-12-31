import logo from './logo.svg';
import './App.css';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import UsersPage from './pages/UsersPage';

const RedPage = loadable(() => import('./pages/RedPage'));
const BluePage = loadable(() => import('./pages/BluePage'));
const UsersPage = loadable(() => import('./pages/UsersPage'))
function App() {
  return (
    <div>
      <Menu/>
      <hr/>
      <Routes>
        <Route path={"/red"} component={RedPage} />
        <Route path={"/blue"} component={BluePage} />
        <Route path={"/users"} component={UsersPage} />
      </Routes>
    </div>
  );
}

export default App;
