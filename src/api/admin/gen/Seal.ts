// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import {
  Seal,
  SealViewModel,
  EditParams,
  RemoveParams,
  QueryRequest,
  PageResponseOfSeal,
  QueryParams,
} from './typings';

/** 此处后端没有提供注释 GET /api/Seal */
export async function All(options?: { [key: string]: any }) {
  return request<Seal[]>(`${admin_app_api_base_url}/api/Seal`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Seal */
export async function Create(body: Seal, options?: { [key: string]: any }) {
  return request<Seal>(`${admin_app_api_base_url}/api/Seal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Seal/${param0} */
export async function Edit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: EditParams,
  body: SealViewModel,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Seal>(`${admin_app_api_base_url}/api/Seal/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/Seal/${param0} */
export async function Remove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: RemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Seal/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Seal/Query */
export async function Query(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: QueryParams,
  body: QueryRequest,
  options?: { [key: string]: any },
) {
  return request<PageResponseOfSeal>(`${admin_app_api_base_url}/api/Seal/Query`, {
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
