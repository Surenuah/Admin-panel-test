import { Select as SelectAntd } from "antd";
import styled from "@emotion/styled";

const Select = styled(SelectAntd)`
  .ant-select-selector {
    border: 1px solid #c1c1cb !important;
    border-radius: 10px;
  }

  .ant-select-selection-placeholder {
    color: #9494a0;
  }
`;

export const PermissionsSelect = () => {
  return <Select className="h-[45px]" placeholder="Выберите права доступа" />;
};
