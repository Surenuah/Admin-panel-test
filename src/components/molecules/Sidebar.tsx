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
import { SidebarButton } from "@/components/atoms/SidebarButton.tsx";

export const Sidebar = () => {
  return (
    <div
      className="flex flex-col gap-10 ml-10 bg-white mt-5"
      style={{ flex: "1" }}
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
  );
};
