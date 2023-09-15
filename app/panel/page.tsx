'use client'

import Breadcrumb from '@/components/Panel/Breadcrumb/Breadcrumb'
import CurrentStats from '@/components/Panel/Home/CurrentStats'
import TemperatureGraph from '@/components/Panel/Home/TemperatureGraph'
import PanelLayout from '@/components/Panel/PanelLayout'
import { User } from '@/utils/Interfaces/User'
import { Weather } from '@/utils/Interfaces/Weather'
import { WeatherAPI } from '@/utils/WeatherAPI'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [weatherInfo, setWeatherInfo] = useState<Weather | undefined>();

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
    current: weatherInfo?.current
  };
  return (
    <>
      <Head>
        <title>Panel - HomeLab</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PanelLayout>
        <Breadcrumb />
        <CurrentStats />
        <TemperatureGraph weather={weatherData} />
      </PanelLayout>
    </>
  )
}

export default Dashboard