import React, { useEffect, useState } from "react";
import { UserLi, UserNameB, UserNamelist, UserProfile } from "./style";
import axios from "axios";
import { setupCache } from 'axios-cache-adapter';
import { withEmotionCache } from "@emotion/react";
import Chat from "@layouts/Chats/Chat";
import { Link } from 'react-router-dom';

interface props {
    socket: any;
}

const userlist: React.FC<props> = ({socket}) => {
    const [userList, setUserList ] = useState<any[]>([]);
    const [showChat, setShowChat] = useState(false);
//     const cache = setupCache({
//         maxAge: 15 * 60 * 1000
//     });
//    const instance = axios.create({
//         baseURL: 'user/json',
//         cache: cache
//     });
//    instance.get('/userList', {
//         withCredentials: true,
//    }).then(response=> {
//         setUserList(response.data);
//    })
//const socket = io.connect("http://192.168.0.15:3091");
    const onLoad = useEffect(
        ()=> {
            axios.get('user/json/userList', {
                withCredentials: true,
            }).then(response=> {
                setUserList(response.data);
            })
        }
    ,[userlist])
    onLoad;
    console.log(socket);
    
    


    return(
        <div>
        

            
        {userList.map((item)=> {
            const click = () => {
                socket.emit('join_room', item);
                setShowChat(true);
                
            }
            const renderChat = (item: any) => {
                if(showChat) {
                    return <Chat socket={socket} username='admin' room={item}/>
                } return null
            }
            
         return (
            
            <div> 
        
        <UserLi >
        {/* onDoubleClick={()=> {
            return (
                <Chat socket={socket} username='admin' room={item} />
            )
        }} */}

        
            <UserProfile src="../img/base_profile.jpg" onClick={click}/>
            
            {renderChat(item)}
            <UserNamelist>
                <UserNameB key={item} >{item}</UserNameB>
            </UserNamelist>
        
            </UserLi>

            </div>
        
        )})}

        </div>
    )
}

export default userlist;