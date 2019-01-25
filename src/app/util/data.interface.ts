export interface PositionInterface {
  coords: CoordsInterface;
  timestamp: number;
}

export interface CoordsInterface {
  accuracy: number;
  altitude: any;
  altitudeAccuracy: any;
  heading: any;
  latitude: number;
  longitude: number;
  speed: any;
}

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
  };
}
