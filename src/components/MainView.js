import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import TodoList from './TodosList';
import CreateTodo from './CreateTodo';

import reducers from '../reducers';


const store = createStore(reducers, applyMiddleware(ReduxThunk));

class MainView extends Component{
    render(){
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path='/' exact component={TodoList} />
                    <Route path='/today' exact component={TodoList} />
                    <Route path='/createTodo' exact component={CreateTodo}/>
                </Router>
            </Provider>
        )
    }
}

export default MainView;