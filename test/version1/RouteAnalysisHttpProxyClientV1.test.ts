let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { RoutesNullClientV1 } from 'pip-clients-routes-node';
import { ClusterV1 } from 'pip-clients-clusters-node';
import { ClustersMemoryClientV1 } from 'pip-clients-clusters-node';

import { RouteAnalysisController } from 'pip-services-routeanalysis-node';
import { RouteAnalysisMemoryPersistence } from 'pip-services-routeanalysis-node';
import { IRouteAnalysisClientV1 } from '../../src/version1/IRouteAnalysisClientV1';
import { RouteAnalysisHttpProxyClientV1 } from '../../src/version1/RouteAnalysisHttpProxyClientV1';
import { RouteAnalysisClientFixtureV1 } from './RouteAnalysisClientFixtureV1';
import { RouteAnalysisHttpServiceV1 } from 'pip-services-routeanalysis-node';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);
var CLUSTER: ClusterV1 = {
    id: '1',
    name: 'test',
    type: 'tenants',
    active: true,
    api_host: 'localhost',
    service_ports: { 
        'pip-services-routeanalysis': 3000 
    },
    active_tenants: ['1']
}

suite('RouteAnalysisHttpProxyClientV1', ()=> {
    let service: RouteAnalysisHttpServiceV1;
    let client: RouteAnalysisHttpProxyClientV1;
    let fixture: RouteAnalysisClientFixtureV1;
    let persistence: RouteAnalysisMemoryPersistence;
    
    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new RouteAnalysisController();
        
        let clustersClient = new ClustersMemoryClientV1();
        clustersClient.createCluster(null, CLUSTER, (err, cluster) => {});        

        persistence = new RouteAnalysisMemoryPersistence();

        service = new RouteAnalysisHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-clusters', 'client', 'memory', 'default', '1.0'), clustersClient,
            new Descriptor('pip-services-routes', 'client', 'null', 'default', '1.0'), new RoutesNullClientV1(),
            new Descriptor('pip-services-routeanalysis', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-routeanalysis', 'controller', 'default', 'default', '1.0'), controller,
           new Descriptor('pip-services-routeanalysis', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new RouteAnalysisHttpProxyClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new RouteAnalysisClientFixtureV1(client);

        service.open(null, (err) => {
            done(err);
        });
    });

    setup((done) => {
        persistence.clear(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD operations', (done) => {
        fixture.testCrudOperations(done);
    });
    
});
