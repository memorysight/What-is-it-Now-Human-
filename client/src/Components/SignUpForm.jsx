import React, { Component } from "react";
import '../CSS/Signup.css'



class SignUpForm extends Component {
  state = {
    password: "",
    username: "",
    email: "",
    passwordConfirm: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    /*
    1. check that password and password confirm match; alert the user and prevent submission if they don't
    2. Otherwise, call the handleSignup from props with the form data 
    */
    if (this.state.passwordConfirm !== this.state.password){

        alert('Your passwords dont match')
           return this.setState({
            password: '',
            passwordConfirm: ''
        })
    }
   this.props.handleSignUp(this.state)

  }

  render() {
    return (
      <div className="auth-container">
    
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
    <path className="rt0" d="M474.5,150.5" />
    <path className="rt1" d="M1676.5,154.5c-290.9,226.7-581.9,453.3-872.8,680L521.5,620.4c613.9-11.5,800.1-16.7,800-18.9	c0-3.4-446.6,39.4-480-69c-24.7-80.1,183-220,435-358c-289.2,169.8-405.4,199.4-435,165c-17.7-20.5-4-63.5-20-69	c-30.5-10.6-104.6,139.6-107,138c-0.7-0.5,29.9-49.3,177.8-277c249.7,202,499.5,404,749.2,606c-9.7-7.4-154.2-121.9-138-310	C1518.7,250.8,1662.5,162.7,1676.5,154.5z"
    />
    <path className="rt2" d="M728,581.6c327.5-9,655-18,982.5-27.1c-318.9,15.8-588.7,51.9-599,132c-15.5,120.8,566.7,284.1,561,302	c-4.3,13.5-336.6-75.7-1336.2-376.9c161.1-164,322.1-328,483.2-492.1c-267.1,367.7-289.7,480.1-258,513	c58.5,60.6,286.1-165.1,567-135c245.2,26.3,425.8,236.2,542,415c-158-268-316-536-474-804c-8.3,99.4-36.5,209-120,269	c-118.5,85.2-314.9,46.4-315,51c0,3.2,91.4-4.3,102,24C873.9,480.1,804.3,532.9,728,581.6z"
    />
    <path className="rt0" d="M1627.5,774.5" />
    <polygon className="rt3" points="723.8,778.5 998.8,269 1439.8,267 1229.2,779"
    />
    <path d="M1439,267.5l-41.3,100.4l-41.8,101.7l-80.1,194.8l-46.9,114.1l-252.6-0.2L724.7,778L878,493.9l121.1-224.4l219.9-1 L1439,267.5 M1440.5,266.5c-147.3,0.7-294.7,1.3-442,2C906.7,438.7,814.8,608.8,723,779c168.8,0.2,337.7,0.3,506.5,0.5 c42.4-103.2,84.9-206.4,127.3-309.5C1384.7,402.1,1412.6,334.3,1440.5,266.5L1440.5,266.5z"
    />
    <path className="rt4" d="M1272.5,941.7c-5,0-10-0.1-14.9-0.2h29.9C1282.4,941.6,1277.4,941.7,1272.5,941.7L1272.5,941.7z M805.9,940.5 L618.1,47.1c10.2,23.5,47.1,94.2,129.3,119.9c19.2,6,39.3,9,59.6,9c43.5,0,87.1-14.1,123.7-40c-97.3,91.6-208,229.5-198.7,377 c3.3,52.3,18.3,104.1,44.7,153.9c26,49.1,61.7,94,106.2,133.4c90.6,80.1,209.7,129.6,336.9,140.2L805.9,940.5L805.9,940.5z"
    />
    <path d="M619.5,51.6c5.2,11.2,14.5,28.6,29,46.9c26.8,33.7,59.9,56.9,98.6,69c19.3,6,39.4,9.1,59.8,9.1 c41.6,0,83.2-12.9,118.8-36.5C864.5,198.4,816.8,257.2,784,315c-38.8,68.4-56.5,135.1-52.5,198c3.3,52.4,18.4,104.2,44.7,154.1 c26,49.2,61.8,94.1,106.3,133.5c45.5,40.3,98.1,72.9,156.3,96.9c53.8,22.2,110.9,36.5,170,42.4H806.3L712,491.3L619.5,51.6 M616.5,42c63,299.7,126,599.3,189,899c142.7,0,285.5,0,428.2,0C954,924,745.8,724.5,732.5,513c-8.4-132.5,79.8-266.6,204.8-382.4 c-38.2,29.2-84.1,44.9-130.3,44.9c-20,0-40-2.9-59.5-9C655.9,137.9,621,53.5,616.5,42L616.5,42z M963.5,107 c-8.9,7.8-17.7,15.6-26.2,23.6C946.5,123.5,955.3,115.6,963.5,107L963.5,107z M1311.5,941c-25.9,0-51.9,0-77.8,0 c12.8,0.8,25.7,1.2,38.8,1.2C1285.3,942.2,1298.4,941.8,1311.5,941L1311.5,941z"
    />
    <polygon className="rt4" points="723.8,842.5 998.8,333 1439.8,331 1229.2,843"
    />
    <path d="M1439,331.5l-30.4,74l-52.7,128.1l-63.7,154.8l-63.4,154.1l-252.6-0.2L724.7,842L878,557.9l121.1-224.4l219.9-1L1439,331.5 M1440.5,330.5c-147.3,0.7-294.7,1.3-442,2C906.7,502.7,814.8,672.8,723,843c168.8,0.2,337.7,0.3,506.5,0.5 c42.4-103.2,84.9-206.4,127.3-309.5C1384.7,466.1,1412.6,398.3,1440.5,330.5L1440.5,330.5z"
    />
    <polygon className="rt3" points="805.8,939.5 1080.8,430 1521.8,428 1311.2,940"
    />
    <path d="M1521,428.5l-41.3,100.4l-41.8,101.7l-80.1,194.8l-46.9,114.1l-252.6-0.2L806.7,939L960,654.9l121.1-224.4l219.9-1 L1521,428.5 M1522.5,427.5c-147.3,0.7-294.7,1.3-442,2C988.7,599.7,896.8,769.8,805,940c168.8,0.2,337.7,0.3,506.5,0.5 c42.4-103.2,84.9-206.4,127.3-309.5C1466.7,563.1,1494.6,495.3,1522.5,427.5L1522.5,427.5z"
    />
    <path className="rt0" d="M1174.5,672.5h-355c215.3-195.7,430.7-391.3,646-587c-237.7,275-475.3,550-713,825	C893.2,831.2,1033.8,751.8,1174.5,672.5z"
    />
    <path className="rt0" d="M1952.5,588.5" />
    <path className="rt5" d="M817.5,614.5h-355c110.7-64.4,202.5-130.9,190-171c-21.6-69.7-348.7-30.9-349-37c-0.2-4.5,178.3,1.7,340-45	c218.1-63,368.7-211.4,465-334c-237.7,275-475.3,550-713,825C536.2,773.2,676.8,693.8,817.5,614.5z"
    />
    <path className="rt6" d="M1542.5,714.5h-355c26-59.4,45.3-134.4,21-208c-21.6-65.3-67.7-99.7-56-118c16.6-26,118.9,28.8,200,40	c101,14,256.2-27.5,481-301c-89.4,26.6-384.5,126.7-572,425c-97.3,154.8-129.3,305.3-141,400	C1261.2,873.2,1401.8,793.8,1542.5,714.5z"
    />


    <path className="rt0" d="M1725.5,734.5" />
    <line className="rt7" x1="722.5" y1="427.5" x2="959.5" y2="27.5" />
    <line className="rt7" x1="1370.5" y1="639.5" x2="1605.5" y2="61.5" />
    <path className="st0" d="M1725.5,937.5c-237.7-42.3-475.3-84.7-713-127c385.9-238.9,472.4-295.7,471-298c-1.7-2.8-120.8,99.6-244,77	c-116.3-21.3-192.8-146.1-241-257c12.5,19.8,104.9,172.2,43,356c-59.1,175.5-212.8,242.4-236,252	C1112.2,939.5,1418.8,938.5,1725.5,937.5z"
    />
    <path className="rt7" d="M1814.5,759.5" />
    <path className="rt0" d="M1874.5,854.5" />
    <path className="rt0" d="M1792.5,510.5" />
    <path className="rt0" d="M1894.5,506.5" />
    <g>

  

        
        <polygon className="rt3" points="378.2,603.5 614.7,355 1476.2,342.5 1363.2,606"
        />
        <path d="M1475.5,343l-56.1,130.8l-56.5,131.6l-493.2-1.2L379.3,603l117.1-123.1l118.5-124.4l430.8-6.2L1475.5,343 M1477,342 c-287.5,4.2-575,8.3-862.5,12.5C535.3,437.7,456.2,520.8,377,604c328.8,0.8,657.7,1.7,986.5,2.5 C1401.3,518.3,1439.2,430.2,1477,342L1477,342z"
        />
    </g>
    <path className="rt0" d="M1819.5,546.5" />
    <line className="rt7" x1="550.5" y1="474.5" x2="1356.5" y2="469.5" />
    <line className="rt7" x1="1970.5" y1="910.5" x2="2776.5" y2="905.5" />

    <foreignObject x="600" y="400" height="400" width="300">

<form className='form' onSubmit={this.handleSubmit}>
<label>Username</label>
<input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
         </form>
        </foreignObject>

        <foreignObject x="860" y="400" height="400" width="300">
    <form className='form' onSubmit={this.handleSubmit}>
    <label>Email</label>
    <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
            </form>
            </foreignObject>


            <foreignObject x="1100" y="400" height="400" width="300">  
<form className='form' onSubmit={this.handleSubmit}>
    <label>Password</label>
    <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>
   </foreignObject>

   <foreignObject x="1000" y="500" height="400" width="300">  
<form className='form' onSubmit={this.handleSubmitForm}>
      <label>Password Confirm</label>
<input
            name="passwordConfirm"
            type="password"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
          />
   </form>
   </foreignObject>


   <foreignObject x="760" y="500" height="400" width="300">
<form className='form' onSubmit={this.handleSubmit}>
<button>Sign Up</button>
  </form>
   </foreignObject>

</svg>
      
      </div>
    );
  }
}

export default SignUpForm;