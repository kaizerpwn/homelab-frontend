import { BsCloudSun } from "react-icons/bs";

const Weather = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between h-40 backdrop-filter backdrop-blur-lg drop-shadow-lg rounded-2xl bg-ultraViolet/20 p-4 text-gray-400">
        <div className="flex flex-col rounded">
          <div className="font-bold text-sm md:text-xl">Weather informations:</div>
          <div className="text-md text-gray-400">Tuzla</div>
          <div className="text-sm text-gray-500">Srijeda 19 September 2023</div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="text-6xl md:-mt-10 mr-2 justify-center items-center inline-flex rounded-lg text-yellow-400 h-24 w-24">
            <BsCloudSun className="md:w-32 sm:w-20 md:h-32 sm:h-20" />
          </div>
          <div className="font-medium md:text-6xl text-3xl items-center justify-center">
            24°
          </div>
          <div className="flex flex-col items-center ml-6">
            <div>Oblačno</div>
            <div className="mt-1">
              <span className="text-sm">
                <i className="far fa-long-arrow-up"></i>
              </span>
              <span className="text-sm font-light text-gray-500">28°C</span>
            </div>
            <div>
              <span className="text-sm">
                <i className="far fa-long-arrow-down"></i>
              </span>
              <span className="text-sm font-light text-gray-500">20°C</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-2">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">9k/h</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Hummidity</div>
            <div className="text-sm text-gray-500">68%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibillity</div>
            <div className="text-sm text-gray-500">10km</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
