import { Sidebar } from "@/components/molecules/Sidebar.tsx";
import { SearchAndAddUserMolecule } from "@/components/molecules/SearchAndAddUserMolecule.tsx";

export const App = () => {
  return (
    <div className="flex !bg-[#9494A0]">
      <Sidebar />
      <SearchAndAddUserMolecule />
    </div>
  );
};
