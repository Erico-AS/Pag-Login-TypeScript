import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import React from "react";

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().min(6,'Mínimo 6').required('Campo obrigatório'),
}).required();

const Login = () => {

  const {control, formState: { errors, isValid}} = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur', 
    defaultValues,
    reValidateMode: 'onChange'
  })

    return (
        <Container>
          <LoginContainer>
            <Column>
              <Title>Login</Title>
              <Spacing />
              <Input
                name="email"
                placeholder="Email"
                control={control}
                errorMessage={errors?.email?.message}
              />
              <Spacing />
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                control={control}
                errorMessage={errors?.password?.message}
              />
              <Spacing />
              {isValid === true ? <Button title="Entrar" /> : <Button title="Entrar" estado="disable"/>}
            </Column>
          </LoginContainer>
        </Container>
    );
};

export default Login