import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home, QuayTra } from './page/Public';
import path from './ultils/path';

function App() {
  return (
    <div className="App">
      {/* Sử dụng HashRouter bao bọc Routes */}
      <HashRouter>
        <Routes>
          {/* Định nghĩa route chính */}
          <Route path={path.PUBLIC} element={<Home />} />
          {/* Định nghĩa route con */}
          <Route path={path.QUAYTRA} element={<QuayTra />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
