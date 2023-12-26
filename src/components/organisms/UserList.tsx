import { SearchAndAddUser } from "@/components/molecules/SearchAndAddUser.tsx";
import { UserCard } from "@/components/molecules/UserCard.tsx";
import { UsersT, UserT } from "../../types/AdminPanel.ts";
import { FC } from "react";

interface Props {
  searchedEmail: string;
  setSearchedEmail: (value: string) => void;
  addedUsers: UsersT[];
  sendInviteToUser: (value: UsersT) => void;
  deleteUser: (value?: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  onEditUser: (email?: string, permissions?: string[]) => void;
  selectedUser?: UserT;
  setSelectedUser: (value: UserT) => void;
}

export const UserList: FC<Props> = ({
  searchedEmail,
  setSearchedEmail,
  addedUsers,
  sendInviteToUser,
  deleteUser,
  isModalOpen,
  setIsModalOpen,
  onEditUser,
  selectedUser,
  setSelectedUser,
}) => {
  const sortedUsers = addedUsers?.slice().sort((a, b) => {
    if (a.permissions.includes("Администратор")) {
      return -1;
    }
    if (b.permissions.includes("Администратор")) {
      return 1;
    }

    return 0;
  });

  const filteredUsers = sortedUsers?.filter((user) =>
    user.email.toLowerCase().includes(searchedEmail.toLowerCase()),
  );

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
          selectedUser={selectedUser}
          onEditUser={onEditUser}
        />
        {filteredUsers.map((user, userIndex) => {
          return (
            <UserCard
              key={userIndex}
              user={user}
              userIndex={userIndex}
              onDeleteUser={deleteUser}
              setIsModalOpen={setIsModalOpen}
              setSelectedUser={setSelectedUser}
            />
          );
        })}
      </div>
    </div>
  );
};
