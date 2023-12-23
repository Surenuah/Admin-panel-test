import accountImage from "../../assets/common/sidebar/Account_Image.svg";
import diagramIcon from "../../assets/common/sidebar/Diagram_Icon.svg";
import accountIcon from "../../assets/common/sidebar/Account_Icon.svg";
import todoListIcon from "../../assets/common/sidebar/Todo_List_Icon.svg";
import messageIcon from "../../assets/common/sidebar/Message_Icon.svg";
import imagesIcon from "../../assets/common/sidebar/Images_Icon.svg";
import usersIcon from "../../assets/common/sidebar/Users_Icon.svg";
import notesIcon from "../../assets/common/sidebar/Notes_Icon.svg";
import dollarIcon from "../../assets/common/sidebar/Dollar_Icon.svg";
import coinsIcon from "../../assets/common/sidebar/Coins_Icon.svg";
import exitIcon from "../../assets/common/sidebar/Exit_Icon.svg";
import logo from "../../assets/common/sidebar/logo.svg";
import { Button } from "antd";

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-10 ml-10 bg-white">
      <Button
        className="bg-white border-none"
        icon={<img src={logo} alt="" />}
      />
      <Button
        className="bg-white border-none"
        icon={<img src={accountImage} alt="" />}
      />
      <Button
        className="bg-white border-none"
        icon={<img src={diagramIcon} alt="" />}
      />
      <Button
        className="bg-white border-none"
        icon={<img src={accountIcon} alt="" />}
      />
      <Button
        className="bg-white border-none"
        icon={<img src={todoListIcon} alt="" />}
      />
      <Button
        className="bg-white border-none"
        icon={<img src={messageIcon} alt="" />}
      />
      <Button
        className="bg-white border-none"
        icon={<img src={imagesIcon} alt="" />}
      />
      <Button
        className="bg-white border-none"
        icon={<img src={usersIcon} alt="" />}
      />
      <Button
        className="bg-white border-none"
        icon={<img src={notesIcon} alt="" />}
      />
      <Button
        className="bg-white border-none"
        icon={<img src={dollarIcon} alt="" />}
      />
      <Button
        className="bg-white border-none"
        icon={<img src={coinsIcon} alt="" />}
      />
      <Button
        className="bg-white border-none"
        icon={<img src={exitIcon} alt="" />}
      />
    </div>
  );
};
