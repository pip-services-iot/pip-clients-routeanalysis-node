import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { IRouteAnalysisClientV1 } from './IRouteAnalysisClientV1';
import { ObjectRouteV1 } from './ObjectRouteV1';
import { ObjectPositionV1 } from './ObjectPositionV1';

export class RouteAnalysisDirectClientV1 extends DirectClient<any> implements IRouteAnalysisClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-routeanalysis", "controller", "*", "*", "*"))
    }

    public getCurrentRoutes(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectRouteV1>) => void): void {
        let timing = this.instrument(correlationId, 'route_analysis.get_current_routes');
        this._controller.getCurrentRoutes(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            if (callback) callback(err, page);
        });
    }

    public getCurrentRoute(correlationId: string, orgId: string, objectId: string, fromTime: Date, toTime: Date,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        let timing = this.instrument(correlationId, 'route_analysis.get_current_route');
        this._controller.getCurrentRoute(correlationId, objectId, fromTime, toTime, (err, route) => {
            timing.endTiming();
            if (callback) callback(err, route);
        });
    }

    public addPosition(correlationId: string, orgId: string, position: ObjectPositionV1,
        callback?: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'route_analysis.add_position');
        this._controller.addPosition(correlationId, position, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }

    public addPositions(correlationId: string, orgId: string, positions: ObjectPositionV1[],
        callback?: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'route_analysis.add_positions');
        this._controller.addPositions(correlationId, positions, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }
    
}