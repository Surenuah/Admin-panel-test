import { Button } from "antd";
import { FC } from "react";

interface Props {
  sidebarIcon: string;
}

export const SidebarButton: FC<Props> = ({ sidebarIcon }) => {
  return (
    <Button
      className="bg-transparent border-none"
      icon={<img src={sidebarIcon} alt="" />}
    />
  );
};
