import { ElMessage } from "element-plus";

export function errings(vcode, vinfo) {
  switch (vcode) {
    case 1000:
      ElMessage(vinfo);
      break;
    case 1001:
      ElMessage({
        message: vinfo,
        type: "success"
      });
      break;
    case 1002:
      ElMessage({
        message: vinfo,
        type: "success"
      });
      break;
    case 1003:
      ElMessage.error("出现未知错误，请联系管理员");
      break;
    case 1004:
      ElMessage.error(vinfo);
      break;
    default:
      ElMessage({
        message: "出现未知错误，请联系管理员",
        type: "warning"
      });
      break;
  }
}
export function makeRequest(errinfo) {
  try {
    const response = errinfo;
    if (!response.ok) {
      switch (response.status) {
        case 400:
          console.log("错误请求");
          break;
        case 401:
          console.log("未授权");
          break;
        case 403:
          console.log("禁止访问");
          break;
        case 404:
          console.log("未找到");
          break;
        case 405:
          console.log("方法不被允许");
          break;
        case 408:
          console.log("请求超时");
          break;
        case 429:
          console.log("请求过多");
          break;
        case 500:
          console.log("内部服务器错误");
          break;
        case 502:
          console.log("错误网关");
          break;
        case 503:
          console.log("服务不可用");
          break;
        case 504:
          console.log("网关超时");
          break;
        default:
          console.log(`Unknown error status: ${response.status}`);
      }
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
}
