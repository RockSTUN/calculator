import React from 'react';
import { Provider, connect } from 'react-redux';
import {createStore} from 'redux';
//Components
import Buttons from './Buttons';
import Operators from './Operators';
import Display from './Display';
import Equals from './Equals';
//Bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
//Redux maps
import { reducer, OperationFns, ButtonsFns, EqualFns, DisplayFns} from './ReduxFunctions';

//Create Store:
const store = createStore(reducer);
//connect
const ButtonsConnected = connect(null,ButtonsFns.mapDispatchToProps)(Buttons)
const OperatorsConnected = connect(null,OperationFns.mapDispatchToProps)(Operators)
const EqualsConnected = connect(EqualFns.mapStateToProps, EqualFns.mapDispatchToProps)(Equals)
const DisplayConnected = connect(DisplayFns.mapStateToProps, null)(Display)
class Warper extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <Provider store={store}>
        <h1 className={'DisplayWarper container-fluid'}>
            <DisplayConnected />
        </h1>
        <div style={{ 'width': '200px'}} className={'row-cols-sm-auto align-content-center '}>
            <div >
                <ButtonsConnected />
            </div>
            <div >
                <OperatorsConnected />
            </div>
            <div>
                <EqualsConnected />
            </div>
        </div>
        
        </Provider>
    }
}

export default Warper;
