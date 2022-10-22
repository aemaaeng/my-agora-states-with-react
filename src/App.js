import React from "react";
import Discussions from "./Components/Discussions";
import "./App.css";

function App() {
  return (
    <body>
      <div className="App">
        <main>
          <h1>My Agora States</h1>
          {/* 입력 폼 컴포넌트 */}
          <Discussions />
        </main>
      </div>
    </body>
  );
}

export default App;
