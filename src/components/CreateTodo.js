import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import { createTodo } from '../actions';

class CreateTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todoText: ''
        }
    }

    updateInput = (e) => {
        this.setState({todoText: e.target.value});
    }

    createTodo = () => {
        const username = !_.isEmpty(this.props.user)?this.props.user.username:'1';
        this.props.createTodo(this.state.todoText, username);
    }

    render(){
        return (
            <Container>
                <div>Create Todo</div>
                <label>Add todo text: </label>
                <input id="todo-text" type='text' className='form-control' onChange={this.updateInput}/>
                <hr/>
                <Button variant="primary" onClick={this.createTodo}>Create</Button>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default withRouter(connect(mapStateToProps, {createTodo})(CreateTodo));