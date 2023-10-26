import { yupResolver } from "@hookform/resolvers/yup";
import { memo, useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import { setUserInfo } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib/hooks";
import { Alert, Button, Input } from "@/shared/ui";
import { initiateSignin } from "../../model/signin";
import {
  SigninFormSchema,
  signinFormSchema,
} from "../../model/signinFormSchema";

import { SigninFormProps } from "./interfaces";
import { Wrapper } from "./SigninForm.styled";

export const SigninForm = memo(function SigninForm({
  onComplete,
}: SigninFormProps) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {
    setError,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SigninFormSchema>({
    resolver: yupResolver(signinFormSchema),
    mode: "all",
  });

  const buttonText = isLoading ? "Entering account..." : "Log in";

  const onSubmit = useCallback(
    async (params: SigninFormSchema) => {
      setIsLoading(true);

      try {
        const res = await initiateSignin(params);
        const {
          uid,
          displayName,
          description,
          avatarURL,
          email,
          phoneNumber,
          dateOfBirth,
          ...rest
        } = res;
        dispatch(
          setUserInfo({
            userData: {
              uid,
              displayName,
              description,
              avatarURL,
              email,
              phoneNumber,
              dateOfBirth,
            },
            ...rest,
          }),
        );
        onComplete?.();
      } catch (error) {
        setError("root", {
          type: "internal",
          message: (error as Error).message,
        });
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, onComplete, setError],
  );

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      {errors.root && (
        <Alert title="Error!" text={errors.root.message} variant="error" />
      )}
      <Input
        type="email"
        placeholder="Email address"
        errorMessage={errors.email?.message}
        {...register("email")}
      />
      <Input
        type="password"
        placeholder="Password"
        errorMessage={errors.password?.message}
        {...register("password")}
      />
      <Button
        type="submit"
        text={buttonText}
        variant="primary"
        disabled={isLoading}
      />
    </Wrapper>
  );
});
