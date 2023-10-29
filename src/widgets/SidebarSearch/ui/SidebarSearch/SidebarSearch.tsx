import { memo } from "react";

import { Search, useSearchInput } from "@/features/search";

export const SidebarSearch = memo(function SidebarSearch() {
  const { value, onChange, onSubmit } = useSearchInput();

  return <Search value={value} onChange={onChange} onSubmit={onSubmit} />;
});
