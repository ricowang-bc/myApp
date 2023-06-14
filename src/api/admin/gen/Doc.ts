// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import {
  CreateDocViewModel,
  Doc,
  UpdateDocViewModel,
  EditParams,
  CancelParams,
  WorkApprovalRequest,
  DoParams,
  PublishParams,
  WorkApprovalAndDisptcherRequest,
  Publish2Params,
  DocQueryRequest,
  PageResponseOfDocViewModel,
  QueryParams,
  RejectParams,
} from './typings';

/** 此处后端没有提供注释 POST /api/Doc */
export async function Post(body: CreateDocViewModel, options?: { [key: string]: any }) {
  return request<Doc>(`${admin_app_api_base_url}/api/Doc`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Doc/${param0} */
export async function Edit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: EditParams,
  body: UpdateDocViewModel,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Doc>(`${admin_app_api_base_url}/api/Doc/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Doc/Cancel/${param0} */
export async function Cancel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: CancelParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Doc>(`${admin_app_api_base_url}/api/Doc/Cancel/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Doc/Do/${param0} */
export async function Do(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DoParams,
  body: WorkApprovalRequest,
  options?: { [key: string]: any },
) {
  const { flowID: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Doc/Do/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Doc/Publish/${param0} */
export async function Publish(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: PublishParams,
  body: WorkApprovalRequest,
  options?: { [key: string]: any },
) {
  const { flowID: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Doc/Publish/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Doc/Publish2/${param0} */
export async function Publish2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: Publish2Params,
  body: WorkApprovalAndDisptcherRequest,
  options?: { [key: string]: any },
) {
  const { flowID: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Doc/Publish2/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Doc/query */
export async function Query(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: QueryParams,
  body: DocQueryRequest,
  options?: { [key: string]: any },
) {
  return request<PageResponseOfDocViewModel>(`${admin_app_api_base_url}/api/Doc/query`, {
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

/** 此处后端没有提供注释 PUT /api/Doc/Reject/${param0} */
export async function Reject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: RejectParams,
  body: WorkApprovalRequest,
  options?: { [key: string]: any },
) {
  const { flowID: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Doc/Reject/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
