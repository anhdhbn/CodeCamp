import React, { Component } from 'react';
import '../style.css';

class Todo extends Component {

    onClickTodo(event) {
        var target = event.target;

        var tag = target.tagName;

        if (tag === 'LI') {
            //handleToggleTodo(target);
            console.log("clicked li");
        }

        if (tag === 'SPAN') {
            //handleRemoveTodo(target);
            console.log("clicked span");
        }
    }
    render(){
        return(          
            <li key={this.key} id={this.props.id} onClick={this.onClickTodo}>{this.props.content}<span className="close" >x</span></li>
        );
    }
}

class TodosList extends Component {


    createLi = () =>{
        const contents = ["Uet", "Code", "Camp"];
        let listLi = [];
        for (let i = 0; i < contents.length; i++) { 
              listLi.push(<Todo key={i} id={i} content={contents[i]}/>);
        }   
        return listLi;
    }

    render(){
        return(
            <ul id="mylist" className="content">
                 {this.createLi()}
            </ul>
        );
    }
}

class Input extends Component {
    render(){
        return(
            <input type="text" id="inputAdd" placeholder="Title..."/>
        );
    }
}

class Button extends Component {
    render(){
        return(
            <span id="btnAdd">Add</span>
        );
    }
}

class Header extends Component {
    render(){
        return(
                <div id="nav" className="header">
                    <h1 style={{margin: 5 + 'px'}} >My To Do List</h1>
                    <Input/>
                    <Button/>
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