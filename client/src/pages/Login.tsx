import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TUserLoginInfo } from "../types";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import verifyToken from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      id: "0001",
      password: "admin12345",
    },
  });
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onsubmit = async (data: { id: string; password: string }) => {
    const tostId = toast.loading("Logging in");
    try {
      const userInfo: TUserLoginInfo = {
        id: data?.id,
        password: data?.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken);

      dispatch(
        setUser({
          user: user,
          token: res.data.accessToken,
        })
      );
      toast.success("Log in", { id: tostId, duration: 2000 });

      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something went wrong", { id: tostId, duration: 2000 });
    }
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
