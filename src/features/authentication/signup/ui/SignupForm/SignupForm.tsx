import { yupResolver } from "@hookform/resolvers/yup";
import { memo, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { initiateSignup } from "@/features/authentication/signup/model/signup";
import {
  SignupFormSchema,
  signupFormSchema,
} from "@/features/authentication/signup/model/signupFormSchema";
import { setUser } from "@/entities/user";
import {
  DATE_OF_BIRTH_INFO,
  MONTHS_DATA,
  DAYS_DATA,
  YEARS_DATA,
} from "@/shared/constants/dateOfBirth";
import { useAppDispatch } from "@/shared/lib/hooks";
import { Input, TextButton, Title, Text, Button, Select } from "@/shared/ui";

import { SignupFormProps } from "./interfaces";
import { Wrapper, DateOfBirthWrapper } from "./SignupForm.styled";

export const SignupForm = memo(function SignupForm({
  onComplete,
}: SignupFormProps) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isUsingPhone, setIsUsingPhone] = useState(true);

  const {
    setError,
    // formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignupFormSchema>({
    resolver: yupResolver(signupFormSchema),
  });

  const buttonText = isUsingPhone ? "Use email" : "Use phone number";

  const onSubmit = useCallback(
    async ({
      name,
      phoneNumber,
      email,
      password,
      dateOfBirth,
    }: SignupFormSchema) => {
      setIsLoading(true);

      try {
        const res = await initiateSignup({
          name,
          phoneNumber,
          email,
          password,
          dateOfBirth,
        });
        dispatch(
          setUser({
            ...res,
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

  const onUseEmailPhone = useCallback(() => {
    setIsUsingPhone((prev) => !prev);
  }, []);

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Name" {...register("name")} />
      {isUsingPhone ? (
        <Input
          key="phone"
          placeholder="Phone number"
          {...register("phoneNumber")}
        />
      ) : (
        <Input
          key="email"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
      )}
      <Input type="password" placeholder="Password" {...register("password")} />
      <TextButton text={buttonText} onClick={onUseEmailPhone} />
      <Title
        text="Date of birth"
        size="extrasmall"
        weight="bold"
        font="serif"
      />
      <Text text={DATE_OF_BIRTH_INFO} size="large" isSubtext />
      <DateOfBirthWrapper>
        <Select
          defaultValue="month"
          options={MONTHS_DATA}
          {...register("dateOfBirth.month")}
        />
        <Select
          defaultValue="day"
          options={DAYS_DATA}
          {...register("dateOfBirth.day")}
        />
        <Select
          defaultValue="year"
          options={YEARS_DATA}
          {...register("dateOfBirth.year")}
        />
      </DateOfBirthWrapper>
      <Button
        type="submit"
        text="Next"
        font="serif"
        variant="primary"
        disabled={isLoading}
      />
    </Wrapper>
  );
});
