import accountImage from "@/assets/sidebar/Account_Image.png";
import diagramIcon from "@/assets/sidebar/Diagram_Icon.svg";
import accountIcon from "@/assets/sidebar/Account_Icon.svg";
import todoListIcon from "@/assets/sidebar/Todo_List_Icon.svg";
import messageIcon from "@/assets/sidebar/Message_Icon.svg";
import imagesIcon from "@/assets/sidebar/Images_Icon.svg";
import usersIcon from "@/assets/sidebar/Users_Icon.svg";
import notesIcon from "@/assets/sidebar/Notes_Icon.svg";
import dollarIcon from "@/assets/sidebar/Dollar_Icon.svg";
import exitIcon from "@/assets/sidebar/Exit_Icon.svg";
import logo from "@/assets/sidebar/logo.svg";
import burgerMenuIcon from "@/assets/sidebar/burger_menu_icon.svg";
import { SidebarButton } from "@/components/atoms/SidebarButton.tsx";
import { Button } from "antd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

export const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`z-50 flex flex-col fixed top-0 bottom-0 left-0 overflow-y-auto items-start lg:w-[120px] lg:flex lg:items-center 
        gap-8 bg-white pt-5 ${isSidebarOpen ? "w-[100%]" : "w-0"}`}
        style={{ transition: "width 1s ease" }}
      >
        <SidebarButton sidebarIcon={logo} />
        <SidebarButton
          sidebarIcon={accountImage}
          title="Артем Иванов"
          subtitle="Собственник"
        />
        <SidebarButton sidebarIcon={diagramIcon} title="Аналитика" />
        <SidebarButton sidebarIcon={accountIcon} title="Профиль" />
        <SidebarButton sidebarIcon={todoListIcon} title="Модерация" />
        <SidebarButton sidebarIcon={messageIcon} title="Чаты" />
        <SidebarButton sidebarIcon={imagesIcon} title="Баннеры" />
        <SidebarButton sidebarIcon={usersIcon} title="Команда" />
        <SidebarButton sidebarIcon={notesIcon} title="Блог" />
        <SidebarButton sidebarIcon={dollarIcon} title="Курс валют" />
        <SidebarButton sidebarIcon={exitIcon} title="Выйти" />
        {isSidebarOpen && (
          <CloseOutlined
            className="absolute top-5 right-5 cursor-pointer lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </div>
      <Button
        className="z-0 fixed top-6 left-1 bg-transparent border-none md:hidden"
        icon={<img src={burgerMenuIcon} alt="" />}
        onClick={toggleSidebar}
      />
    </>
  );
};
