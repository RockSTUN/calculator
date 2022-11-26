import React from 'react';
const operators = [{id: 'add',value: '+'},{id: 'subtract',value: '-'},{id: 'multiply', value: 'x'},{id: 'divide', value: '/'},{id: 'clear', value: 'AC'}]

class Operators extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(but){
        console.log(but.target.innerHTML)
    };
    
    render(){
        return <div className={'Operators row-cols-sm-2 border border-secondary'}>
            {operators.map((operator) => <button onClick={this.handleClick} className={'btn btn-light row-cols-sm-2'} key={operator.id} id={operator.id}>{operator.value}</button>)}
        </div>
    };
};

export default Operators;
