import {createStore} from 'redux'
import toDoReducer from "../Reducer/Reducer";

const Store = createStore(toDoReducer);
export default Store ;