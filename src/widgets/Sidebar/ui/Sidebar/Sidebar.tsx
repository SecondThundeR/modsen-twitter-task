import { memo } from "react";

import { SidebarFooterElements } from "@/widgets/SidebarFooterElements";
import { SidebarSearch } from "@/widgets/SidebarSearch";
import { SidebarAuthorsBlock } from "@/features/author";
import { ProfileImages, useProfileID } from "@/features/profile";

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
