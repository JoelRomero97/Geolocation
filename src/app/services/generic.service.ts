import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataInterface} from '../util/data.interface';

export enum Method {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE
}

@Injectable()
export class GenericService {
  constructor(private httpClient: HttpClient) {
  }

  service(url, method: Method, data: any, queryParams: any): Observable<any> {
    const params = new HttpParams({
      fromObject: queryParams
    });
    return new Observable(observer => {
      let request: Observable<any>;

      switch (method) {
        case Method.GET: {
          request = this.httpClient.get(url, {params: params});
          break;
        }
        case Method.POST: {
          request = this.httpClient.post(url, data, {});
          break;
        }
        case Method.PUT: {
          request = this.httpClient.put(url, data, {});
          break;
        }
        case Method.PATCH: {
          request = this.httpClient.patch(url, data, {});
          break;
        }
        case Method.DELETE: {
          request = this.httpClient.delete(url, {});
          break;
        }
        default: {
          observer.error('Unknown method.');
          observer.complete();
          break;
        }
      }
      if (request) {
        request.subscribe((response: DataInterface) => {
          if (response.Success) {
            observer.next(response);
          } else {
            observer.error(response.ErrorMessage);
          }
        }, (error: DataInterface) => {
          console.log(error);
          observer.error(error.ErrorMessage);
        }, () => {
          observer.complete();
        });
      }
    });
  }
}
