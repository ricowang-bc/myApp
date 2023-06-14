// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import { MenuViewModel, Menu, PutParams, RemoveParams } from './typings';

/** 此处后端没有提供注释 GET /api/Menu */
export async function Get(options?: { [key: string]: any }) {
  return request<MenuViewModel[]>(`${admin_app_api_base_url}/api/Menu`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Menu */
export async function Post(body: Menu, options?: { [key: string]: any }) {
  return request<Menu>(`${admin_app_api_base_url}/api/Menu`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Menu/${param0} */
export async function Put(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: PutParams,
  body: MenuViewModel,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Menu>(`${admin_app_api_base_url}/api/Menu/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/Menu/${param0} */
export async function Remove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: RemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Menu/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
