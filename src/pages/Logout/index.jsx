import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { UiManager, UserManager } from "services";
import { resetErrors } from "store";
import store from "store/store";

const Logout = () => {
  const history = useHistory();
  const isLogoutSuccess = useSelector((logoutStore) => logoutStore.isLogged);
  const isLogoutFailed = useSelector((logoutStore) => !!logoutStore.logoutError);

  useEffect(() => {
    if (isLogoutSuccess) {
      UiManager.openNotification("success", "À bientôt ✌️");
    } else if (isLogoutFailed) {
      UiManager.openNotification(
        "error",
        "Hum... il y a une petite erreur! 🤔",
      );
      store.dispatch(resetErrors());
    }
    history.push("/");
  }, [isLogoutSuccess, isLogoutFailed]);

  useEffect(() => {
    UserManager.logoutUser();
  }, []);

  return (
    <div className="Logout"> </div>
  );
};
export default Logout;
