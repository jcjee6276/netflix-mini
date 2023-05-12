
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import React from "react";
import {} from './style';
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { useHistory, useLocation } from "react-router";
import Chatroom from "@layouts/Chatroom";
import { useSocket } from '@layouts/Chats/socket';

interface props {
  userId: any;
}

//const socket = io.connect("http://192.168.0.3:3091");
//const {data} = useSWR('user/json/login', fetcher);
const App: React.FC<props> = ({userId})=> {
  const [username, setUsername] = useState<any>("");
  
  const [showChat, setShowChat] = useState(false);
  
  const searchParams = new URLSearchParams(window.location.search);
  console.log("log? "+searchParams.get('userId'));
  const user = searchParams.get('userId');
  const admin = searchParams.get('userId');
  const room = user;
  const history = useHistory();
  console.log("index : "+userId);
  const socket = useSocket();
  const joinRoom = () => {
    
    // if (user !== "" && room !== "") {
      
    //   setShowChat(true);
    // }
  };
socket.emit('join_room', room);
  
 
  // if(user === 'admin') {
  //   history.push('/chatroom');
    
  // }
  // console.log(socket);
  
  

  return (
    <div className="App">
      
      {/* {!showChat ? (
        <div className="joinChatContainer">
          
          
          
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
       
      )} */}
       <Chat socket={socket} username={user} room={room} />
    </div>
  );
}

export default App;
