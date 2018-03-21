import React, { Component } from 'react';
import '../style.css';

class Todo extends Component {
    render(){
        return(
            <li id="0">asd<span className="close">x</span></li>
        );
    }
}

class TodosList extends Component {
    render(){
        return(
            <ul id="mylist" className="content">
                <Todo/>
            </ul>
        );
    }
}

class Header extends Component {
    render(){
        return(
                <div id="nav" className="header">
                    <h1 style={{margin: 5 + 'px'}} >My To Do List</h1>
                    <input type="text" id="inputAdd" placeholder="Title..."/>
                    <span id="btnAdd">Add</span>
                </div>
        );
    }
}

class Container extends Component {
    render(){
        return(
            <div id="container" className="container">
                <Header/>
                <TodosList/>
            </div>
        );
    }
}

class TodosApp extends Component {
    render(){
        return(
            <Container/>
        );
    }
}

export default TodosApp;