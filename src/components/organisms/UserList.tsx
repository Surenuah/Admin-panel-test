import { SearchAndAddUser } from "@/components/molecules/SearchAndAddUser.tsx";
import { UserCard } from "@/components/molecules/UserCard.tsx";
import { UsersT } from "../../types/AdminPanel.ts";
import { FC } from "react";

interface Props {
  searchedEmail: string;
  setSearchedEmail: (value: string) => void;
  addedUsers: UsersT[];
  sendInviteToUser?: (value: UsersT) => void;
  deleteUser?: (value: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  editUserPermissions: {
    email: string;
    permissions: string[];
  };
  setEditUserPermissions: (email: string, permissions: string[]) => void;
  onEditUser: () => void;
}

export const UserList: FC<Props> = ({
  searchedEmail,
  setSearchedEmail,
  addedUsers,
  sendInviteToUser,
  deleteUser,
  isModalOpen,
  setIsModalOpen,
  editUserPermissions,
  setEditUserPermissions,
  onEditUser,
}) => {
  return (
    <div
      className="bg-gray-100 flex flex-col items-center justify-start"
      style={{ flex: "25" }}
    >
      <div className="bg-white rounded-[10px] mt-12 w-[80%]">
        <SearchAndAddUser
          setSearchedEmail={setSearchedEmail}
          onSendInvite={sendInviteToUser}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          editUserPermissions={editUserPermissions}
          onEditUser={onEditUser}
        />
        <UserCard
          addedUsers={addedUsers}
          searchedEmail={searchedEmail}
          onDeleteUser={deleteUser}
          setIsModalOpen={setIsModalOpen}
          setEditUserPermissions={setEditUserPermissions}
        />
      </div>
    </div>
  );
};
