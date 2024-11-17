import { FC } from "react";
import { MenuList } from "../MenuList";

export const DesktopMenu:FC<{path:string}> = ({path}) => {
  return (
    <div className="flex items-center gap-[60px] sm:hidden pl-[60px]">
      <MenuList path={path} />
    </div>
  );
};