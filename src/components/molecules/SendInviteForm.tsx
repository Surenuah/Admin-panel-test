import { Button, Form } from "antd";
import { EmailInput } from "@/components/atoms/EmailInput.tsx";
import { PermissionsSelect } from "@/components/atoms/PermissionsSelect.tsx";
import { useFormik } from "formik";
import Title from "antd/es/typography/Title";

export const SendInviteForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      permission: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
          <EmailInput />
        </Form.Item>
        <Form.Item
          className="w-[100%] mb-1.5"
          validateStatus={formik.errors.permission && "error"}
          required
        >
          <PermissionsSelect />
        </Form.Item>
        <Button className="bg-[#32C076] text-white border-none rounded-[10px] font-futura text-[18px] w-[100%] h-[45px]">
          Отправить приглашение
        </Button>
      </Form>
    </div>
  );
};
