import React from 'react';
import styled from 'styled-components';
import { UserResponseDto } from './types/user';
import { ChattingResponseDto } from './types/chatting';
import { MyChat } from './ChatBlock';


interface Props {
    myId: number;
    participant: Array<UserResponseDto>;
    chattingList: Array<ChattingResponseDto>;
    messageRef: React.RefObject<HTMLDivElement>;
    showProfile(userData: UserResponseDto): void;
    children: React.ReactNode;
  }

  const Wrapper = styled.main`
      position: absolute;
      top: 50px;
      bottom: 65px;
      left: 0px;
      right: 0px;
      overflow: auto;
      width: 100%;
    `;

const Content: React.FC<Props> = props => {
    const { chattingList, children } = props;
    const renderChatting = chattingList.map((chat, idx) => {
  
      
  
    return (
      <MyChat msg={chat.message} localeTime={''} notRead={0} key={chat.id}/>
    );
    });
    return(
      <Wrapper>
        {children}
        {renderChatting}
      </Wrapper>
    )
  }

  export default Content;