import { LoginForm } from "@/loginSections/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Todo App",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <>
      <LoginForm />
    </>
  );
}
