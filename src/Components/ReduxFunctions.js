const INITIAL_STATE = {
    midDisplayer: '',
    argumentos: [], 
    lastInput: ''
};

function reducer(state = INITIAL_STATE, action){
        switch(action.type){
        case 'ADD_OPERATION':
            return {}
        case 'ADD_NUMBER':
            return{}
        case 'SHOW_RESULT':
            return{}
        default:
            return state
    }
};


const OperationFns = {
    mapStateToProps: function(state){
        return {
            lastInput: state.lastInput
        }
    },
    
    mapDispatchToProps: function(dispatch){
        return {
            addOperator: (val) => dispatch({type: 'ADD_OPERATION', newOperator: val})
        }
    }
    
}

const ButtonsFns = {
    mapDispatchToProps: function(dispatch){
        return {
            addNumber: (val) => dispatch({type: 'ADD_NUMBER', newNumber: val})
        }
    }
    
}


const EqualFns = {
    mapStateToProps: function(state){
        return {
            argumentos: state.argumentos,
            midDisplayer: state.midDisplayer
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
            midDisplayer: state.midDisplayer
        }
    }
}



export { reducer, OperationFns, ButtonsFns, EqualFns, DisplayFns };
