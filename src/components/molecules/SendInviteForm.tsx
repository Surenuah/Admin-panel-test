import { Button, Form, notification } from "antd";
import { EmailInput } from "@/components/atoms/EmailInput.tsx";
import { PermissionsSelect } from "@/components/atoms/PermissionsSelect.tsx";
import { useFormik } from "formik";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import { UsersT, UserT } from "../../types/AdminPanel.ts";

interface Props {
  onSendInvite?: (values: UsersT) => void;
  setIsModalOpen: (value: boolean) => void;
  selectedUser?: UserT;
  onEditUser: (email: string, permissions: string[]) => void;
}

export const SendInviteForm: FC<Props> = ({
  onSendInvite,
  setIsModalOpen,
  selectedUser,
  onEditUser,
}) => {
  const formik = useFormik<UsersT>({
    initialValues: {
      email: selectedUser?.email || "",
      permissions: selectedUser?.permissions || [],
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      try {
        if (selectedUser) {
          onEditUser(values.email, values.permissions);

          selectedUser.email = "";
          selectedUser.permissions = [];
        } else {
          onSendInvite?.(values);
        }

        formik.resetForm();
      } catch (err) {
        notification.error({
          message: "Ошибка",
          description: `Не удалось ${
            selectedUser?.email ? "изменить" : "добавить"
          } пользователя.`,
        });
      }

      setIsModalOpen(false);
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
