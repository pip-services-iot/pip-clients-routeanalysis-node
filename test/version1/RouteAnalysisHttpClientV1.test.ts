let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { RoutesNullClientV1 } from 'pip-clients-routes-node';

import { RouteAnalysisController } from 'pip-services-routeanalysis-node';
import { RouteAnalysisMemoryPersistence } from 'pip-services-routeanalysis-node';
import { IRouteAnalysisClientV1 } from '../../src/version1/IRouteAnalysisClientV1';
import { RouteAnalysisHttpClientV1 } from '../../src/version1/RouteAnalysisHttpClientV1';
import { RouteAnalysisClientFixtureV1 } from './RouteAnalysisClientFixtureV1';
import { RouteAnalysisHttpServiceV1 } from 'pip-services-routeanalysis-node';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('RouteAnalysisHttpClientV1', ()=> {
    let service: RouteAnalysisHttpServiceV1;
    let client: RouteAnalysisHttpClientV1;
    let fixture: RouteAnalysisClientFixtureV1;
    let persistence: RouteAnalysisMemoryPersistence;
    
    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new RouteAnalysisController();
        
        persistence = new RouteAnalysisMemoryPersistence();

        service = new RouteAnalysisHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-routes', 'client', 'null', 'default', '1.0'), new RoutesNullClientV1(),
            new Descriptor('pip-services-routeanalysis', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-routeanalysis', 'controller', 'default', 'default', '1.0'), controller,
           new Descriptor('pip-services-routeanalysis', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new RouteAnalysisHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new RouteAnalysisClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
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
