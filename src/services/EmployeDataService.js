import http from "./http-axios";

export default {
  getAll() {
    return http.get("/employees");
  },

  getById(id) {
    return http.get(`/employees/${id}`);
  },

  create(data) {
    return http.post("/employees", JSON.stringify(data));
  },

  update(id, data) {
    return http.put(`/employees/${id}`, data);
  },

  deleteById(id) {
    return http.delete(`/employees/${id}`);
  },

  findByName(name) {
    return http.get(`employees?name=${name}`);
  },
}
