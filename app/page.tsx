import AuthButtonLogOut from "@/components/auth/AuthButtonLogOut";
import Header from "@/components/layout/Header/Header";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <AuthButtonLogOut />
    </>
  );
}
