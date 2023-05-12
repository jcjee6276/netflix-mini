import React, { useCallback, useState } from 'react';
import { render } from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import { Header, Container, Loginform, Logintitle, Logininput, Loginmiddle, Login_form_main, Login_form, Login_field, InputPalce
, InputEmailPhone, Input_lable, Input,Label, Loginbutton, Login_other, TextA, TextB, P, Span, Detail, RobotA, Body, Error} from './style';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import useInput from '@hooks/useInput';
import axios from 'axios';

const LogIn = () => {
    const { data, error, revalidate, mutate } = useSWR('/user/json/login', fetcher);

    const [logInError, setLogInError] = useState(false);
    const [userId, onChangeUserId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const onSubmnit = useCallback(
        (e: any) => {
            
            setLogInError(false);
            axios
            .post(
                '/user/json/login',
                { userId, password },
                {
                    withCredentials: true,
                },
            )
            .then((response) => {
                revalidate();
            })
            .catch((error)=> {
                
                console.log(error.response.data.statusCode);
                setLogInError(error.response.data.statusCode === 401);
            
            });
        },
        [userId, password]
    );
        
      if (data) {
        console.log(data);
        return <Redirect to="/workspace"/>;
      }

    
    return (
    
     <Body>
        <Container>
    
        <Loginform>
        <Loginmiddle>
        <Logintitle>
        <Login_form_main onSubmit={onSubmnit}>
        <Header>로그인</Header>

        <Login_form>
            <Login_field>
                <InputPalce>
                    <InputEmailPhone>
                        <Input_lable>
                        <div>
                            <Input type="userId" id="userId" name="userId" value={userId} onChange={onChangeUserId} placeholder='아이디'/>
                            </div>
                                   
                        </Input_lable>
                    </InputEmailPhone>
                </InputPalce>
            </Login_field>

            <Login_field>
                <InputPalce>
                    <InputEmailPhone>
                        <Input_lable>
                        <div>
                            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} placeholder='비밀번호'/>
                        </div>
                        
                        </Input_lable>
                    </InputEmailPhone>
                </InputPalce>
            </Login_field>

            {logInError &&<Error>아이디와 비밀번호를 확인해주세요.</Error> }
            <Loginbutton type="submit">로그인</Loginbutton>
            
        </Login_form>

            <Login_other>
                <TextA>
                    JCShop 회원이 아닌가요? <Link to="/signup"><TextB>지금 가입하세요.</TextB></Link>
                </TextA>
            </Login_other>
            
            <RobotA>
                <P>
                    <Span>
                        이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.
                    </Span>
                    <Detail>자세히 알아보기.</Detail>
                </P>
            </RobotA>
            
        </Login_form_main>
        </Logintitle>
        
        </Loginmiddle>
        
        </Loginform>
        
        </Container>

  
        </Body>
    );
} 

 

export default LogIn;