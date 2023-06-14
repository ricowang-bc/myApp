// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import {
  CarViewModel,
  Car,
  EditParams,
  RemoveParams,
  ChangeUseStateParams,
  QueryRequest,
  PageResponseOfCarViewModel,
  QueryParams,
} from './typings';

/** 此处后端没有提供注释 GET /api/Car */
export async function All(options?: { [key: string]: any }) {
  return request<CarViewModel[]>(`${admin_app_api_base_url}/api/Car`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Car */
export async function Create(body: Car, options?: { [key: string]: any }) {
  return request<Car>(`${admin_app_api_base_url}/api/Car`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Car/${param0} */
export async function Edit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: EditParams,
  body: CarViewModel,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Car>(`${admin_app_api_base_url}/api/Car/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/Car/${param0} */
export async function Remove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: RemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Car/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Car/ChangeUseState/${param0}/${param1} */
export async function ChangeUseState(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: ChangeUseStateParams,
  options?: { [key: string]: any },
) {
  const { id: param0, state: param1, ...queryParams } = params;
  return request<Car>(`${admin_app_api_base_url}/api/Car/ChangeUseState/${param0}/${param1}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Car/query */
export async function Query(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: QueryParams,
  body: QueryRequest,
  options?: { [key: string]: any },
) {
  return request<PageResponseOfCarViewModel>(`${admin_app_api_base_url}/api/Car/query`, {
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
