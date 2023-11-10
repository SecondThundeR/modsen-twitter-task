import { useSearchParams } from "react-router-dom";

export function useSearchQuery() {
  const [searchParams] = useSearchParams();
  return searchParams.get("q") ?? "";
}
