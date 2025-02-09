"use client";
import { ChangeEvent, FC, useState } from "react";
// Ui Components
import { Form, Header, FormItem, SingleInput } from "@/components";
// Hooks
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
// Helpers
import { isValidPhone } from "@/helpers/inputChecker";

const PhoneNumber: FC = () => {
  const t = useTranslations("noName");
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handelChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length < 12) {
      setValue(e.target.value);
      if (e.target.value) {
        removeErrorState();
      }
    }
  };
  const handeSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (handleValueValidation()) {
      router.push(`/no-name/otp?phone=${value}`);
    }
  };

  const handleValueValidation = (): boolean => {
    let isValid = true;
    if (value) {
      const result = isValidPhone(value);
      if (result) {
        removeErrorState();
        isValid = true;
      } else {
        isValid = false;
        setErrorState(t("phoneNumberIsInvalid"));
      }
    } else {
      isValid = false;
      setErrorState(t("phoneNumberIsRequired"));
    }
    return isValid;
  };
  const removeErrorState = (): void => {
    setIsDisabled(false);
    setError("");
  };
  const setErrorState = (text: string): void => {
    setIsDisabled(true);
    setError(text);
  };
  return (
    <div className="main-container">
      <Header title={t("registerBluCard")} hasBack />
      <div className="container">
        <Form
          text={t("confirCodeWillBeSending")}
          onSubmit={handeSubmit}
          disabled={isDisabled}
        >
          <FormItem title={t("enterPhoneNumber")}>
            <SingleInput
              icon="PHONE"
              name="phonenumber"
              placeHolder={t("phoneNUmberPlaceholder")}
              onChange={handelChange}
              error={error}
              value={value}
            />
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default PhoneNumber;
