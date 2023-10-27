import axios from "axios";

const BASE_URL = "http://localhost:3090/doctors";

export class DoctorAPI {
  static async getDoctors() {
    return (await axios.get(`${BASE_URL}`)).data;
  }
}
