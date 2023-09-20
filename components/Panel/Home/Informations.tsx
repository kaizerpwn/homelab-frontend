import House from "./House/House";
import Rooms from "./Rooms/Rooms";
import Notification from "./Notification/Notification";
import Weather from "./Weather/Weather";

const Informations: React.FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 text-white">
      <House />
      <div className="flex flex-wrap gap-6">
        <Rooms />
        <Notification />
        <Weather />
      </div>
    </div>
  );
};

export default Informations;
