import React, { Component } from 'react'

 class List extends Component {
    render() {
        return (
            <div>
              {this.props.data}  
            </div>
        )
    }
}

export default List
