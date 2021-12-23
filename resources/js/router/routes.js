const routes = [
    {
        path: "",
        component: () => import("../pages/Login.vue"),
        name: "home",
    },
    {
        path: "/stocks",
        component: () => import("../pages/Stock.vue"),
        name: "stock",
    },
    {
        path: "/dashboard",
        component: () => import("../pages/Dashboard.vue"),
        name: "dashboard",
    },
    {
        path: "/virtual-investment",
        component: () => import("../pages/VirtualInvestment.vue"),
        name: "virtualinvestment",
    },
];
export default routes;