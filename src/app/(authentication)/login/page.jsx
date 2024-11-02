"use client";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import Eye from "../_components/Eye";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import createSession from "../../actions/createSession";
import { toast } from "sonner";
import { useAuth } from "../../../../context/authContext";

const LoginPage = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [state, formAction] = useFormState(createSession, {});
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Logged in successfully");
      setIsAuthenticated(true);
      router.push("/");
    }
  }, [state, router, setIsAuthenticated]);

  const togglePasswordView = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password",
    );
  };
  return (
    <div className="lg:px-12 ">
      <Heading title={"Log into your account"} className="text-center" />
      <form
        action={formAction}
        className="flex flex-col mt-5 gap-[20px] w-[100%]"
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          className="border px-2 py-3 rounded-[10px] border-brand-border outline-brand-accent bg-transparent w-[100%]"
        />
        <span className="w-[100%] relative">
          <input
            type={passwordType}
            name="password"
            id="password"
            placeholder="password"
            className="mt-4 border px-2 py-3 rounded-[10px] w-[100%] border-brand-border outline-brand-accent bg-transparent"
          />
          <Eye
            className={"top-[50%]"}
            togglePasswordView={togglePasswordView}
          />
        </span>
        <Link href={"/"} className="text-right text-brand-accent font-medium">
          Forgot Password?
        </Link>
        <div className="flex flex-col w-[100%] items-center gap-[36px]">
          <Button
            variant={"default"}
            className="mt-4 w-[100%] lg:w-[315px] h-[60px] bg-brand-button flex justify-center items-center rounded-[15px] text-[16px] font-medium"
          >
            Login
          </Button>
          <p>
            {"Don't have an account?"}{" "}
            <Link href={"/register"} className="text-brand-accent font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
