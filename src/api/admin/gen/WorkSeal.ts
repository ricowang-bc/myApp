// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import {
  CreateWorkSealViewModel,
  WorkSeal,
  UpdateWorkSealViewModel,
  EditParams,
  CancelParams,
  WorkApprovalRequest,
  PublishParams,
  QueryRequest,
  PageResponseOfWorkSealViewModel,
  QueryParams,
  RejectParams,
} from './typings';

/** 此处后端没有提供注释 POST /api/WorkSeal */
export async function Post(body: CreateWorkSealViewModel, options?: { [key: string]: any }) {
  return request<WorkSeal>(`${admin_app_api_base_url}/api/WorkSeal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/WorkSeal/${param0} */
export async function Edit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: EditParams,
  body: UpdateWorkSealViewModel,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WorkSeal>(`${admin_app_api_base_url}/api/WorkSeal/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/WorkSeal/Cancel/${param0} */
export async function Cancel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: CancelParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<WorkSeal>(`${admin_app_api_base_url}/api/WorkSeal/Cancel/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/WorkSeal/Publish/${param0} */
export async function Publish(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: PublishParams,
  body: WorkApprovalRequest,
  options?: { [key: string]: any },
) {
  const { flowID: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/WorkSeal/Publish/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/WorkSeal/query */
export async function Query(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: QueryParams,
  body: QueryRequest,
  options?: { [key: string]: any },
) {
  return request<PageResponseOfWorkSealViewModel>(`${admin_app_api_base_url}/api/WorkSeal/query`, {
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

/** 此处后端没有提供注释 PUT /api/WorkSeal/Reject/${param0} */
export async function Reject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: RejectParams,
  body: WorkApprovalRequest,
  options?: { [key: string]: any },
) {
  const { flowID: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/WorkSeal/Reject/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
