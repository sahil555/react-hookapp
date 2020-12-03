import React, { Component } from 'react';
// import http from ('http');
import axios from 'axios';

class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            datafetch: []
        }
    }

    increament =() => {
        this.setState ({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    fetchdata =() =>{
        let datafex = []
            axios.get('http://localhost:4000/')
              .then(data => {
                this.datafex = data.data  
                console.log(data.data); 
            })

            this.setState({
                datafetch: datafex
            }) 
        }

    render(){
        return(
            <div>
                State Count : {this.state.count}
                <div>
                    <button onClick={this.increament}>Click</button>
                </div>
                <div>
                    <button onClick={this.fetchdata}>Call API</button>
                </div>
                <div>
               Fetched-Data : <ul>
        {this.state.datafetch.map(data => <li> {data.data}</li>)}
                   </ul>
                </div>
            </div>
        )
    }
}

export default Counter;