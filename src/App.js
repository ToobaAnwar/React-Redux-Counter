import React from 'react';
import './App.css';
import { increment, decrement, reset } from './Actions';
import { connect } from 'react-redux'

function App({count, increment, decrement, reset}){
  return (
    <div className="App">
    <br />
    <br />
    <h1>MY COUNTER APP</h1>
    <br />
    <button className="button buttonS" onClick={decrement}>DEC</button>
    <span>       {count}       </span>
    <button className="button buttonS" onClick={increment}>INC</button>
    <br />
    <button className="button buttonS" onClick={reset}>RESET</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
   count: state.count
   
})

const mapDispatchToProps = {
  decrement,
  increment,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// mapActionsToProps ==== allow to dispatch action from comp easily 
