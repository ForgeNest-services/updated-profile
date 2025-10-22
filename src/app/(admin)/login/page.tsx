import { LoginForm } from "@/components/dashboard";
import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
          <p className="text-foreground/70 mt-2">
            Sign in to access the dashboard
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
