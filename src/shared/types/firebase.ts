export type FirebaseDatabaseType<T> = {
  [K in keyof T]: NonNullable<T[K]> extends Array<infer ArrayType>
    ? FirebaseArrayValue<ArrayType>
    : T[K];
};
