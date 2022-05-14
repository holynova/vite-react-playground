import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { log } from "../../utils/debug";
import "./InviteModal.less";
import * as service from "../../utils/service";
// import  {log} from ''
interface Props {}

const InviteModal: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);
  const [myForm] = Form.useForm();

  useEffect(() => {}, [myForm]);

  const onSubmit = useCallback(() => {
    // validate
    myForm
      .validateFields()
      .then((formData) => {
        setError(null);
        const params = {
          name: formData.name,
          email: formData.email,
        };
        setLoading(true);
        return service
          .subscribe(params)
          .then((response) => {
            message.success("successfully subscribed");
          })
          .then(() => {
            myForm.resetFields();
            setVisible(false);
          })
          .catch((e) => {
            setError(e);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch((e) => {
        log("form validation error");
      });
  }, [myForm]);

  const formPart = (
    <Form
      form={myForm}
      initialValues={
        {
          // name: "foo",
          // email: "usedemail@airwallex.com",
          // emailConfirm: "usedemail@airwallex.com",
        }
      }
    >
      <Form.Item
        name="name"
        rules={[{ required: true }, { min: 3 }]}
        hasFeedback
      >
        <Input placeholder="Full name"></Input>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true }, { type: "email" }]}
        hasFeedback
      >
        <Input placeholder="Email"></Input>
      </Form.Item>

      <Form.Item
        name="emailConfirm"
        dependencies={["email"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your email!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("email") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two email that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input placeholder="Confirm Email"></Input>
      </Form.Item>
      <Form.Item>
        <Button loading={loading} type="primary" onClick={onSubmit}>
          Confirm
        </Button>
      </Form.Item>
      {error ? <div className="error-message">{error.message}</div> : null}
    </Form>
  );
  return (
    <>
      <Modal
        className="InviteModal"
        visible={visible}
        style={{ padding: "20px" }}
        footer={false}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <h3>Request on invite</h3>
        {formPart}
      </Modal>
      <div
        className="trigger"
        onClick={() => {
          setVisible(true);
        }}
        // {props.children}
        // {props.chi <Button>Request an Invite</Button>}
      >
        <Button className="button-send" type="primary">
          Request an Invite
        </Button>
      </div>
    </>
  );
};

export default InviteModal;
