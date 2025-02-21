import Image from "next/image";
import { Footer } from "@/app/components/footer/page.jsx";
import Home1 from "./home/page.jsx";
import Box from "./components/box/page.jsx";
import "./globals.css";
import Link from "next/link";
import Header from "../app/components/header/page.jsx"

export default function Home() {
  return (
    <div>
      <Header />
      <Home1 />
      <Box />
      <Footer />
    </div>
  );
}