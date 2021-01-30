import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resource } from '../../../Models/resource';
export interface Resource {
}
@Injectable()
export class ResourceService {

  constructor(private httpClient: HttpClient) { }

  creat<T extends resource>(data: T, url: string, option?: any): Observable<any> {
    return this.httpClient.post(url, data, option);
  }

  fetch<T extends resource>(url: string, option?: any): Observable<any> {
    return this.httpClient.get<T>(url, option);
  }
  update<T extends resource>(data: T, url: string, option?: any): Observable<any> {
    return this.httpClient.put(url, data, option);
  }

  delete<T extends resource>(url: string, option?: any): Observable<any> {
    return this.httpClient.delete(url, option);
  }
}
