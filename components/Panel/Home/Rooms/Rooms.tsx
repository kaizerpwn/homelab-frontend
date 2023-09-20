import { Badge, Tooltip } from "@nextui-org/react";
import { BsArrowRightShort } from "react-icons/bs";
import { MdOutlineBedroomChild, MdOutlineFamilyRestroom } from "react-icons/md";
import { TbToolsKitchen } from "react-icons/tb";

const Rooms = () => {
  return (
    <>
      <div className="bg-ultraViolet/20 h-56 max-w-[10rem] w-full rounded-2xl backdrop-filter backdrop-blur-lg drop-shadow-lg p-4 flex flex-col justify-between">
        <p className="text-white/50 flex items-center">Kuhinja</p>
        <div className="flex justify-center items-center mb-4 border-b-2 border-gray-600 pb-4">
          <TbToolsKitchen className="w-20 h-20 text-gray-400" />
        </div>
        <div>
          <p className="flex items-center justify-between text-gray-400">
            Pogledaj
            <BsArrowRightShort className="cursor-pointer w-8 h-8 opacity" />
          </p>
        </div>
      </div>

      <div className="bg-ultraViolet/20 h-56 max-w-[10rem] w-full rounded-2xl backdrop-filter backdrop-blur-lg drop-shadow-lg p-4 flex flex-col justify-between">
        <p className="text-white/50 flex items-center">Spavaća soba</p>
        <div className="flex justify-center items-center mb-4 border-b-2 border-gray-600 pb-4">
          <Tooltip
            showArrow={true}
            color="default"
            content="Imate 5 notifikacija za ovu prostoriju."
          >
            <Badge
              content="5"
              disableOutline
              color="danger"
              shape="circle"
              size="lg"
            >
              <MdOutlineBedroomChild className="w-20 h-20 text-gray-400" />
            </Badge>
          </Tooltip>
        </div>
        <div>
          <p className="flex items-center justify-between text-gray-400">
            Pogledaj
            <BsArrowRightShort className="cursor-pointer w-8 h-8 " />
          </p>
        </div>
      </div>

      <div className="bg-ultraViolet/20 h-56 max-w-[10rem] w-full rounded-2xl backdrop-filter backdrop-blur-lg drop-shadow-lg p-4 flex flex-col justify-between">
        <p className="text-white/50 flex items-center">Dnevni boravak</p>
        <div className="flex justify-center items-center mb-4 border-b-2 border-gray-600 pb-4">
          <MdOutlineFamilyRestroom className="w-20 h-20 text-gray-400" />
        </div>
        <div>
          <p className="flex items-center justify-between text-gray-400">
            Pogledaj
            <BsArrowRightShort className="cursor-pointer w-8 h-8 " />
          </p>
        </div>
      </div>
    </>
  );
};

export default Rooms;
