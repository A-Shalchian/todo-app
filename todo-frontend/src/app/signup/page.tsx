import { SignUpForm } from "@/loginSections/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Todo App",
  description: "Create your account",
};

export default function SignUpPage() {
  return (
    <>
      <SignUpForm />
    </>
  );
}
