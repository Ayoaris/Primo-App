import React from "react";


interface Props {
  border: string;
  backgroundColor: string;
  borderRadius: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
  fontSize: string;
  margin?: string;
  
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
  fontSize,
  margin,
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
        fontSize,
        margin,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
