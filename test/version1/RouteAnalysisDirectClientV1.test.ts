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
import { RouteAnalysisDirectClientV1 } from '../../src/version1/RouteAnalysisDirectClientV1';
import { RouteAnalysisClientFixtureV1 } from './RouteAnalysisClientFixtureV1';

suite('RouteAnalysisDirectClientV1', ()=> {
    let client: RouteAnalysisDirectClientV1;
    let fixture: RouteAnalysisClientFixtureV1;
    let persistence: RouteAnalysisMemoryPersistence;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new RouteAnalysisController();
        
        persistence = new RouteAnalysisMemoryPersistence();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-routes', 'client', 'null', 'default', '1.0'), new RoutesNullClientV1(),
            new Descriptor('pip-services-routeanalysis', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-routeanalysis', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);
        
        client = new RouteAnalysisDirectClientV1();
        client.setReferences(references);

        fixture = new RouteAnalysisClientFixtureV1(client);

        client.open(null, done);
    });
    
    setup((done) => {
        persistence.clear(null, done);
    });

    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD operations', (done) => {
        fixture.testCrudOperations(done);
    });
    
});
