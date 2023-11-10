import { Outlet } from 'react-router-dom';
import './App.css';
import Title from './components/Title';

function App() {
  return (  
    <div className="App">
      {/* <h1>Wingman</h1> */}
      <Title></Title>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
