import styled from "styled-components"


export const Aside = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
position: fixed;
left: 0;
top: 0;
width: 220px;
height: 100%;
z-index: 10000;
background-color: #212121;
padding-top: 76px;
`;

export const Aside_box = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
overflow: hidden;
height: 100%;
width: 100%;
position: relative;
`;

export const Aside_track_x = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
border-radius: 5px;
position: absolute;
transition: opacity 250ms;
left: 5px;
bottom: 5px;
width: calc(100% - 10px);
height: 10px;
opacity: 0;
`;

export const Aside_track_y = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
border-radius: 5px;
position: absolute;
transition: opacity 250ms;
right: 5px;
top: 5px;
height: calc(100% - 10px);
width: 5px;
opacity: 0;
`;

export const Aside_content_box = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
overflow: auto;
height: 100%;
width: auto;
`;

export const Aside_menu_top = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
padding-top: 25px;
position: relative;
display: flex;
flex-direction: column;
border-bottom: 1px solid #343434;
padding-bottom: 15px;
`;

export const Aside_menu_home_row = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
display: flex;
`;

export const Aside_menu_home_target = styled.a`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
box-sizing: border-box !important;
color: #b6b6b6;
text-decoration: none;
display: flex;
align-items: center;
height: 50px;
padding-left: 22px;
width: 100%;
`;

export const Aside_menu_home_icon = styled.i`
box-sizing: border-box !important;
-webkit-font-smoothing: antialiased;
display: inline-block;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1;
font-weight: 300;
font-family: "Font Awesome 5 Pro";
width: 20px;
font-size: 18.2px;
color: #b6b6b6;
`;

export const Aside_menu_home_text = styled.span`
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
box-sizing: border-box !important;
color: #ececec;
padding-left: 15px;
font-size: 14px;
font-weight: 700;
`;

export const Aside_menu_home_new = styled.div`
box-sizing: border-box !important;
background-color: #d30000;
padding: 1px 5px;
border-radius: 33px;
font-size: 0.625rem;
color: white;
font-family: Tahoma;
font-weight: bold;
margin-left: 7px;
`;

export const Aside_second_menu_box = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
display: flex;
flex-direction: column;
`;

export const Aside_second_movie_box = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
padding-top: 25px;
padding-bottom: 25px;
padding-left: 22px;
border-bottom: 1px solid #343434;
display: flex;
position: relative;
`;

export const Aside_second_movie_row = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
color: #b6b6b6;
box-sizing: border-box !important;
display: flex;
align-items: center;
font-weight: 700;
`;

export const Aside_second_movie_icon = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
flex-direction: column;
display: flex;
`;

export const Aside_second_movie_list_box = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
display: flex;
flex-direction: column;
padding-left: 36px;
padding-top: 10px;
`;

export const Aside_second_movie_title = styled.span`
--fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
--fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
--fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
--fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
--fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
--fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
--fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
--fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
--fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
line-height: 1.46668;
font-variant-ligatures: common-ligatures;
-webkit-font-smoothing: antialiased;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 700;
color: rgb(236, 236, 236);
padding-left: 15px;
font-size: 14px;
box-sizing: border-box !important;
`;

export const Aside_second_movie_list = styled.a`
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
box-sizing: border-box !important;
text-decoration: none;
display: block;
color: #b6b6b6;
font-size: 0.84375rem;
padding: 4px 0;
transition: all 0.1s;
`; 

export const Aside_second_program_list = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
padding-top: 25px;
padding-bottom: 25px;
padding-left: 22px;
border-bottom: 1px solid #343434;
display: flex;
position: relative;
`;

export const Aside_second_program_box = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
flex-direction: column;
display: flex;
`;

export const Aside_second_program_div_a = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
color: #b6b6b6;
box-sizing: border-box !important;
display: flex;
align-items: center;
font-weight: 700;
`

export const Aside_second_program_div_b = styled.div`
font-size: 0.875rem;
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
color: #b6b6b6;
box-sizing: border-box !important;
display: flex;
flex-direction: column;
padding-left: 36px;
padding-top: 10px;
`;

export const Aside_second_program_title = styled.span`
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 700;
box-sizing: border-box !important;
color: #ececec;
padding-left: 15px;
font-size: 14px;
`;

export const Aside_second_program_list_item = styled.a`
font-family: HelveticaNeue-Light, AppleSDGothicNeo-Light, "Noto Sans", "Malgun Gothic", "맑은 고딕", sans-serif;
font-weight: 400;
box-sizing: border-box !important;
text-decoration: none;
display: block;
color: #b6b6b6;
font-size: 0.84375rem;
padding: 4px 0;
transition: all 0.1s;
`