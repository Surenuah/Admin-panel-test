import { Sidebar } from "@/components/molecules/Sidebar.tsx";
import { UserList } from "@/components/organisms/UserList.tsx";
import { useEffect, useState } from "react";
import { UsersT, UserT } from "@/types/AdminPanel.ts";
import { useQuery } from "react-query";
import { adminPanelApi } from "../../api/adminPanel.tsx";
import { notification } from "antd";
import { USER_PERMISSION } from "@/constants/AdminPanel.ts";

export const AdminPanelPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchedEmail, setSearchedEmail] = useState("");
  const [addedUsers, setAddedUsers] = useState<UsersT[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserT>();

  const { data: allUsers } = useQuery(["data/users"], () =>
    adminPanelApi.getAllUsers().then((response) => response.data),
  );

  const sendInviteToUser = (newUser: UsersT) => {
    const isEmailUnique = !addedUsers.some(
      (user) => user.email.trim() === newUser.email.trim(),
    );

    if (isEmailUnique) {
      setAddedUsers((prevUsers) => [...prevUsers, newUser]);

      notification.success({
        message: "Успех",
        description: `${USER_PERMISSION} с ${newUser?.email} успешно добавлен!`,
      });
    } else {
      notification.error({
        message: "Ошибка",
        description: `${USER_PERMISSION} с ${newUser?.email} уже существует`,
      });
    }
  };

  const deleteUser = (email?: string) => {
    setAddedUsers((prevUsers) =>
      prevUsers.filter((user) => user.email !== email),
    );
  };

  const editUser = (newEmail?: string, newPermissions?: string[]) => {
    setAddedUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.email === selectedUser?.email) {
          return {
            ...user,
            email: newEmail || user.email,
            permissions: newPermissions || user.permissions,
          };
        }

        return user;
      });
    });

    notification.success({
      message: "Успех",
      description: `${USER_PERMISSION} с ${selectedUser?.email} успешно изменен!`,
    });
  };

  useEffect(() => {
    setAddedUsers(allUsers || []);
  }, [allUsers]);

  return (
    <div className="flex w-screen h-full lg:min-h-screen">
      <Sidebar />
      <UserList
        searchedEmail={searchedEmail}
        setSearchedEmail={setSearchedEmail}
        addedUsers={addedUsers}
        onSendInvite={sendInviteToUser}
        deleteUser={deleteUser}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onEditUser={editUser}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
};
