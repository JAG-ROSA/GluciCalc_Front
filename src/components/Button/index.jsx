/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const Button = ({ type, content, styles }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={styles}>
    <span>{content}</span>
  </button>
);

export default Button;
