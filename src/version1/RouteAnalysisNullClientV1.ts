import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { IRouteAnalysisClientV1 } from './IRouteAnalysisClientV1';
import { ObjectRouteV1 } from './ObjectRouteV1';
import { ObjectPositionV1 } from './ObjectPositionV1';

export class RouteAnalysisNullClientV1 implements IRouteAnalysisClientV1 {
            
    public getCurrentRoutes(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectRouteV1>) => void): void {
        callback(null, new DataPage<ObjectRouteV1>());
    }

    public getCurrentRoute(correlationId: string, orgId: string, objectId: string, fromTime: Date, toTime: Date,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        callback(null, null);
    }

    public addPosition(correlationId: string, orgId: string, position: ObjectPositionV1,
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }

    public addPositions(correlationId: string, orgId: string, positions: ObjectPositionV1[],
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }
    
}