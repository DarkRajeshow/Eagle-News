
import NavBar from './compenents/NavBar';
import './App.css';
import React, { useState } from 'react';
import News from './compenents/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(0);
  let toggleButton = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "white";
      document.body.style.color = "black";

    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#151715";
      document.body.style.color = "white";

    }
  }

  const [alert, setAlert] = useState(null);

  const apiKey = process.env.REACT_APP_API;

  let setPageSize = 5;

  let setProgress = (progress) => {
    setLoading(progress);
  }

  return (
    <>
      <Router >
        <NavBar mode={mode} toggleFunc={toggleButton} />

        <LoadingBar
          color='rgb(0 188 136)'
          height={3}
          progress={loading}
          onLoaderFinished={() => setProgress(0)}
        />

        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={setPageSize} category="general" country="in" />
          }>
          </Route>
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={setPageSize} category="business" country="in" />
          }>
          </Route>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={setPageSize} category="entertainment" country="in" />
          }>
          </Route>
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={setPageSize} category="health" country="in" />
          }>
          </Route>
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={setPageSize} category="science" country="in" />
          }>
          </Route>
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={setPageSize} category="sports" country="in" />
          }>
          </Route>
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={setPageSize} category="technology" country="in" />
          }>
          </Route>
        </Routes>

      </Router >
    </>
  );
}

export default App;
