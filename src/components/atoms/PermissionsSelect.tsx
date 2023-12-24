import { Select as SelectAntd } from "antd";
import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
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

  useEffect(() => {
    setSelectedOptions(value);
  }, [value]);

  const handleSelectChange = (selectedValues: string[]) => {
    setSelectedOptions(selectedValues);
    onChange(selectedValues);
  };

  const handleClear = () => {
    setSelectedOptions([]);
    onChange([]);
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
      onClear={handleClear}
    >
      {allPermissions.map((permission) => (
        <SelectAntd.Option key={permission} value={permission}>
          {permission}
        </SelectAntd.Option>
      ))}
    </Select>
  );
};
