import axios from "axios";

export default class TypeOfWorkService {
  getTypeOfWork() {
    return axios.get("http://localhost:8080/api/typeofworks/getall");
  }
}