import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {  removeCounter } from '../actions';

class RemoveCounter extends Component {
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
                    this.props.dispatch(removeCounter(10))}}>Remove</button>
                </div>
              </div>
            </form>
            </div>
        );
    }
}

const matchDispatchToProps=(dispatch)=>{
 return {actions:bindActionCreators(removeCounter)}
}

export default connect(matchDispatchToProps)(RemoveCounter);