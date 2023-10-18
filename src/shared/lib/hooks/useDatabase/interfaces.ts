export interface BaseOptions {
  path: string;
}

export interface FetchDataOptions extends BaseOptions {
  isArray?: boolean;
}

export interface UpdateDataOptions extends BaseOptions {
  key: string;
  data: unknown;
}

export interface RemoveDataOptions extends BaseOptions {
  key: string;
}
