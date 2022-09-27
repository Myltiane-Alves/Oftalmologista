import api from './config';

// export const post = async (url: string, data: object) => {
//   return await api
//    .post(url, data, {
//     headers: {
//       authorization: 'Bearer ' + (await localStorage.getItem("token")),
//     },
//    })
//    .then((response) => {
//       return response;
//    })
//    .catch((error) => {
//      throw new Error(error);
//    })
// }

export const post = async (url: string, data: object) => {
  return await api
    .post(url, data, {
      headers: {
        // authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
export const put = async (url: string, data: any) => {
  return await api
    .put(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    })
}

export const get = async  (url: string) => {
  return await api
    .get(url, {
      headers: {
        authorization: 'Bearer ' + (await localStorage.getItem("token")),
      }
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export const del = async (url: string) => {
  return await api
    .delete(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });

}


