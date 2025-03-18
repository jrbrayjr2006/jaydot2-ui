import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "components/About.tsx"),
    route("products", "components/Products.tsx"),
    route("services", "components/Services.tsx"),
] satisfies RouteConfig;
