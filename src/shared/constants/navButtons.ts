import BookmarksRegular from "@/shared/assets/bookmarksOutline.svg?react";
import ExploreRegular from "@/shared/assets/exploreOutline.svg?react";
import HomeFilled from "@/shared/assets/homeFill.svg?react";
import HomeRegular from "@/shared/assets/homeOutline.svg?react";
import ListsRegular from "@/shared/assets/listsOutline.svg?react";
import MessagesRegular from "@/shared/assets/messagesOutline.svg?react";
import MoreRegular from "@/shared/assets/more.svg?react";
import NotificationRegular from "@/shared/assets/notificationOutline.svg?react";
import ProfileFilled from "@/shared/assets/profileFill.svg?react";
import ProfileRegular from "@/shared/assets/profileOutline.svg?react";
import { RoutePaths, RouteValues } from "@/shared/lib/router";
import { SectionButtonProps } from "@/shared/ui/SectionButton/interfaces";

type NavButtonsType = Omit<SectionButtonProps, "isActive" | "onClick"> & {
  route?: RouteValues;
};

export const NAV_BUTTONS: NavButtonsType[] = [
  {
    text: "Home",
    regularIcon: HomeRegular,
    filledIcon: HomeFilled,
    route: RoutePaths.home,
  },
  {
    text: "Explore",
    regularIcon: ExploreRegular,
  },
  {
    text: "Notifications",
    regularIcon: NotificationRegular,
  },
  {
    text: "Messages",
    regularIcon: MessagesRegular,
  },
  {
    text: "Bookmarks",
    regularIcon: BookmarksRegular,
  },
  {
    text: "Lists",
    regularIcon: ListsRegular,
  },
  {
    text: "Profile",
    regularIcon: ProfileRegular,
    filledIcon: ProfileFilled,
    route: RoutePaths.profile,
  },
  {
    text: "More",
    regularIcon: MoreRegular,
  },
];
