import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../CSS/AllGroups.css'
import axios from 'axios'

export default class AllGroups extends Component {
    constructor(props){
        super(props);
        this.state={
            groups: []
        }
    }

    async componentDidMount(){
        const res = await axios.get('/groups')
        console.log(res.data)
        const groups = res.data
        this.setState({
            groups
        })
    }
    render() {
        return (
            <div className="">

            <div className="boring-title">

                <h4 className="heading2">Human's are so boring</h4>
                <h5 className="heading2">But I collect their Dreams, how Ironic!</h5>
            

            </div>
                


                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="160.5"
    y1="-0.5" x2="160.5" y2="-0.5">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" />
    </linearGradient>
    <path className="st0 " d="M160.5-0.5" />
    <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="1532.5"
    y1="503.71" x2="1844.5" y2="503.71" gradientTransform="matrix(-1 0 0 1 3376.99 0)">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" />
    </linearGradient>
    <path className="st1 " d="M1575.5,720.5c1.6,79,58.8,142.7,128,151c54.3,6.5,109.6-21.9,141-72c-25.7-172.7-51.3-345.3-77-518 c-31.4-100.9-107.7-156.5-167-145c-9.4,1.8-40,9.5-68,51C1546.8,365.2,1561.2,542.8,1575.5,720.5z"
    />
    <path className="st2 " d="M1575.5,720.5c1.6,79,58.8,142.7,128,151c54.3,6.5,109.6-21.9,141-72c-25.7-172.7-51.3-345.3-77-518 c-31.4-100.9-107.7-156.5-167-145c-9.4,1.8-40,9.5-68,51C1546.8,365.2,1561.2,542.8,1575.5,720.5z"
    />
    <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="202.5"
    y1="500.71" x2="514.5" y2="500.71">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" />
    </linearGradient>
    <path className="st3  " d="M471.5,717.5c-1.6,79-58.8,142.7-128,151c-54.3,6.5-109.6-21.9-141-72c25.7-172.7,51.3-345.3,77-518	c31.4-100.9,107.7-156.5,167-145c9.4,1.8,40,9.5,68,51C500.2,362.2,485.8,539.8,471.5,717.5z"
    />

            {/* circle in the middle */}
    <ellipse className="st4 float3" cx="1043" cy="608" rx="75.5" ry="154.5" />

            {/* left wing */}
    <path className="st5 float3" d="M1040.8,225.5c0,85.3-245.2,503-203.5,503c41.7,0,75.5-69.2,75.5-154.5S879,419.5,837.3,419.5 C795.6,419.5,1040.8,140.2,1040.8,225.5z"
    />

            {/* left wing stroke */}
    <path className="st2 float3" d="M1040.8,225.5c0,85.3-245.2,503-203.5,503c41.7,0,75.5-69.2,75.5-154.5S879,419.5,837.3,419.5 C795.6,419.5,1040.8,140.2,1040.8,225.5z"
    />
    <path className="st4 float3" d="M1019.5,225.5c0,85.3,245.2,503,203.5,503s-75.5-69.2-75.5-154.5s33.8-154.5,75.5-154.5	S1019.5,140.2,1019.5,225.5z"
    />

            {/* part of hovering wing */}
    <g className="st6 ">
        <polygon points="750.7,502.7 727.9,515.1 678.9,674.5 701.7,662.1" />


        <polygon className="st7 " points="823.9,571.9 801.1,584.3 678.9,674.5 701.7,662.1"
        />
        <polygon points="824.7,572.6 801.9,585 677.1,677.1 699.9,664.7" />
        <polygon className="st7 " points="856.3,446.2 833.5,458.6 801.1,584.3 823.9,571.9"
        />


        <polygon className="st8  " points="750.7,502.7 727.9,515.1 833.5,458.6 856.3,446.2"
        />
        <path d="M727.2,514.3l-50,162.7L801.9,585l33-128.3L727.2,514.3z M801.1,584.3l-122.2,90.2l49-159.5l105.6-56.5L801.1,584.3"
        />


            {/* part of left hovering wing */}
        <polygon className="st9 " points="833.5,458.6 727.9,515.1 678.9,674.5 801.1,584.3"
        />
        <polygon points="857.7,444.3 834.9,456.7 801.9,585 824.7,572.6" />
        <polygon points="749.9,501.9 727.2,514.3 834.9,456.7 857.7,444.3" />
    </g>

            {/* part of left hovering wing */}
    <g className="st6 ">
        <polygon points="1315.1,493.7 1337.9,506.1 1387,665.5 1364.2,653.1" />

            {/* part of right hovering wing */}
        <polygon className="st10 " points="1241.9,562.9 1264.7,575.3 1387,665.5 1364.2,653.1"
        />
        <polygon points="1241.1,563.6 1263.9,576 1388.7,668.1 1365.9,655.7" />
        <polygon className="st10 " points="1209.6,437.2 1232.4,449.6 1264.7,575.3 1241.9,562.9"
        />



        <polygon  className="st11 " points="1315.1,493.7 1337.9,506.1 1232.4,449.6 1209.6,437.2"
        />
        <path d="M1338.7,505.3l50,162.7L1263.9,576l-33-128.3L1338.7,505.3z M1264.7,575.3l122.2,90.2l-49-159.5l-105.6-56.5 L1264.7,575.3"
        />

            {/* part of right hovering wing */}
        <polygon className="st12 " points="1232.4,449.6 1337.9,506.1 1387,665.5 1264.7,575.3"
        />



        <polygon points="1208.1,435.3 1230.9,447.7 1263.9,576 1241.1,563.6" />
        <polygon points="1315.9,492.9 1338.7,505.3 1230.9,447.7 1208.1,435.3"
        />
    </g>
    <path className="st13 float3" d="M989.5,673.5c-15.3,54-30.7,108-46,162c-17.3-55-34.7-110-52-165c16.3-52.7,32.7-105.3,49-158	C956.8,566.2,973.2,619.8,989.5,673.5z"
    />
    <path className="st14 float3" d="M1030.5,634.5c-15.3,54-30.7,108-46,162c-17.3-55-34.7-110-52-165c16.3-52.7,32.7-105.3,49-158	C997.8,527.2,1014.2,580.8,1030.5,634.5z"
    />
    <path className="st15 float3" d="M1188.5,664.5c-15.3,54-30.7,108-46,162c-17.3-55-34.7-110-52-165c16.3-52.7,32.7-105.3,49-158	C1155.8,557.2,1172.2,610.8,1188.5,664.5z"
    />
    <path className="st16 float3" d="M1128.5,634.5c-15.3,54-30.7,108-46,162c-17.3-55-34.7-110-52-165c16.3-52.7,32.7-105.3,49-158	C1095.8,527.2,1112.2,580.8,1128.5,634.5z"
    />
    <path className="st4 float3" d="M1166.5,777.5c-15.3,54-30.7,108-46,162c-17.3-55-34.7-110-52-165c16.3-52.7,32.7-105.3,49-158	C1133.8,670.2,1150.2,723.8,1166.5,777.5z"
    />
    <path className="st17 float3" d="M1038.5,777.5c-15.3,54-30.7,108-46,162c-17.3-55-34.7-110-52-165c16.3-52.7,32.7-105.3,49-158	C1005.8,670.2,1022.2,723.8,1038.5,777.5z"
    />
    <path className="st18 float3" d="M1087.5,559.5c-15.3,54-30.7,108-46,162c-17.3-55-34.7-110-52-165c16.3-52.7,32.7-105.3,49-158	C1054.8,452.2,1071.2,505.8,1087.5,559.5z"
    />

    <Link to="/abstract1">

     <path id="outline"className="st19 " d="M1695.5,550.5c43,52.7,86,105.3,129,158c-33,29.3-66,58.7-99,88c-42.7-56.3-85.3-112.7-128-169 C1630.2,601.8,1662.8,576.2,1695.5,550.5z"
      />

     </Link>
     <Link to="/abstract2">
    <path id="outline"className="st2" d="M1695.5,550.5c43,52.7,86,105.3,129,158c-33,29.3-66,58.7-99,88c-42.7-56.3-85.3-112.7-128-169 C1630.2,601.8,1662.8,576.2,1695.5,550.5z"
    />
    </Link>

    <Link to="/abstract3">
    <path id="outline"className="st19" d="M1684.5,436.5c43,52.7,86,105.3,129,158c-33,29.3-66,58.7-99,88c-42.7-56.3-85.3-112.7-128-169 C1619.2,487.8,1651.8,462.2,1684.5,436.5z"
    />
     </Link>
     <Link to="/abstract4">
    <path id="outline"className="st2" d="M1684.5,436.5c43,52.7,86,105.3,129,158c-33,29.3-66,58.7-99,88c-42.7-56.3-85.3-112.7-128-169 C1619.2,487.8,1651.8,462.2,1684.5,436.5z"
    />
      </Link>
      <Link to="/abstract8">
    <path id="outline"className="st19" d="M1673.5,330.5c43,52.7,86,105.3,129,158c-33,29.3-66,58.7-99,88c-42.7-56.3-85.3-112.7-128-169 C1608.2,381.8,1640.8,356.2,1673.5,330.5z"
    />
    </Link>
    <Link to="/abstract2">
    <path id="outline"className="st2" d="M1673.5,330.5c43,52.7,86,105.3,129,158c-33,29.3-66,58.7-99,88c-42.7-56.3-85.3-112.7-128-169 C1608.2,381.8,1640.8,356.2,1673.5,330.5z"
    />
      </Link>
     
    <g>
    <Link to="/abstract3">
        <path id="outline"className="st19" d="M1664.5,209.5c43,52.7,86,105.3,129,158c-33,29.3-66,58.7-99,88c-42.7-56.3-85.3-112.7-128-169 C1599.2,260.8,1631.8,235.2,1664.5,209.5z"
        />
         </Link>
        <path id="outline"className="st2 " d="M1664.5,209.5c43,52.7,86,105.3,129,158c-33,29.3-66,58.7-99,88c-42.7-56.3-85.3-112.7-128-169 C1599.2,260.8,1631.8,235.2,1664.5,209.5z"
        />
    </g>


    <Link to="/abstract4">
    <path id="outline"className="st20 " d="M401.5,215.5c-43,52.7-86,105.3-129,158c33,29.3,66,58.7,99,88c42.7-56.3,85.3-112.7,128-169	C466.8,266.8,434.2,241.2,401.5,215.5z"
    />
      </Link>
      <Link to="/abstract5">
    <path id="outline"className="st21" d="M293.5,564.5" />
    </Link>
    <Link to="/abstract6">
    <path id="outline"className="st20 " d="M401.5,303.5c-43,52.7-86,105.3-129,158c33,29.3,66,58.7,99,88c42.7-56.3,85.3-112.7,128-169	C466.8,354.8,434.2,329.2,401.5,303.5z"
    />
     </Link>

     <Link to="/abstract7">
    <path id="outline"className="st20 " d="M381.5,398.5c-43,52.7-86,105.3-129,158c33,29.3,66,58.7,99,88c42.7-56.3,85.3-112.7,128-169	C446.8,449.8,414.2,424.2,381.5,398.5z"
    />
      </Link>
      <Link to="/abstract8">
    <path id="outline"className="st20 " d="M374.5,493.5c-43,52.7-86,105.3-129,158c33,29.3,66,58.7,99,88c42.7-56.3,85.3-112.7,128-169	C439.8,544.8,407.2,519.2,374.5,493.5z"
    />
      </Link>
</svg>
           
           {this.state.groups.map(group => (
               <div key={group.id}>
                   <Link to = {`/groups/${group.id}/memories`}><h2 className="categories">{group.category}</h2></Link>
                  

               </div>
           ))}
           
            </div>
        )
    }
}
