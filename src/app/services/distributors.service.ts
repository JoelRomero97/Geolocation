import {Injectable} from '@angular/core';
import {CrudInterface} from './crud.interface';
import {Observable} from 'rxjs';

@Injectable()
export class DistributorsService implements CrudInterface {
  create(data: any): Observable<any> {
    return undefined;
  }

  delete(id: any): Observable<any> {
    return undefined;
  }

  list(queryParams: any): Observable<any> {
    return undefined;
  }

  retrieve(id: string): Observable<any> {
    return undefined;
  }

  update(id: any, data: any): Observable<any> {
    return undefined;
  }
}
