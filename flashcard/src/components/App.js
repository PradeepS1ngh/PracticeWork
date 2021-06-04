import React from "react";
import StackList from "./StackFile";
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1> Flash card Project</h1>
      <hr />
      <StackList />
      <hr />
      <Link to='/stack-form'>Create new Stack</Link>
    </div>
  );
}

export default App;
