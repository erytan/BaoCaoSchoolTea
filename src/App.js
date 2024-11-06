import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, QuayTra } from './page/Public';
import path from './ultils/path';

function App() {
  return (
    <div className="App">
      <Router basename="/BaoCaoSchoolTea"> {/* Chỉnh đường dẫn đúng tên repository */}
        <Routes>
          <Route path={path.PUBLIC} element={<Home />} />
          <Route path={path.QUAYTRA} element={<QuayTra />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
