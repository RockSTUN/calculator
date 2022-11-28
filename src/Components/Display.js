import React from 'react';

class Display extends React.Component {
    constructor(props){
        super(props);
//         console.log(this.props.argumentos)
    }
    
    render(){
        return <div  className={'Display border'}>
            <h2 id={'topdisplay'}>{this.props.argumentos.join('')+this.props.numbers+this.props.operators}</h2>
            <h4 id={'display'}>{this.props.midDisplayer.toString()}</h4>
        </div>
    };
};

export default Display;
