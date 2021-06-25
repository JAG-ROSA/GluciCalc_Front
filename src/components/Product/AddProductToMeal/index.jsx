import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import moment from "moment";
import "moment/locale/fr";
import { useHistory } from "react-router-dom";
import { UiManager, MealsManager } from "services";
import Button from "components/Button";
import ModalToCreateMeal from "../ModalToCreateMeal";

const AddProductToMeal = ({ data }) => {
  const { amountConsumption, idProduct, productResult } = data;
  const [mealList, setMealList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedMealId, setSelectedMealId] = useState("");
  const date = moment();
  const history = useHistory();

  useEffect(() => {
    MealsManager.getMealsForDay(date.format("YYYY-MM-DD")).then((response) => {
      setMealList(response);
    });
  }, [idProduct]);

  const addProduct = async (e) => {
    try {
      e.preventDefault();
      const response = await MealsManager.getProductId(
        idProduct,
        productResult.product_name_fr,
      );
      await MealsManager.addProductToMeal(
        amountConsumption,
        productResult.nutriments.carbohydrates_100g,
        e.target.mealSelect.value,
        response.id,
      );
      UiManager.openNotification("success", "Produit ajouté au repas 😉");
      history.push("/my-meals");
    } catch (err) {
      UiManager.openNotification(
        "warning",
        "Ajoute une quantité ou sélectionne un repas 😉",
      );
    }
  };

  const createMeal = async (mealName) => {
    if (!mealName) {
      return;
    }
    try {
      const response = await MealsManager.createMeal(mealName);
      setMealList([...mealList, response]);
      setSelectedMealId(response.id);
      UiManager.openNotification("success", "Repas créé 😉");
    } catch (error) {
      UiManager.openNotification("warning", "Donne un nom à ton repas 😉");
    }
  };

  const checkIfCreateMeal = (event) => {
    setSelectedMealId(event.target.value);
    if (event.target.value === "-1") {
      setModalShow(true);
    }
  };

  return (
    <div className="AddProductToMeal">
      <ModalToCreateMeal
        show={modalShow}
        onHide={(mealName) => {
          setModalShow(false);
          createMeal(mealName);
        }}
      />
      {mealList.length === 0 && (
        <div className="d-flex justify-content-center m -4">
          <Button
            content="Créer un repas"
            styles="my-btn-secondary"
            onAction={() => setModalShow(true)}
          />
        </div>
      )}
      {mealList.length > 0 && (
        <div className="containerAdd my-3">
          <h6>Je sélectionne mon repas</h6>
          <Form onSubmit={addProduct}>
            <Form.Group controlId="mealSelect">
              <Form.Control
                as="select"
                onChange={checkIfCreateMeal}
                value={selectedMealId}
                className="form-control-secondary"
              >
                {mealList.map((element) => (
                  <option key={element.id} value={element.id}>
                    {element.name}
                  </option>
                ))}
                <option key="0" value="-1">
                  Créer un nouveau repas
                </option>
              </Form.Control>
              <div className="d-flex justify-content-center m-4">
                <Button
                  type="submit"
                  content="Ajouter"
                  styles="my-btn-secondary"
                />
              </div>
            </Form.Group>
          </Form>
        </div>
      )}
    </div>
  );
};

export default AddProductToMeal;
