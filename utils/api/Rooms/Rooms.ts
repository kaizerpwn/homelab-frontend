import http from "../http";

const RoomsAPI = { 
    getRoomsCount: async () => {
        const response = await http.get('/analytics/rooms');
        return response;
    }, 
};

export default RoomsAPI;