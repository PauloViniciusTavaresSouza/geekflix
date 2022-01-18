import Menu from './componentes/Menu';
import { GlobalStyle } from './componentes/estilo/styleMenu';
import Home from './componentes/Home';

function App() {
  return (
    <div>
      <div>
        <GlobalStyle />
        <Menu />
        <Home />
      </div>
    </div>
  );
}

export default App;
