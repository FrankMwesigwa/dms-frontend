
const SidebarData = [
  {
    name: "Settings",
    iconClassName: "bx bx-receipt",

    subNav: [
      {
        name: "Asset Category",
        path: "/admin/category",
      },
      {
        name: "Asset Models",
        path: "/admin/model",
      },
      {
        name: "Departments",
        path: "/admin/departments",
      },
      {
        name: "Divisions",
        path: "/admin/divisions",
      },
      {
        name: "Sections",
        path: "/admin/sections",
      },
    ],
  },
  {
    name: "User Management",
    path: "/",
    iconClassName: "bx bx-bitcoin",

    subNav: [
      {
        name: "Users",
        path: "/users",
      },
      {
        name: "Roles",
        path: "/roles",
      },
      {
        name: "Permissions",
        path: "/permissions",
      },
    ],
  },
];

export default SidebarData;
