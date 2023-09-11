import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default Account;
