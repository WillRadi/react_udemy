// components
import FirstComponent from './components/firstComponent'
import TemplateExpressions from './components/templateExpressions'
import MyComponent from './components/myComponent'
import Events from './components/Events'

// style
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Teste do primeiro parágrafo</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
