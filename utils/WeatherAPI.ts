import axios from 'axios';

export class WeatherAPI {
  private baseURL: string;

  constructor(location: string | undefined | null) {
    this.baseURL = `/api/weather?location=${location}`;
  }

  public async getLocationInfo() {
    return await axios.get(this.baseURL)
      .then((response) => {
        return response.data; 
      })
      .catch((error) => console.log(error));
  }
}
