import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Principal",
    icon: "pe-7s-home",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Meu Perfil",
    icon: "pe-7s-id",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Intituições",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Biblioteca",
    icon: "pe-7s-notebook",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Psicólogos",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Jogos",
    icon: "pe-7s-joy",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Sair da Conta",
    icon: "pe-7s-power",
    component: Upgrade,
    layout: "/admin"
  }
];

export default dashboardRoutes;
