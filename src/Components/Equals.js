import React from 'react';

class Equals extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return <div>
                <button className={'btn btn-light row-cols-sm-2'} key={'equals'} id={'equals'}>{'='}</button>
        </div>
    }
}

export default Equals;
