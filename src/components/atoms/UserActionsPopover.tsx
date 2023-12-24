import { Button, Popover } from "antd";
import { FC, useState } from "react";
import moreUserCardIcon from "../../assets/common/More_User_Card_Icon.svg";
import { UsersT } from "../../types/AdminPanel.ts";

interface Props {
  userEmail: string;
  onDeleteUser: (value: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  onSendInvite: (values: UsersT) => void;
}

export const UserActionsPopover: FC<Props> = ({ userEmail, onDeleteUser }) => {
  const [selectedUserIndex, setSelectedUserIndex] = useState<string>();

  const handleOpenChange = (visible: boolean) => {
    if (visible) {
      setSelectedUserIndex(userEmail);
    } else {
      setSelectedUserIndex(undefined);
    }
  };

  const handleDeleteUser = () => {
    onDeleteUser(userEmail);
  };

  return (
    <Popover
      trigger="click"
      open={userEmail === selectedUserIndex}
      onOpenChange={handleOpenChange}
      content={
        <div className="flex flex-col items-start p-2">
          <Button className="bg-transparent border-none outline-none flex items-center justify-center">
            <span className="cursor-pointer ml-[-15px]">
              Изменить права доступа
            </span>
          </Button>
          <Button className="bg-transparent border-none outline-none flex items-center justify-center">
            <span className="mt-2 cursor-pointer ml-[-15px]">
              Отправить код повторно
            </span>
          </Button>
          <Button
            className="bg-transparent border-none outline-none flex items-center justify-center"
            onClick={handleDeleteUser}
          >
            <span className="mt-2 text-[#9494A0] cursor-pointer ml-[-12px]">
              Удалить
            </span>
          </Button>
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
