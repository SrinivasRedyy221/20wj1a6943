import React from 'react';
import { BrowserRouter as Routes, Route} from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  return (
    <Routes>
        <Route index path="/" component={<AllTrainsPage/>} />
        <Route path="./trains" component={<SingleTrainPage/>} />
    </Routes>
  );
}

export default App;
