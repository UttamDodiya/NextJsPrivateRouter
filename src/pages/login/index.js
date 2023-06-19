import { useRouter } from "next/router";
import React, { useState } from "react";
const Login = () => {
  const router = useRouter();
  const [loginTaken, setLoginTaken] = useState(false);
  const handleLogin = () => {
    setLoginTaken(!loginTaken);
    if (loginTaken === true) {
      router.push("/data");
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>LogIn</button>
    </div>
  );
};

export default Login;
