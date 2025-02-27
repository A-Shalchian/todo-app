"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/userApi";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { token } = await loginUser(email, password);
      localStorage.setItem("token", token);
      router.push("/tasks");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pb-72">
      <Card className="w-full md:w-1/2 max-w-96 md:max-w-3xl p-6">
        <CardHeader className="text-center font-bold text-2xl">
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-base">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="password" className="text-base">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                required
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button
              className="w-1/2 flex justify-center mx-auto"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <span className="ml-1">
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
