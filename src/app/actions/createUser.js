"use server";

import { createAdminClient } from "../../../config/appwrite";
import { ID } from "node-appwrite";

async function createUser(previousState, formData) {
  console.log("FormData: ", formData);
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (!email || !name || !password || !confirmPassword) {
    return {
      error: "Please fill in all fields",
    };
  }

  if (password.length < 8) {
    return {
      error: "Password must be at least 8 characters long",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    };
  }

  // Get account instance
  const { account } = await createAdminClient();

  try {
    // Create user
    await account.create(ID.unique(), email, password, name);

    return {
      success: true,
    };
  } catch (error) {
    console.log("Registration Error: ", error);

    return {
      error: "Registration failed, could not register User",
    };
  }
}

export default createUser;
