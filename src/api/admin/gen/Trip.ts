// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import {
  CreateTripViewModel,
  Trip,
  UpdateTripViewModel,
  EditParams,
  CancelParams,
  WorkApprovalRequest,
  PublishParams,
  QueryRequest,
  PageResponseOfTripViewModel,
  QueryParams,
  RejectParams,
} from './typings';

/** 此处后端没有提供注释 POST /api/Trip */
export async function Post(body: CreateTripViewModel, options?: { [key: string]: any }) {
  return request<Trip>(`${admin_app_api_base_url}/api/Trip`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Trip/${param0} */
export async function Edit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: EditParams,
  body: UpdateTripViewModel,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Trip>(`${admin_app_api_base_url}/api/Trip/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Trip/Cancel/${param0} */
export async function Cancel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: CancelParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Trip>(`${admin_app_api_base_url}/api/Trip/Cancel/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Trip/Publish/${param0} */
export async function Publish(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: PublishParams,
  body: WorkApprovalRequest,
  options?: { [key: string]: any },
) {
  const { flowID: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Trip/Publish/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Trip/query */
export async function Query(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: QueryParams,
  body: QueryRequest,
  options?: { [key: string]: any },
) {
  return request<PageResponseOfTripViewModel>(`${admin_app_api_base_url}/api/Trip/query`, {
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

/** 此处后端没有提供注释 PUT /api/Trip/Reject/${param0} */
export async function Reject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: RejectParams,
  body: WorkApprovalRequest,
  options?: { [key: string]: any },
) {
  const { flowID: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Trip/Reject/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
