import BookmarksRegular from "../assets/bookmarksOutline.svg?react";
import ExploreRegular from "../assets/exploreOutline.svg?react";
import HomeFilled from "../assets/homeFill.svg?react";
import HomeRegular from "../assets/homeOutline.svg?react";
import ListsRegular from "../assets/listsOutline.svg?react";
import MessagesRegular from "../assets/messagesOutline.svg?react";
import MoreRegular from "../assets/more.svg?react";
import NotificationRegular from "../assets/notificationOutline.svg?react";
import ProfileFilled from "../assets/profileFill.svg?react";
import ProfileRegular from "../assets/profileOutline.svg?react";
import { RoutePaths, type RouteValues } from "../lib/router";
import type { SectionButtonProps } from "../ui/SectionButton/interfaces";

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
