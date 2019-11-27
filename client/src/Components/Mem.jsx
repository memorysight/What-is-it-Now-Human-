import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Mem extends Component {
    constructor(props){
        super(props);
        this.state = {
            memory:{}
        }
    }

    async componentDidMount(){
        const {id, memory_id} = this.props.match.params
        const res= await axios.get(`/groups/${id}/memories/${memory_id}`)
        console.log("memory object",res.data)
        const memory = res.data
        this.setState({
            memory
        })
    }

    handleDelete = async ()=>{
        const {id, memory_id} = this.props.match.params
        await axios.delete(`/groups/${id}/memories/${memory_id}`)
        // this.props.history.push(`/groups/${this.props.match.params.id}/memories`)
    }

    render() {
        console.log(this.props)
        const {memory} = this.state
        return (
            <div>
                <h3>Memory {memory.id}</h3>

                <h4> Name: {memory.source}</h4>
                <h4> Body: {memory.body}</h4>
                <img alt="pic"src={memory.picture}></img>
                <br />

                <Link to={`/groups/${this.props.match.params.id}/memories/${memory.id}/edit`}><button>Create a Memory</button></Link>
           

                <br />
                {/* <Link to="http://localhost3001"><button>Art Display</button></Link> */}
            </div>
        )
    }
}
