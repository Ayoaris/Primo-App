import React, { FC } from "react";


interface Props {
  border: string;
  backgroundColor: string;
  borderRadius: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
  
}

const Button: React.FC<Props> = ({
  border,
  color,
  backgroundColor,
  borderRadius,
  children,
  height,
  onClick,
  width,
 
  
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor,
        borderRadius,
        color,
        border,
        height,
        width,
       
       
      }}
    >
      {children}
    </button>
  );
};

export default Button;
