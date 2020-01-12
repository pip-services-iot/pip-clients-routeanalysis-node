"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const RouteAnalysisNullClientV1_1 = require("../version1/RouteAnalysisNullClientV1");
const RouteAnalysisDirectClientV1_1 = require("../version1/RouteAnalysisDirectClientV1");
const RouteAnalysisHttpClientV1_1 = require("../version1/RouteAnalysisHttpClientV1");
const RouteAnalysisLambdaClientV1_1 = require("../version1/RouteAnalysisLambdaClientV1");
const RouteAnalysisHttpProxyClientV1_1 = require("../version1/RouteAnalysisHttpProxyClientV1");
class RouteAnalysisClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(RouteAnalysisClientFactory.NullClientV1Descriptor, RouteAnalysisNullClientV1_1.RouteAnalysisNullClientV1);
        this.registerAsType(RouteAnalysisClientFactory.DirectClientV1Descriptor, RouteAnalysisDirectClientV1_1.RouteAnalysisDirectClientV1);
        this.registerAsType(RouteAnalysisClientFactory.HttpClientV1Descriptor, RouteAnalysisHttpClientV1_1.RouteAnalysisHttpClientV1);
        this.registerAsType(RouteAnalysisClientFactory.LambdaClientV1Descriptor, RouteAnalysisLambdaClientV1_1.RouteAnalysisLambdaClientV1);
        this.registerAsType(RouteAnalysisClientFactory.HttpProxyClientV1Descriptor, RouteAnalysisHttpProxyClientV1_1.RouteAnalysisHttpProxyClientV1);
    }
}
exports.RouteAnalysisClientFactory = RouteAnalysisClientFactory;
RouteAnalysisClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routeanalysis', 'factory', 'default', 'default', '1.0');
RouteAnalysisClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routeanalysis', 'client', 'null', 'default', '1.0');
RouteAnalysisClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routeanalysis', 'client', 'direct', 'default', '1.0');
RouteAnalysisClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routeanalysis', 'client', 'http', 'default', '1.0');
RouteAnalysisClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routeanalysis', 'client', 'lambda', 'default', '1.0');
RouteAnalysisClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routeanalysis', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=RouteAnalysisClientFactory.js.map