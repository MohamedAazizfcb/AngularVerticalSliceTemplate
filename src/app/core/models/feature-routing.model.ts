import { Route } from "@angular/router";
import { RouteInfoModel } from "./route-info.model";

// Define the interface using the constant object keys
export interface FeatureRoutingModel<T_FeatureRoutesWithLabels_Class> {
    parentRoute: string;
    featureRoutesWithLabels: T_FeatureRoutesWithLabels_Class;
    featureRoutes: Route[];
};
