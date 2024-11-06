import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Home,QuayTra} from './page/Public'
import path from './ultils/path';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Home />}>
          <Route path={path.QUAYTRA} element={<QuayTra/>}/>
        </Route>  
      </Routes>
    </div>
  );
}

export default App;
