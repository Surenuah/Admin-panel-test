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
  const [editUserPermissions, setEditUserPermissions] = useState<{
    email: string;
    permissions: string[];
  }>({
    email: "",
    permissions: [],
  });

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

  const setEmailAndPermissions = (email: string, permissions: string[]) => {
    setEditUserPermissions({ email, permissions });
  };

  useEffect(() => {
    setAllUsers(initialAllUsers || []);
  }, [initialAllUsers]);

  return (
    <div className={`flex w-screen min-h-screen`}>
      <Sidebar />
      <UserList
        searchedEmail={searchedEmail}
        setSearchedEmail={setSearchedEmail}
        allUsers={allUsers}
        sendInviteToUser={sendInviteToUser}
        deleteUser={deleteUser}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        editUserPermissions={editUserPermissions}
        setEditUserPermissions={setEmailAndPermissions}
      />
    </div>
  );
};
