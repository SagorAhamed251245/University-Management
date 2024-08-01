import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TUserLoginInfo } from "../types";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      id: "0001",
      password: "admin12345",
    },
  });

  const dispatch = useAppDispatch();
  const [login, { data, error }] = useLoginMutation();
  console.log("🚀 ~ Login ~ error:", error);
  console.log("🚀 ~ Login ~ data:", data);

  const onsubmit = async (data: { id: string; password: string }) => {
    const userInfo: TUserLoginInfo = {
      id: data?.id,
      password: data?.password,
    };
    const res = await login(userInfo).unwrap();
    dispatch(
      setUser({
        user: {},
        token: res.data.accessToken,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      This is Login component
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
