declare global {
  declare type RootState = import("../src/app/appStore").RootState;
  declare type AppDispatch = import("../src/app/appStore").AppDispatch;
  declare type Selector<S> = (state: RootState) => S;
  declare type FirebaseExportValue = { [key: string]: unknown };
  declare type FirebaseArrayValue<T> = { [key: string]: T } | undefined;
}

export {};
