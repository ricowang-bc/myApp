// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import {
  CreatMeetingViewModel,
  Meeting,
  UpdateMeetingViewModel,
  EditParams,
  CancelParams,
  DownloadParams,
  WorkApprovalRequest,
  PublishParams,
  QueryRequest,
  PageResponseOfMeetingViewModel,
  QueryParams,
} from './typings';

/** 此处后端没有提供注释 POST /api/Meet */
export async function Post(body: CreatMeetingViewModel, options?: { [key: string]: any }) {
  return request<Meeting>(`${admin_app_api_base_url}/api/Meet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Meet/${param0} */
export async function Edit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: EditParams,
  body: UpdateMeetingViewModel,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Meeting>(`${admin_app_api_base_url}/api/Meet/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Meet/Cancel/${param0} */
export async function Cancel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: CancelParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Meeting>(`${admin_app_api_base_url}/api/Meet/Cancel/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/Meet/Download/${param0} */
export async function Download(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DownloadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<string>(`${admin_app_api_base_url}/api/Meet/Download/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Meet/Publish/${param0} */
export async function Publish(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: PublishParams,
  body: WorkApprovalRequest,
  options?: { [key: string]: any },
) {
  const { flowID: param0, ...queryParams } = params;
  return request<boolean>(`${admin_app_api_base_url}/api/Meet/Publish/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Meet/query */
export async function Query(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: QueryParams,
  body: QueryRequest,
  options?: { [key: string]: any },
) {
  return request<PageResponseOfMeetingViewModel>(`${admin_app_api_base_url}/api/Meet/query`, {
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
