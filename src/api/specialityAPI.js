import axios from "axios";

const BASE_URL = "http://localhost:3090/specialities";

export class SpecialityAPI {
  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data;
  }
}
