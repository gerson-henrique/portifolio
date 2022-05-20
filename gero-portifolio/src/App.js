import './styles/default.css'
import { Welcome } from "./components/Welcome";
import { Tech } from './components/Tech';
import { Projects } from './components/Projects';


function App() {
  return (
    <div className="App">
      <Welcome/>
      <Projects/>
      <Tech />
    </div>
  );
}

export default App;
