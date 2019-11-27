import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";
import './CSS/Investigate.css'
import AllGroups from './Components/AllGroups';
import AllMems from './Components/AllMems';
import EditMem from './Components/EditMem';
import Mem from './Components/Mem'
import TrafficLights from './Components/TrafficLights'
import Abstract1 from './Components/Abstract1'
import Abstract2 from './Components/Abstract2'
import Abstract3 from './Components/Abstract3'
import Abstract4 from './Components/Abstract4'
import Abstract5 from './Components/Abstract5'
import Abstract6 from './Components/Abstract6'
import Abstract7 from './Components/Abstract7'
import Abstract8 from './Components/Abstract8'

import axios from 'axios';
import decode from 'jwt-decode';

class App extends Component {
  state = {
    currentUser: {},
  }
  componentDidMount() {  
    /*
    1. check if there is token saved in localStorage at "jwt"
    2. if there is, decode it and save the object to currentUser state
    */
      const token = localStorage.getItem('jwt')
      if (token){
        this.setState({
          currentUser:decode(token) 
        })


      }

  }

  handleLogin = async (data)=> {
    /* 
    1. submit form data to appropriate endpoint
    2. Retrieve token from response object
    3. save token to local storage at key 'jwt'
    4. decode token and set currentUser state
    */
   const res = await axios.post('/auth/login', data)
    const token = res.data.token
    localStorage.setItem("jwt", token)
    this.setState({
      currentUser: decode(token)
    })

  }


  handleLogout = ()=>{
    /*
    1. remove jwt from local storage
    2. clear currentUser in state to empty object
    */

    localStorage.removeItem("jwt")
    this.setState({
      currentUser: {}
    })
  }

  handleSignUp = async  (data)=> {
    /*
    1. submit form data to the appropriate endpoint
    
    2. Retrieve token from response object
    3. save token to local storage at key 'jwt'
    4. decode token and set currentUser state
    */

    const res = await axios.post('/users', data)
    const token = res.data.token
    localStorage.setItem("jwt", token)
    this.setState({
      currentUser: decode(token)
    })
  }
  

  render() {
    const {currentUser} = this.state
    const userIsLoggedIn = currentUser.user_id
    return (
      <Router>
        <div className="App">

        {userIsLoggedIn && <Redirect to="/home" />}

          <header>
          {this.state.currentUser.user_id ?
             <a onClick={this.handleLogout}> Log Out </a > :
              <nav> <Link to='/signup'>Sign Up</Link> <Link to='/login'>Log in</Link></nav> }

          
            <div> {this.state.currentUser.user_id ? `Hello ${currentUser.username}` : null} </div>
            <h1> What is it now human?
           
            </h1>
          </header>
          <Switch>
            <Route exact path='/abstract1' component={Abstract1}/>
            <Route exact path='/abstract2' component={Abstract2}/>
            <Route exact path='/abstract3' component={Abstract3}/>
            <Route exact path='/abstract4' component={Abstract4}/>
            <Route exact path='/abstract5' component={Abstract5}/>
            <Route exact path='/abstract6' component={Abstract6}/>
            <Route exact path='/abstract7' component={Abstract7}/>
            <Route exact path='/abstract8' component={Abstract8}/>
            <Route exact path="/groups" component={AllGroups}/>
            <Route exact path="/login" render={(props) => <LoginForm {...props} handleLogin={this.handleLogin} />} />
            <Route exact path="/" render={
              // (props) => <LoginForm {...props} handleLogin={this.handleLogin} />
              
              (props)=><TrafficLights />
              
              
              
              } />
            <Route exact path="/signup" render={() => <SignUpForm handleSignUp={this.handleSignUp} />} />
            <Route exact path="/home" render={()=>
            
            <div>
            <Link to="/groups">Investigate</Link>


            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="150.5"
    y1="524.5" x2="1832.5" y2="524.5">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" />
    </linearGradient>
    <path className="tt0" d="M1832.5,1027.5c-163.1-60.5-380.9-121.6-642-143c-455.6-37.4-823.5,63.8-1040,143	c224.5-80.7,370.2-297.2,359-529c-10.3-213.9-152.5-403.4-359-477c159.1,74.4,465.5,192,866,187c373.3-4.7,659.6-113.9,816-187	c-31.3,33.5-243.7,268.2-200,599C1661.1,837.2,1784.1,977.6,1832.5,1027.5z"
    />
    <path className="tt1" d="M1744.5,468.5c-117,108.7-234,217.3-351,326c173.7-70.3,265.8-261.8,214-437c-49.6-167.8-218.3-277.5-396-254	c145.7,25.7,291.3,51.3,437,77c-6.2,11.6-42.3,82.6-13,167C1663.8,429.1,1732.1,462.7,1744.5,468.5z"
    />
    <path className="tt2" d="M1744.5,468.5c-131.7-74.6-294.7-64.2-412,26c-106.9,82.2-160.2,218.4-139,354c-27.3-63-54.7-126-82-189	c113.3-185.3,226.7-370.7,340-556c-24.7,38.4-30,70.6-30,93C1421.4,307.6,1550,421.1,1744.5,468.5z"
    />
    <path className="tt3" d="M1393.5,794.5c-229.7,20.7-459.3,41.3-689,62c65-235,130-470,195-705c83.8,107.6,208.7,228.8,386,283	c213.2,65.2,457.8,19.9,459,34c0.7,8.2-82.7,1.4-119,49c-75.2,98.6,102.6,363.2,118,356c24.8-11.6-285-772.5-292-770	c-2,0.7,8.3,66.9,55,93c40.1,22.4,93.6,7.6,142-16c-489.6,289.6-717.2,479.3-683,569C988.6,810.1,1131.3,825.1,1393.5,794.5z"
    />
    <path className="tt4" d="M1713.5,1117.5" />
    <path className="tt5" d="M1393.5,794.5c-142,7.3-268-68.9-309-180c-72.9-197.5,161.2-401.2,211-381c28.4,11.5-4.6,95.4,37,124	c79.7,54.8,320.1-171.4,316-177c-3.6-4.8-180.9,169.2-270,119c-74.6-42-22.3-204.4-69-228c-53.3-26.9-216.1,137.5-602,723	c-70.7-193.7-141.3-387.3-212-581c254.3-58.3,508.7-116.7,763-175c-218.9,192.6-260.2,468.5-147,621	C1196.6,774.1,1348.4,791.1,1393.5,794.5z"
    />
    <path className="tt6" d="M1497.5,336.5c-359,178.3-718,356.7-1077,535c163.7-274.7,327.3-549.3,491-824c82.7,95,165.3,190,248,285	C1272.2,333.8,1384.8,335.2,1497.5,336.5z"
    />
    <path className="tt4" d="M1520.5,650.5" />
    <path className="tt7" d="M1497.5,336.5c-68.3,84-136.7,168-205,252c-104.5-34.4-259-66-383,8c-143.4,85.6-169.2,266.6-205,260	c-25.5-4.7-46.4-102.5-8-572c64-80.3,128-160.7,192-241c-5.5,177.3,103.5,332.7,258,379C1334.2,478.8,1489.1,344.1,1497.5,336.5z"
    />
    <path className="tt8" d="M1025.5,903.5c-106.3-73-212.7-146-319-219c-70.3-157-140.7-314-211-471c114.7,40.3,229.3,80.7,344,121	C901.5,524.2,963.5,713.8,1025.5,903.5z"
    />
    <polygon className="tt9" points="203.1,417.7 495.3,214.3 705.9,684.3 420.7,870.8"
    />
    <path d="M495.1,215l210.2,469.1L420.9,870L203.8,417.8L495.1,215 M495.5,213.5c-97.7,68-195.3,136-293,204 c72.7,151.3,145.3,302.7,218,454c95.3-62.3,190.7-124.7,286-187C636.2,527.5,565.8,370.5,495.5,213.5L495.5,213.5z"
    />
    <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="421.283"
    y1="463.642" x2="706.945" y2="463.642">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" />
    </linearGradient>
    <polygon className="tt10" points="524,203.8 706.9,57.6 683,538.3 421.3,869.7"
    />
    <path d="M706.4,58.7l-23.9,479.5L422.1,867.9L524.4,204L706.4,58.7 M707.5,56.5c-61.3,49-122.7,98-184,147 c-34.3,222.7-68.7,445.3-103,668c87.7-111,175.3-222,263-333C691.5,377.8,699.5,217.2,707.5,56.5L707.5,56.5z"
    />
    <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="707.5"
    y1="350.5" x2="885.5" y2="350.5">
        <stop offset="0" stopColor="#fff" />
        <stop offset="0.117" stopColor="#fbfbfb" />
        <stop offset="0.242" stopColor="#eee" />
        <stop offset="0.37" stopColor="#d9d9d9" />
        <stop offset="0.5" stopColor="#bbb" />
        <stop offset="0.632" stopColor="#959595" />
        <stop offset="0.766" stopColor="#666" />
        <stop offset="0.898" stopColor="#2f2f2f" />
        <stop offset="1" />
    </linearGradient>
    <path className="tt11" d="M883.5,636.5c-58.7-32.7-117.3-65.3-176-98c7-158,14-316,21-474c52.3,40,104.7,80,157,120	C884.8,335.2,884.2,485.8,883.5,636.5z"
    />
    <path className="tt12" d="M1179.5,630.5c-56-34.3-112-68.7-168-103c-7-157.7-14-315.3-21-473c52.7,41,105.3,82,158,123	C1158.8,328.5,1169.2,479.5,1179.5,630.5z"
    />
    <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="899.5"
    y1="355.5" x2="1376.5" y2="355.5">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" />
    </linearGradient>
    <path className="tt13" d="M1376.5,70.5c-158,38.3-316,76.7-474,115c-1,151.7-2,303.3-3,455c31.3-36.3,62.7-72.7,94-109	C1121.2,377.8,1248.8,224.2,1376.5,70.5z"
    />
    <g>
        <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="933.542"
        y1="358.066" x2="1679.939" y2="358.066">
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.129" stopColor="#e5e5e5" />
            <stop offset="0.404" stopColor="#a2a2a2" />
            <stop offset="0.802" stopColor="#383838" />
            <stop offset="1" />
        </linearGradient>
        <path className="tt14" d="M933.5,649l480.2-578l266.2-10.8c-52.8,17.5-104,41.3-152.4,70.6c-80.2,48.7-149,110.7-204.5,184.5 c-94,124.9-128.1,254.2-140,340.8L933.5,649z"
        />
        <path d="M1676.4,60.8c-51.7,17.4-101.8,40.8-149.1,69.5c-80.2,48.7-149.1,110.8-204.6,184.6c-93.9,124.8-128,253.9-140.1,340.6 l-122.8-3.4l-125.2-3.5l239.2-287.9L1414,71.5l134.6-5.5L1676.4,60.8 M1683.5,59.5c-90,3.7-180,7.3-270,11 c-160.3,193-320.7,386-481,579c83.7,2.3,167.3,4.7,251,7c9.3-67.7,37.7-205.1,140-341C1452.3,144.4,1619.6,80.4,1683.5,59.5 L1683.5,59.5z"
        />
    </g>
    <g>
        <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="1234.938"
        y1="364.757" x2="1894.834" y2="364.757">
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.175" stopColor="#fcfcfc" />
            <stop offset="0.307" stopColor="#f2f2f2" />
            <stop offset="0.425" stopColor="#e2e2e2" />
            <stop offset="0.535" stopColor="#cbcbcb" />
            <stop offset="0.639" stopColor="#aeaeae" />
            <stop offset="0.738" stopColor="#8a8a8a" />
            <stop offset="0.834" stopColor="#5e5e5e" />
            <stop offset="0.925" stopColor="#2e2e2e" />
            <stop offset="1" />
        </linearGradient>
        <path className="tt15" d="M1234.9,662.4c76.6-16.2,148.8-39.3,214.7-68.7c65-29,122.6-63.7,171.2-102.9 c48.2-38.9,86.3-81.4,113.2-126.2c27.4-45.6,42.5-92.5,44.9-139.5c2.7-53-10.9-107.5-40.7-162.2l156.5-5l-172.7,613.5L1234.9,662.4 z"
        />
        <path d="M1894.2,58.5L1721.7,671l-245.2-4.6l-237.2-4.4c75.1-16.1,145.9-38.9,210.6-67.8c65.1-29.1,122.7-63.7,171.3-102.9 c48.2-38.9,86.4-81.4,113.3-126.3c27.4-45.7,42.6-92.7,45-139.7c2.7-52.8-10.8-107.2-40.3-161.8L1894.2,58.5 M1895.5,57.5 c-52.7,1.7-105.3,3.3-158,5c37.2,68.2,43,124,41,162.7c-9.8,190-228.6,371.5-548,437.7c164,3.1,328,6.1,492,9.2 C1780.2,467.2,1837.8,262.3,1895.5,57.5L1895.5,57.5z"
        />
    </g>
</svg>



            </div>
          } />

          <Route exact path="/groups/:id/memories" render={(props)=> <AllMems {...props} />} />
          <Route exact path="/groups/:id/memories/:memory_id/edit" render={(props)=> <EditMem {...props} />} />
          <Route exact path="/groups/:id/memories/:memory_id" render={(props)=> <Mem {...props}/>}/>


          </Switch>

          

          

        </div>
      </Router>
    );
  }
}

export default App;
