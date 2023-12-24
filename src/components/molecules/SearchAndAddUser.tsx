import Title from "antd/es/typography/Title";
import { SearchEmailInput } from "@/components/atoms/SearchEmailInput.tsx";
import { AddUserButton } from "@/components/atoms/AddUserButton.tsx";
import { FC } from "react";
import { SendInviteModal } from "@/components/molecules/SendInviteModal.tsx";
import { UsersT } from "../../types/AdminPanel.ts";

interface Props {
  setSearchedEmail: (value: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  onSendInvite?: (values: UsersT) => void;
  editUserPermissions: {
    email: string;
    permissions: string[];
  };
  onEditUser: () => void;
}

export const SearchAndAddUser: FC<Props> = ({
  setSearchedEmail,
  onSendInvite,
  isModalOpen,
  setIsModalOpen,
  editUserPermissions,
  onEditUser,
}) => {
  return (
    <div className="flex justify-between p-5 pb-2 mx-3">
      <Title className="font-futura" level={2}>
        Команда
      </Title>
      <div className="flex justify-end w-[80%]">
        <SearchEmailInput setSearchedEmail={setSearchedEmail} />
        <AddUserButton onClick={() => setIsModalOpen(true)} />
        <SendInviteModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onSendInvite={onSendInvite}
          editUserPermissions={editUserPermissions}
          onEditUser={onEditUser}
        />
      </div>
    </div>
  );
};
