import moreUserCardIcon from "../../assets/common/More_User_Card_Icon.svg";
import { Button } from "antd";
import { FC } from "react";
import { UsersT } from "../../types/AdminPanel.ts";

interface Props {
  allUsers?: UsersT[];
}

export const UserCard: FC<Props> = ({ allUsers }) => {
  const sortedUsers = allUsers?.slice().sort((a, b) => {
    if (a.permissions.includes("Администратор")) {
      return -1;
    }
    if (b.permissions.includes("Администратор")) {
      return 1;
    }

    return 0;
  });

  return (
    <>
      {sortedUsers?.map((user, index) => (
        <div key={index} className="flex p-6 hover:bg-gray-100">
          <img
            className="rounded-[50%] w-[64px] h-[64px]"
            src={user.image}
            alt=""
          />
          <div className="flex flex-grow justify-between ml-2">
            <div className="flex flex-col">
              <div className="flex">
                <span className="font-semibold">{user.name}</span>
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
            <Button
              className="border-none bg-transparent flex justify-center"
              icon={<img src={moreUserCardIcon} alt="" />}
            />
          </div>
        </div>
      ))}
    </>
  );
};
