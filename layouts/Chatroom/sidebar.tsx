import React from 'react';
import { Aside, Body, ChatAria, ChatTitle, Main, Maindiv, Ul, UserList, Usericon, Usertitle, WrapperDiv } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
const sidebar = () => {

    return (
       
                        <Aside>
                            <Ul>
                                <UserList>
                                    <Usertitle>
                                        <FontAwesomeIcon icon={faUser}/>
                                    </Usertitle>
                                </UserList>

                                
                                <UserList>
                                    <Usertitle>
                                        <FontAwesomeIcon icon={faComment}/>
                                    </Usertitle>
                                </UserList>

                                <UserList>
                                    <Usertitle>
                                        <FontAwesomeIcon icon={faSignOut}/>
                                    </Usertitle>
                                </UserList>
                                
                            </Ul>
                        </Aside>


                   
    )
}

export default sidebar;