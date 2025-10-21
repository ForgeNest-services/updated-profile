"use client";
import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/server/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const res = await loginAdmin({ email, password });
      if (res.success) {
        router.replace("/dashboard");
      } else {
        setError(res.message);
      }
    });
  };

  return (
    <div className="h-screen mx-auto max-w-md w-full pt-20">
      <h1 className="text-2xl mb-6">Admin Login</h1>
      {error && (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-red-800">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm">Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            disabled={isPending}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            disabled={isPending}
            required
          />
        </div>
        <div className="pt-2">
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Signing in..." : "Sign in"}
          </Button>
        </div>
      </form>
    </div>
  );
}
