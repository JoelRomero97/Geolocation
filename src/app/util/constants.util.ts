export class ConstantsUtil {
  private _SERVER_HOST = 'http://fandeliservice.azurewebsites.net';
  private _SERVER_API = `${this._SERVER_HOST}/api`;
  private _DISTRIBUTORS_API = `${this._SERVER_API}/distributor`;
  private _CLOSEST_DISTRIBUTORS = `${this._DISTRIBUTORS_API}/closest`;

  get CLOSEST_DISTRIBUTORS(): string {
    return this._CLOSEST_DISTRIBUTORS;
  }
}
