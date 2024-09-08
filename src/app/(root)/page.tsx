import Image from "next/image";
import type { Metadata } from "next";
import { UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "PromptifyPics"
};
export default function Home() {
  return (
    <div>
      <p>hello this is root page</p>
      <UserButton />
    </div>
  );
}
