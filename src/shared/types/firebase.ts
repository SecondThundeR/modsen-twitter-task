export type FirebaseDatabaseType<T> = T extends Array<infer ArrayType>
  ? FirebaseArrayValue<ArrayType>
  : {
      [K in keyof T]: NonNullable<T[K]> extends Array<infer ArrayType>
        ? FirebaseArrayValue<ArrayType>
        : T[K];
    };
