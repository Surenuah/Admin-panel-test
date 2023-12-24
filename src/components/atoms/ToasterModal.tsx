import { Button, Modal } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";

interface Props {
  confirmText: string;
}

export const ToasterModal: FC<Props> = ({ confirmText }) => {
  return (
    <Modal>
      <Title level={3}>{confirmText}</Title>
      <Button className="bg-[#32C076] text-white border-none rounded-[10px] font-futura text-[18px] w-[100%] h-[45px]">
        Закрыть
      </Button>
    </Modal>
  );
};
