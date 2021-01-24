import React from "react";
import styles from "./css/App.module.css";

import StationsWidget from "./components/StationsWidget";

//"homepage": "https://robertasliekis.github.io/station-widget/",

const App = () => {
  return (
    <div className={styles.container}>
      <StationsWidget />
    </div>
  );
};

export default App;
