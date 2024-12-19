import AuthButtonLogOut from "@/components/auth/AuthButtonLogOut";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Button variant="text" color="secondary">Text</Button>
      <Button variant="text" color="primary">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AuthButtonLogOut />
    </>
  );
}
