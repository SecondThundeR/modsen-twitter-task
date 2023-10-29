import { memo } from "react";

import { SidebarFooterElements } from "@/widgets/SidebarFooterElements";
import { SidebarSearch } from "@/widgets/SidebarSearch";
import { SidebarAuthorsBlock } from "@/features/authors";

import { Footer, Wrapper } from "./Sidebar.styled";

export const Sidebar = memo(function Sidebar() {
  return (
    <Wrapper>
      <SidebarSearch />
      <SidebarAuthorsBlock />
      <Footer>{<SidebarFooterElements />}</Footer>
    </Wrapper>
  );
});
