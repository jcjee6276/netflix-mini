import styled from "styled-components";

export const Body = styled.body`
box-sizing: border-box;
width: 100%;
height: 100%;
padding: 0px;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
position: fixed;
top: 0px;
`;

export const Maindiv = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
width: 100%;
`;

export const MainA = styled.main`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
width: 100%;
display: flex;
`;

export const MainHeader = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 20px 0px 120px;
  width: 100%;
  height: 100px;
  background-color: #fff;
  z-index: 1;
  & input {
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: #f6f6f7;
    width: 100%;
    padding: 5px 10px;
    &:focus {
      &::placeholder {
        color: #f6f6f7;
      }
    }
  }
`;
export const TitleBlock = styled.section`
  position: relative;
  & h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  & i {
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    top: 5px;
    right: 0;
  }
`;
export const MainContent = styled.section`
  position: absolute;
  top: 100px;
  bottom: 5px;
  left: 0px;
  width: 100%;
  overflow: auto;
  & li {
    position: relative;
    padding: 20px 100px 20px 180px;
    & img {
      position: absolute;
      top: 18px;
      left: 120px;
      width: 45px;
      height: 45px;
      border-radius: 15px;
      cursor: pointer;
    }
    & p {
      color: #707070;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-height: 19px;
      font-size: 12px;
      & b {
        color: #000;
        font-weight: bold;
        font-size: 14px;
      }
    }
    &:hover {
      background-color: #eaeaeb;
    }
  }
`;

export const Notification = styled.span`
  position: absolute;
  display: inline-block;
  padding: 3px;
  color: #fff;
  background-color: #ff513d;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  min-width: 25px;
  text-align: center;
`;

export const Ceader = styled.header`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
width: 100%;
background-color: rgb(169, 189, 206);
height: 50px;
`;

export const Backbutton = styled.button`
box-sizing: border-box;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
border: none;
font-size: 20px;
padding: 10px 10px 10px 30px;
background-color: rgb(169, 189, 206);
outline: none;
cursor: pointer;
color: rgb(220, 220, 220);
`;

export const Userid = styled.span`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
line-height: 1.5;
box-sizing: border-box;
display: inline-block;
font-weight: bold;
font-size: 20px;
margin-left: 10px;
margin-top: 10px;
`;

export const Main = styled.main`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
position: absolute;
inset: 50px 0px 65px;
overflow: auto;
width: 100%;
`

export const Chatmaincon = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
position: fixed;
top: 0px;
left: 0px;
z-index: 99;
width: 100%;
height: 100vh;
background: rgb(178, 199, 217);
`;

export const Footer = styled.footer`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
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
background-color: rgb(238, 238, 238);
`;

export const Footer_form = styled.form`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
position: relative;
display: flex;
width: 100%;
height: 100%;
`;

export const ChatMessageArea = styled.textarea`
box-sizing: border-box;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
display: inline-block;
border: none;
outline: none;
width: 100%;
resize: none;
height: 100%;
margin: 0px;
padding: 5px 20px;
`;

export const TranslationButton = styled.button`
box-sizing: border-box;
padding: 0px;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
display: inline-block;
border: none;
outline: none;
width: 50px;
height: 40px;
background: rgb(255, 235, 51);
pointer-events: none;
color: rgb(180, 180, 180);
`;
export const TranslationButton2 = styled.button`
box-sizing: border-box;
padding: 0px;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
display: inline-block;
border: none;
outline: none;
width: 50px;
height: 40px;
background: rgb(255, 235, 51);
pointer-events: none;
color: rgb(255, 255, 255);
`;

export const ChatWrapper = styled.div`
background-color: rgb(255, 236, 66);
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
text-align: right;
box-sizing: border-box;
padding: 0px;
margin: 0px;
`;

export const RightBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
text-align: right;
margin-top: 10px;
margin-left: 10px;
margin-right: 10px;
`;
export const LeftBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
position: relative;
margin-top: 10px;
margin-left: 10px;
margin-right: 10px;
padding-left: 50px;
`;

export const LeftBlockUserId = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
margin-bottom: 5px;
`
export const LeftMessageBox = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
`
export const LeftMessage = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
margin: 0px;
position: relative;
display: inline-block;
padding: 7px 8px;
border-radius: 4px;
margin-bottom: 7px;
box-shadow: rgb(143, 171, 199) 0px 1px 2px 0px;
max-width: 70%;
overflow-wrap: break-word;
white-space: pre-wrap;
background-color: rgb(255, 255, 255);
`

export const LeftTime = styled.span`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
overflow-wrap: break-word;
white-space: pre-wrap;
box-sizing: border-box;
position: absolute;
min-width: 65px;
text-align: left;
bottom: 0px;
right: -70px;
`

export const Profile = styled.img`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
border: 0px none;
position: absolute;
top: 3px;
left: 0px;
height: 45px;
width: 45px;
border-radius: 20px;
float: left;
cursor: pointer;
`

export const NameBlock = styled.div`
  margin-bottom: 5px;
`;

export const Span = styled.span`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
overflow-wrap: break-word;
white-space: pre-wrap;
box-sizing: border-box;
position: absolute;
display: inline-block;
min-width: 65px;
text-align: right;
bottom: 0px;
left: -70px;
`;

export const ChatMessageBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
margin: 0px;
position: relative;
display: inline-block;
padding: 7px 8px;
border-radius: 4px;
margin-bottom: 7px;
box-shadow: rgb(143, 171, 199) 0px 1px 2px 0px;
max-width: 70%;
overflow-wrap: break-word;
white-space: pre-wrap;
background-color: rgb(255, 236, 66);
text-align: left;
`;

export const RightBlockSecond = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
text-align: right;
box-sizing: border-box;
padding: 0px;
margin: 0px;
`

export const Wrapper = styled.footer`
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
& div {
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