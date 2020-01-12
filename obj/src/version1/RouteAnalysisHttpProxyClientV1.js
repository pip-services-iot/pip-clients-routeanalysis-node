"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const RouteAnalysisHttpClientV1_1 = require("./RouteAnalysisHttpClientV1");
class RouteAnalysisHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(RouteAnalysisHttpClientV1_1.RouteAnalysisHttpClientV1, 'pip-services-routeanalysis', 30020);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getCurrentRoutes(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getCurrentRoutes(correlationId, orgId, filter, paging, callback);
        });
    }
    getCurrentRoute(correlationId, orgId, objectId, fromTime, toTime, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getCurrentRoute(correlationId, orgId, objectId, fromTime, toTime, callback);
        });
    }
    addPosition(correlationId, orgId, position, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.addPosition(correlationId, orgId, position, callback);
        });
    }
    addPositions(correlationId, orgId, positions, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.addPositions(correlationId, orgId, positions, callback);
        });
    }
}
exports.RouteAnalysisHttpProxyClientV1 = RouteAnalysisHttpProxyClientV1;
//# sourceMappingURL=RouteAnalysisHttpProxyClientV1.js.map