import React from 'react';

class Display extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    
    render(){
        return <div className={'Display border'}>
            <div id={'topDisplayer'}>{this.props.argumentos.join('')}</div>
            <div id={'midDisplayer'}>{this.props.midDisplayer}</div>
        </div>
    };
};

export default Display;
