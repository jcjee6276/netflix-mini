import React, { useEffect, useState , useRef, LegacyRef} from "react";

import styled from "styled-components";
import Header from "./Header";
import { Body , Chatmaincon, LeftBlock, RightBlock, Span, ChatMessageBlock, RightBlockSecond, Wrapper, LeftBlockUserId, Profile, LeftMessageBox, LeftMessage, LeftTime} from "./style";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import Scrollbars from 'react-custom-scrollbars';
//import {useSocket} from './socket';


interface props {
  socket: any;
  username: any;
  room: any;
  
}

const Chat: React.FC<props> = ({socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<any[]>([]);
  const { data, revalidate, mutate } = useSWR<false>('/user/json/login', fetcher);
  const isCanSubmit = !!currentMessage.replace(/ |\n/g, '');
  const userId = data;
  const scrollbars: LegacyRef<HTMLDivElement> = useRef(null);
  
  
  const scrollToBottom = () => {
    if (scrollbars.current) {
      scrollbars.current.scrollTop = scrollbars.current.scrollHeight;
    }
  }
console.log("들어온 사람 누구?"+userId);


  const sendMessage = async () => {
    if ( isCanSubmit) {
      const messageData = {
        username: username,
        room: room,
        
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      
      await socket.emit("send_message", messageData);
      setMessageList(emessageList => [...emessageList, messageData]);
      console.log("mesg좀 보자 "+ messageData);
      setCurrentMessage('');
      
      
    }
  };
  

  useEffect(() => {
    socket.on("receive_message", (data: string) => {
      setMessageList(emessageList => [...emessageList, data]);
      console.log(setMessageList);
    });
  }, [socket]);

  useEffect( ()=> {
    scrollToBottom();
  }, [currentMessage]);

  console.log(scrollbars.current?.scrollHeight)
  
  return (
    <Body>
      <Chatmaincon>
        <Header userId={userId}/>
      
        
        <div ref={scrollbars}>
        
           {messageList.map((messageContent, key) => {
            const createAt = new Date(messageContent.createAt);
            const localeTime = createAt.toLocaleTimeString();
            const removeSecond = localeTime.substring(0, localeTime.length -3 );
            //const scrollbars = useRef(null);
            console.log("메세지안"+messageContent.username); // 메세지 보내는 사람 id
            console.log("other"+username); //input 값 id 받아오는 것 
            
            
           

            if(userId === messageContent.username) {
              
            return ( 
              // <div>
              //   className="message"
              //   id={username === messageContent.username ? "you" : "other"}
              // > 
              
                <div>
                  <RightBlock>
                  <RightBlockSecond >
                      <ChatMessageBlock>{messageContent.message}
                      <Span className="time">{messageContent.time}</Span>
                      </ChatMessageBlock>
                      </RightBlockSecond>
                  </RightBlock>
                
                  {/* <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div> */}
                </div>
              
              );
                }
                

              return(
                
                <div>
               <LeftBlock>
              <Profile src="./img/pc_header_logo.png"/>

              <LeftBlockUserId>{messageContent.username}</LeftBlockUserId>
              <LeftMessageBox>
                <LeftMessage>{messageContent.message}
                <LeftTime className="time">{messageContent.time}</LeftTime>
                </LeftMessage>
              </LeftMessageBox>
            </LeftBlock>
            </div>
              )
           
          })}
          
        
          
        </div>
          
        
      
      <Wrapper>
          <div>
        <textarea
         
          value={currentMessage}
          placeholder="채팅을 입력하세요."
          onKeyDown={(event)=> {
            if(event.key === 'Enter') {
              return false;
            }
          }}
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            if( !event.shiftKey && event.key === "Enter"){
              sendMessage();
            }
            
          }}
        />
        <button onClick={sendMessage}>전송</button>
    </div>
    </Wrapper>
    </Chatmaincon>
    </Body>
  );
}

export default Chat;