import { combineReducers } from 'redux';
import home from './home';
import find from './find';
import mime from './mime';
import near from './near';
import order from './order';

let reducer = combineReducers({
    home,
    mime,
    near,
    order,
    find
})

export default reducer;