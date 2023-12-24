import { Button, Modal } from "antd";
import Title from "antd/es/typography/Title";

export const ToasterModal = () => {
  return (
    <Modal>
      <Title level={3}>Приглашение отправлено на почту example@email.com</Title>
      <Button className="bg-[#32C076] text-white border-none rounded-[10px] font-futura text-[18px] w-[100%] h-[45px]">
        Закрыть
      </Button>
    </Modal>
  );
};
