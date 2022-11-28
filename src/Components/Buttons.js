import React from 'react';
const buts = [{id: 'zero',value:'0'},{id: 'one',value: '1'},{id: 'two',value: '2'},{id: 'three',value: '3'},{id: 'four',value: '4'},{id: 'five',value: '5'},{id: 'six',value: '6'},{id: 'seven',value: '7'},{id: 'eight',value: '8'},{id: 'nine',value: '9'}, {id: 'decimal',value: '.'}]


class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
    }
        handleClick(but){
            if (!this.props.numbers.match(/\./)){
            this.props.addNumber(but.target.innerHTML)
        }else{
            if (but.target.innerHTML != '.'){
                this.props.addNumber(but.target.innerHTML)
            }
        }
        }
    
    render(){
        return <div id={'Buttons'} className={'Buttons row-cols-sm-3 border border-secondary container-fluid'}>
            {buts.map((buts) => <button onClick={this.handleClick} className={'btn btn-dark '} key={buts.id} id={buts.id}>{buts.value}</button>)}
        </div>
    };
};

export default Buttons;
