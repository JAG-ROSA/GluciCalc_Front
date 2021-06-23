import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UiManager, UserManager } from "services";
import MealsManager from "services/meals";
import ProfileInput from "components/Dashboard/ProfileInput";
import Calendar from "components/Dashboard/Calendar";
import Stats from "components/Dashboard/Stats";

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState("");
  const [isUpdateUserProfile, setIsUpdateUserProfile] = useState("");
  const isUpdateUserFailed = useSelector((store) => !!store.error);
  const isUpdateSucceed = useSelector((store) => store.isUpdateSucceed);
  const [currentTable, setCurrentTable] = useState(1);
  const tabLinkActive = "tab-link-active";
  const [allMeals, setAllMeals] = useState("");

  const updateUserProfile = (event) => {
    event.preventDefault();
    const data = {
      first_name: event.target.formPlaintextFirstName.value,
      last_name: event.target.formPlaintextLastName.value,
    };
    UserManager.updateUser(data).then((response) => {
      setIsUpdateUserProfile(response);
    });
  };

  useEffect(() => {
    UserManager.getUser().then((response) => setUserProfile(response));
    if (isUpdateSucceed) {
      UiManager.openNotification("success", "Profil mise à jour !");
    } else if (isUpdateUserFailed) {
      UiManager.openNotification(
        "error",
        "Hum... il y a une petite erreur! Veuillez ré-essayer 🤔",
      );
    }
    MealsManager.showMeals()
      .then((response) => setAllMeals(response))
      .catch((error) => console.log(error));
  }, [isUpdateSucceed, isUpdateUserProfile, isUpdateUserFailed]);

  return (
    <div className="margin-container">
      <div className="tab">
        <div
          className="col-md-4 col-lg-2 multi-tab me-3"
          id="tab"
          role="tablist"
        >
          <button
            className={`tab-link ${currentTable === 1 ? tabLinkActive : null}`}
            id="1"
            type="button"
            onClick={() => setCurrentTable(1)}
          >
            Informations
          </button>
          <button
            className={`tab-link ${currentTable === 2 ? tabLinkActive : null}`}
            id="2"
            type="button"
            onClick={() => setCurrentTable(2)}
          >
            Statistiques
          </button>
          <button
            className={`tab-link ${currentTable === 3 ? tabLinkActive : null}`}
            id="3"
            type="button"
            onClick={() => setCurrentTable(3)}
          >
            Calendrier
          </button>
          <button
            className={`tab-link ${currentTable === 4 ? tabLinkActive : null}`}
            id="4"
            type="button"
            onClick={() => setCurrentTable(4)}
          >
            Recettes
          </button>
        </div>
        <div className="col tab-content mt-4" id="tabContent">
          <div className="tab-pane active" id="1">{currentTable === 1 && <ProfileInput userDetails={userProfile} onUpdate={updateUserProfile} />}</div>
          <div className="tab-pane active" id="2">{currentTable === 2 && <div><Stats mealsStats={allMeals} /></div>}</div>
          <div className="tab-pane active" id="3">{currentTable === 3 && <div><Calendar mealsCalendar={allMeals} /></div>}</div>
          <div className="tab-pane active" id="4">{currentTable === 4 && <div>Afficher les recettes</div>}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
