import { useQueryClient, useMutation } from "@tanstack/react-query";
import Axios from "../Axios";
import  DevicesInterface  from "../Interfaces/Devices";

export class DeviceMutations {

    private queryClient = useQueryClient();
 
    public editDevice = useMutation<DevicesInterface, Error>(
        (device) => {
            return Axios.makeRequest.post("/devices/save", device);
        },
        {
            onSuccess: () => {
                this.queryClient.refetchQueries(["devices"]); 
            },
            onError: () => { 
            }
        }
    );
}