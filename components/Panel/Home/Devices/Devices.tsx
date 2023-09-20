import { Badge } from "@nextui-org/react";
import { GiWashingMachine } from "react-icons/gi";
import { ImPower, ImSwitch } from "react-icons/im";
import { TbFridge, TbMicrowave } from "react-icons/tb";

const Devices = () => {
  return (
    <div className="text-white mt-10 max-w-[90%]">
      <div className="border-l-3 border-primaryColor/70 pl-4">
        <h1 className="text-2xl">Upravljajte uređajima</h1>
        <h3 className="text-md text-gray-400">Trenutno aktivnih uređaja: 3</h3>
      </div>

      <div className="flex mt-4 max-w-full overflow-x-scroll scroll-x-hidden scroll-hidden">
        <div className="bg-ultraViolet/20 h-48 mr-8 min-w-[10rem] rounded-2xl backdrop-filter backdrop-blur-lg drop-shadow-lg p-4 flex flex-col justify-between">
          <p className="text-white/50 flex items-center">Veš mašina</p>
          <div className="flex justify-center items-center mb-4 border-b-2 border-gray-600 pb-4">
            <Badge
              content={<ImSwitch />}
              disableOutline
              color="danger"
              className="p-1"
              placement="bottom-right"
              shape="circle"
              size="lg"
            >
              <GiWashingMachine className="w-20 h-20 text-gray-400" />
            </Badge>
          </div>
        </div>

        <div className="bg-ultraViolet/20 mr-8 h-48 min-w-[10rem] rounded-2xl backdrop-filter backdrop-blur-lg drop-shadow-lg p-4 flex flex-col justify-between">
          <p className="text-white/50 flex items-center">Frižider</p>
          <div className="flex justify-center items-center mb-4 border-b-2 border-gray-600 pb-4">
            <Badge
              content={<ImPower />}
              disableOutline
              color="secondary"
              className="p-1"
              placement="bottom-right"
              shape="circle"
              size="lg"
            >
              <TbFridge className="w-20 h-20 text-gray-400" />
            </Badge>
          </div>
        </div>

        <div className="bg-ultraViolet/20 h-48 mr-8 min-w-[10rem] rounded-2xl backdrop-filter backdrop-blur-lg drop-shadow-lg p-4 flex flex-col justify-between">
          <p className="text-white/50 flex items-center">Mikrovalna</p>
          <div className="flex justify-center items-center mb-4 border-b-2 border-gray-600 pb-4">
            <Badge
              content={<ImSwitch />}
              disableOutline
              color="danger"
              className="p-1"
              placement="bottom-right"
              shape="circle"
              size="lg"
            >
              <TbMicrowave className="w-20 h-20 text-gray-400" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
