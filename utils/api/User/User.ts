import http from "../http";

const UserAPI = {
    login: async (username: string, password: string) => {
        const response = await http.post('/user/login', { username, password });
        return response;
    },
};

export default UserAPI;