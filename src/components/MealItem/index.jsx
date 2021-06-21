// import React, { useState } from "react";
import React from "react";
import Button from "components/Button";

const MealItem = ({ meal, onDelete, onShow }) => (
  <div className="detailsMeal">
    {meal.quantities.map((quantity) => {
      const food = quantity.product ?? quantity.recipe;
      return (
        <div key={quantity.id} className="products d-flex justify-content-between pb-2">
          {`${food.name} - ${quantity.quantity}g`}
          <div>
            <Button type="button" content="Modifier" styles="my-btn-tertiary my-btn-sm me-2" onAction={onShow} />
            <Button type="button" content="Suprimer" styles="my-btn-tertiary my-btn-sm me-2" onAction={(event) => onDelete(event, quantity.id)} />
          </div>
        </div>
      );
    })}
  </div>
);

export default MealItem;
