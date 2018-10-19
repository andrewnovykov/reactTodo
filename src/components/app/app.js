import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends Component  {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink '),
      this.createTodoItem('Eat '),
      this.createTodoItem('Study '),

    ]
  }


  createTodoItem(label) {
    return { label , important: false, done: false, id: this.maxId++ };
  }

  deleteItem = ( id ) => {
    console.log("del", id);
    this.setState( ({todoData}) => {
        const idx = todoData.findIndex((el) => el.id === id );
        console.log(idx);
        
        const newArray = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
        ]

      return { todoData: newArray }; 
    })
  }

  addItem = ( text ) => {

    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      
      const  newArr = [
        ...todoData,
        newItem
      ] ;

      return {
        todoData: newArr
      };



    });



  }

  toggleProperty( arr, id, propName ){

    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];

    // oldItem.done = !oldItem.done;

    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return  [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];

  }

  makeDone = (id) => {

    this.setState(({todoData})=>{

      

      return { todoData: this.toggleProperty(todoData, id, 'done') };


    })
 

  }

  makeImportant = (id) => {
    
    this.setState(({ todoData }) => {



      return { todoData: this.toggleProperty(todoData, id, 'important') };


    })

  }





  render(){

    const doneCount = this.state.todoData.filter(( el ) =>  el.done  ).length; 
    const todoCount = this.state.todoData.length - doneCount;
    
    return <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} /> 
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} onToggleDone={this.makeDone} onToggleImportant={this.makeImportant} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>;
  }
  
  
};


