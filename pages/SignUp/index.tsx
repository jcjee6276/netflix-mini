import React, { useCallback, useState, VFC } from 'react';
import { render } from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import useInput from '@hooks/useInput';
import { Header, Container, Loginform, Logintitle, Logininput, Loginmiddle, Login_form_main, Login_form, Login_field, InputPalce
, InputEmailPhone, Input_lable, Input,Label, Loginbutton, Login_other, TextA, TextB, P, Span, Detail, RobotA, Body,
Inputerror, KeyupLabel, Success, Error} from '@pages/LogIn/style';


axios.defaults.withCredentials = true;

const SignUp = () =>{
    
    

    const { data, error, revalidate, mutate} = useSWR('/user/json/addUser', fetcher);

    const [userId, onChangeUserId] = useInput('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [userName, onChangeNickname] = useInput('');
    const [cellphone, onChangeCellphone] = useInput('');
    const [missmatchError, setMissmatchError] = useState(false);
    const [signUpError, setSignUpError] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    

    const onChangePassword = useCallback(
        (e: { target: { value: React.SetStateAction<string>; }; }) => {
          setPassword(e.target.value);
          setMissmatchError(e.target.value !== passwordCheck);
        },
        [passwordCheck],
      );

      const onChangePasswordCheck = useCallback(
        (e: { target: { value: React.SetStateAction<string>; }; }) => {
          setPasswordCheck(e.target.value);
          setMissmatchError(e.target.value !== password);
        },
        [password],
      );

      const onSubmit = useCallback(
        (e: any) => {
          e.preventDefault();
          if (!missmatchError && userName) {
            console.log('서버로 회원가입하기');
            setSignUpError('');
            setSignUpSuccess(false);
            axios
              .post('/user/json/addUser', {
                userId,
                userName,
                password,
                cellphone,
              })
              .then((response) => {
                console.log(response);
                setSignUpSuccess(true);
              })
              .catch((error) => {
                console.log(error.response);
                setSignUpError(error.response.data);
               
              })
              .finally(() => {});
          }
        },
        [userId, userName, password, passwordCheck, missmatchError],
      );
    

      

    return (
        <Body>
            <Container>
                <Loginform>
                    <Loginmiddle>
                        <Logintitle>
                            <Login_form_main>
                                <Header>회원가입</Header>

                                <Login_form onSubmit={onSubmit}>
                                    <Login_field>
                                        <InputPalce>
                                            <InputEmailPhone>
                                                <Input_lable>
                                                    <Input type="userId" id="userId" name="userId" value={userId} onChange={onChangeUserId} placeholder='아이디'></Input>
                                                   
                                           
                                                </Input_lable>
                                            </InputEmailPhone>
                                        </InputPalce>
                                    </Login_field>
                                    
                                    
                                    <Login_field>
                                        <InputPalce>
                                            <InputEmailPhone>
                                                <Input_lable>
                                                    <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} placeholder='비밀번호'/>
                                                   
                                                </Input_lable>
                                            </InputEmailPhone>
                                        </InputPalce>
                                    </Login_field>
                                 
                                    <Login_field>
                                        <InputPalce>
                                            <InputEmailPhone>
                                                <Input_lable>
                                                    <Input type="password" id="passwordCheck" name="passwordCheck"  onChange={onChangePasswordCheck} placeholder='비밀번호 확인'/>
                                                    
                                                </Input_lable>
                                            </InputEmailPhone>
                                        </InputPalce>
                                    </Login_field>
                                        {missmatchError && <Inputerror>비밀번호가 일치하지 않습니다.</Inputerror>}
                                    <Login_field>
                                        <InputPalce>
                                            <InputEmailPhone>
                                                <Input_lable>
                                                    <Input type="userName" id="userName" name="userName" value={userName} onChange={onChangeNickname} placeholder='닉네임'/>
                                                    
                                                </Input_lable>
                                            </InputEmailPhone>
                                        </InputPalce>
                                    </Login_field>
                                        
                                    <Login_field>
                                        <InputPalce>
                                            <InputEmailPhone>
                                                <Input_lable>
                                                    <Input type="cellphone" id="cellphone" name="cellphone" value={cellphone} onChange={onChangeCellphone} placeholder='핸드폰 번호'/>
                                                    
                                                </Input_lable>
                                            </InputEmailPhone>
                                        </InputPalce>
                                    </Login_field>
                                    
                                    {!cellphone && <Inputerror>휴대폰번호를 입력해주세요.</Inputerror>}
                                    {signUpError && <Error>이미 가입된 계정입니다.</Error>}
                                    {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
                                    <Loginbutton>회원가입</Loginbutton>

                                    <Login_other>
                <TextA>
                    이미 계정이 있으신가요? <Link to="/login"><TextB>로그인 하러 가기</TextB></Link>
                </TextA>
            </Login_other>

                                </Login_form>
                            </Login_form_main>
                        </Logintitle>
                    </Loginmiddle>
                </Loginform>
            </Container>
        </Body>
    )
}


export default SignUp;