import { inject, observer } from "mobx-react";
import React from "react";

const LoginView = () => {
  return (
    <>
      <div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="password" />
        </div>
      </div>
    </>
  );
};

export default inject("store")(observer(LoginView));
