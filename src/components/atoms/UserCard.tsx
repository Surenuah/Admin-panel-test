import userCardAvatar from "../../assets/common/User_Card_Avatar.png";

export const UserCard = () => {
  return (
    <div className="flex">
      <img className="rounded-[50%]" src={userCardAvatar} alt="" />
      <div className="flex flex-col ml-2">
        <div className="flex">
          <span className="font-semibold">Артем Иванов</span>
          <span className="text-[#9494A0] ml-2">example@email.com</span>
        </div>
        <span className="border border-[#5A57FF] rounded-[10px] text-[#5A57FF] w-[130px] text-center p-1 mt-2">
          Администратор
        </span>
      </div>
    </div>
  );
};
