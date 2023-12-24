import { Button, Form } from "antd";
import { EmailInput } from "@/components/atoms/EmailInput.tsx";
import { PermissionsSelect } from "@/components/atoms/PermissionsSelect.tsx";
import { useFormik } from "formik";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import { UsersT } from "../../types/AdminPanel.ts";

interface Props {
  onSendInvite: (values: UsersT) => void;
}

export const SendInviteForm: FC<Props> = ({ onSendInvite }) => {
  const formik = useFormik<UsersT>({
    initialValues: {
      email: "",
      permissions: [],
    },
    onSubmit: (values) => {
      onSendInvite(values);
    },
  });

  return (
    <div className="p-11">
      <Title level={2}>Отправьте приглашение</Title>
      <Form
        name="basic"
        onSubmitCapture={formik.handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <Form.Item
          className="w-[100%] mb-1.5"
          validateStatus={formik.errors.email && "error"}
          required
        >
          <EmailInput
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          className="w-[100%] mb-1.5"
          validateStatus={formik.errors.permissions && "error"}
          required
        >
          <PermissionsSelect
            id="permissions"
            value={formik.values.permissions}
            onChange={(value) => formik.setFieldValue("permissions", value)}
          />
        </Form.Item>
        <Button
          disabled={!formik.isValid || !formik.dirty}
          className="bg-[#32C076] text-white border-none rounded-[10px] font-futura text-[18px] w-[100%] h-[45px]"
          htmlType="submit"
        >
          Отправить приглашение
        </Button>
      </Form>
    </div>
  );
};
