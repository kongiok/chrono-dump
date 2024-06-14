import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/login", data);
      if (response.data.success) { navigate("/app"); } 
      else { setLoginError("Invalid email or password"); }
    } catch (error) { setLoginError("An error occurred during login"); }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Email</Label>
          <Input type="email" {...register("email", { required: "Email is required" })} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputContainer>

        <InputContainer>
          <Label>Password</Label>
          <Input type="password" {...register("password", { required: "Password is required" })} />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputContainer>

        {loginError && <ErrorMessage>{loginError}</ErrorMessage>}

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

// Styled components
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875em;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
