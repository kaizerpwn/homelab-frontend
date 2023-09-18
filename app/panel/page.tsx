"use client";

import Breadcrumb from "@/components/Panel/Breadcrumb/Breadcrumb";
import CurrentStats from "@/components/Panel/Home/CurrentStats";
import TemperatureGraph from "@/components/Panel/Home/TemperatureGraph";
import PanelLayout from "@/components/Panel/PanelLayout";
import { Weather } from "@/utils/Interfaces/Weather";
import { WeatherAPI } from "@/utils/WeatherAPI";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [weatherInfo, setWeatherInfo] = useState<Weather | undefined>();
  const { data: session } = useSession();
  console.log(session);

  // useEffect(() => {
  //   const getWeatherInfo = async () => {
  //     const weatherInstance = new WeatherAPI("Tuzla");
  //     const info = await weatherInstance.getLocationInfo();
  //     setWeatherInfo(info);
  //   };
  //   getWeatherInfo();
  // }, []);

  if (weatherInfo === null) {
    return <div>Loading...</div>;
  }

  const weatherData: Weather = {
    current: weatherInfo?.current,
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumb />
        <CurrentStats />
        <TemperatureGraph weather={weatherData} />
      </PanelLayout>
    </>
  );
};

export default Dashboard;
