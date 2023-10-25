import logo from './logo.svg';
import './App.css';

function App() {

  const handleClick = () => {
    fetch(
      'api/search_video?keyword=tabla',
       ).then(r=>r.json()).then(json=> console.log(json))
    
    fetch(
      'search/?q=aws tutorial',
       ).then(r=>r.json()).then(json=> console.log(json))
    }

  return (
    <button onClick={handleClick}>Search video</button>
  );
}

export default App;
