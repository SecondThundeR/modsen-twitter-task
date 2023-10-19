import { RoutePaths } from "./routes";

export type RouteValues = (typeof RoutePaths)[keyof typeof RoutePaths];

export interface LocationState {
  pathname: string;
}
