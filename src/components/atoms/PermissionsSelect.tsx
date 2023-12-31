import { Checkbox, Select as SelectAntd } from "antd";
import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import { ALL_PERMISSIONS } from "@/constants/AdminPanel.ts";

interface Props {
  id: string;
  value: string[];
  onChange: (value: string[]) => void;
}

const Select = styled(SelectAntd)`
  .ant-select-selector {
    border: 1px solid #c1c1cb;
    border-radius: 10px;
  }

  .ant-select-selection-placeholder {
    color: #9494a0;
  }
`;

export const PermissionsSelect: FC<Props> = ({ id, value, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(value || []);
  const isAllSelected = selectedOptions.length === ALL_PERMISSIONS.length;

  useEffect(() => {
    setSelectedOptions(value);
  }, [value]);

  const handleSelectChange = (selectedValues: string[]) => {
    setTimeout(() => {
      setSelectedOptions(selectedValues);
      onChange(selectedValues);
    }, 0);
  };

  const handleClear = () => {
    setSelectedOptions([]);
    onChange([]);
  };

  const handleSelectAll = () => {
    const allPermissions = ALL_PERMISSIONS.map((permission) => permission);
    const newSelectedOptions = isAllSelected ? [] : allPermissions;
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
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
      onChange={(value) => {
        if (Array.isArray(value) && value.includes("all")) {
          handleSelectAll();
        } else {
          handleSelectChange(value as string[]);
        }
      }}
      onClear={handleClear}
    >
      <SelectAntd.Option key="all" value="all">
        <Checkbox className="mr-[8px]" checked={isAllSelected}>
          Все
        </Checkbox>
      </SelectAntd.Option>

      {ALL_PERMISSIONS.map((permission) => (
        <SelectAntd.Option key={permission} value={permission}>
          <Checkbox
            className="mr-[8px]"
            checked={selectedOptions.includes(permission)}
          >
            {permission}
          </Checkbox>
        </SelectAntd.Option>
      ))}
    </Select>
  );
};
