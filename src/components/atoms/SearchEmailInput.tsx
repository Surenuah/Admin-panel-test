import { Input } from "antd";
import searchIcon from "../../assets/common/Search_Icon.svg";

export const SearchEmailInput = () => {
  return (
    <Input
      className="font-semibold placeholder-[#9494A0] border-[#C1C1CB] w-[70%] h-[35px] rounded-[10px] text-[15px]"
      placeholder="Поиск по Email"
      suffix={<img src={searchIcon} alt="" />}
    />
  );
};
