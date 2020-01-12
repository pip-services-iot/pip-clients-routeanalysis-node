import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { RouteAnalysisNullClientV1 } from '../version1/RouteAnalysisNullClientV1';
import { RouteAnalysisDirectClientV1 } from '../version1/RouteAnalysisDirectClientV1';
import { RouteAnalysisHttpClientV1 } from '../version1/RouteAnalysisHttpClientV1';
import { RouteAnalysisLambdaClientV1 } from '../version1/RouteAnalysisLambdaClientV1';
import { RouteAnalysisHttpProxyClientV1 } from '../version1/RouteAnalysisHttpProxyClientV1';

export class RouteAnalysisClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-routeanalysis', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-routeanalysis', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-routeanalysis', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-routeanalysis', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-routeanalysis', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('pip-services-routeanalysis', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(RouteAnalysisClientFactory.NullClientV1Descriptor, RouteAnalysisNullClientV1);
		this.registerAsType(RouteAnalysisClientFactory.DirectClientV1Descriptor, RouteAnalysisDirectClientV1);
		this.registerAsType(RouteAnalysisClientFactory.HttpClientV1Descriptor, RouteAnalysisHttpClientV1);
		this.registerAsType(RouteAnalysisClientFactory.LambdaClientV1Descriptor, RouteAnalysisLambdaClientV1);
		this.registerAsType(RouteAnalysisClientFactory.HttpProxyClientV1Descriptor, RouteAnalysisHttpProxyClientV1);
	}
	
}
