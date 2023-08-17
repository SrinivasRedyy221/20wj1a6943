import React from 'react';
import { BrowserRouter as Routes, Route} from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/trains" element={<AllTrainsPage />} />
        <Route path="/trains" element={<SingleTrainPage />} />
      </Routes>
      

    </div>
  );
}

export default App;
