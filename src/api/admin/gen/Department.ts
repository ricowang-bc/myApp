// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import {
  DepartmentViewModel,
  Department,
  EditParams,
  RemoveParams,
} from './typings';

/** 此处后端没有提供注释 GET /api/Department */
export async function All(options?: { [key: string]: any }) {
  return request<DepartmentViewModel[]>(`${admin_app_api_base_url}/api/Department`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Department */
export async function Create(body: Department, options?: { [key: string]: any }) {
  return request<Department>(`${admin_app_api_base_url}/api/Department`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Department/${param0} */
export async function Edit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: EditParams,
  body: DepartmentViewModel,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Department>(`${admin_app_api_base_url}/api/Department/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/Department/${param0} */
export async function Remove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: RemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Department/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
