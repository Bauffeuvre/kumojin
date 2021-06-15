import React from 'react'

import ActualTime from "./components/ActualTime"
import TokyoTime from "./components/TokyoTime"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <ActualTime />
        </div>
        <div>
          <TokyoTime />
        </div>
      </div>
    </div>
  );
}

export default App;
