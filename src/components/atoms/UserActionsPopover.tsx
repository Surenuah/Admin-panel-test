import { Button, Popover } from "antd";
import { FC, useState } from "react";
import moreUserCardIcon from "../../assets/common/More_User_Card_Icon.svg";

interface Props {
  userIndex: number;
}

export const UserActionsPopover: FC<Props> = ({ userIndex }) => {
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>();

  const handleOpenChange = (visible: boolean) => {
    if (visible) {
      setSelectedUserIndex(userIndex);
    } else {
      setSelectedUserIndex(null);
    }
  };

  return (
    <Popover
      trigger="click"
      open={userIndex === selectedUserIndex}
      onOpenChange={handleOpenChange}
      content={
        <div className="flex flex-col p-2">
          <span className="cursor-pointer">Изменить права доступа</span>
          <span className="mt-2 cursor-pointer">Отправить код повторно</span>
          <span className="mt-2 text-[#9494A0] cursor-pointer">Удалить</span>
        </div>
      }
    >
      <Button
        className="border-none bg-transparent flex justify-center"
        icon={<img src={moreUserCardIcon} alt="" />}
      />
    </Popover>
  );
};
