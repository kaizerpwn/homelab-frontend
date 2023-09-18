import http from "../http";

const DevicesAPI= {
    getAllDevices: async () => {
        const response = await http.get('/devices');
        return response;
    },
    getDevicesCount: async () => {
        const response = await http.get('/analytics/devices');
        return response;
    },
    getActiveDevicesCount: async () => {
        const response = await http.get('/analytics/activedevices');
        return response;
    },
};

export default DevicesAPI;