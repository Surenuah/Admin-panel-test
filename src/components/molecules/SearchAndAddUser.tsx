import Title from "antd/es/typography/Title";
import { SearchEmailInput } from "@/components/atoms/SearchEmailInput.tsx";
import { AddUserButton } from "@/components/atoms/AddUserButton.tsx";
import { FC } from "react";
import { SendInviteModal } from "@/components/molecules/SendInviteModal.tsx";
import { UsersT, UserT } from "../../types/AdminPanel.ts";

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
        <AddUserButton onClick={() => setIsModalOpen(true)} />
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
