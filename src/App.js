import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (  
    <div className="App">
      <h1>App</h1>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
