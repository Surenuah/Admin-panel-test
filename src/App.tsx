import { Sidebar } from "@/components/molecules/Sidebar.tsx";
import { UserList } from "@/components/organisms/UserList.tsx";

export const App = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <UserList />
    </div>
  );
};
