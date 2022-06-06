import './App.css';
import { Menu } from './components/Menu';
import { Main } from './components/pages/Main';
import { Projects } from './components/pages/Projects';

function App() {
  return (
    <div>
      <Main/>
      <Menu/>
      <Projects/>
    </div>
  );
}

export default App;

