import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'


export default class AllMems extends Component {
    constructor(props){
        super(props);
        this.state={
            memories: []
        }
    }


    async componentDidMount(){
        const res = await axios.get(`/groups/${this.props.match.params.id}/memories`)
        console.log("memories", res)
        const memories = res.data
        this.setState({
            memories
        })
    }



    render() {
        return (
            <div>
               <h3>Memories</h3>
              

                {this.state.memories.map(memory =>(
                 <div key={memory.id}>
                    <Link to={`/groups/${this.props.match.params.id}/memories/${memory.id}`}><h2>{memory.source} had this memory regarding {memory.title} on {memory.date}</h2></Link>
                    </div>
                 ) )}

            </div>
        )
    }
}
