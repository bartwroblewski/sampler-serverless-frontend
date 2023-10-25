import logo from './logo.svg';
import './App.css';

function App() {

  const handleClick = () => {
    fetch(
      'api/search_video?keyword=tabla',
      //  {headers: {'x-api-key': 'OIkF94OGYmQyG0e4Ib3s4xmsgzzuxFv3QqQBplx4'}}
       ).then(r=>r.json()).then(json=> console.log(json))
    }

  return (
    <button onClick={handleClick}>Search video</button>
  );
}

export default App;
