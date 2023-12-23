import { Input } from "antd";
import searchIcon from "../../assets/common/Search_Icon.svg";

export const SearchEmailInput = () => {
  return (
    <Input
      className="font-semibold placeholder-[#9494A0] border-[#C1C1CB]"
      placeholder="Поиск по Email"
      suffix={<img src={searchIcon} alt="" />}
    />
  );
};
