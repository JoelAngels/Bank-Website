import React from "react";
import {
  Container,
  FormWrap,
  FormContent,
  FormButton,
  FormInput,
  Icon,
  Form,
  FormH1,
  FormLabel,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Sagacity</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required>
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type="password" required />
                <FormButton type="submit">Continue</FormButton>
                <Text>Forgot Password</Text>
              </FormInput>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
