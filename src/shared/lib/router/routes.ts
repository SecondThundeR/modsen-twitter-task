export const RoutePaths = {
  landing: "/",
  register: "/register",
  login: "/login",
  home: "/home",
  profile: "/profile",
  profileOptionalID: `/profile/:id?`,
  notFound: "*",
} as const;
