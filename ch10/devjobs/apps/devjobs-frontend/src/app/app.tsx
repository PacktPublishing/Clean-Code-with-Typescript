import { Route, Routes } from 'react-router-dom';
import { Login } from './Login/';
import { Jobs } from './Jobs';

export function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/jobs' element={<Jobs />} />
      </Routes>
    </div>
  );
}

export default App;
