import { yupResolver } from "@hookform/resolvers/yup";
import { memo, useState, useCallback } from "react";

import { initiateSignin } from "@/features/authentication/signin/model/signin";
import {
  type SigninFormSchema,
  signinFormSchema,
} from "@/features/authentication/signin/model/signinFormSchema";
import { setUserInfo } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib/hooks";
import { useForm } from "@/shared/lib/validation";
import { Alert, Button, Input } from "@/shared/ui";

import type { SigninFormProps } from "./interfaces";
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
        const { followersIds, followingIds, tweetsIds, ...rest } = res;
        dispatch(
          setUserInfo({
            userData: {
              ...rest,
            },
            followersIds,
            followingIds,
            tweetsIds,
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
        id="email"
        type="email"
        placeholder="Email address"
        errorMessage={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="password"
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
