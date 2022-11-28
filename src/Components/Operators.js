import React from 'react';
const operators = [{id: 'add',value: '+'},{id: 'subtract',value: '-'},{id: 'multiply', value: 'x'},{id: 'divide', value: '/'},{id: 'clear', value: 'AC'}]

class Operators extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick(but){
        if (this.props.argumentos.join('').match('=')){
            if(but.target.innerHTML == 'AC'){
                this.props.resetCalculator()
            }
            else{
            this.props.newCalculation(but.target.innerHTML)    
            }
            
        }
        else{
            if (but.target.innerHTML == 'AC'){
            this.props.resetCalculator();
        }
        else{
                
        if (this.props.operators == ''){
            this.props.addOperator(but.target.innerHTML)
        }
        else{
            if(but.target.innerHTML == this.props.operators[1]){
                return
            }
            else{
            switch(but.target.innerHTML){
                case '-':
                    this.props.addOperator(this.props.operators+but.target.innerHTML)
                    break;
                default:
                    this.props.addOperator(but.target.innerHTML)
            }    
            }
            
                
        }
            
        }
        }
        
        
        
        
    };
    
    render(){
        return <div className={'Operators row-cols-sm-2 border border-secondary'}>
            {operators.map((operator) => <button onClick={this.handleClick} className={'btn btn-light row-cols-sm-2'} key={operator.id} id={operator.id}>{operator.value}</button>)}
        </div>
    };
};

export default Operators;
