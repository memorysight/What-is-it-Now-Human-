import React, { Component } from 'react'
import axios from 'axios'
import '../CSS/EditMem.css'



export default class EditMem extends Component {
    constructor(props){
        super(props);
        this.state={
            source: '',
            title: '',
            date: '',
            picture: '',
            body: '',

        }
    }
    componentDidMount = async()=>{
        const {id, memory_id} = this.props.match.params;
        const res = await axios.get(`/groups/${id}/memories/${memory_id}`)
        const memory =  res.data
        this.setState({
            source: memory.source,
            title: memory.title,
            date: memory.date,
            picture: memory.picture,
            body: memory.body
        })
    }

    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (e)=>{
        e.preventDefault();
        console.log('clicked')
        await axios.put(
        `http://localhost:3000/groups/${this.props.match.params.id}/memories/${this.props.match.params.memory_id})`, 
        this.state
        );
        this.props.history.push(`/groups`);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3 className="heading2"> Submit your Dream to ME!</h3>
                <form onSubmit = {this.handleSubmit}>
                    <input
                    name="source"
                    type="text"
                    placeholder="Source"
                    onChange={this.handleChange}
                    />
                    <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    onChange={this.handleChange}
                    />
                    <input 
                    name="date"
                    type="text"
                    placeholder="Date"
                    onChange={this.handleChange}
                    />
                    <input 
                    name="picture"
                    type="text"
                    placeholder="Picture"
                    onChange={this.handleChange}
                    />
                    <input
                    name="body"
                    type="text"
                    placeholder="Body"
                    onChange={this.handleChange}
                    />
                    <button>Submit</button>
                    

                </form>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
    <polygon className="it0" points="1182.8,107.8 1644.6,717.1 1097.1,804.9"
    />
    <path d="M1183.2,109.1L1554.4,599l89.3,117.8l-272.9,43.7l-273.2,43.8l42.8-348.2L1183.2,109.1 M1182.5,106.5 c-28.7,233-57.3,466-86,699c183-29.3,366-58.7,549-88C1491.2,513.8,1336.8,310.2,1182.5,106.5L1182.5,106.5z"
    />
    <polygon className="it0" points="911.8,915.4 1070.7,839 1650.8,739.3 1298.4,1048.9"
    />
    <path d="M1649.2,740.1l-174.3,153.2l-176.6,155.1l-193.5-66.8l-191.7-66.2l77.8-37.4l79.9-38.4l290.9-50L1649.2,740.1 M1652.5,738.5c-194,33.3-388,66.7-582,100c-53.3,25.7-106.7,51.3-160,77c129.3,44.7,258.7,89.3,388,134 C1416.5,945.8,1534.5,842.2,1652.5,738.5L1652.5,738.5z"
    />
    <polygon points="745.1,425.7 1156.9,102.6 1074.5,813.7 873.8,909.8" />
    <path d="M1156.2,103.8l-82.2,709.6l-100.3,48l-99.7,47.7L810,667.7l-64.3-241.9l206-161.6L1156.2,103.8 M1157.5,101.5 c-137.7,108-275.3,216-413,324c43,161.7,86,323.3,129,485c67.2-32.2,134.3-64.3,201.5-96.5C1102.5,576.5,1130,339,1157.5,101.5 L1157.5,101.5z"
    />
    <polygon className="it0" points="1487.9,306.2 1208.6,113.4 1671.5,189.4 1671.5,947.4"
    />
    <path d="M1210.7,114.2l460.3,75.6v754l-182.5-637.6l-0.1-0.3l-0.3-0.2L1210.7,114.2 M1206.5,112.5c93.7,64.7,187.3,129.3,281,194 c61.5,214.8,123,429.7,184.5,644.5V189C1516.8,163.5,1361.7,138,1206.5,112.5L1206.5,112.5z"
    />
    <polygon points="1240.8,150.4 1471.1,326.8 1567.9,733.1 1116.1,804.9"
    />
    <path d="M1241.2,151.3l229.4,175.8l96.7,405.6l-450.5,71.6L1241.2,151.3 M1240.5,149.5c-41.7,218.7-83.3,437.3-125,656 c151-24,302-48,453-72c-32.3-135.7-64.7-271.3-97-407C1394.5,267.5,1317.5,208.5,1240.5,149.5L1240.5,149.5z"
    />
    <path className="it1" d="M1520.5,691.5c-74.1-10.5-239.1-23.4-419,58c-107.5,48.7-182.3,113.8-228,161c122.3-253.7,244.7-507.3,367-761	c-126.7,219.4-146.5,431.9-70,493c82.4,65.9,318.1-10.9,521-253C1634.5,490.2,1577.5,590.8,1520.5,691.5z"
    />
    <path className="it1" d="M1089.5,326.5c-39.7,28.7-79.3,57.3-119,86c0-27.7,0-55.3,0-83c39.7-35.7,79.3-71.3,119-107	C1089.5,257.2,1089.5,291.8,1089.5,326.5z"
    />
    <path className="it1" d="M939.5,663.5c-28.7,25-57.3,50-86,75c3.3-29.7,6.7-59.3,10-89c29.3-27,58.7-54,88-81	C947.5,600.2,943.5,631.8,939.5,663.5z"
    />
    <path className="it1" d="M703.5,642.5" />
    <path className="it1" d="M417.5,373.5c-32.3,15.7-64.7,31.3-97,47c-6.7-34.3-13.3-68.7-20-103c30.7-17.7,61.3-35.3,92-53	C400.8,300.8,409.2,337.2,417.5,373.5z"
    />
    <path className="it1" d="M505.5,364.5c-29.3,3-58.7,6-88,9c-8.3-36.3-16.7-72.7-25-109c30.7,1.3,61.3,2.7,92,4	C491.5,300.5,498.5,332.5,505.5,364.5z"
    />
    <path className="it1" d="M280.5,705.5" />
    <path className="it1" d="M505.5,364.5c-31.7,16.3-63.3,32.7-95,49c-30,2.3-60,4.7-90,7c32.3-15.7,64.7-31.3,97-47	C446.8,370.5,476.2,367.5,505.5,364.5z"
    />
    <path className="it1" d="M363.5,717.5" />
    <path className="it1" d="M712.5,280.5" />
    <path className="it1" d="M576.4,800.4c-35.7-4.3-71.3-8.7-107-13c13-32.5,26-64.9,39-97.4c35.3,1.8,70.7,3.5,106,5.3	C601.8,730.3,589.1,765.4,576.4,800.4z"
    />
    <path className="it1" d="M655.2,840.5c-26.3-13.4-52.6-26.7-78.8-40.1c12.7-35.1,25.4-70.1,38-105.2c25.1,17.7,50.1,35.5,75.2,53.2	C678.1,779.1,666.7,809.8,655.2,840.5z"
    />
    <path className="it1" d="M655.2,840.5c-35.5-3.4-70.9-6.9-106.4-10.3c-26.5-14.3-53-28.6-79.4-42.9c35.7,4.3,71.3,8.7,107,13	C602.7,813.8,629,827.2,655.2,840.5z"
    />
</svg>
            </div>
        )
    }
}
