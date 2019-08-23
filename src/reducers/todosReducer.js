import _ from 'lodash';

export default (state = [], action) => {
    switch (action.type){
        case 'FETCH_TODOS':
            // For persistent approach: Comment following code
            return state;

            // For persistent approach: Uncomment following code
            // return _.orderBy(action.payload, 'created_at');
        case 'UPDATE_TODO':
            let newListComplete = _.reject(state, function(o) { return o.id === action.payload.id; });
            return _.orderBy([...newListComplete, action.payload], 'created_at');
        case 'DELETE_TODO':
            return state.filter( todo => todo.id !== action.payload);
        case 'CREATE_TODO':
            return [...state, action.payload.newTodo]
        default:
            return state;
    }
}