import { Outlet } from 'react-router-dom';
import './App.css';
import Title from './components/Title';
import NavBar from './components/NavBar';
import { io } from 'socket.io-client';
import { useEffect, useState} from 'react';

function App() {
  const socket = io.connect(process.env.REACT_APP_URL)
  const token = localStorage.getItem("token");
  const [notification, setNotification] = useState(null);
  useEffect(() => {
    socket.on("receiveNotification", (type) => {
      console.log('New '+type+'!');
      console.log('Notified!')
      setNotification(`You have a new ${type}!`)
      setTimeout(()=>{
        setNotification(null)
      }, 2000)
    });
  }, [socket]);
  useEffect(() => {
    if (token){
      console.log('login')
      socket.emit('loggedIn', token)
    }
    return () => {
      console.log('logout')
      socket.emit('leaveChatRooms', token)
    }
  }, [token]);
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
        {notification ? <div className='notificationBanner'>{notification}</div> : null}
      </div>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
