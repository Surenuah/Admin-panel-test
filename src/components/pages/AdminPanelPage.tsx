import { Sidebar } from "@/components/molecules/Sidebar.tsx";
import { UserList } from "@/components/organisms/UserList.tsx";
import { useEffect, useState } from "react";
import { UsersT } from "../../types/AdminPanel.ts";
import { useQuery } from "react-query";
import { adminPanelApi } from "../../api/adminPanel.tsx";

export const AdminPanelPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchedEmail, setSearchedEmail] = useState("");
  const [allUsers, setAllUsers] = useState<UsersT[]>([]);
  const [displayedUsers, setDisplayedUsers] = useState<UsersT[]>([]);

  const { data: initialAllUsers } = useQuery(["data/users"], () =>
    adminPanelApi.getAllUsers().then((response) => response.data),
  );

  const sendInviteToUser = (newUser: UsersT) => {
    setAllUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const deleteUser = (email: string) => {
    setAllUsers((prevUsers) =>
      prevUsers.filter((user) => user.email !== email),
    );
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
    <div className={`flex w-screen min-h-screen`}>
      <Sidebar />
      <UserList
        searchedEmail={searchedEmail}
        setSearchedEmail={setSearchedEmail}
        displayedUsers={displayedUsers}
        sendInviteToUser={sendInviteToUser}
        deleteUser={deleteUser}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};
