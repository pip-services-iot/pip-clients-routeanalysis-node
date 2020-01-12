import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { IRouteAnalysisClientV1 } from './IRouteAnalysisClientV1';
import { ObjectRouteV1 } from './ObjectRouteV1';
import { ObjectPositionV1 } from './ObjectPositionV1';
import { RouteAnalysisHttpClientV1 } from './RouteAnalysisHttpClientV1';

export class RouteAnalysisHttpProxyClientV1 extends ClustersProxyHttpClientV1<IRouteAnalysisClientV1>
    implements IRouteAnalysisClientV1 {       
    
    constructor(config?: any) {
        super(RouteAnalysisHttpClientV1, 'pip-services-routeanalysis', 30020);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public getCurrentRoutes(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectRouteV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getCurrentRoutes(correlationId, orgId, filter, paging, callback);
        });
    }

    public getCurrentRoute(correlationId: string, orgId: string, objectId: string, fromTime: Date, toTime: Date,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getCurrentRoute(correlationId, orgId, objectId, fromTime, toTime, callback);
        });
    }

    public addPosition(correlationId: string, orgId: string, position: ObjectPositionV1,
        callback?: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.addPosition(correlationId, orgId, position, callback);
        });
    }

    public addPositions(correlationId: string, orgId: string, positions: ObjectPositionV1[],
        callback?: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.addPositions(correlationId, orgId, positions, callback);
        });
    }
    
}
