import Image from "next/image";
import { TbToolsKitchen } from "react-icons/tb";

const Informations: React.FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 text-white">
      <div>
        <Image
          alt="House location with name"
          className="rounded-2xl"
          src="/images/houses/kaizerpwn.png"
          width={570}
          height={100}
        />
      </div>
      <div className="grid-cols-3 grid grid-rows-2">
        <div className="bg-ultraViolet/20 rounded-2xl backdrop-filter backdrop-blur-lg drop-shadow-lg p-4">
          Kuhinja
          <TbToolsKitchen className="w-32 h-32 text-white" />
          <p>Površina:</p>
          <p>20m2</p>
        </div>
      </div>
    </div>
  );
};

export default Informations;
