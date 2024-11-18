import { useState, type FC } from "react";
import {  IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { DesktopMenu } from "./components/DesktopMenu";
import { MobileMenu } from "./components/MobileMenu";
import { MenuList } from "./components/MenuList";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "../Button";

export const Header: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { pathname } = useLocation();
  const path = pathname.split("/")[1] || "/";
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);
  return (
    <header className="sticky top-0 flex items-center justify-between sm:h-[50px] h-[84px]  z-50 opacity-90 bg-begeClaro px-[50px] sm:px-[20px]">
      <Toolbar>
        <div className="flex items-center sm:justify-between sm:w-full">
          <div className="md:!hidden lg:!hidden flex items-center gap-[10px]">
            <img
              src={logo}
              alt="logo"
              className="w-[70px] h-[70px] sm:h-[45px] sm:w-[45px]"
            />
            <IconButton onClick={toggleMobileMenu}>
              <MenuOutlinedIcon className="text-rosa2  text-center" />
            </IconButton>
          </div>
          <img
            src={logo}
            alt="logo"
            className="sm:hidden w-[70px] h-[70px] sm:h-[45px] sm:w-[45px]"
          />
        </div>
        <DesktopMenu path={path} />
      </Toolbar>
      <div className="flex gap-[60px] sm:gap-[20px]">
      <Button variant="text"><Typography className="!capitalize !leading-7 text-rosa2 !text-[22px] sm:!text-[16px]
      ">Entrar</Typography></Button>
      <Button ><Typography className="!capitalize !leading-7 text-begeClaro !text-[22px] sm:!text-[16px]">Cadastrar</Typography></Button>
      </div>
      <MobileMenu isVisible={showMobileMenu}>
        <MenuList path={path} isMobile={true} onClose={toggleMobileMenu} />
      </MobileMenu>
    </header>
  );
};
