import logo from './logo.svg';
import './App.css';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu/>
      <hr/>
      <Routes>
        <Route path={"/red"} component={RedPage} />
        <Route path={"/blue"} component={BluePage} />
      </Routes>
    </div>
  );
}

export default App;
