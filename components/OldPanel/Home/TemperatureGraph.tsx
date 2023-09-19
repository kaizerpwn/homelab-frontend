'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { FaThermometerQuarter } from "react-icons/fa"
import { BsThermometerSun } from "react-icons/bs"
import { BsFillSunFill, BsFillMoonFill, BsFillCloudMoonFill } from "react-icons/bs"
import { TiWeatherPartlySunny } from "react-icons/ti"
import { Line } from 'react-chartjs-2';
import { Weather } from '@/utils/Interfaces/Weather';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    y: {
      ticks: { color: '#fff', beginAtZero: true }
    },
    x: {
      ticks: { color: '#fff', beginAtZero: true }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#FFFFFF'
      },
      position: 'top' as const,
    },
  },
};

const labels = ['01:00 H', '02:00 H', '03:00 H', '04:00 H', '05:00 H', '06:00 H', '07:00 H', '08:00 H', '09:00 H', '10:00 H', '11:00 H', '12:00 H', '13:00 H', '14:00 H', '15:00 H', '16:00 H', '17:00 H', '18:00 H', '19:00 H', '20:00 H', '21:00 H', '22:00 H', '23:00 H', '24:00 H'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Temperatura po satu',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 11, 12, 13, 14, 15, 3, 17, 18, 19, 12, 4, 22, 1, 12],
      borderColor: '#A78BFA',
      backgroundColor: 'rgba(167, 139, 250, 0.5)',
      fontColor: '#FFFFFF',
      color: '#FFFFFF'
    },
  ],
};

interface WeatherProps {
  weather: Weather | undefined;
}

export default function TemperatureGraph({ weather }: WeatherProps) {

  const renderIcon = () => {
    if (weather?.current?.cloud === 0 && weather?.current?.is_day === 1) {
      return <BsFillSunFill className='flex mx-auto mt-12 text-yellow-400 text-9xl' />;
    }
    else if (weather?.current?.cloud === 0 && weather?.current?.is_day === 0) {
      return <BsFillMoonFill className='flex mx-auto mt-12 text-white text-9xl' />;
    }
    if (weather?.current?.cloud !== 0 && weather?.current?.is_day === 1) {
      return <TiWeatherPartlySunny className='flex mx-auto mt-12 text-white text-9xl' />;
    }
    else if (weather?.current?.cloud !== 0 && weather?.current?.is_day === 0) {
      return <BsFillCloudMoonFill className='flex mx-auto mt-12 text-white text-9xl' />;
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-12 lg:flex-nowrap">
        <div className="lg:w-[65%] p-6 mt-10 text-white bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 rounded-3xl">
          <div className='flex items-center space-x-2'>
            <FaThermometerQuarter className="p-1 text-5xl rounded-full bg-secondaryColor" />
            <span className="opacity-50">Temperature po satu</span>
          </div>
          <div className="text-white">
            <Line options={options} data={data} />
          </div>
        </div>
        <div className="xs:w-full sm:w-full lg:w-[32%] p-6 mt-10 text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 rounded-3xl">
          <div className='flex items-center space-x-2'>
            <BsThermometerSun className="p-1 text-5xl rounded-full bg-secondaryColor" />
            <span className="opacity-50 ">Vanjska temperatura</span>
          </div>
          {renderIcon()}
          <span className='flex justify-center mt-4 text-5xl'>{weather?.current?.temp_c}&deg;</span>
          <span className='flex justify-center text-md'>stepeni celzijusa</span>
          <div className="flex justify-center mt-10">
            <span className='mt-[0.7%] text-xl opacity-50'>Vlažnost vazduha: &nbsp;</span>
            <span className='text-2xl text-white opacity-100'>{weather?.current?.humidity} %</span>
          </div>
        </div>
      </div>
    </>
  )
} 