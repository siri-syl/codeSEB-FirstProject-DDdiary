
import logo from './logo.svg';
import './App.css';
import { Intro } from './pages/Intro';
import  MainPage  from './pages/MainPage';
import  LoginPage  from './pages/Login'
import  MyPage  from './pages/MyPage';
import  SignUp from './pages/SignUp'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from './pages/NavBar';


function App() {


  return (

    <>
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route exact path="/">
        <Intro/>
      </Route>
      <Route path="/mainpage">
        <MainPage />
      </Route>
      <Route path="/mypage">
        <MyPage />
      </Route>
      <Route path="/loginpage">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Switch>
    </BrowserRouter>
    </>

  );
}

export default App;
