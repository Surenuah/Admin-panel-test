import { Button } from "antd";
import { FC, ReactNode } from "react";

interface Props {
  buttonText: ReactNode;
  onClick: () => void;
}

export const PopoverActionButton: FC<Props> = ({ buttonText, onClick }) => {
  return (
    <Button
      className="bg-transparent border-none outline-none flex items-center justify-center"
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};
