let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { IRouteAnalysisClientV1 } from './IRouteAnalysisClientV1';
import { ObjectRouteV1 } from './ObjectRouteV1';
import { ObjectPositionV1 } from './ObjectPositionV1';

export class RouteAnalysisLambdaClientV1 extends CommandableLambdaClient implements IRouteAnalysisClientV1 {       

    constructor(config?: any) {
        super('route_analysis');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getCurrentRoutes(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectRouteV1>) => void): void {
        this.callCommand(
            'get_current_routes', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getCurrentRoute(correlationId: string, orgId: string, objectId: string, fromTime: Date, toTime: Date,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.callCommand(
            'get_current_route', 
            correlationId,
            {
                object_id: objectId,
                from_time: fromTime,
                to_time: toTime
            }, 
            callback
        );
    }

    public addPosition(correlationId: string, orgId: string, position: ObjectPositionV1,
        callback?: (err: any) => void): void {
        this.callCommand(
            'add_position', 
            correlationId,
            {
                position: position
            }, 
            callback
        );
    }

    public addPositions(correlationId: string, orgId: string, positions: ObjectPositionV1[],
        callback?: (err: any) => void): void {
        this.callCommand(
            'add_positions', 
            correlationId,
            {
                positions: positions
            }, 
            callback
        );
    }

    
}
