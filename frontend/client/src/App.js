import logo from './logo.svg';
import './App.css';
import ImageUpload from './components/ImageUpload';
import ModelViewer from './components/ModelViewer';
import ModelDownload from './components/ModelDownload';

function App() {
  return (
    <div className="App">
      <ImageUpload/>
      <ModelDownload/>
      <ModelViewer/>
    </div>
  );
}

export default App;
