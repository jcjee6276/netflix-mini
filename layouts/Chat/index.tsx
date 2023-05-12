import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {  Backbutton, Userid, Main, Body, MainA, Maindiv, Chatmaincon,
 ChatWrapper, RightBlock, LeftBlock, NameBlock} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { request } from 'http';
import styled from 'styled-components';
import io from 'socket.io-client';
import Left from '@layouts/Left';
import { SeparationBlock } from './Block';
import { ChattingRequestDto, ChattingResponseDto } from './types/chatting';
import {UserResponseDto } from './types/user';
import Header from './Header';
export {default as Content } from './Content';


const Wrapper = styled.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  min-height: 50px;
  max-height: 200px;
  overflow: auto;
  padding: 6px;
  z-index: 100;
  background-color: #eeeeee;
  & form {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    & textarea,
    button {
      display: inline-block;
      border: none;
      outline: none;
    }
    & textarea {
      width: 100%;
      resize: none;
      height: 100%;
      margin: 0;
      padding: 5px 20px;
    }
    & button {
      width: 50px;
      height: 40px;
      background: #ffeb33;
      &.canSubmit {
        cursor: pointer;
        pointer-events: all;
        color: #000;
      }
      &.cannotSubmit {
        pointer-events: none;
        color: #b4b4b4;
      }
    }
  }
`;




// msg 타입을 string으로 명시해 줌으로써 반환값이 string인지 항상 검사를 거친다.

interface ChatProps {
    msg: string;
    localeTime: string;
    notRead: number;
    content?: string;
  }
  
  interface FriendChatProps {
    msg: string[];
    localeTime: string;
    notRead: number;
    content?: string;
    onImgClick(): void;
  }
interface Props {
  onChatSubmit(msg: string): any;
}


export const Chatting: React.FC<ChatProps> = ({ msg, localeTime, notRead }) => {
    return (
      <ChatWrapper>
        {msg}
        <span className="time">{localeTime}</span>
        <span className="not-read">{notRead > 0 ? notRead : ''}</span>
      </ChatWrapper>
    );
  };

  


  export const MyChat: React.FC<ChatProps> = props => {
    const { content } = props;
    return (
      <React.Fragment>
        {content ? <SeparationBlock content={content} /> : null} 
        <RightBlock>
          <div>
            <Chatting {...props}/>
          </div>
        </RightBlock>
      </React.Fragment>
    );
  };

  interface Props {
    onChatSumbmit(msg: string): void;
  }
  const Chat: React.FC<Props> = ({ onChatSumbmit }) => {
    const [message, setMessage] = useState('');
    // 채팅 내용이 공백이라면, 채팅을 보낼 수 없도록 설정하였습니다.
    const isCanSubmit = !!message.replace(/ |\n/g, '');
    const btnClassName = isCanSubmit ? 'canSubmit' : 'cannotSubmit';
    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      event.preventDefault();
      const value = event.target.value;
      setMessage(value);
    };
    const requestSubmit = () => {
      if (isCanSubmit) {
        onChatSumbmit(message);
        setMessage('');
      }
    };
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      requestSubmit();
    };
    const onEnterPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      // shift + enter 이면 줄바꿈이 되고, enter키만 누르면 채팅 전송이 됩니다.
      if (!event.shiftKey && event.key === 'Enter') {
        event.preventDefault();
        requestSubmit();
      }
    };

  return (
    <Body>
        
        <Chatmaincon>
                    <Maindiv>
                        <MainA>
                           <Header/>
                        </MainA>
                   </Maindiv>
                                    <Wrapper>
                        <form onSubmit={onSubmit}>
                            <textarea
                            value={message}
                            autoFocus={true}
                            onChange={onMessageChange}
                            onKeyPress={onEnterPress}
                            
                            />
                            <button className={btnClassName} type="submit">
                            전송
                            </button>
                        </form>
                        </Wrapper>
                        
                      

                </Chatmaincon>
    </Body>
        
  );
}
  


export default Chat;



