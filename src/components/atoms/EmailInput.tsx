import { Input } from "antd";
import { ChangeEvent, FC } from "react";

interface Props {
  name: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
}

export const EmailInput: FC<Props> = ({ name, value, onChange }) => {
  return (
    <Input
      name={name}
      value={value}
      onChange={onChange}
      className="border-[#C1C1CB] rounded-[10px] h-[45px] placeholder-[#9494A0] text-futura"
      placeholder="Email"
    />
  );
};
