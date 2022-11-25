import React from 'react';

class Display extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return <div className={'Display border'}>
            <div id={'display'}>DISPLAY</div>
        </div>
    };
};

export default Display;
