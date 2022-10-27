import './App.css';
import {add, checked, remove,filt, modif} from './Redux/Action/Action' ;
import {connect} from 'react-redux' ;
function App(props) {
  let barre = 'barre';
  let nonBarre = 'nonBarre';
  let tache , tache1 ;
  const update = (nombre) => {
  <div className='modif'>
    <input type = 'text' placeholder='modifier la tache'onChange={(e)=> tache1 = e.target.value}/>
    <button onClick={() => props.Modif(tache1,nombre)}></button>
  </div>
    console.log('modif');
  }
  return (
    <div className="App">
      <div className='search'>
      <input type= 'text' placeholder = 'faites une recherche' onChange={(e) => props.Filter(e.target.value)}/>
        <button ><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className ='add'>
        <input type = 'text' placeholder = 'ecrire la tache' onChange={(e) => tache = e.target.value }/>
        <button onClick={() => props.Add(tache)}>ajouter</button>
        <div className='list'>
          {
            props.list.map(el => (
              <div className = 'tache' key = {el.id} >
                    <input type = 'checkbox'  onChange={()=>props.Checked(el.id)}/>
                    <div>
                    <p className={el.status === true ?  barre :  nonBarre} onClick={() => update(el.id)}>{el.task}</p>
                    </div>
                    <button >update</button>
                    <button onClick={()=> props.Remove(el.id) }><i className ="fa-regular fa-trash-can"></i></button>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
const mapStatetoProps = state => {
    return {
      list : state
    }
}
const mapDispatchtoProps = dispatch => ({
  Add : (ajouter) => {
    dispatch(add(ajouter));
  },
  Remove : (enlever) => {
    dispatch(remove(enlever));
  },
  Checked : (cocher) => {
    dispatch(checked(cocher));
  },
  Filter : (filtrer) => {
    dispatch(filt(filtrer));
  },
  Modif : (modifier,num) => {
    dispatch(modif(modifier,num));
  }
})
export default (connect) (mapStatetoProps , mapDispatchtoProps) (App) ;
