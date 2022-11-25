import React from 'react';
import { Provider, connect } from 'react-redux';
import {createStore} from 'redux';
//Components
import Buttons from './Buttons';
import Operators from './Operators';
import Display from './Display';
//Bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
//Redux maps
// import ReduxFunctions from './ReduxFunctions'
class Warper extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div style={{ 'margin': 'auto', 'width': '50%', 'border': '3px solid green', 'padding': '10px' }} className={'Warper center'}>
        <h1 className={'DisplayWarper container-fluid'}>
            <Display />
        </h1>
        <div style={{ 'width': '200px'}} className={'row-cols-sm-auto align-content-center '}>
            <div >
                <Buttons />
            </div>
            <div >
                <Operators />
            </div>
        </div>
        
        </div>
    }
}

export default Warper;
