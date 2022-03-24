import { useSelector,useDispatch } from "react-redux"
import { check } from "../features/checker";
import { changeTheme } from "../features/theme";
import { addTask } from "../features/tasks";
import { useState } from 'react';

const Header = () => {

  const [task,setTask] = useState('');
  const [done,setDone] = useState(false);

  const checker = useSelector(state => state.checker.value);
  const theme = useSelector(state => state.theme.value);
  const tasks = useSelector(state => state.task.value);
  
  const dispatch = useDispatch();

  const addToTasks = () => {
    dispatch(addTask({ id: tasks[tasks.length - 1].id + 1,done: done, todo:task  }));
    setTask('');
    setDone(false);
  }

  return (
    <header className={`head ${theme ? 'head__dark' : ''}`}>
        <div className="head__container">
            <article className="head__article">
                <h1 className="head__title">TODO</h1>
                { !theme ? <img onClick={() => dispatch(changeTheme(!theme))} className="head__theme" src="/images/icon-moon.svg" alt="moon" /> :
                <img onClick={() => dispatch(changeTheme(!theme))} className="head__theme" src="/images/icon-sun.svg" alt="sun  " /> }
            </article>
            <div className={ `head__input ${theme ? 'head__input-dark' : ''}` }>
                <div onClick={() => dispatch(check(!checker)) && setDone(!done)} className={`head__check ${done ? 'head__check-bg' : ''}`}>
                    { done && <img src="/images/icon-check.svg" alt="check" /> }
                </div>
                <input value={task} onKeyPress={(e) => e.key === "Enter" && addToTasks()} onChange={(e) => setTask(e.target.value)} className={`head__text ${theme ? 'head__text-dark' : ''}`} type="text" placeholder="Create a new todo..." />
            </div>
        </div>
    </header>
  )
}

export default Header