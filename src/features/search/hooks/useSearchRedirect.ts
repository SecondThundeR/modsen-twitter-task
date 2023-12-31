import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSearchQuery } from "@/features/search";
import { RoutePaths } from "@/shared/lib/router";

export function useSearchRedirect() {
  const searchQuery = useSearchQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery) navigate(RoutePaths.home);
  }, [navigate, searchQuery]);
}
