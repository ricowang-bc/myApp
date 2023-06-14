// @ts-ignore
/* eslint-disable */
import request from '../../request-adapter';import { admin_app_api_base_url } from '../config'
import { { 'ContentType'?: string; 'ContentDisposition'?: string; 'Headers'?: IHeaderDictionary; 'Length'?: number; 'Name'?: string; 'FileName'?: string; } } from './typings'; 

/** 此处后端没有提供注释 POST /api/Uploads */
export async function Upload(body: { 'ContentType'?: string; 'ContentDisposition'?: string; 'Headers'?: IHeaderDictionary; 'Length'?: number; 'Name'?: string; 'FileName'?: string; },
  options ?: {[key: string]: any}
) {
  const formData = new FormData();
  
  Object.keys(body).forEach(ele => {
    
    const item = (body as any)[ele];
    
    if (item !== undefined && item !== null) {
      
      formData.append(ele, (typeof item === 'object' && !(item instanceof File)) ? JSON.stringify(item) : item);
      
    }
  });
  
  return request<any>(`${admin_app_api_base_url}/api/Uploads`, {
  method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

