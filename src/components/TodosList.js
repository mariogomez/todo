import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import _ from 'lodash';
import { fetchTodos, updateTodoStatus, deleteTodo, fetchUser } from '../actions';
import { Container, ListGroup, Button } from 'react-bootstrap';
// For persistent approach: Uncomment following code
// import { Auth } from 'aws-amplify';
import uuidv1 from 'uuid';

class TodoList extends Component{
    componentDidMount(){
        this.props.fetchTodos();
        this.props.fetchUser();
    }

    handleCompleteItem = (e) => {
        const itemToUpdate = _.find(this.props.todos, {id: e.currentTarget.value});
        const isComplete = itemToUpdate.status === 'complete' ? true : false;
        this.props.updateTodoStatus(itemToUpdate, !isComplete);
    }

    renderTodos(){
        if(_.isEmpty(this.props.todos)){
            return '';
        }
        return this.props.todos.map(todo => {
            const checkbox = <input className="form-check-input" type="checkbox" id={todo.id} value={todo.id} defaultChecked={todo.status === "complete"} onChange={this.handleCompleteItem}/>;
            return(
                <ListGroup.Item key={uuidv1()}>
                    <div className="form-check">
                        {checkbox}
                        <label className="form-check-label" htmlFor={todo.id}> {todo.title}</label> 
                        <button onClick={this.deleteTodo}  data-id={todo.id} className="float-right btn btn-danger">Delete</button>
                    </div>
                </ListGroup.Item>
            );
        })
    }

    deleteTodo = e => {
        this.props.deleteTodo(e.currentTarget.dataset.id);
    }

    logoutUser(){
        // For persistent approach: Uncomment following code
        // Auth.signOut()
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err));
      
        // // By doing this, you are revoking all the auth tokens(id token, access token and refresh token)
        // // which means the user is signed out from all the devices
        // // Note: although the tokens are revoked, the AWS credentials will remain valid until they expire (which by default is 1 hour)
        // Auth.signOut({ global: true })
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err));
    };

    render(){
        return (
            <Container>
                <button onClick={this.logoutUser} className="float-right btn btn-sm btn-outline-secondary">Logout</button>
                <h3>Today</h3>
                <p>Things I have to do today:</p>
                <Link to={'/createTodo'}>
                    <Button variant="primary mr-1">Create Todo</Button>
                </Link>
                <hr/>
                <ListGroup>
                {this.renderTodos()}
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        user: state.user
    }
}


export default withRouter(connect(mapStateToProps, {fetchTodos, updateTodoStatus, deleteTodo, fetchUser})(TodoList));

