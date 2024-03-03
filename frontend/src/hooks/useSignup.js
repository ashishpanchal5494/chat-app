import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const handleInputError = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    await axios
      .post("http://localhost:5000/api/auth/signup", {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      })
      .then((response) => {
        console.log(response);
        alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        localStorage.setItem("chat-user", JSON.stringify(response));
        setAuthUser(response);
      })
      .catch((error) => {
        alert("Registration Error", "An error occurred while registering");
        console.log("registration failed", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { loading, signup };
};

export default useSignup;
