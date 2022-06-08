import './App.css';
import { Menu } from './components/Menu';
import { Main } from './components/pages/Main';
import { Projects } from './components/pages/Projects';
import APIContextProvider from './context/API';

function App() {
  return (
    <APIContextProvider > 
    <div>
      <Main/>
      <Menu/>
      <Projects/>
    </div>
    </APIContextProvider>
  );
}

export default App;

