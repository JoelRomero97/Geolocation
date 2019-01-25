export interface DataInterface {
  Success: boolean;
  Response: Array<DistributorInterface>;
  ErrorMessage: Array<any>;
}

export interface DistributorInterface {
  IdDistributor: number;
  Name: string;
  KeyDistrubutor: any;
  Email: string;
  Direction: string;
  ImageUrl: string;
  MatrixData: any;
  point: string;
  location: {
    Geography: {
      CoordinateSystemId: number;
      WellKnownText: string;
    }
  }
}
