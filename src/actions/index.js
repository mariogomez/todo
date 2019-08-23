// For persistent approach: Uncomment following code
// import { Auth, API } from 'aws-amplify';
import moment from 'moment';
import uuidv1 from 'uuid/v1';
import history from '../history';

// For persistent approach: Comment following code
export const fetchUser = () => async dispatch => {
    dispatch({type: 'FETCH_USER', payload: []});
};

export const fetchTodos = () => {
    return {
        type: 'FETCH_TODOS',
        payload: []
    }
}

export const createTodo = (title) => {
    const newTodo = {
        id: uuidv1(),
        title: title,
        created_at: moment().format('MM/DD/YYYY HH:mm:ss'),
        status: 'incomplete',
        username: 1
    }
    history.push('/');
    return {
        type: 'CREATE_TODO',
        payload: {newTodo}
    }
}

export const updateTodoStatus = (todo, markComplete) => {
    todo.status = markComplete? 'complete' : 'incomplete';
    return {
        type: 'UPDATE_TODO',
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

// For persistent approach: Uncomment following code
// const api = 'todoapi',
//       path = '/todos';

// export const fetchTodos = () => async dispatch => {
//     const myInit = { // OPTIONAL
//             response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
//         },
//         response = await API.get(api, path, myInit);
//     dispatch({type: 'FETCH_TODOS', payload: response.data});
// };

// export const createTodo = (title, username) => async dispatch => {
//     const newTodo = {
//         id: uuidv1(),
//         title: title,
//         created_at: moment().format('MM/DD/YYYY HH:mm:ss'),
//         status: 'incomplete',
//         username: username
//     }
//     const result = await API.post(api, path, {
//         body: newTodo
//     });
//     history.push('/');
//     dispatch({type: 'CREATE_TODO', payload: {result, newTodo}});
// }

// export const updateTodoStatus = (todo, markComplete) => async dispatch => {
//     todo.status = markComplete? 'complete' : 'incomplete';
//     await API.put(api, path, {
//         body: todo
//     });
//     dispatch({type: 'UPDATE_TODO', payload: todo});
// }

// export const fetchUser = () => async dispatch => {
//     const user = await Auth.currentUserInfo();
//     dispatch({type: 'FETCH_USER', payload: user});
// };