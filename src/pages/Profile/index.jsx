import React, { useEffect, useState } from "react";
import {
  Row, Col, Container,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { UiManager, UserManager } from "services";
import ProfileInput from "components/ProfileInput";

const Profile = () => {
  const [userProfile, setUserProfile] = useState("");
  const [isUpdateUserProfile, setIsUpdateUserProfile] = useState("");
  const isUpdateUserFailed = useSelector((store) => !!store.error);
  const isUpdateSucceed = useSelector((store) => store.isUpdateSucceed);

  const updateUserProfile = (event) => {
    event.preventDefault();
    const data = {
      first_name: event.target.formPlaintextFirstName.value,
      last_name: event.target.formPlaintextLastName.value,
    };
    UserManager.updateUser(data)
      .then((response) => {
        setIsUpdateUserProfile(response);
        console.log(response);
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
  }, [isUpdateSucceed, isUpdateUserProfile, isUpdateUserFailed]);
  return (
    <Container fluid>
      <h2 className="headingProfile">
        Profil Publique
      </h2>
      <Row>
        <Col>
          <ProfileInput userDetails={userProfile} onUpdate={updateUserProfile} />
        </Col>
        <Col>
          Test
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
