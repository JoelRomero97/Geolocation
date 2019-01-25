import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export abstract class CrudInterface {
  abstract list(queryParams: any): Observable<any>;

  abstract retrieve(id: string): Observable<any>;

  abstract create(data: any): Observable<any>;

  abstract update(id: any, data: any): Observable<any>;

  abstract delete(id: any): Observable<any>;
}
