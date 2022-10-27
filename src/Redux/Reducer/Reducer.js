import { ADD, CHECKED, FILTER, MODIF, REMOVE } from "../Action/Constantes";

let id = 1 ;
const premierEtat = [{
    id : 1,
    task : 'ma premiere tache',
    status : false
}];


const toDoReducer = (state = premierEtat, action) => {
  switch (action.type) {

  case ADD :
    return [...state, {id : ++id ,status : false ,task : action.ajouter }]
    break ;
  case REMOVE : 
    return [...state.filter(x => (x.id !== action.enlever))]
    break ;
  case CHECKED :
    return [...state.map(el => el.id === action.cocher ? {...el, status : !el.status} : el)]
    break ;
  case FILTER :
    return [...state.filter(x => x.task.includes(action.filtrer) )]
    break ;
  case MODIF :
    return [...state.map(el => el.id === action.count ? {...el, task : action.modifier} : el)]
    break ;
  default:
    return state
  }
  
}

export default toDoReducer ;
