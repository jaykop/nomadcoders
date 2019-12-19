import React from 'react';

class App extends React.Component {

  // this si from js
  constructor(props){
    super(props);
    console.log("component created");
  }

  state = {
    count: 0,

  };

  // js code
  plus = () => {
    console.log("add");
    // everytime we call the setState, 
    // it calls/updates render function
    // this method oeos not depend to the external state
    this.setState(current => ({count:current.count+1}));
  };
  minus = () => {
    console.log("minus");
    // not a good way to update the state
    this.setState({count:this.state.count-1});
  };

  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log("component update");
  }

  componentWillUnmount(){
    console.log("component died");
  }

  render() {
    console.log("component rendering");
    return (
    <div>
    <h1>The number is {this.state.count}</h1>
    <button onClick={this.plus}>Plus</button>
    <button onClick={this.minus}>Minus</button>
    </div>
      )
  };
}

export default App;
