import Title from "antd/es/typography/Title";
import { SearchEmailInput } from "@/components/atoms/SearchEmailInput.tsx";
import { AddUserButton } from "@/components/atoms/AddUserButton.tsx";

export const SearchAndAddUserMolecule = () => {
  return (
    <div className="flex justify-between p-5 pb-2 mx-3">
      <Title className="font-futura" level={2}>
        Команда
      </Title>
      <div className="flex justify-end w-[80%]">
        <SearchEmailInput />
        <AddUserButton />
      </div>
    </div>
  );
};
