import { BsCloudSun } from "react-icons/bs";

const Weather = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between h-40 backdrop-filter backdrop-blur-lg drop-shadow-lg rounded-2xl bg-ultraViolet/20 p-4 text-gray-400">
        <div className="flex flex-col rounded">
          <div className="font-bold text-xl">Vremenska prognoza:</div>
          <div className="text-md text-primaryColor">Tuzla</div>
          <div className="text-sm text-gray-500">Srijeda 19 Septembar 2023</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="text-6xl -mt-10 mr-2 justify-center inline-flex rounded-lg text-yellow-400 h-24 w-24">
            <BsCloudSun className="w-32 h-32" />
          </div>
          <div className="font-medium text-6xl items-center justify-center">
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
            <div className="font-medium text-sm">Vjetar</div>
            <div className="text-sm text-gray-500">9k/h</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Vlažnost</div>
            <div className="text-sm text-gray-500">68%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Vidljivost</div>
            <div className="text-sm text-gray-500">10km</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
