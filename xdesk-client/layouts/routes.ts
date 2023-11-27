
import { Dashboard, Person, LibraryBooks, Notifications, ContentPaste } from "@mui/icons-material";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "概览",
    icon: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "用户信息",
    icon: Person,
    layout: "/admin",
  },
  {
    path: "/table-list",
    name: "内容列表",
    icon: ContentPaste,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "字体样式",
    icon: LibraryBooks,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "消息通知",
    icon: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
