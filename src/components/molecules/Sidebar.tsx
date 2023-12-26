import accountImage from "../../assets/sidebar/Account_Image.png";
import diagramIcon from "../../assets/sidebar/Diagram_Icon.svg";
import accountIcon from "../../assets/sidebar/Account_Icon.svg";
import todoListIcon from "../../assets/sidebar/Todo_List_Icon.svg";
import messageIcon from "../../assets/sidebar/Message_Icon.svg";
import imagesIcon from "../../assets/sidebar/Images_Icon.svg";
import usersIcon from "../../assets/sidebar/Users_Icon.svg";
import notesIcon from "../../assets/sidebar/Notes_Icon.svg";
import dollarIcon from "../../assets/sidebar/Dollar_Icon.svg";
import coinsIcon from "../../assets/sidebar/Coins_Icon.svg";
import exitIcon from "../../assets/sidebar/Exit_Icon.svg";
import logo from "../../assets/sidebar/logo.svg";
import burgerMenuIcon from "../../assets/sidebar/burger_menu_icon.svg";
import { SidebarButton } from "@/components/atoms/SidebarButton.tsx";
import { Button } from "antd";
import { useState } from "react";

export const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`z-50 flex flex-col fixed top-0 bottom-0 left-0 overflow-y-auto lg:w-[100px] md:flex lg:items-center gap-10 bg-white lg:pt-3 ${
          isSidebarOpen ? "w-[80%]" : "w-0"
        }`}
        style={{ transition: "width 1s ease" }}
      >
        <SidebarButton sidebarIcon={logo} />
        <SidebarButton sidebarIcon={accountImage} />
        <SidebarButton sidebarIcon={diagramIcon} />
        <SidebarButton sidebarIcon={accountIcon} />
        <SidebarButton sidebarIcon={todoListIcon} />
        <SidebarButton sidebarIcon={messageIcon} />
        <SidebarButton sidebarIcon={imagesIcon} />
        <SidebarButton sidebarIcon={usersIcon} />
        <SidebarButton sidebarIcon={notesIcon} />
        <SidebarButton sidebarIcon={dollarIcon} />
        <SidebarButton sidebarIcon={coinsIcon} />
        <SidebarButton sidebarIcon={exitIcon} />
      </div>
      <Button
        className="z-0 fixed top-6 left-1 bg-transparent border-none md:hidden"
        icon={<img src={burgerMenuIcon} alt="" />}
        onClick={toggleSidebar}
      />
    </>
  );
};
