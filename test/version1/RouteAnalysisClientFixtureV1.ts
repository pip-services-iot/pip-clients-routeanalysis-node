let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { RouteTypeV1 } from '../../src/version1/RouteTypeV1';
import { ObjectRouteV1 } from '../../src/version1/ObjectRouteV1';
import { ObjectPositionV1 } from '../../src/version1/ObjectPositionV1';
import { IRouteAnalysisClientV1 } from '../../src/version1/IRouteAnalysisClientV1';

export class RouteAnalysisClientFixtureV1 {
    private _client: IRouteAnalysisClientV1;
    
    constructor(client: IRouteAnalysisClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let time = new Date().getTime();

        async.series([
            // Add point
            (callback) => {
                this._client.addPosition(
                    null,
                    '1',
                    { org_id: '1', object_id: '1', time: new Date(time), lat: 1, lng: 1 },
                    (err) => {
                        assert.isNull(err);
                        callback(err);
                    }
                );
            },
            // Add another point
            (callback) => {
                this._client.addPositions(
                    null,
                    '1',
                    [ { org_id: '1', object_id: '2', time: new Date(time), lat: 2, lng: 2 } ],
                    (err) => {
                        assert.isNull(err);
                        callback(err);
                    }
                );
            },
            // Get all routes
            (callback) => {
                this._client.getCurrentRoutes(
                    null, '1', null, null,
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 2);

                        callback();
                    }
                )
            },
            // Get route for specific object
            (callback) => {
                this._client.getCurrentRoute(
                    null, '1', '1', null, null,
                    (err, route) => {
                        assert.isNull(err);

                        assert.isObject(route);
                        assert.equal(RouteTypeV1.Travel, route.type);
                        // assert.equal(time, route.start_time.getTime());
                        // assert.equal(time, route.end_time.getTime());
                        assert.equal(0, route.duration);
                        assert.lengthOf(route.positions, 1);

                        callback();
                    }
                )
            },
        ], done);
    }

}
