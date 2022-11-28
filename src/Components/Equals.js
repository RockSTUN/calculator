import React from 'react';

class Equals extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let numb = []
        let op = []
        this.props.argumentos.concat(this.props.numbers).forEach(function(val){
            if (parseInt(val) || parseInt(val) == 0){
                let aux = val.split('.');
                
                aux = aux.map((el) => parseInt(el))
                console.log('aux: ',aux)
                if (aux.length > 1){
                    numb.push(aux[0]+aux[1]/(val.split('.')[1].length*10))
                }
                else{
                    numb.push(aux[0])
                }
                
                
            }
            else{
                if (val != ''){
                    op.push(val)
                }
            }
        })
        if (numb.length == op.length){
            op.pop()
        }
        let ans = numb[0]
        for (let i=0;i<op.length;i++){
            if (op[i].length == 2){
                numb[i+1] = -numb[i+1]
            }
            switch(op[i][0]){
                case '+':
                    ans+=numb[i+1];
                    break;
                case '-':
                    ans-=numb[i+1]
                    break;
                case '/':
                    ans = ans/numb[i+1]
                    break;
                case 'x':
                    ans = ans*numb[i+1]
                    break
                    
            }
        }
        console.log(ans)
        this.props.dispatchResult(ans)
    }
    render(){
        return <div>
                <button onClick={this.handleClick} className={'btn btn-light row-cols-sm-2'} key={'equals'} id={'equals'}>{'='}</button>
        </div>
    }
}

export default Equals;
