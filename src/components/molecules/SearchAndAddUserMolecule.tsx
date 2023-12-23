import Title from "antd/es/typography/Title";
import { SearchEmailInput } from "@/components/atoms/SearchEmailInput.tsx";
import { AddUserButton } from "@/components/atoms/AddUserButton.tsx";
import { FC, useState } from "react";
import { SendInviteModal } from "@/components/molecules/SendInviteModal.tsx";

interface Props {
  setSearchedEmail: (e: string) => void;
}

export const SearchAndAddUserMolecule: FC<Props> = ({ setSearchedEmail }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-between p-5 pb-2 mx-3">
      <Title className="font-futura" level={2}>
        Команда
      </Title>
      <div className="flex justify-end w-[80%]">
        <SearchEmailInput setSearchedEmail={setSearchedEmail} />
        <AddUserButton onClick={() => setIsModalOpen(true)} />
        <SendInviteModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
};
