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
import { Button } from "antd";

export const Sidebar = () => {
  return (
    <div
      className="flex flex-col gap-10 ml-10 bg-white mt-5"
      style={{ flex: "1" }}
    >
      <Button
        className="bg-transparent border-none"
        icon={<img src={logo} alt="" />}
      />
      <Button
        className="bg-transparent border-none"
        icon={<img src={accountImage} alt="" />}
      />
      <Button
        className="bg-transparent border-none"
        icon={<img src={diagramIcon} alt="" />}
      />
      <Button
        className="bg-transparent border-none"
        icon={<img src={accountIcon} alt="" />}
      />
      <Button
        className="bg-transparent border-none"
        icon={<img src={todoListIcon} alt="" />}
      />
      <Button
        className="bg-transparent border-none"
        icon={<img src={messageIcon} alt="" />}
      />
      <Button
        className="bg-transparent border-none"
        icon={<img src={imagesIcon} alt="" />}
      />
      <Button
        className="bg-transparent border-none"
        icon={<img src={usersIcon} alt="" />}
      />
      <Button
        className="bg-transparent border-none"
        icon={<img src={notesIcon} alt="" />}
      />
      <Button
        className="bg-transparent border-none"
        icon={<img src={dollarIcon} alt="" />}
      />
      <Button
        className="bg-transparent border-none"
        icon={<img src={coinsIcon} alt="" />}
      />
      <Button
        className="bg-transparent border-none"
        icon={<img src={exitIcon} alt="" />}
      />
    </div>
  );
};
