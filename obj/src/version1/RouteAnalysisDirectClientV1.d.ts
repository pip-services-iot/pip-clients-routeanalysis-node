import { DirectClient } from 'pip-services3-rpc-node';
import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { IRouteAnalysisClientV1 } from './IRouteAnalysisClientV1';
import { ObjectRouteV1 } from './ObjectRouteV1';
import { ObjectPositionV1 } from './ObjectPositionV1';
export declare class RouteAnalysisDirectClientV1 extends DirectClient<any> implements IRouteAnalysisClientV1 {
    constructor();
    getCurrentRoutes(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ObjectRouteV1>) => void): void;
    getCurrentRoute(correlationId: string, orgId: string, objectId: string, fromTime: Date, toTime: Date, callback: (err: any, route: ObjectRouteV1) => void): void;
    addPosition(correlationId: string, orgId: string, position: ObjectPositionV1, callback?: (err: any) => void): void;
    addPositions(correlationId: string, orgId: string, positions: ObjectPositionV1[], callback?: (err: any) => void): void;
}
