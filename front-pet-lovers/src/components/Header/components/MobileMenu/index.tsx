import { FC, ReactNode } from "react";

import "./styled.css";

export const MobileMenu: FC<{ children: ReactNode; isVisible: boolean }> = ({
  children,
  isVisible,
}) => {
  return (
    <div className={`hidden sm:block box ${isVisible && "box-visible"}`}>
      <div className="flex flex-col justify-around">{children}</div>
    </div>
  );
};
