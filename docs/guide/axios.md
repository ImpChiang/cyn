# 与服务端交互

框架使用 [Axios](https://axios-http.com/zh/) 做为异步请求工具，并进行了简单的封装。

## 接口请求

### 设置 baseURL

### 请求调用

```ts
import request from '@/utils/request';
import {Moments, ChatUser, ChatFile } from "@/api/interface/media";

export function listauditPage(data:Moments.ReqMomentsParams) {
  return request({
    url: '/yntz-service-im/im/friendsCircle/auditPage',
    method: 'post',
    data
  });
}
```
::: warning 注意
Get 类型请求参数为 params: data
:::

## 模块管理

项目里的接口很多，推荐根据模块来管理接口，目录为 `/src/api/xxx` 。
