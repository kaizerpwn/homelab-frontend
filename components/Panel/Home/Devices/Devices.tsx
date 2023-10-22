import { Badge, Tooltip } from "@nextui-org/react";
import { AiOutlinePlus } from "react-icons/ai";
import { GiWashingMachine } from "react-icons/gi";
import { ImPower, ImSwitch } from "react-icons/im";
import { TbFridge, TbMicrowave } from "react-icons/tb";

const Devices = () => {
  return (
    <div className="text-white mt-10 max-w-[90%]">
      <div className="border-l-3 border-primaryColor/70 pl-4">
        <div className="flex justify-between">
          <h1 className="text-2xl">Control your devices</h1>
          <button className="flex bg-secondaryColor h-12 items-center hover:bg-secondaryColor/80 outline-none border-none transition duration-500 py-2 px-4 text-white rounded-xl">
            <AiOutlinePlus className="mr-1" /> Add device
          </button>
        </div>
        <h3 className="text-md text-gray-400">Currently active devices: 3</h3>
      </div>

      <div className="flex mt-4 max-w-full overflow-x-scroll scroll-x-hidden scroll-hidden">
        <div className="bg-ultraViolet/20 h-48 mr-8 min-w-[10rem] rounded-2xl backdrop-filter backdrop-blur-lg drop-shadow-lg p-4 flex flex-col justify-between transition duration-500 hover:bg-ultraViolet/40 cursor-pointer">
          <p className="text-white/50 flex items-center">Washing machine</p>
          <div className="flex justify-center items-center mb-4 pb-4">
            <Tooltip showArrow={true} content="This device is turned off.">
              <Badge
                content={<ImSwitch />}
                disableOutline
                color="danger"
                className="p-1"
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <GiWashingMachine className="w-20 h-20 text-gray-200" />
              </Badge>
            </Tooltip>
          </div>
        </div>

        <div className="bg-ultraViolet/20 mr-8 h-48 min-w-[10rem] rounded-2xl backdrop-filter backdrop-blur-lg drop-shadow-lg p-4 flex flex-col justify-between transition duration-500 hover:bg-ultraViolet/40 cursor-pointer">
          <p className="text-white/50 flex items-center">Fridge</p>
          <div className="flex justify-center items-center mb-4 pb-4">
            <Tooltip showArrow={true} content="This device is turned on.">
              <Badge
                content={<ImPower />}
                disableOutline
                color="secondary"
                className="p-1"
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <TbFridge className="w-20 h-20 text-gray-200" />
              </Badge>
            </Tooltip>
          </div>
        </div>

        <div className="bg-ultraViolet/20 h-48 mr-8 min-w-[10rem] rounded-2xl backdrop-filter backdrop-blur-lg drop-shadow-lg p-4 flex flex-col justify-between transition duration-500 hover:bg-ultraViolet/40 cursor-pointer">
          <p className="text-white/50 flex items-center">Microwave</p>
          <div className="flex justify-center items-center mb-4 pb-4">
            <Tooltip showArrow={true} content="This device is turned off.">
              <Badge
                content={<ImSwitch />}
                disableOutline
                color="danger"
                className="p-1"
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <TbMicrowave className="w-20 h-20 text-gray-200" />
              </Badge>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
