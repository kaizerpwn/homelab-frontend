import { AiOutlineInfoCircle } from "react-icons/ai";

const Notification = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center backdrop-filter backdrop-blur-lg drop-shadow-lg rounded-2xl bg-ultraViolet/20 p-4 text-gray-400">
        <AiOutlineInfoCircle className="cursor-pointer w-8 h-8 mr-2" />
        You don&apos;t have any notifications available.
      </div>
    </div>
  );
};

export default Notification;
