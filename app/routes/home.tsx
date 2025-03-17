import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import TopNav from "~/components/TopNav";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jaydot2 LLC" },
    { name: "description", content: "Welcome to Jaydot2!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
        <TopNav />
        <Welcome />
        <Footer />
    </div>
  );
}
