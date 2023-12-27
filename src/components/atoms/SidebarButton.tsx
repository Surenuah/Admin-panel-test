import { Button } from "antd";
import { FC } from "react";
import Title from "antd/es/typography/Title";

interface Props {
  sidebarIcon: string;
  title?: string;
  subtitle?: string;
}

export const SidebarButton: FC<Props> = ({ sidebarIcon, title, subtitle }) => {
  return (
    <Button
      className="flex items-center lg:bg-transparent border-none lg:ml-3"
      icon={<img src={sidebarIcon} alt="" />}
    >
      <div className="flex flex-col items-start ml-3">
        {title === "Артем Иванов" ? (
          <Title className="font-futura lg:hidden" level={4}>
            {title}
          </Title>
        ) : (
          <span
            className={`text-[#9494A0] font-futura text-[16px] ${
              title === "Выйти" ? "text-[#FF9E90]" : "text-[#9494A0]"
            } lg:hidden`}
          >
            {title}
          </span>
        )}
        <span className="text-[#9494A0] mt-[-8px] lg:hidden">{subtitle}</span>
      </div>
    </Button>
  );
};
