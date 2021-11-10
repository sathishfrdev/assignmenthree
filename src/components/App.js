import React from 'react';
import Buttons from './Buttons';
import History from './History';

import DisplayToolbar from './DisplayToolbar';
import * as Calculator from '../operations';
import './App.css';

 class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formula: [],
      history: [],
      input: '0',
      isShowHistory: false,
      afterCalculation: false
    }

    this.onDigit = this.onDigit.bind(this);
    this.onOperator = this.onOperator.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onEqual = this.onEqual.bind(this);
   
   
    this.onHistory = this.onHistory.bind(this);
    
  }
 


  onDigit({ target }) {
    const digit = target.innerText;
    const input = this.state.input;

    

    console.log("digits input",digit);
    console.log("whatclicked",input)

    
    

    if (this.state.afterCalculation) {
      this.setState({
        input: digit,
        afterCalculation: false
      });
    } else if (input === '0') {
      this.setState({
        input: digit
      });
    } else if (Calculator.isNotNumber(input)) {
      this.setState({
        input: digit,
        formula: this.state.formula.concat(input)
      });
    } else {
      this.setState({
        input: input.concat(digit)
      });
    }
  }

 
  onOperator({ target }) {
    const operator = target.innerText;
    const input = this.state.input;
    localStorage.setItem("operators", JSON.stringify(operator));
    localStorage.setItem("input", JSON.stringify(input));
    if (Calculator.isOperator(input)) {
      this.setState({
        input: operator,
        afterCalculation: false
      });
    } else if (input !== '(') {
      this.setState({
        formula: this.state.formula.concat(this.state.input),
        input: operator,
        afterCalculation: false
      });
    }
  }

  
  onClear() {
    this.setState({
      formula: [],
      input: '0',
      afterCalculation: false
    });
  }

  

  onEqual() {
    const finalFormula = this.state.formula.concat(this.state.input);
    const result = Calculator.evaluate(finalFormula);
    localStorage.setItem("eqdata", JSON.stringify(finalFormula));

console.log("resuted",result)
console.log("formulae",finalFormula)

// localStorage.setItem("previous",JSON.parse('finalFormula'))

    if (!Number.isNaN(result)) {
      const newHistoryItem = {
        formula: finalFormula,
        result: result
        
      }

      this.setState({
        input: result + "",
        formula: [],
        history: [].concat(newHistoryItem, this.state.history),
        
        afterCalculation: true
        
      });
    }
    // localStorage.setItem('previousdata',JSON.stringify(this?.input));
    
  }

  onHistory() {
    this.setState({
      isShowHistory: !this.state.isShowHistory
      
    });
    
  }

  



  render() {
    return (
      <div>

        <div className="calculator">
          {/* //components render */}
          <DisplayToolbar
            formula={this.state.formula}
            input={this.state.input}
            
            
           
          />

          <Buttons
            onClear={this.onClear} //clean button
            onEqual={this.onEqual} //get the anser for calation
            onDecimal={this.onDecimal} //number compare calculate
            onDigit={this.onDigit} //butttpon numbers
            onOperator={this.onOperator} //add,sub,mul,dividu
           
          />

          <History
            
            history={this.state.history}
        
            onEqual={this.onEqual}
           
          />
        </div>

        
      </div>
    )
  }
}
export default App;