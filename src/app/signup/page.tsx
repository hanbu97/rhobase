"use client";

// pages/auth.tsx
import { useState } from "react";
import FeatureCard from "./_components/featurecard";
import AuthComponent from "./_components/authcard";

export default function AuthPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // 处理登录/注册逻辑，比如调用API
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="flex flex-wrap md:flex-nowrap gap-10 justify-center">
        <FeatureCard />
        <AuthComponent />
      </div>
    </div>
  );
}
