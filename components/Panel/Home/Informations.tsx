import House from "./House/House";
import Rooms from "./Rooms/Rooms";
import Notification from "./Notification/Notification";
import Weather from "./Weather/Weather";

const Informations: React.FC = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-y-12 xl:gap-y-0 text-white xl:grid-cols-2">
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
