"use client";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/customSelect";
import createUser from "@/app/actions/createUser";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Eye from "../_components/Eye";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const RegisterPage = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [state, formAction] = useFormState(createUser, {});

  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("You can now log in!");
      router.push("/login");
    }
  }, [state, router]);

  const togglePasswordView = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password",
    );
  };
  const toggleConfirmPasswordView = () => {
    setConfirmPasswordType((prevType) =>
      prevType === "password" ? "text" : "password",
    );
  };

  return (
    <div className="md:px-12">
      <Heading title={"Create An Account"} className="text-center" />
      <form action={formAction} className="flex flex-col mt-5 gap-[20px]">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your Name"
          className="border  px-2 py-3 rounded-[10px] border-brand-border outline-brand-accent bg-transparent"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="border  px-2 py-3 rounded-[10px] border-brand-border outline-brand-accent bg-transparent"
        />

        <span className="w-[100%] relative">
          <input
            type={passwordType}
            name="password"
            id="password"
            placeholder="password"
            className="border px-2 py-3 rounded-[10px] w-[100%] border-brand-border outline-brand-accent bg-transparent"
          />
          <Eye togglePasswordView={togglePasswordView} />
        </span>
        <span className="w-[100%] relative">
          <input
            type={confirmPasswordType}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirm password"
            className=" border px-2 py-3 rounded-[10px] w-[100%] border-brand-border outline-brand-accent bg-transparent"
          />
          <Eye togglePasswordView={toggleConfirmPasswordView} />
        </span>
        <Select>
          <SelectTrigger className="w-full ">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>select your role</SelectLabel>
              <SelectItem value="house_finder">House Finder</SelectItem>
              <SelectItem value="property_owner">Property Owner</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Link href={"/"} className="text-right text-brand-accent font-medium">
          Forgot Password?
        </Link>
        <div className="flex flex-col w-[100%] items-center gap-[36px]">
          <Button
            variant={"default"}
            className="mt-4 w-[100%] lg:w-[315px] h-[60px] bg-brand-button flex justify-center items-center rounded-[15px] text-[16px] font-medium"
          >
            Create Account
          </Button>
          <p>
            {"Already have an account?"}{" "}
            <Link href={"/login"} className="text-brand-accent font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
