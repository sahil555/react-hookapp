import React, { Component } from 'react';
// import http from ('http');
import axios from 'axios';
//import {proxy} from 'http-proxy-middleware';



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

async fetchdata() {
  let response = () => {
    return new Promise(function(resolve, reject) {
      fetch('http://localhost:4000/api/').then(response => {
        resolve(response);
	console.log(response);
      });
    });
  };
  let responseData = await response();
	this.setState({ datafetch:responseData});
  console.log(responseData.data);
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
