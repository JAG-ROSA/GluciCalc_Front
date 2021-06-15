import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UserManager } from "services";

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    UserManager.logoutUser().then(() => {
      history.push("/");
    });
  });

  return (
    <div className="Logout">
      <Spinner animation="border" />
    </div>
  );
};
export default Logout;
