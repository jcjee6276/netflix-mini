import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
//import Chat from '@layouts/Chats';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));
const Chat = loadable(()=> import('@layouts/Chats'));
const Chatroom = loadable(()=> import('@layouts/Chatroom'))
const Video = loadable(()=>import('@layouts/video'))
const Suzume = loadable(()=>import('@layouts/Main/suzume'))
//const Community = loadable(()=>import('@layouts/Community'));
const Community = loadable(()=>import('@layouts/Community'))

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace" component={Workspace} />
      <Route path="/chat" component={Chat} />
      <Route path="/chatroom" component={Chatroom} />
      <Route path="/video" component={Video} />
      <Route path="/suzume" component={Suzume} />
      <Route path="/community" component={Community} />
    </Switch>
  );
};

export default App;
