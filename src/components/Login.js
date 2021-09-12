import { Form, Input, Button, message } from "antd";
import "./css/Lodin.css";
import { TOKEN, USERNAME, PASSWORD, SUBDOMIN } from "./../const";
import { createMahalla } from "../host/config";

const Login = () => {
  const onFinish = (values) => {
    if (
      values.username === USERNAME &&
      values.password === PASSWORD &&
      values.subdomain === SUBDOMIN
    ) {
      createMahalla(
        `_username=${values.username}&_password=${values.password}&_subdomain=${values.subdomain}`
      )
        .then((res) => {
          localStorage.setItem(TOKEN, res.data.token);
          window.location.href = "/dashboard";
        })
        .catch((err) => {
          message.error(err);
        });
    } else {
      message.error("Failed to sign in");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-w">
      <div className="login-center shadow">
        <h4 className="text-center">Sign In</h4>
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 20,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            className="my-3"
            label="Sumdomain"
            name="subdomain"
            rules={[
              {
                required: true,
                message: "Please input your subdomimn!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="shadow"
            wrapperCol={{
              //   offset: 2,
              span: 24,
            }}
          >
            <Button type="primary" block htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
