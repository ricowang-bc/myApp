// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import { WorkViewModel } from './typings';

/** 此处后端没有提供注释 GET /api/Summary */
export async function Query(options?: { [key: string]: any }) {
  return request<WorkViewModel[]>(`${admin_app_api_base_url}/api/Summary`, {
    method: 'GET',
    ...(options || {}),
  });
}
