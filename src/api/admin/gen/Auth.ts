// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';
import { admin_app_api_base_url } from '../config';
import { LoginRequest, LoginResponseOfAuthController } from './typings';

/** 此处后端没有提供注释 POST /api/Auth/login */
export async function Login(body: LoginRequest, options?: { [key: string]: any }) {
  return request<LoginResponseOfAuthController>(`${admin_app_api_base_url}/api/Auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
