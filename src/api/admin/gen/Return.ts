// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import {
  CreateReturnViewModel,
  Return,
  CancelParams,
  WorkApprovalRequest,
  PublishParams,
  QueryRequest,
  PageResponseOfReturnViewModel,
  QueryParams,
  RejectParams,
} from './typings';

/** 此处后端没有提供注释 POST /api/Return */
export async function Post(body: CreateReturnViewModel, options?: { [key: string]: any }) {
  return request<Return>(`${admin_app_api_base_url}/api/Return`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Return/Cancel/${param0} */
export async function Cancel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: CancelParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Return>(`${admin_app_api_base_url}/api/Return/Cancel/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Return/Publish/${param0} */
export async function Publish(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: PublishParams,
  body: WorkApprovalRequest,
  options?: { [key: string]: any },
) {
  const { flowID: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Return/Publish/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Return/query */
export async function Query(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: QueryParams,
  body: QueryRequest,
  options?: { [key: string]: any },
) {
  return request<PageResponseOfReturnViewModel>(`${admin_app_api_base_url}/api/Return/query`, {
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

/** 此处后端没有提供注释 PUT /api/Return/Reject/${param0} */
export async function Reject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: RejectParams,
  body: WorkApprovalRequest,
  options?: { [key: string]: any },
) {
  const { flowID: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Return/Reject/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
