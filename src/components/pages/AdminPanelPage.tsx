import { Sidebar } from "@/components/molecules/Sidebar.tsx";
import { UserList } from "@/components/organisms/UserList.tsx";

export const AdminPanelPage = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <UserList />
    </div>
  );
};
