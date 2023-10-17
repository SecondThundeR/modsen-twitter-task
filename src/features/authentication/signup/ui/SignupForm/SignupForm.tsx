import { yupResolver } from "@hookform/resolvers/yup";
import { memo, useCallback, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

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
  MAX_DAYS,
} from "@/shared/constants/dateOfBirth";
import { getDaysAmount } from "@/shared/helpers/date";
import { useAppDispatch } from "@/shared/lib/hooks";
import { Input, Title, Text, Button, Select } from "@/shared/ui";

import { SignupFormProps } from "./interfaces";
import { Wrapper, DateOfBirthWrapper } from "./SignupForm.styled";

export const SignupForm = memo(function SignupForm({
  onComplete,
}: SignupFormProps) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {
    setError,
    formState: { errors },
    control,
    handleSubmit,
    register,
  } = useForm<SignupFormSchema>({
    resolver: yupResolver(signupFormSchema),
  });
  const [currentMonth, currentYear] = useWatch({
    control,
    name: ["monthOfBirth", "yearOfBirth"],
  });
  const currentMonthDays = useMemo(() => {
    if (!currentMonth || !currentYear) return MAX_DAYS;

    const test = getDaysAmount(
      Number(currentMonth.split("-")[1]),
      Number(currentYear.split("-")[1]),
    );
    return test;
  }, [currentMonth, currentYear]);
  const daysSlice = DAYS_DATA.slice(0, currentMonthDays + 1);

  const buttonText = isLoading ? "Creating account..." : "Next";

  const onSubmit = useCallback(
    async (params: SignupFormSchema) => {
      setIsLoading(true);

      try {
        const res = await initiateSignup(params);
        const { uid, displayName, email, phoneNumber, dateOfBirth } = res;
        dispatch(
          setUser({
            uid,
            displayName,
            email,
            phoneNumber,
            dateOfBirth,
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
      <Input
        placeholder="Name"
        errorMessage={errors.name?.message}
        {...register("name")}
      />
      <Input
        placeholder="Phone number"
        errorMessage={errors.phoneNumber?.message}
        {...register("phoneNumber")}
      />
      <Input
        type="email"
        placeholder="Email"
        errorMessage={errors.email?.message}
        {...register("email")}
      />
      <Input
        type="password"
        placeholder="Password"
        errorMessage={errors.password?.message}
        {...register("password")}
      />
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
          errorMessage={errors.monthOfBirth?.message}
          {...register("monthOfBirth")}
        />
        <Select
          defaultValue="day"
          options={daysSlice}
          errorMessage={errors.dayOfBirth?.message}
          {...register("dayOfBirth")}
        />
        <Select
          defaultValue="year"
          options={YEARS_DATA}
          errorMessage={errors.yearOfBirth?.message}
          {...register("yearOfBirth")}
        />
      </DateOfBirthWrapper>
      <Button
        type="submit"
        text={buttonText}
        font="serif"
        variant="primary"
        disabled={isLoading}
      />
    </Wrapper>
  );
});
