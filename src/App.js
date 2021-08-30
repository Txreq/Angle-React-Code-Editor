import React, { useState, Component } from "react";
import Editor from "./components/Editor";

import "./style.scss";

function App() {
  const [view, setView] = useState(0);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [tabsMetaData] = useState([
    { fileName: "index.html", icon: "fab fa-html5", id: 0 },
    { fileName: "style.css", icon: "fab fa-css3", id: 1 },
    { fileName: "script.js", icon: "fab fa-js", id: 2 },
  ]);

  const editors = [
    <Editor
      value={html}
      mode="xml"
      onChange={(editor, data, value) => setHtml(value)}
    />,
    <Editor
      value={css}
      mode="css"
      onChange={(editor, data, value) => setCss(value)}
    />,
    <Editor
      value={js}
      mode="javascript"
      onChange={(editor, data, value) => setJs(value)}
    />,
  ];

  const tabs = tabsMetaData.map((tab, index) => {
    return (
      <button
        className={tab.id === view ? "selected" : ""}
        onClick={() => setView(tab.id)}
      >
        <i className={tab.icon}></i> {tab.fileName}
      </button>
    );
  });

  const srcDoc = `
  <!DOCTYPE html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}</script>
    </body>
  </html>`;

  return (
    <div className="container">
      <div className="box left">
        <div className="tabs">{tabs}</div>

        <div className="editor">
          {editors[view]}
        </div>
      </div>

      <div className="box right">
        <iframe title="preview" srcDoc={srcDoc} sandbox="allow-scripts" />
      </div>
    </div>
  );
}

export default App;
