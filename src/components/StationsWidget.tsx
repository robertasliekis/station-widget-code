import React, { useState, useEffect } from "react";
import axios from "axios";
import Station from "./Station";
import styles from "../css/Widget.module.css";

export interface stationInterface {
  name: string;
  frequency: string;
  image: string;
}

export interface activeStationInterface {
  stationOpenIndex: null | number;
}

const StationsWidget: React.FC = () => {
  const [stations, setStations] = useState<stationInterface[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [activeStation, setActiveStation] = useState<activeStationInterface>({ stationOpenIndex: null });

  useEffect(() => {
    const stationsUrl = "./data/stations.json";
    axios
      .get<stationInterface[]>(stationsUrl)
      .then((response) => {
        setStations(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const stationChange = (stationData: activeStationInterface) => {
    setActiveStation(stationData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <button className={styles.buttonBack}></button>
        <p>STATIONS</p>
        <button className={styles.buttonSwitch}></button>
      </div>
      <div className={styles.middleSection}>
        {loading && <h1 className={styles.loadingText}>Loading...</h1>}
        {error && <h1 className={styles.loadingText}>{error}</h1>}
        {stations &&
          stations.map((station, index) => (
            <Station
              key={index}
              stationIndex={index}
              station={{ name: station.name, frequency: station.frequency, image: station.image }}
              onStationChange={stationChange}
              activeStation={activeStation}
            />
          ))}
      </div>
      <div className={styles.bottomSection}>
        {activeStation.stationOpenIndex !== null ? (
          <div className={styles.text}>
            <p className={styles.yellowText}>CURRENTLY PLAYING</p>
            <p className={styles.stationPlaying}>{stations && stations[activeStation.stationOpenIndex].name}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default StationsWidget;
