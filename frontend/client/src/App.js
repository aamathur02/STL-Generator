import logo from './logo.svg';
import './App.css';
import ImageUpload from './components/ImageUpload';
import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <div className="App">
      <ImageUpload/>
      <ModelViewer/>
    </div>
  );
}

export default App;
