"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class RouteAnalysisDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("pip-services-routeanalysis", "controller", "*", "*", "*"));
    }
    getCurrentRoutes(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'route_analysis.get_current_routes');
        this._controller.getCurrentRoutes(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            if (callback)
                callback(err, page);
        });
    }
    getCurrentRoute(correlationId, orgId, objectId, fromTime, toTime, callback) {
        let timing = this.instrument(correlationId, 'route_analysis.get_current_route');
        this._controller.getCurrentRoute(correlationId, objectId, fromTime, toTime, (err, route) => {
            timing.endTiming();
            if (callback)
                callback(err, route);
        });
    }
    addPosition(correlationId, orgId, position, callback) {
        let timing = this.instrument(correlationId, 'route_analysis.add_position');
        this._controller.addPosition(correlationId, position, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    addPositions(correlationId, orgId, positions, callback) {
        let timing = this.instrument(correlationId, 'route_analysis.add_positions');
        this._controller.addPositions(correlationId, positions, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
}
exports.RouteAnalysisDirectClientV1 = RouteAnalysisDirectClientV1;
//# sourceMappingURL=RouteAnalysisDirectClientV1.js.map