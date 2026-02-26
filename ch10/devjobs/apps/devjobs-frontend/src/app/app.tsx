import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './Login/';
import { Jobs } from './Jobs';
import { ProtectedRoute } from './ProtectedRoute';

export function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/jobs'
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/jobs" replace />} />
      </Routes>
    </div>
  );
}

export default App;
