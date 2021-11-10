import React from 'react';


 class History extends React.Component {
  constructor(props) {
    super(props);
    this.historyList = React.createRef();
  }



  render() {
    const historyClassName = this.props.isShowHistory;

    return (
      
      

     <div className="datahistorydisplay">
      <div className={historyClassName}>
        <div  ref={this.historyList}>
          {
            this.props.history.map((item, index) => {
              return (
                
                <div key={index} className="hisd">
                  
                  <div>{item.formula.join("")}</div>
                  <div  value={item.result}> </div>
                  
                  <hr></hr>
                </div>
              )
            })
          }
        </div>
        </div>
        </div>
    )
  }
}
export default History;