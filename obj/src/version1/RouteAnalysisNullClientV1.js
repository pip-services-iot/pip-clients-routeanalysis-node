"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class RouteAnalysisNullClientV1 {
    getCurrentRoutes(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage());
    }
    getCurrentRoute(correlationId, orgId, objectId, fromTime, toTime, callback) {
        callback(null, null);
    }
    addPosition(correlationId, orgId, position, callback) {
        if (callback)
            callback(null);
    }
    addPositions(correlationId, orgId, positions, callback) {
        if (callback)
            callback(null);
    }
}
exports.RouteAnalysisNullClientV1 = RouteAnalysisNullClientV1;
//# sourceMappingURL=RouteAnalysisNullClientV1.js.map