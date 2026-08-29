import { redirect } from "next/navigation";

export const metadata = {
  title: "Writing types",
  description: "Indexes for case studies, build logs, and research notes.",
};

export default function WritingTypeRoot() {
  redirect("/writing");
}
