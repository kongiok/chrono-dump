import styled from "styled-components";
import { useForm } from "react-hook-form";
import { login } from "../services/users.service";
import { useUserStore } from "@/utils/store/user.store.js";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const setToken = useUserStore(store => store.setToken);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setToken(await login(data.email, data.password));
    navigate('/app');
  };
  return (
    <Wrapper>
      <Card>
        <CardTitle>Login</CardTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Email"
            {...register("email")}
          />
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <Button type="submit">Login</Button>
        </Form>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Card = styled.section`
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  @media (min-width: 768px){
    width: 50%;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  font-family: "GenSekiGothic", sans-serif;
  color: #3d3d3d;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #0077b6;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;
