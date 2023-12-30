import { FC } from "react";
import { UsersT, UserT } from "@/types/AdminPanel.ts";
import accountIcon from "../../assets/sidebar/Account_Icon.svg";
import { UserActionsPopover } from "@/components/molecules/UserActionsPopover.tsx";
import {
  ADMINISTRATOR_PERMISSION,
  USER_PERMISSION,
} from "@/constants/AdminPanel.ts";

interface Props {
  user?: UsersT;
  userIndex: number;
  onDeleteUser: (value?: string) => void;
  setIsModalOpen: (value: boolean) => void;
  setSelectedUser: (value: UserT) => void;
}

export const UserCard: FC<Props> = ({
  user,
  userIndex,
  onDeleteUser,
  setIsModalOpen,
  setSelectedUser,
}) => {
  return (
    <>
      <div key={userIndex} className="flex mt-3 p-2 lg:p-6 hover:bg-gray-100">
        <img
          className="rounded-[50%] w-[64px] h-[64px] object-cover"
          src={user?.image ?? accountIcon}
          alt=""
        />
        <div className="flex flex-grow justify-between ml-2">
          <div className="flex flex-col">
            <div className="flex flex-col lg:items-center lg:flex-row">
              <span className="font-semibold">
                {user?.name ?? USER_PERMISSION}
              </span>
              <span className="text-[#9494A0] ml-0 lg:ml-2">{user?.email}</span>
            </div>
            <div className="flex flex-wrap">
              {user?.permissions?.map((permission) => (
                <span
                  className={`border rounded-[10px] ${
                    permission === ADMINISTRATOR_PERMISSION
                      ? "border-[#5A57FF] text-[#5A57FF] font-normal"
                      : "border-[#C1C1CB] text-[#9494A0] font-normal"
                  }w-[70%] text-center py-1 px-2 mt-2 mr-2`}
                  key={permission}
                >
                  {permission}
                </span>
              ))}
            </div>
          </div>
          <UserActionsPopover
            userEmail={user?.email}
            onDeleteUser={onDeleteUser}
            userPermissions={user?.permissions}
            setIsModalOpen={setIsModalOpen}
            setSelectedUser={setSelectedUser}
          />
        </div>
      </div>
    </>
  );
};
