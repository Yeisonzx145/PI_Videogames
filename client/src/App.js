import Landing from './views/landing/landing';
import { Routes,Route, useLocation} from 'react-router-dom';
import Home from './views/home/home';
import Detail from './views/detail/detail';
import Create from './views/create/create';
import Nav from './views/nav/nav';

function App() {

  const {pathname} = useLocation()
  
  return (
    <div>
      <div>
        {pathname !== '/' && <Nav/>}
      </div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='create' element={<Create/>} />
      </Routes>
    </div>
  );
}

export default App;
