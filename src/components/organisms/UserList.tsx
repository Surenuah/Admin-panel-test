import { SearchAndAddUserMolecule } from "@/components/molecules/SearchAndAddUserMolecule.tsx";
import { UserCard } from "@/components/atoms/UserCard.tsx";

export const UserList = () => {
  return (
    <div
      className="bg-gray-100 flex flex-col items-center justify-start"
      style={{ flex: "25" }}
    >
      <div className="bg-white rounded-[10px] mt-7 w-[80%]">
        <SearchAndAddUserMolecule />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};
