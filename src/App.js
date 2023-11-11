import { Outlet } from 'react-router-dom';
import './App.css';
import Title from './components/Title';
import NavBar from './components/NavBar';

function App() {
  return (  
    <div className="App">
      {/* <h1>Wingman</h1> */}
      <Title></Title>
      <NavBar></NavBar>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
