import { SearchAndAddUserMolecule } from "@/components/molecules/SearchAndAddUserMolecule.tsx";
import { UserCard } from "@/components/molecules/UserCard.tsx";
import { useQuery } from "react-query";
import { adminPanelApi } from "../../api/adminPanel.tsx";
import { useEffect, useState } from "react";
import { UsersT } from "../../types/AdminPanel.ts";

// ... (ваш импорт)

export const UserList = () => {
  const [searchedEmail, setSearchedEmail] = useState("");
  const [allUsers, setAllUsers] = useState<UsersT[]>([]);
  const [displayedUsers, setDisplayedUsers] = useState<UsersT[]>([]);

  const { data: initialAllUsers } = useQuery(["data/users"], () =>
    adminPanelApi.getAllUsers().then((response) => response.data),
  );

  const sendInviteToUser = (newUser: UsersT) => {
    setAllUsers((prevUsers) => [...prevUsers, newUser]);
  };

  useEffect(() => {
    setAllUsers(initialAllUsers || []);
  }, [initialAllUsers]);

  useEffect(() => {
    setDisplayedUsers(
      allUsers.filter((user) =>
        user.email.toLowerCase().includes(searchedEmail.toLowerCase()),
      ),
    );
  }, [allUsers, searchedEmail]);

  return (
    <div
      className="bg-gray-100 flex flex-col items-center justify-start"
      style={{ flex: "25" }}
    >
      <div className="bg-white rounded-[10px] mt-12 w-[80%]">
        <SearchAndAddUserMolecule
          setSearchedEmail={setSearchedEmail}
          onSendInvite={sendInviteToUser}
        />
        <UserCard allUsers={displayedUsers} searchedEmail={searchedEmail} />
      </div>
    </div>
  );
};
