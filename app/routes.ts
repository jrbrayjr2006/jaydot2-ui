import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "components/About.tsx"),
    route("products", "components/Products.tsx"),
    route("services", "components/Services.tsx"),
    route("login", "components/Login.tsx"),
    route("register", "components/Register.tsx"),
] satisfies RouteConfig;
