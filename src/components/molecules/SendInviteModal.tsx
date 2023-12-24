import { Modal as ModalAntd } from "antd";
import { FC } from "react";
import { SendInviteForm } from "@/components/molecules/SendInviteForm.tsx";
import styled from "@emotion/styled";
import { UsersT } from "../../types/AdminPanel.ts";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  onSendInvite: (values: UsersT) => void;
}

const Modal = styled(ModalAntd)`
  .ant-modal-content {
    border-radius: 25px;
  }

  .ant-modal-close-x {
    width: 40px;
    height: 40px;
    margin-left: -15px;
    margin-top: -5px;
    border-radius: 50%;
    background-color: #ebebf0;
    color: #c1c1cb;
  }
`;

export const SendInviteModal: FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  onSendInvite,
}) => {
  return (
    <Modal
      className="flex flex-col items-center justify-center"
      width="500"
      centered
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={false}
    >
      <SendInviteForm
        onSendInvite={onSendInvite}
        setIsModalOpen={setIsModalOpen}
      />
    </Modal>
  );
};
