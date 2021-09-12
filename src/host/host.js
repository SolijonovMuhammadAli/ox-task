import axios from "axios";

export const url = "https://face.ox-sys.com";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};
