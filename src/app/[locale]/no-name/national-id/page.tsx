"use client";
import { ChangeEvent, FC, useEffect, useState } from "react";
// Ui Components
import { Form, Header, FormItem, SingleInput } from "@/components";
// Hooks
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
// Helpers
import {
  isValidIranianNationalCode,
  isValidPhone,
} from "@/helpers/inputChecker";
import { store } from "@/helpers/storage";
// Services
import { postNationalId } from "@/httpService/v1/auth";

const NationalId: FC = () => {
  const t = useTranslations("noName");
  const router = useRouter();
  const params = useSearchParams();
  const phone = params.get("phone");

  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const redirectToPhonenumberPage = (): void => {
    router.replace("/no-name/phone-number");
  };

  const isPhoneInvalid = !phone || !isValidPhone(phone ?? "");

  useEffect(() => {
    if (isPhoneInvalid) {
      redirectToPhonenumberPage();
    }
  }, [phone]);

  const handelChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length < 11) {
      setValue(e.target.value);
      if (e.target.value) {
        removeErrorState();
      }
    }
  };
  const handeSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (handleValueValidation() && phone) {
      setLoading(true);
      postNationalId(value, phone)
        .then((res) => {
          store("info", res);
          router.push("/no-name/success");
        })
        .catch(({ response }) => {
          setErrorState(response?.data?.message);
          if (
            response?.data?.code === "exception.messages.call-service-error"
          ) {
            setIsDisabled(false);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleValueValidation = (): boolean => {
    let isValid = true;
    if (value) {
      const result = isValidIranianNationalCode(value);
      if (result) {
        removeErrorState();
        isValid = true;
      } else {
        isValid = false;
        setErrorState(t("idIsInvalid"));
      }
    } else {
      isValid = false;
      setErrorState(t("idRequired"));
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
        <Form onSubmit={handeSubmit} disabled={isDisabled} loading={loading}>
          <FormItem title={t("enterID")}>
            <SingleInput
              icon="ID"
              name="id"
              placeHolder={t("idPlaceholder")}
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

export default NationalId;
