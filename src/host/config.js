import { httpRequest, url } from "./host";
import { TOKEN } from "./../const";

const param = {
  headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
};

export const getMahalla = () => {
  var config = {
    url: `${url}/variations`,
    method: "get",
    param,
  };
  return httpRequest(config);
};

export const createMahalla = (config) => {
  var configs = {
    url: `${url}/security/auth_check`,
    method: "post",
    data: config,
  };
  return httpRequest(configs);
};
