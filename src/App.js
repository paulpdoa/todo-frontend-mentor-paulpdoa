import { useSelector,useDispatch } from "react-redux";
import { changePage } from "./features/activePage";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import ActiveTask from "./components/ActiveTask";
import Navigation from "./components/Navigation";
import CompletedTask from "./components/CompletedTask";

function App() {

  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);
  const activePage = useSelector(state => state.activePage.value);

  return (
    <div className={`container ${theme ? 'container__dark' : ''}`}>
      <Header />
      <div className="task__list-container">
        {activePage === 'all' && <Tasks />}
        {activePage === 'active' && <ActiveTask />}
        {activePage === 'completed' && <CompletedTask />}
        <Navigation />
        <div className="task__navigate-mobile">
            <div className="navigate__mobile">
              <button onClick={() => dispatch(changePage('all'))} className={`${theme ? 'navigate__btn-dark' : 'navigate__btn'} ${activePage ==='all' ? 'task__active' : ''}`}>All</button>
              <button onClick={() => dispatch(changePage('active'))} className={`${theme ? 'navigate__btn-dark' : 'navigate__btn'} ${activePage ==='active' ? 'task__active' : ''}`}>Active</button>
              <button onClick={() => dispatch(changePage('completed'))} className={`${theme ? 'navigate__btn-dark' : 'navigate__btn'} ${activePage ==='completed' ? 'task__active' : ''}`}>Completed</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
