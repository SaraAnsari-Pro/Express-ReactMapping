import React, {Component} from 'react';
import TodoComponent from "./TodoComponent";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    todos: []
  }
}

// componentDidMount(){
//  console.log('mounted!!!')
// }
// componentDidUpdate() {
//   console.log('updated!!!')
// }

call = () => {

  // axios.get('http:localhost:3009')
  // .then(res => {
  //   console.log('res:',res.data);
  // })

  axios.get(' https://jsonplaceholder.typicode.com/todos')
  .then(res => {
    console.log('res:', res.data);

    const todos = res.data;
    this.setState({
      todos:todos
    })
  })
} 



  render(){
    let todos = this.state.todos.map(el => 
    <TodoComponent userId={el.userId} id = {el.id} title={el.title} completed={el.completed}/>)
    return(
      <div>
<h1>Todos List</h1>
<button onClick = {() => this.call()}>Todos List</button>
      {todos}
      </div>
    )
  }
}

export default App;
