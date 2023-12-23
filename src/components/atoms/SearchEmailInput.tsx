import { Input } from "antd";
import searchIcon from "../../assets/common/Search_Icon.svg";
import { ChangeEvent, FC } from "react";

interface Props {
  setSearchedEmail: (e: string) => void;
}

export const SearchEmailInput: FC<Props> = ({ setSearchedEmail }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedEmail(e.target.value);
  };

  return (
    <Input
      className="font-semibold placeholder-[#9494A0] border-[#C1C1CB] w-[70%] h-[35px] rounded-[10px] text-[15px]"
      placeholder="Поиск по Email"
      onChange={handleInputChange}
      suffix={<img src={searchIcon} alt="" />}
    />
  );
};
