import { SearchAndAddUserMolecule } from "@/components/molecules/SearchAndAddUserMolecule.tsx";
import { UserCard } from "@/components/molecules/UserCard.tsx";
import { UsersT } from "../../types/AdminPanel.ts";
import { FC } from "react";

interface Props {
  searchedEmail: string;
  setSearchedEmail: (value: string) => void;
  displayedUsers: UsersT[];
  sendInviteToUser: (value: UsersT) => void;
  deleteUser: (value: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export const UserList: FC<Props> = ({
  searchedEmail,
  setSearchedEmail,
  displayedUsers,
  sendInviteToUser,
  deleteUser,
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <div
      className="bg-gray-100 flex flex-col items-center justify-start"
      style={{ flex: "25" }}
    >
      <div className="bg-white rounded-[10px] mt-12 w-[80%]">
        <SearchAndAddUserMolecule
          setSearchedEmail={setSearchedEmail}
          onSendInvite={sendInviteToUser}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <UserCard
          allUsers={displayedUsers}
          searchedEmail={searchedEmail}
          onDeleteUser={deleteUser}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onSendInvite={sendInviteToUser}
        />
      </div>
    </div>
  );
};
