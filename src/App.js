import React, { Component } from 'react';
import './App.css';
import ButtonComponent from './Component/ButtonComponent';

class App extends Component {
  state = {
    data: '',
    firstNumber: '',
    lastNumber: '',
    operations : ''
  }
  onSubmit = (value) => {

    const { data } = this.state;
    
    this.setState({
      data: data + value
    })
  }
  add = () => {

    const { data } = this.state;

    this.setState({ 
      firstNumber: data,
      operations: '+',
      data: ''
     });
  }
  subtract = () => {
    const { data } = this.state;

    this.setState({ 
      firstNumber: data,
      operations: '-',
      data: ''
     });
  }
  multiply = () => {
    const { data } = this.state;

    this.setState({ 
      firstNumber: data,
      operations: '*',
      data: ''
     });
  }
  division = () => {
    const { data } = this.state;

    this.setState({ 
      firstNumber: data,
      operations: '/',
      data: ''
     });
  }
  sum = () => {
    const { data, firstNumber,operations } = this.state;
    this.state.lastNumber = data;
   
    if(operations === '+') {
      this.setState({ 
        data: parseFloat(firstNumber) + parseFloat(this.state.lastNumber)
      });
    } else if(operations === '-') {
      this.setState({ 
        data: parseFloat(firstNumber) - parseFloat(this.state.lastNumber)
      });
    } else if(operations === '*') {
      this.setState({ 
        data: parseFloat(firstNumber) * parseFloat(this.state.lastNumber)
      });
    } else if(operations === '/') {
      this.setState({ 
        data: parseFloat(firstNumber) / parseFloat(this.state.lastNumber)
      });
    } 
      
  }
  render(){
    return (
      <div className="calculator">
        <div>
          <input className="show" type="text" onChange={this.onSubmit} value={this.state.data} />
        </div>
        <div className="table">
          <div>
            <ul>
              <li><ButtonComponent onSubmit = { this.onSubmit } value='7'/></li>
              <li><ButtonComponent onSubmit = { this.onSubmit } value='8'/></li>
              <li><ButtonComponent onSubmit = { this.onSubmit } value='9'/></li>
              <li><ButtonComponent onSubmit = { this.add } value='+'/></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><ButtonComponent onSubmit = { this.onSubmit } value='4'/></li>
              <li><ButtonComponent onSubmit = { this.onSubmit } value='5'/></li>
              <li><ButtonComponent onSubmit = { this.onSubmit } value='6'/></li>
              <li><ButtonComponent onSubmit = { this.subtract } value='-'/></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><ButtonComponent onSubmit = { this.onSubmit } value='1'/></li>
              <li><ButtonComponent onSubmit = { this.onSubmit } value='2'/></li>
              <li><ButtonComponent onSubmit = { this.onSubmit } value='3'/></li>
              <li><ButtonComponent onSubmit = { this.multiply } value='*'/></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><ButtonComponent onSubmit = { this.onSubmit } value='0'/></li>
              <li><ButtonComponent onSubmit = { this.onSubmit } value='.'/></li>
              <li><ButtonComponent onSubmit = { this.sum } value='='/></li>
              <li><ButtonComponent onSubmit = { this.division } value='/'/></li>
            </ul>
          </div>
          <button className="clear" onClick={() => this.setState({ data: "" })} > clear </button>
        </div>
      </div>
    );
  }
}

export default App;
