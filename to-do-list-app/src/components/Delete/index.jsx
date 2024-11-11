import './index.scss';

export function Delete({index,removeTask}){
  return(
    <button className="delete-btn" onClick={()=>removeTask(index)}>Delete</button>
  );
}
