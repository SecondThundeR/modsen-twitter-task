export const RoutePaths = {
  landing: "/",
  register: "/register",
  login: "/login",
  home: "/home",
  search: "/search",
  profile: "/profile",
  profileOptionalID: `/profile/:id?`,
  notFound: "*",
} as const;
