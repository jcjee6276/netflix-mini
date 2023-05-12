import styled from "styled-components";
import { faCoffee } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Realbody = styled.body`
box-sizing: border-box !important;
margin: 0;
padding: 0;
font-size: 0.875rem;
backgroundColor: #181818;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
width: 100%;
height: 100%;
`;

export const Body = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
backgroundColor: #181818;

zoom: 1;
min-height: 100%;
min-width: 1248px;
`;

export const Header_div = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
height: 76px;
max-height: 100%;
background-color: #212121;
width: 100%;
min-width: 1248px;
max-width: 100%;
position: fixed;
top: 0;
z-index: 10001;
display: flex;
`;

export const Header_logo = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
padding-left: 22px;
height: 100%;
display: flex;
`;

export const Header_logo_inner = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
display: flex;
align-items: center;
height: 100%;
`;

export const Header_logo_menu = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
display: flex;
padding-right: 16px;
`;

export const Header_logo_button = styled.button`
box-sizing: border-box !important;
margin: 0;
padding: 0;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
-webkit-border-radius: 0;
border: 0;
outline: 0;
background: transparent;
cursor: pointer;
height: 14px;
vertical-align: middle;
display: inline-block;
`;

export const Header_logo_icon = styled.i`
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
cursor: pointer;
box-sizing: border-box !important;
width: 20px;
height: 14px;
display: inline-block;
background: url("../img/pc_header_linemenu.png") no-repeat;
`;

export const Header_logo_img = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
position: relative;
display: flex;
margin-top: 2px;
`;

export const Header_logo_img_a = styled.a`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
box-sizing: border-box !important;
color: #b6b6b6;
text-decoration: none;
width: 108px;
height: 14px;
background: url("../img/pc_header_logo.png") no-repeat;
display: inline-block;
`;

export const Header_folding = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
display: flex;
padding-right: 16px;
`;

export const Header_search = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
height: 100%;
position: relative;
flex-grow: 2;
display: flex;
justify-content: center;
`;

export const Header_search_inner = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
display: flex;
align-items: center;
height: 100%;
`;

export const Header_search_form = styled.form`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
margin: 0;
padding: 0;
border: 0;
display: flex;
`;

export const Header_search_form_input_form = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
background-color: #141414;
position: relative;
height: 36px;
width: 450px;
display: flex;
align-items: center;
`;

export const Header_search_input = styled.input`
box-sizing: border-box !important;
vertical-align: middle;
margin: 0;
padding: 0;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
-webkit-border-radius: 0;
border: 0;
outline: 0;
background: transparent;
padding-left: 15px;
width: 100%;
height: 100%;
color: #e2e2e2;
padding-right: 70px;
`;

export const Header_search_div = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
position: absolute;
right: 15px;
top: 6px;

`;

export const Header_search_button = styled.button`
box-sizing: border-box !important;
vertical-align: middle;
margin: 0;
padding: 0;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
-webkit-border-radius: 0;
border: 0;
outline: 0;
background: transparent;
cursor: pointer;
`;



export const Header_search_i = styled.i`
cursor: pointer;
box-sizing: border-box !important;
-webkit-font-smoothing: antialiased;
display: inline-block;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1;
font-weight: 300;
font-family: "Font Awesome 5 Pro";
color: #b9b9b9;
font-size: 0.9375rem;
`;

export const Header_logout_master = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
height: 100%;
padding-right: 1.375rem;
position: relative;
display: flex;
`;

export const Header_logout_in = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
display: flex;
align-items: center;
height: 100%;
position: relative;
float: left;
`;

export const Header_logout_button = styled.a`
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
box-sizing: border-box !important;
text-decoration: none;
background-color: #363636;
padding: 0 20px;
height: 36px;
align-items: center;
display: flex;
color: white;
font-size: 13px;
`;

export const Header_logout = styled.span`
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: white;
font-size: 13px;
box-sizing: border-box !important;
`;


export const Background = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
min-width: 1248px;
max-width: 100%;
position: relative;
padding: 75px 0 0 220px;
`;