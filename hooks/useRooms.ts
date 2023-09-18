import RoomsAPI from "@/utils/api/Rooms/Rooms";
import { useQuery } from "@tanstack/react-query";

const useRooms = () => {
  const { data: roomCount, isLoading: isLoadingRoomCount } = useQuery(
    ["roomCount"],
    async () => {
      const { data } = await RoomsAPI.getRoomsCount();
      return data;
    }
  ); 

  return {
    roomCount,
    isLoadingRoomCount, 
  };
};

export default useRooms;
