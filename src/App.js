import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Plant from './pages/Plant/Plant';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/planta/:nomePopular' element={<Plant/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
