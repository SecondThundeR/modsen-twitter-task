import { memo } from "react";

import { SidebarAuthorsBlock } from "@/features/author";
import { ProfileImages, useProfileID } from "@/features/profile";

import { SidebarFooterElements } from "../SidebarFooterElements/SidebarFooterElements";
import { SidebarSearch } from "../SidebarSearch/SidebarSearch";
import { Footer, Wrapper } from "./Sidebar.styled";

export const Sidebar = memo(function Sidebar() {
  const id = useProfileID();

  return (
    <Wrapper>
      <SidebarSearch />
      {id !== null && <ProfileImages userId={id} />}
      <SidebarAuthorsBlock />
      <Footer>{<SidebarFooterElements />}</Footer>
    </Wrapper>
  );
});
