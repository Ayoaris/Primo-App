import React from "react";

interface Props {
  boxShadow: string;
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

const Card: React.FC<Props> = ({
  boxShadow,
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
    <div
      onClick={onClick}
      style={{
        backgroundColor,
        borderRadius,
        color,
        boxShadow,
        height,
        width,
        fontSize,
        margin,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
