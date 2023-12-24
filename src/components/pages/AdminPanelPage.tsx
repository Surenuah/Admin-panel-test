import { Sidebar } from "@/components/molecules/Sidebar.tsx";
import { UserList } from "@/components/organisms/UserList.tsx";
import { useEffect, useState } from "react";
import { UsersT } from "../../types/AdminPanel.ts";
import { useQuery } from "react-query";
import { adminPanelApi } from "../../api/adminPanel.tsx";
import { notification } from "antd";

export const AdminPanelPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchedEmail, setSearchedEmail] = useState("");
  const [addedUsers, setAddedUsers] = useState<UsersT[]>([]);
  const [editUserPermissions, setEditUserPermissions] = useState<{
    email: string;
    permissions: string[];
  }>({
    email: "",
    permissions: [],
  });

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
        description: `Пользователь с email ${editUserPermissions.email} ${
          editUserPermissions.email ? "успешно изменен!" : "успешно добавлен!"
        }`,
      });
    } else {
      notification.error({
        message: "Ошибка",
        description: "Пользователь с таким email уже существует",
      });
    }
  };

  const deleteUser = (email: string) => {
    setAddedUsers((prevUsers) =>
      prevUsers.filter((user) => user.email !== email),
    );
  };

  const editUser = () => {
    const editedUserIndex = addedUsers.findIndex(
      (user) => user.email === editUserPermissions.email,
    );

    if (editedUserIndex !== -1) {
      const updatedUser = {
        ...addedUsers[editedUserIndex],
        permissions: editUserPermissions.permissions,
      };

      setAddedUsers((prevUsers) => [
        ...prevUsers.slice(0, editedUserIndex),
        updatedUser,
        ...prevUsers.slice(editedUserIndex + 1),
      ]);

      setEditUserPermissions({
        email: "",
        permissions: [],
      });

      setEmailAndPermissions("", []);

      notification.success({
        message: "Успех",
        description: `Пользователь с email ${editUserPermissions.email} ${
          editUserPermissions.email ? "успешно изменен!" : "успешно добавлен!"
        }`,
      });
    }
  };

  const setEmailAndPermissions = (email: string, permissions: string[]) => {
    setEditUserPermissions({ email, permissions });
  };

  useEffect(() => {
    setAddedUsers(allUsers || []);
  }, [allUsers]);

  return (
    <div className={`flex w-screen min-h-screen`}>
      <Sidebar />
      <UserList
        searchedEmail={searchedEmail}
        setSearchedEmail={setSearchedEmail}
        addedUsers={addedUsers}
        sendInviteToUser={sendInviteToUser}
        deleteUser={deleteUser}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        editUserPermissions={editUserPermissions}
        setEditUserPermissions={setEmailAndPermissions}
        onEditUser={editUser}
      />
    </div>
  );
};
