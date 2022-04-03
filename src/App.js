import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<p>gggg</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
