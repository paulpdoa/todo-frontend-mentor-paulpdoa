import { clearTask } from "../features/tasks";
import { useDispatch,useSelector } from 'react-redux';
import { changePage } from "../features/activePage";

const Navigation = () => {
  
  const tasks = useSelector(state => state.task.value);
  const theme = useSelector(state => state.theme.value);
  const activePage = useSelector(state => state.activePage.value);
  const dispatch = useDispatch();
  
  return (
    <nav className="navbar">
        <div className={`task__foot task__width ${theme ? 'task-dark' : ''}`}>
            <span className="task__left">{ tasks.length < 1 ? '' : tasks.length } { tasks.length > 0 ? 'item/s left' : 'No items yet'}</span>
            <div className="task__navigate">
                <button onClick={() => dispatch(changePage('all'))} className={`${theme ? 'navigate__btn-dark' : 'navigate__btn'} ${activePage ==='all' ? 'task__active' : ''}`}>All</button>
                <button onClick={() => dispatch(changePage('active'))} className={`${theme ? 'navigate__btn-dark' : 'navigate__btn'} ${activePage ==='active' ? 'task__active' : ''}`}>Active</button>
                <button onClick={() => dispatch(changePage('completed'))} className={`${theme ? 'navigate__btn-dark' : 'navigate__btn'} ${activePage ==='completed' ? 'task__active' : ''}`}>Completed</button>
            </div>
            <button onClick={() => dispatch(clearTask())} className={theme ? 'task__completed-btn-dark' : 'task__completed-btn' }>Clear Completed</button>
        </div>
    </nav>
  )
}

export default Navigation