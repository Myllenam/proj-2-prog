import { type FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";
import footer from "../../assets/footer.svg"
import backgroundImage from "../../assets/background.jpeg"; 

export const Component: FC = () => {
  return (
<div className="flex flex-col min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
     <Header/>
      <main className="flex-grow ">
      <Outlet />
      </main>
      <footer>
      <img src={footer} alt="footer" className="w-full h-auto" />
      </footer>
    </div>
  );
};
export default Component;