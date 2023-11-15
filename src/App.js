import { Outlet } from 'react-router-dom';
import './App.css';
import Title from './components/Title';
import NavBar from './components/NavBar';

function App() {
  const token = localStorage.getItem("token");
  const titleStyle = {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#202124",
  } 
  return (  
    <div className="App">
        <div style={token ? titleStyle : null}>
      <Title></Title>
      <NavBar></NavBar>
      </div>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
