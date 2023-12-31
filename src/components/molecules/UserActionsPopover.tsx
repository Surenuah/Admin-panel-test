import { Button, notification, Popover } from "antd";
import { FC, useEffect, useState } from "react";
import moreUserCardIcon from "../../assets/common/More_User_Card_Icon.svg";
import { UserT } from "@/types/AdminPanel.ts";
import { PopoverActionButton } from "@/components/atoms/PopoverActionButton.tsx";
import { USER_PERMISSION } from "@/constants/AdminPanel.ts";
import { useSearchParams } from "react-router-dom";

interface Props {
  userId?: number;
  userEmail?: string;
  onDeleteUser: (value?: string) => void;
  userPermissions?: string[];
  setIsModalOpen: (value: boolean) => void;
  setSelectedUser: (value: UserT) => void;
  isModalOpen: boolean;
}

export const UserActionsPopover: FC<Props> = ({
  userId,
  userEmail,
  onDeleteUser,
  userPermissions,
  setIsModalOpen,
  setSelectedUser,
  isModalOpen,
}) => {
  const [selectedUserEmail, setSelectedUserEmail] = useState<string>();
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQuery = (key: string, value: string | null) => {
    if (value !== null) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    setSearchParams(searchParams);
  };

  const handleOpenChange = (visible: boolean) => {
    if (visible) {
      setSelectedUserEmail(userEmail);
      updateQuery("id", userId?.toString() as string);
    } else {
      setSelectedUserEmail(undefined);
    }
  };

  const handleDeleteUser = () => {
    try {
      onDeleteUser(userEmail);

      notification.success({
        message: "Успех",
        description: `${USER_PERMISSION} с email ${userEmail} успешно удален!`,
      });
    } catch (err) {
      notification.error({
        message: "Ошибка",
        description: `Не удалось удалить пользователя.`,
      });
    }
  };

  useEffect(() => {
    if (!isModalOpen) updateQuery("id", null);
  }, [isModalOpen]);

  return (
    <Popover
      trigger="click"
      open={userEmail === selectedUserEmail}
      onOpenChange={handleOpenChange}
      content={
        <div className="flex flex-col items-start p-2">
          <PopoverActionButton
            buttonText={
              <span className="cursor-pointer ml-[-15px]">
                Редактировать пользователя
              </span>
            }
            onClick={() => {
              setIsModalOpen(true);
              setSelectedUser({
                email: userEmail as string,
                permissions: userPermissions,
              });
            }}
          />
          <PopoverActionButton
            buttonText={
              <span className="mt-2 text-[#9494A0] cursor-pointer ml-[-12px]">
                Удалить
              </span>
            }
            onClick={handleDeleteUser}
          />
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
