import { useSelector,useDispatch } from "react-redux"
import { deleteSingleTask,updateTask } from "../features/tasks";

const ActiveTask = () => {

  const theme = useSelector(state => state.theme.value);
  const tasks = useSelector(state => state.task.value);
  const dispatch = useDispatch();

  return (
    <div className="task">
        <div className="task__container">
            { tasks && tasks.filter(task => task.done === false).map((task,key) => (
            <div draggable="true" key={key} className={`task__list task__width ${theme ? 'task-dark task__bot-border' : ''}`}>
                <div className="task__info">
                    <div onClick={() => dispatch(updateTask({ id: task.id,done:!task.done }))} className={`task__check ${task.done && "task__check-bg"}`}>
                        { task.done && <img src="/images/icon-check.svg" alt="check" /> }
                    </div>
                    { !task.done ? <p className="check__text">{ task.todo }</p> : <del className="check__text">{ task.todo }</del> }
                </div>
                <img onClick={() => dispatch(deleteSingleTask({id: task.id}))} className="task__cross" src="/images/icon-cross.svg" alt="cross" />
            </div>
            )) }
        </div>
    </div>
  )
}

export default ActiveTask