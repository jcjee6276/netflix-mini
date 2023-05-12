import React, { useEffect, useState } from 'react';
import { AdminDiv, AdminName, AdminNameBr, AdminProfile, Aside, Body, ContentMain, H1, LineDiv, Main, Maindiv, SectionBody, SectionTop, SectionUser, Ul, UserCount, UserLi, UserList, UserNameB, UserNamelist, UserProfile, UserSearch, UserUl, Usericon, Usertitle, WrapperDiv } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';

import axios from 'axios';
import Chat from '@layouts/Chats/Chat';
import { Link, useHistory } from 'react-router-dom';
import { useSocket } from '@layouts/Chats/socket';

interface props {
    socket: any;
    
}

const Chatroom: React.FC<props> = () => {
    const [showLayout, setShowLayout] = useState(true);
    const [count, setCount ] = useState([]);
    const [userList, setUserList ] = useState<any[]>([]);
    const [showChat, setShowChat] = useState(false);
    const socket = useSocket();
    const onCount = useEffect(
        () => {
            axios.get('user/json/listUser/Count', {
                withCredentials: true,
            }).then(reponse=> {
                setCount(reponse.data);
            })
        }
    ,[])
        onCount;
    console.log("이제 socket은?"+socket);
        const onLoad = useEffect(
            ()=> {
                axios.get('user/json/userList', {
                    withCredentials: true,
                }).then(response=> {
                    setUserList(response.data);
                })
            }
        ,[])
        onLoad;

        const data = {socket: socket, username: 'admin', room: '1234'};
        const click = () => {
            socket.emit('join_room', '1234');
            setShowChat(true);
           

        }
        
    return (
        <Body>
            
            <Maindiv>
                <WrapperDiv>
                    <Main>
                       
                    <ContentMain>
        {showLayout ? (
            <SectionTop>
                <SectionUser>
                    <H1>유저목록</H1>
                </SectionUser>
                <UserSearch placeholder='이름 검색'></UserSearch>
            </SectionTop>
        ) : null}
            <SectionBody>

                <AdminDiv>
                    <AdminProfile src="../img/base_profile.jpg"/>
                    <AdminName>
                        <AdminNameBr>상담원</AdminNameBr>
                        
                        <p></p>
                    </AdminName>
                </AdminDiv>

                <LineDiv>
                    <UserCount>유저 수 {count}</UserCount>
                </LineDiv>

                <UserUl>
                <div>
        

            
        {userList.map((item, i)=> {
            const click = () => {
                socket.emit('join_room', item);
                setShowChat(true);
                
                window.open(`/chat?userId=${item}`, '_blank', 'width=450,height=600,noopener,noreferrer');
            }
            // const renderChat = (item: any) => {
            //     if(showChat) {
            //         return <Chat socket={socket} username='admin' room={item}/>
            //     } return null;
            // }
           
            //const data = [{socket: socket, username: 'admin', room: '1234'}]
            
            // const handleClick = (data: any) => {
            //     socket.emit('join_room', item);
            //     return <Link to="/workspace" />
            // }

         return (
            
            <div> 
        
        <UserLi >
        {/* onDoubleClick={()=> {
            return (
                <Chat socket={socket} username='admin' room={item} />
            )
        }} */}

        
            <UserProfile src="../img/base_profile.jpg" onClick={click}/>
            
           
            <UserNamelist>
                <UserNameB key={item} >{item}</UserNameB>
            </UserNamelist>
        
            </UserLi>

            </div>
        
        )})}

        </div>
                    
                    
                </UserUl>


            </SectionBody>
        </ContentMain>
            {showLayout ? (<Sidebar/>) : null }
                       
                    </Main>
                </WrapperDiv>
            </Maindiv>
        </Body>
    )
}

export default Chatroom;