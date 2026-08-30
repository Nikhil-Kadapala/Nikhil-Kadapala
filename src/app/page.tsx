import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.name },
  description: site.description,
};

export default function Home() {
  return <HomePage />;
}
