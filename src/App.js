import React from "react";


class App extends React.Component {
    state = {
        count: 0,
        isCounting: false,
    };
  handleStart = () => {this.timerId = setInterval(() => {
    this.setState((prevState) => ({ count: prevState.count + 1, isCounting: true }),)
  }, 1000)}
  
  handleStop = () => {
    clearInterval(this.timerId);
    this.setState({isCounting: false})
  }
  handleReset = () => {
    this.setState({ count: 0, isCounting: false });
     clearInterval(this.timerId);
 
  }
  componentDidMount() {
    let data = localStorage.getItem('count')
  
    if (data) {
       this.setState({ count: +data })
       console.log(data)
    }
   
    
  }
  

  componentDidUpdate() {
    localStorage.setItem('count', `${this.state.count}`)
      
    }

  componentWillUnmount() {
    clearInterval(this.timerId);
    
    }

    render() {
        return (
            <div className="App">
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}