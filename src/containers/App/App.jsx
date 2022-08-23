import PeoplePage from '@containers/PeoplePage';

import { Routes, Route } from 'react-router-dom';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<PeoplePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
