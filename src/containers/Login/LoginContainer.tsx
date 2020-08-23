import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import LoginView from "./LoginView";

const LoginContainer = () => {
  const [id, setId] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  return <LoginView />;
};

export default inject("store")(observer(LoginContainer));
