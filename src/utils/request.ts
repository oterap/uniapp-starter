type Method = "GET" | "POST" | "PUT" | "DELETE";

interface Response<T> {
  code: number;
  data: T;
  msg: string;
}

export const request = <T>(url: string, data?: any, method: Method = "POST") => {
  return new Promise<Response<T>>((resolve, reject) => {
    uni.request({
      url: import.meta.env.VITE_BASE_API + url,
      method,
      data: data || {},
      header: {
        Authorization: "",
      },
      success(response) {
        const res = response.data as Response<T>;
        if (res.code !== 0) {
          uni.showToast({ title: res.msg ?? "服务出错了:(", icon: "none" });
          return reject(response);
        }
        resolve(res);
      },
      fail(error) {
        uni.showToast({ title: "服务出错了:(", icon: "none" });
        reject(error);
      },
    });
  });
};
