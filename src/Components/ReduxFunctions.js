const INITIAL_STATE = {
    midDisplayer: 0,
    argumentos: [''],
    operators: '',
    numbers: '',
    resultado: 0
};

function reducer(state = INITIAL_STATE, action){
        switch(action.type){
        case 'ADD_OPERATION':
            return {...state, midDisplayer: action.newOperator[action.newOperator.length -1], argumentos: (state.operators == '') ? [...state.argumentos, state.numbers] : [...state.argumentos], numbers: '', operators: action.newOperator}
        case 'ADD_NUMBER':
            return{...state,midDisplayer: (state.midDisplayer == '0') ? action.newNumber: state.numbers + action.newNumber, argumentos: (state.numbers == '' && state.numbers != '0') ? [...state.argumentos, state.operators] : [...state.argumentos], numbers: (state.numbers == '0') ? action.newNumber: state.numbers + action.newNumber, operators: '' }
        case 'SHOW_RESULT':
            return{resultado: action.result, midDisplayer: action.result, argumentos: [...state.argumentos,state.numbers, '=',action.result], numbers: '', operators: ''}
        case 'RESET':
            return INITIAL_STATE
        case 'NEW_CALC':
            return {argumentos: [state.resultado.toString()], midDisplayer: action.newOperator, numbers: '', operators: action.newOperator,resultado: 0}
        default:
            return state
            
        }
};


const OperationFns = {
    mapStateToProps: function(state){
        return {
            resultado: state.resultado,
            operators: state.operators,
            argumentos: state.argumentos
        }
    },
    
    mapDispatchToProps: function(dispatch){
        return {
            addOperator: (val) => dispatch({type: 'ADD_OPERATION', newOperator: val}),
            resetCalculator: () => dispatch({type: 'RESET'}),
            newCalculation: (val) => dispatch({type: 'NEW_CALC', newOperator: val})
        }
    }
    
}

const ButtonsFns = {
    mapStateToProps: function(state){
        return { numbers: state.numbers }
    },
    mapDispatchToProps: function(dispatch){
        return {
            addNumber: (val,op) => dispatch({type: 'ADD_NUMBER', newNumber: val})
        }
    }
    
}


const EqualFns = {
    mapStateToProps: function(state){
        return {
            argumentos: state.argumentos,
            numbers: state.numbers,
            operators: state.operators
        }
    },
    mapDispatchToProps: function(dispatch){
        return {
            dispatchResult: (resultado) => dispatch({type: 'SHOW_RESULT', result: resultado})
        }
    }
    
}

const DisplayFns = {
    mapStateToProps: function(state){
        return {
            argumentos: state.argumentos,
            midDisplayer: state.midDisplayer,
            operators: state.operators,
            numbers: state.numbers
        }
    }
}



export { reducer, OperationFns, ButtonsFns, EqualFns, DisplayFns };
