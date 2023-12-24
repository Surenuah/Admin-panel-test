import { Select as SelectAntd } from "antd";
import styled from "@emotion/styled";
import { FC, useState } from "react";
import { allPermissions } from "../../constants/AdminPanel.ts";

interface Props {
  id: string;
  value: string[];
  onChange: (value: string[]) => void;
}

const Select = styled(SelectAntd)`
  .ant-select-selector {
    border: 1px solid #c1c1cb !important;
    border-radius: 10px;
  }

  .ant-select-selection-placeholder {
    color: #9494a0;
  }
`;

export const PermissionsSelect: FC<Props> = ({ id, value, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(value || []);

  const handleSelectChange = (selectedValues: string[]) => {
    if (selectedValues.includes("Все")) {
      setSelectedOptions(allPermissions);
    } else {
      setSelectedOptions(selectedValues);
    }

    onChange(selectedValues);
  };

  return (
    <Select
      id={id}
      value={selectedOptions}
      className="h-[45px]"
      placeholder="Выберите права доступа"
      mode="multiple"
      allowClear
      filterOption={(input, option) =>
        (option?.children?.toString() ?? "")
          .toLowerCase()
          .includes(input.toLowerCase())
      }
      maxTagCount="responsive"
      showSearch
      onChange={(value) => handleSelectChange(value as string[])}
    >
      <SelectAntd.Option key="Все" value="Все">
        Все
      </SelectAntd.Option>
      {allPermissions.map((permission) => (
        <SelectAntd.Option key={permission} value={permission}>
          {permission}
        </SelectAntd.Option>
      ))}
    </Select>
  );
};
