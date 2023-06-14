// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import {
  UserViewModel,
  User,
  EditParams,
  RemoveParams,
  UserQueryRequest,
  PageResponseOfUserViewModel,
  QueryParams,
} from './typings';

/** 此处后端没有提供注释 GET /api/User */
export async function All(options?: { [key: string]: any }) {
  return request<UserViewModel[]>(`${admin_app_api_base_url}/api/User`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/User */
export async function Create(body: User, options?: { [key: string]: any }) {
  return request<User>(`${admin_app_api_base_url}/api/User`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/User/${param0} */
export async function Edit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: EditParams,
  body: UserViewModel,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<UserViewModel>(`${admin_app_api_base_url}/api/User/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/User/${param0} */
export async function Remove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: RemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/User/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/User/Query */
export async function Query(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: QueryParams,
  body: UserQueryRequest,
  options?: { [key: string]: any },
) {
  return request<PageResponseOfUserViewModel>(`${admin_app_api_base_url}/api/User/Query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/User/Tree */
export async function Tree(options?: { [key: string]: any }) {
  return request<string>(`${admin_app_api_base_url}/api/User/Tree`, {
    method: 'GET',
    ...(options || {}),
  });
}
