import Title from "antd/es/typography/Title";
import { SearchEmailInput } from "@/components/atoms/SearchEmailInput.tsx";
import { AddUserButton } from "@/components/atoms/AddUserButton.tsx";

export const SearchAndAddUserMolecule = () => {
  return (
    <div className="flex">
      <Title>Команда</Title>
      <SearchEmailInput />
      <AddUserButton />
    </div>
  );
};
