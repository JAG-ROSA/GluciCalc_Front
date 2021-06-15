import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { UiManager, UserManager } from "services";

const Logout = () => {
  const history = useHistory();
  const isLogoutSuccess = useSelector((store) => store.isLogged);
  const isLogoutFailed = useSelector((store) => !!store.error);

  useEffect(() => {
    if (isLogoutSuccess) {
      UiManager.openNotification("success", "À bientôt ✌️");
    } else if (isLogoutFailed) {
      UiManager.openNotification(
        "error",
        "Hum... il y a une petite erreur! 🤔",
      );
    }
  }, [isLogoutSuccess, isLogoutFailed]);

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
