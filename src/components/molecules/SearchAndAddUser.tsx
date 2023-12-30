import Title from "antd/es/typography/Title";
import { SearchEmailInput } from "@/components/atoms/SearchEmailInput.tsx";
import { FC } from "react";
import { SendInviteModal } from "@/components/molecules/SendInviteModal.tsx";
import { UsersT, UserT } from "@/types/AdminPanel.ts";
import { Button } from "antd";

interface Props {
  setSearchedEmail: (value: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  onSendInvite: (values: UsersT) => void;
  selectedUser?: UserT;
  onEditUser: (email: string, permissions: string[]) => void;
}

export const SearchAndAddUser: FC<Props> = ({
  setSearchedEmail,
  onSendInvite,
  isModalOpen,
  setIsModalOpen,
  selectedUser,
  onEditUser,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center p-0 lg:px-3 lg:pt-2 pb-2 mx-0 lg:mx-3">
      <Title className="ml-12 mt-4 lg:ml-0 lg:mt-3 font-futura" level={2}>
        Команда
      </Title>
      <div className="ml-1 flex flex-col items-center justify-center lg:flex-row lg:justify-end lg:items-center w-[98%] lg:w-[80%]">
        <SearchEmailInput setSearchedEmail={setSearchedEmail} />
        <Button
          className="w-full lg:w-[230px] bg-[#32C076] text-white border-none rounded-[10px] h-[35px] ml-0 lg:ml-3 font-futura text-[18px]"
          onClick={() => setIsModalOpen(true)}
        >
          Добавить пользователя
        </Button>{" "}
        <SendInviteModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onSendInvite={onSendInvite}
          selectedUser={selectedUser}
          onEditUser={onEditUser}
        />
      </div>
    </div>
  );
};
