import React, { Component } from 'react';
import List from './List'

class ClassDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: ["Kumar", "S/O Velu,", "15th Floor, 28 Gopal Das Bhawan, Barakhamba Lane,", "Delhi,", "Pin Code - 110001"]
        }
    }

    render() {
        return (
            <div>
                <h1>My Address</h1>

                {this.state.data.map((item, index) => <List key={index} data={item} />)}

            </div>
        )
    }
}

export default ClassDemo
