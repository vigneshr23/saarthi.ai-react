// Specific Button composed using a generic button component

import React from "react";
import {
  MdRemoveCircleOutline,
  MdCheckCircle,
  MdCancel,
  MdClose,
} from "react-icons/md";

const Button = ({ onClick, btnClass = "", ...props }) => {
  console.log(onClick);
  const className = btnClass ? `btn ${btnClass}` : `btn`;
  return (
    <div className={className} onClick={onClick}>
      {props.children}
    </div>
  );
};

export const Remove = ({ size, title = "", ...props }) => (
  <Button {...props}>
    <MdRemoveCircleOutline size={size} title={title} />
  </Button>
);

export const SubmitButton = ({ size, title = "", ...props }) => (
  <Button {...props}>
    <MdCheckCircle size={size} title={title} />
    <span>&nbsp; Submit</span>
  </Button>
);

export const CancelButton = ({ size, title = "", ...props }) => (
  <Button {...props}>
    <MdCancel size={size} title={title} />
    <span>&nbsp; Cancel</span>
  </Button>
);

export const Close = ({ size, title = "", ...props }) => (
  <Button {...props}>
    <MdClose size={size} title={title} />
  </Button>
);

export default Button;
