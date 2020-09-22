import React, { Component }  from 'react';

class Calculator extends Component {

    render(){
        return (
            <div>
                <input type='text' value={this.props.value}/>
            </div>
        )       
    }
}

export default Calculator;