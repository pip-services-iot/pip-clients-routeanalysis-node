"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class RouteAnalysisLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('route_analysis');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getCurrentRoutes(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_current_routes', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getCurrentRoute(correlationId, orgId, objectId, fromTime, toTime, callback) {
        this.callCommand('get_current_route', correlationId, {
            object_id: objectId,
            from_time: fromTime,
            to_time: toTime
        }, callback);
    }
    addPosition(correlationId, orgId, position, callback) {
        this.callCommand('add_position', correlationId, {
            position: position
        }, callback);
    }
    addPositions(correlationId, orgId, positions, callback) {
        this.callCommand('add_positions', correlationId, {
            positions: positions
        }, callback);
    }
}
exports.RouteAnalysisLambdaClientV1 = RouteAnalysisLambdaClientV1;
//# sourceMappingURL=RouteAnalysisLambdaClientV1.js.map