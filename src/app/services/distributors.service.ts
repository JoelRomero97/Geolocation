import {Injectable} from '@angular/core';
import {CrudInterface} from './crud.interface';
import {Observable} from 'rxjs';
import {GenericService, Method} from './generic.service';
import {ConstantsUtil} from '../util/constants.util';

@Injectable()
export class DistributorsService implements CrudInterface {

  constructor(private genericService: GenericService,
              private constantsUtil: ConstantsUtil) {
  }

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

  closest(data: any): Observable<any> {
    return this.genericService.service(this.constantsUtil.CLOSEST_DISTRIBUTORS, Method.POST, data, {});
  }
}
