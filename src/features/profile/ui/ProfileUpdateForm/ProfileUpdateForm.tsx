import { yupResolver } from "@hookform/resolvers/yup";
import { memo, useCallback, useMemo, useState } from "react";

import { handleProfileInfoUpdate } from "@/features/profile/model/profileInfo";
import {
  type ProfileInfoFormSchema,
  profileInfoFormSchema,
} from "@/features/profile/model/profileInfoFormSchema";
import { selectCurrentUser, updateUserInfo } from "@/entities/user";
import {
  MONTHS_DATA,
  DAYS_DATA,
  YEARS_DATA,
  MAX_DAYS,
  MONTH_KEY_BASE,
  YEAR_KEY_BASE,
  DOB_SPLIT_DELIMITER,
  DOB_POSITIONS_INDEX,
  DAY_KEY_BASE,
} from "@/shared/constants/dateOfBirth";
import { getDaysAmount } from "@/shared/helpers/date";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { useForm, useWatch } from "@/shared/lib/validation";
import { Input, Button, Select, Alert } from "@/shared/ui";

import type { ProfileUpdateFormProps } from "./interfaces";
import { Wrapper, DateOfBirthWrapper } from "./ProfileUpdateForm.styled";

const { month, day, year } = DOB_POSITIONS_INDEX;

export const ProfileUpdateForm = memo(function ProfileUpdateForm({
  onComplete,
}: ProfileUpdateFormProps) {
  const {
    displayName: name,
    dateOfBirth,
    description,
    phoneNumber,
  } = useAppSelector((state) => selectCurrentUser(state).userData!);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const {
    setError,
    formState: { errors },
    control,
    handleSubmit,
    register,
  } = useForm<ProfileInfoFormSchema>({
    resolver: yupResolver(profileInfoFormSchema),
    mode: "all",
    values: {
      name: name ?? "",
      phoneNumber: phoneNumber ?? "",
      description: description ?? "",
      monthOfBirth:
        MONTH_KEY_BASE +
          DOB_SPLIT_DELIMITER +
          dateOfBirth?.split(DOB_SPLIT_DELIMITER)?.[month] ?? MONTH_KEY_BASE,
      dayOfBirth:
        DAY_KEY_BASE +
          DOB_SPLIT_DELIMITER +
          dateOfBirth?.split(DOB_SPLIT_DELIMITER)?.[day] ?? DAY_KEY_BASE,
      yearOfBirth:
        YEAR_KEY_BASE +
          DOB_SPLIT_DELIMITER +
          dateOfBirth?.split(DOB_SPLIT_DELIMITER)?.[year] ?? YEAR_KEY_BASE,
    },
  });

  const [currentMonth, currentYear] = useWatch({
    control,
    name: ["monthOfBirth", "yearOfBirth"],
  });
  const currentMonthDays = useMemo(() => {
    if (
      currentMonth === undefined ||
      currentYear === undefined ||
      currentMonth === MONTH_KEY_BASE ||
      currentYear === YEAR_KEY_BASE
    )
      return MAX_DAYS;

    const currentMonthNumber = Number(currentMonth.split("-")[1]);
    const currentYearNumber = Number(currentYear.split("-")[1]);
    return getDaysAmount(currentMonthNumber, currentYearNumber);
  }, [currentMonth, currentYear]);

  const daysSlice = DAYS_DATA.slice(0, currentMonthDays + 1);
  const buttonText = isLoading ? "Updating account..." : "Next";

  const onSubmit = useCallback(
    async (params: ProfileInfoFormSchema) => {
      setIsLoading(true);

      try {
        const res = await handleProfileInfoUpdate(params);
        dispatch(updateUserInfo(res));
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
        id="image"
        label="Avatar image"
        errorMessage={errors.avatarImage?.message}
        accept="image/png,image/jpeg,image/jpg"
        type="file"
        {...register("avatarImage")}
      />
      <Input
        id="name"
        label="Name"
        placeholder="Enter your name"
        errorMessage={errors.name?.message}
        {...register("name")}
      />
      <Input
        id="desc"
        label="Description"
        placeholder="Enter your description"
        errorMessage={errors.name?.message}
        {...register("description")}
      />
      <Input
        id="phoneNumber"
        label="Phone number"
        placeholder="Enter your phone number"
        errorMessage={errors.phoneNumber?.message}
        {...register("phoneNumber")}
      />
      <DateOfBirthWrapper>
        <Select
          label="Month"
          id="month"
          defaultValue="month"
          options={MONTHS_DATA}
          errorMessage={errors.monthOfBirth?.message}
          {...register("monthOfBirth")}
        />
        <Select
          label="Day"
          id="day"
          defaultValue="day"
          options={daysSlice}
          errorMessage={errors.dayOfBirth?.message}
          {...register("dayOfBirth")}
        />
        <Select
          label="Year"
          id="year"
          defaultValue="year"
          options={YEARS_DATA}
          errorMessage={errors.yearOfBirth?.message}
          {...register("yearOfBirth")}
        />
      </DateOfBirthWrapper>
      {errors.root && (
        <Alert title="Error!" text={errors.root.message} variant="error" />
      )}
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
