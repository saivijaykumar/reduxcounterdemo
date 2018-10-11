import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addCounter } from '../actions';

class AddCounter extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container">           
              <div className="notification">{this.props.count}</div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {count:state.counter}
}

export default connect(mapStateToProps)(AddCounter);