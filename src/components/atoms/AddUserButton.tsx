import { Button } from "antd";
import { FC } from "react";

interface Props {
  onClick: () => void;
}

export const AddUserButton: FC<Props> = ({ onClick }) => {
  return (
    <Button
      className="w-[230px] bg-[#32C076] text-white border-none rounded-[10px] h-[35px] ml-3 font-futura text-[18px]"
      onClick={onClick}
    >
      Добавить пользователя
    </Button>
  );
};
