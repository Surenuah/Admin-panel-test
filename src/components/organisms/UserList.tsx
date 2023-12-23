import { SearchAndAddUserMolecule } from "@/components/molecules/SearchAndAddUserMolecule.tsx";
import { UserCard } from "@/components/atoms/UserCard.tsx";
import { useQuery } from "react-query";
import { adminPanelApi } from "../../api/adminPanel.tsx";

export const UserList = () => {
  const { data: allUsers } = useQuery(["data/users"], () =>
    adminPanelApi.getAllUsers().then((response) => response.data),
  );

  return (
    <div
      className="bg-gray-100 flex flex-col items-center justify-start"
      style={{ flex: "25" }}
    >
      <div className="bg-white rounded-[10px] mt-12 w-[80%]">
        <SearchAndAddUserMolecule />
        <UserCard allUsers={allUsers} />
      </div>
    </div>
  );
};
