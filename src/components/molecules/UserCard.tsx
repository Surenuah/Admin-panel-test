import { FC } from "react";
import { UsersT } from "../../types/AdminPanel.ts";
import accountIcon from "../../assets/sidebar/Account_Icon.svg";
import { UserActionsPopover } from "@/components/atoms/UserActionsPopover.tsx";

interface Props {
  allUsers?: UsersT[];
  searchedEmail: string;
  onDeleteUser: (value: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  onSendInvite: (values: UsersT) => void;
}

export const UserCard: FC<Props> = ({
  allUsers,
  searchedEmail,
  onDeleteUser,
  isModalOpen,
  setIsModalOpen,
  onSendInvite,
}) => {
  const sortedUsers = allUsers?.slice().sort((a, b) => {
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
    <>
      {filteredUsers?.map((user, userIndex) => (
        <div key={userIndex} className="flex p-6 hover:bg-gray-100">
          <img
            className="rounded-[50%] w-[64px] h-[64px]"
            src={user.image ?? accountIcon}
            alt=""
          />
          <div className="flex flex-grow justify-between ml-2">
            <div className="flex flex-col">
              <div className="flex">
                <span className="font-semibold">
                  {user.name ?? "Пользователь"}
                </span>
                <span className="text-[#9494A0] ml-2">{user.email}</span>
              </div>
              <div className="flex">
                {user.permissions.map((permission) => (
                  <span
                    className={`border rounded-[10px]
                      ${
                        permission === "Администратор"
                          ? "border-[#5A57FF] text-[#5A57FF] font-normal"
                          : "border-[#C1C1CB] text-[#9494A0] font-normal"
                      }w-[70%] text-center py-1 px-2 mt-2 mr-2
                    `}
                    key={permission}
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
            <UserActionsPopover
              userEmail={user.email}
              onDeleteUser={onDeleteUser}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              onSendInvite={onSendInvite}
            />
          </div>
        </div>
      ))}
    </>
  );
};
