import React, { useCallback, useState } from 'react';
import { Body, Header_div, Header_logo, Header_logo_inner, Header_logo_menu, Header_logo_button,
Header_logo_icon, Header_logo_img, Header_logo_img_a, Header_folding, Header_search, Header_search_inner,
Header_search_form, Header_search_form_input_form, Header_search_input, Header_search_button, Header_search_div,
Header_logout_master, Header_logout_in, Header_logout_button, Header_logout, Background, Realbody} from './styles';
import { faCoffee, faSearch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Redirect } from 'react-router-dom';
import Left from '@layouts/Left';
import Main from '@layouts/Main';
import axios from 'axios';
import useSWR, { mutate } from 'swr';
import fetcher from '@utils/fetcher';
import Chats from '@layouts/Chats';

const Workspace = () => {
    
    const { data, revalidate, mutate } = useSWR<false>('/user/json/login', fetcher);
    console.log(data);
    
        const userId = data;

        


    const onLogout = useCallback(() => {
        
        axios
          .post('/user/json/logout', null, {
            withCredentials: true,
          })
          .then(() => {
            mutate(false, false);
            
          });
      }, []);

      if(data === false || data ===undefined) {
        return <Redirect to="/"/>
    }

    return (
<Realbody>
    <Body>
    <Header_div>
            <Header_logo>
                <Header_logo_inner>
                    <Header_logo_menu>
                            <Header_folding>
                                <Header_logo_button>
                                    <Header_logo_icon/>
                                </Header_logo_button>
                                </Header_folding>

                                <Header_logo_img>
                                   <Link to="/workspace"> <Header_logo_img_a/></Link>
                                 </Header_logo_img>

                    </Header_logo_menu>
                </Header_logo_inner>
            </Header_logo>

            <Header_search>
                <Header_search_inner>
                    <Header_search_form>
                        <Header_search_form_input_form>
                            <Header_search_input placeholder='검색어를 입력해주세요.'>
                                
                            </Header_search_input>

                            <Header_search_div>
                                <Header_search_button>
                                <FontAwesomeIcon icon={faMagnifyingGlass} bounce style={{color: "#ffffff",}} />
                                </Header_search_button>
                            </Header_search_div>
                        </Header_search_form_input_form>
                    </Header_search_form>
                </Header_search_inner>
            </Header_search>

            <Header_logout_master>
                <Header_logout_in>
                    <Header_logout_button>
                        <Header_logout onClick={onLogout}>
                            로그아웃
                        </Header_logout>
                    </Header_logout_button>
                </Header_logout_in>
            </Header_logout_master>

        </Header_div>
       
        <Left userId={userId}/>
        <Main/>
        
    </Body>
    </Realbody>
  );  
};

export default Workspace;

