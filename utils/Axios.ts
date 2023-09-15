import axios from "axios";
import DevicesInterface from "./Interfaces/Devices";

export default class Axios {
    public static makeRequest = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        withCredentials: true,
    });

    public async getRooms() {
        const res = await Axios.makeRequest.get('/analytics/rooms')
        return res.data;
    }

    public async getDevices() {
        const res = await Axios.makeRequest.get('/analytics/devices')
        return res.data;
    }

    public async getActiveDevices() {
        const res = await Axios.makeRequest.get('/analytics/activedevices')
        return res.data;
    }

    public async getAllDevices() {
        const res = await Axios.makeRequest.get('/devices')
        return res.data;
    }

    public async updateAllDevices(devices: DevicesInterface[]) {
        const res = await Axios.makeRequest.post('/devices/save', devices)
        return res.data;
    }
} 