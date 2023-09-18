import DevicesAPI from "@/utils/api/Devices/Devices";
import { useQuery } from "@tanstack/react-query";

const useDevices = () => {
  const { data: devices, isLoading: isLoadingDevices } = useQuery(
    ["devices"],
    async () => {
      const { data } = await DevicesAPI.getAllDevices();
      return data;
    }
  );

  const { data: deviceCount, isLoading: isLoadingDeviceCount } = useQuery(
    ["deviceCount"],
    async () => {
      const { data } = await DevicesAPI.getDevicesCount();
      return data;
    }
  );

  const { data: activeDeviceCount, isLoading: isLoadingActiveDeviceCount } =
    useQuery(["activeDevices"], async () => {
      const { data } = await DevicesAPI.getActiveDevicesCount();
      return data;
    });

  return {
    devices,
    isLoadingDevices,
    deviceCount,
    isLoadingDeviceCount,
    activeDeviceCount,
    isLoadingActiveDeviceCount,
  };
};

export default useDevices;
