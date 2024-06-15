import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createUserByEmail, signInWithPassword } from "../services/user.service.js";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useUserStore } from "@/store/user.store.js";


export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState(null);
  const { setCredentials, setLogin } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginError) {
      toast.error(loginError);
    }
  }, [loginError]);

  const onSubmit = async (data) => {
    const { error: SignUpError } = await createUserByEmail({
      email: data.email,
      password: data.password,
      phone: data.phone,
      name: data.name,
    });
    if (SignUpError) {
      setLoginError(SignUpError.message);
      return;
    }
    const { data: signInData, error: SignInError } = await signInWithPassword(data.email, data.password);
    if (SignInError) {
      setLoginError(SignInError.message);
    }
    setLogin(true);
    console.log(signInData);
    // const { data: user, error } = await signInWithPassword(data.email, data.password);
    // if (error) {
    //   setLoginError(error.message);
    //   return;
    // }
    // console.log(user);
    // navigate("/app");
  };

  const inputToBeSubmitted = [
    { label: "email", insertType: "email", requiredText: "Email is required." },
    { label: "password", insertType: "password", requiredText: "Password is required." },
    { label: "Name", insertType: "text", requiredText: "Please tell us your name." },
    { label: "Phone", insertType: "text" }
  ]
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputToBeSubmitted.map((input, index) => (
          <InputContainer key={index}>
            <Label>{input.label}</Label>
            <Input type={input.insertType} {...register(input.label, { required: input.requiredText })} />
            {errors[input.label] && <ErrorMessage>{errors[input.label].message}</ErrorMessage>}
          </InputContainer>
        ))}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  margin: 10px 0;
`;

const Label = styled.label`
  font-weight: bold;
  text-transform: capitalize;
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
