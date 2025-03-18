import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import TopNav from "~/components/TopNav";
import Footer from "~/components/Footer";
import CorePromo from "~/components/CorePromo";
import BottomNav from "~/components/BottomNav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jaydot2 LLC" },
    { name: "description", content: "Welcome to Jaydot2!" },
  ];
}

export default function Home() {
  return (
    <div>      
        <Welcome />
        <CorePromo />
    </div>
  );
}
