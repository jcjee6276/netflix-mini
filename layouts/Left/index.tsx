import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Aside, Aside_box, Aside_track_x, Aside_track_y, Aside_content_box, Aside_menu_top, Aside_menu_home_row,
Aside_menu_home_icon, Aside_menu_home_target, Aside_menu_home_text, Aside_menu_home_new, Aside_second_menu_box,
Aside_second_movie_box, Aside_second_movie_icon, Aside_second_movie_row, Aside_second_movie_list_box, Aside_second_movie_title,
Aside_second_movie_list, 
Aside_second_program_list,
Aside_second_program_box,
Aside_second_program_div_a,
Aside_second_program_div_b,
Aside_second_program_title,
Aside_second_program_list_item} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AChats from '@layouts/Chats/index'
import { faFileMedicalAlt, faFilm, faFontAwesome, faHistory, faHouse, faStar, faTabletAlt, faTv, faTvAlt } from '@fortawesome/free-solid-svg-icons';

interface props {
    userId: any;
}

const Left: React.FC<props> = ({userId}) => {

    const Chat = () => {
        const data = userId;
         if(data === 'admin') {
             return window.open(`/chatroom?userId=${data}`, '_blank', 'width=450,height=600,noopener,noreferrer');
         } else {
        window.open(`/chat?userId=${data}`, '_blank', 'width=450,height=600,noopener,noreferrer');
          }
    }

    

    const user = userId;
    const click = () =>{
        if(user==='admin') {
            return <Link to="/chatroom"/>
        }  
    }

    return(
        <Aside>
            <Aside_box>
                <Aside_track_x/>
                <Aside_track_y/>
                <Aside_content_box>
                    <Aside_menu_top>
                        <Aside_menu_home_row>
                            <Aside_menu_home_target>
                                <FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} /> 
                                <Aside_menu_home_text>홈</Aside_menu_home_text>
                            </Aside_menu_home_target>
                        </Aside_menu_home_row>

                        <Aside_menu_home_row>
                            <Aside_menu_home_target>
                                <FontAwesomeIcon icon={faStar} style={{color: "#ffffff",}} /> 
                                <Aside_menu_home_text>인기영상</Aside_menu_home_text>
                            </Aside_menu_home_target>
                        </Aside_menu_home_row>

                        <Aside_menu_home_row>
                            <Aside_menu_home_target>
                                <FontAwesomeIcon icon={faHistory} style={{color: "#ffffff",}} /> 
                                <Aside_menu_home_text>시청기록</Aside_menu_home_text>
                            </Aside_menu_home_target>
                        </Aside_menu_home_row>

                        <Aside_menu_home_row>
                        
                            <Aside_menu_home_target onClick={Chat} > 
                                <FontAwesomeIcon icon={faTabletAlt} style={{color: "#ffffff",}} /> 
                                <Aside_menu_home_text>상담사와 채팅</Aside_menu_home_text>
                                <Aside_menu_home_new>New</Aside_menu_home_new>
                            </Aside_menu_home_target>
                        </Aside_menu_home_row>

                    </Aside_menu_top>

                    <Aside_second_menu_box>
                        <Aside_second_movie_box>
                            <Aside_second_movie_icon>
                                <Aside_second_movie_row>
                                    <FontAwesomeIcon icon={faFilm} style={{color: "#ffffff",}} /> 
                                    <Aside_second_movie_title>영화</Aside_second_movie_title>
                                </Aside_second_movie_row>



                                <Aside_second_movie_list_box>
                                    <Aside_second_movie_list>한국영화</Aside_second_movie_list>
                                    <Aside_second_movie_list>해외영화</Aside_second_movie_list>
                                    <Aside_second_movie_list>[극장판] 애니메이션</Aside_second_movie_list>
                                </Aside_second_movie_list_box>
                                
                            </Aside_second_movie_icon>
                        </Aside_second_movie_box>

                        <Aside_second_program_list>
                            <Aside_second_program_box>

                                <Aside_second_program_div_a>
                                <FontAwesomeIcon icon={faTvAlt} style={{color: "#ffffff",}} /> 
                                <Aside_second_program_title>방송프로그램</Aside_second_program_title>
                                </Aside_second_program_div_a>



                                <Aside_second_program_div_b>
                                    <Aside_second_program_list_item>드라마</Aside_second_program_list_item>
                                    <Aside_second_program_list_item>예능프로그램</Aside_second_program_list_item>
                                    <Aside_second_program_list_item>다큐/시사</Aside_second_program_list_item>
                                    <Aside_second_program_list_item>애니메이션</Aside_second_program_list_item>
                                    <Aside_second_program_list_item>해외드라마</Aside_second_program_list_item>
                                </Aside_second_program_div_b>
                                
                            </Aside_second_program_box>
                        </Aside_second_program_list>


                    </Aside_second_menu_box>

                </Aside_content_box>
            </Aside_box>

        </Aside>

        
    );
}

export default Left;