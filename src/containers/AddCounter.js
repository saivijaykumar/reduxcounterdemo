import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addCounter } from '../actions';

class AddCounter extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container">           
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" 
                  onClick=
                  {(e) => {
                    e.preventDefault();
                    this.props.dispatch(addCounter(10))}}>Add</button>
                </div>
              </div>
            </form>
            </div>
        );
    }
}

const matchDispatchToProps=(dispatch)=>{
 return {actions:bindActionCreators(addCounter)}
}

export default connect(matchDispatchToProps)(AddCounter);