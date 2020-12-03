import React, { Component } from 'react';


class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    increament =() => {
        this.setState ({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    render(){
        return(
            <div>
                State Count : {this.state.count}
                <div>
                    <button onClick={this.increament}>Click</button>
                </div>
            </div>
        )
    }
}

export default Counter;