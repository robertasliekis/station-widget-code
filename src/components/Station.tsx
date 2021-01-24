import React from "react";
import { stationInterface } from "./StationsWidget";
import { activeStationInterface } from "./StationsWidget";

import styles from "../css/Station.module.css";

interface Props {
  station: stationInterface;
  stationIndex: number;
  onStationChange: (stationData: activeStationInterface) => void;
  activeStation: activeStationInterface;
}

const Station: React.FC<Props> = ({ station, stationIndex, onStationChange, activeStation }) => {
  const stationContainerClicked = () => {
    if (activeStation.stationOpenIndex === stationIndex) {
      onStationChange({ stationOpenIndex: null });
    } else {
      onStationChange({ stationOpenIndex: stationIndex });
    }
  };

  const stationDisplayClass = activeStation.stationOpenIndex === stationIndex ? "" : styles.stationDisplayHidden;

  return (
    <div className={styles.container}>
      <div className={`${styles.stationDisplay} ${stationDisplayClass}`}>
        <button className={styles.buttonMinus}></button>
        <div className={styles.stationImage} style={{ backgroundImage: `url("${station.image}")` }}></div>
        <button className={styles.buttonPlus}></button>
      </div>
      <div
        className={styles.stationInfo}
        onClick={() => {
          stationContainerClicked();
        }}
      >
        <p className={styles.name}>{station.name}</p>
        <p className={styles.frequency}>{station.frequency}</p>
      </div>
    </div>
  );
};

export default Station;
