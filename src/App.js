import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import { Container} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Container className="">
      <Navi/>
      </Container>
      
      <Container className="main">
      <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
