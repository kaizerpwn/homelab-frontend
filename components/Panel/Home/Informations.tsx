import {
  Badge,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Tooltip,
} from "@nextui-org/react";
import { AiOutlineArrowsAlt, AiOutlineInfoCircle } from "react-icons/ai";
import {
  BsArrowReturnRight,
  BsArrowRightShort,
  BsCloudSun,
} from "react-icons/bs";
import { MdOutlineBedroomChild, MdOutlineFamilyRestroom } from "react-icons/md";
import { TbToolsKitchen } from "react-icons/tb";

const Informations: React.FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 text-white">
      <div>
        <Card
          isFooterBlurred
          className="w-[620px] h-[500px] col-span-12 sm:col-span-7 opacity-80 drop-shadow-lg shadow-lg"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Tuzla, 75000
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Miladije, Omera Hodzinog 6
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/images/houses/kaizerpwn.png"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/houses/kaizerpwn.png"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Bosna i Hercegovina</p>
                <p className="text-tiny text-white/60">
                  Kuća posjeduje dva sprata, parking i garažu.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Pogledaj
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex flex-wrap gap-6">
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

        <div className="w-full">
          <div className="w-full flex items-center backdrop-filter backdrop-blur-lg drop-shadow-lg rounded-2xl bg-ultraViolet/20 p-4 text-gray-400">
            <AiOutlineInfoCircle className="cursor-pointer w-8 h-8 mr-2" />
            Nemate nikakvih obavještenja trenutno dostupnih.
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex justify-between h-40 backdrop-filter backdrop-blur-lg drop-shadow-lg rounded-2xl bg-ultraViolet/20 p-4 text-gray-400">
            <div className="flex flex-col rounded">
              <div className="font-bold text-xl">Vremenska prognoza:</div>
              <div className="text-md text-primaryColor">Tuzla</div>
              <div className="text-sm text-gray-500">
                Srijeda 19 Septembar 2023
              </div>
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
      </div>
    </div>
  );
};

export default Informations;
