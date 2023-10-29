export const deserializeFirebaseArray = <T>(data: FirebaseArrayValue<T>) => {
  if (data === undefined) return [];
  return Object.values(data);
};
