import React from 'react';
import jsonp from 'jsonp';

export default class Convertor extends React.Component{
  constructor(props){
    super(props);
    this.state = {converted : 0};
    this.fetch = this.fetch.bind(this);
    this.currency = ["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","GBP","HKD","HRK","HUF",
                     "IDR","ILS","INR","JPY","KRW","MXN","MYR","NOK","NZD", "PHP","PLN", "RON",
                    "RUB","SEK",  "SGD","THB",  "TRY","ZAR","EUR"]
  }

  fetch(){
    const base = this.input.value;
    //const data = this.result.value;
    //this.setState({converted});
    //console.log(data);

//console.log(second);
    jsonp(`http://api.fixer.io/latest?base=${base}`, null,(err, response) => {
      const fg = this.result.value;
      var data1 = +response.rates[fg];
      var final = this.number.value * data1;
      this.setState({ converted:final})


    });
 }

  render(){
  //let array = this.state.data.map((item,key) => {return <li id={key}>{item}</li>})


    return(
      <div>
        <h1>Currency Convertor</h1>
        <br/>
        <br/>
          From
          <select ref={node => this.input = node} >
            {this.currency.map((item,key) => {return <option key={key}>{item}</option> })}
          </select>
          To
          <select ref={node => this.result = node} >
            {this.currency.map((item,key) => {return <option key={key}>{item}</option> })}
          </select>
          <input ref={node => this.number = node} type='number'/>
          <button onClick={this.fetch} className="btn btn-info" >Convert</button>
          <output id='result'>{this.state.converted} </output>


      </div>
    );
  }
}
