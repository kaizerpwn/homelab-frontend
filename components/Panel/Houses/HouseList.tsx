import { AiOutlinePlus } from "react-icons/ai";
import HouseCard from "./HouseCard";

const HouseList = () => {
    return (
        <>
            <div className="flex justify-between">
                <h1 className="font-bold text-white text-4xl mb-12 border-b-2 border-lavender/50">Your Houses</h1>
                <button className="flex bg-secondaryColor items-center h-12 hover:bg-secondaryColor/80 transition duration-500 py-2 px-4 text-white rounded-xl">
                    <AiOutlinePlus className="mr-1" /> Add house
                </button>
            </div>
            <div className="grid grid-cols-3 grid-rows-1 text-white gap-10">
                <HouseCard />
            </div>
        </>
    );
}

export default HouseList;