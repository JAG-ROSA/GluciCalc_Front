/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const Button = ({
  type, content, styles, onAction,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={styles} onClick={onAction}>
    <span>{content}</span>
  </button>
);

export default Button;
