import { useSelector } from "react-redux";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import ActiveTask from "./components/ActiveTask";
import Navigation from "./components/Navigation";
import CompletedTask from "./components/CompletedTask";

function App() {

  const theme = useSelector(state => state.theme.value);
  const activePage = useSelector(state => state.activePage.value);

  return (
    <div className={`container ${theme && 'container__dark'}`}>
      <Header />
      <div className="task__list-container">
        {activePage === 'all' && <Tasks />}
        {activePage === 'active' && <ActiveTask />}
        {activePage === 'completed' && <CompletedTask />}
        <Navigation />
      </div>
    </div>
  );
}

export default App;
