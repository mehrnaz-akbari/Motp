"use client";
import { ChangeEvent, FC, useEffect, useState } from "react";
// Ui Components
import {
  Form,
  Header,
  FormItem,
  OtpInputs,
  OtpTimeCounter,
} from "@/components";
// Hooks
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
// Services
import { requestOtp, postOtp } from "@/httpService/v1/auth";
// Helpers
import { store, phoneNumberFormatter } from "@/helpers";
import { isValidPhone } from "@/helpers/inputChecker";
// Types
import { GetOtpResponse } from "@/types";

const OtpPage: FC = () => {
  const t = useTranslations("noName");
  const router = useRouter();
  const [otpCode, setOtpCode] = useState<string[]>([]);
  const [otpTime, setOtpTime] = useState<number>(60);
  const [error, setError] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const params = useSearchParams();
  const phone = params.get("phone");
  let initialRequest = false;
  const handelChange = (values: string[]): void => {
    setOtpCode(values);
    if (chackEmptyList(values, 0)) {
      removeErrorState();
      if (chackEmptyList(values, 5) && phone) {
        confirmOtp(phone, values);
      }
    }
  };
  const chackEmptyList = (items: string[], limit: number): boolean => {
    return items.filter((item) => item).length > limit;
  };
  useEffect(() => {
    if (phone && isValidPhone(phone)) {
      if (!initialRequest) {
        handleOtpRequest();
        initialRequest = true;
      }
    } else {
      router.replace("/phone-number");
    }
  }, [initialRequest, phone]);

  const handeSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (handleValueValidation() && phone) {
      confirmOtp(phone, otpCode);
    }
  };
  const confirmOtp = (phone: string, otp: string[]): void => {
    setLoading(true);
    const currentOtp = otp.toString().replaceAll(",", "");
    postOtp(phone, currentOtp)
      .then(() => {
        router.push(`/national-id?phone=${phone}`);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setErrorState(t("expiredCode"));
        } else if (err.response.status === 404) {
          setErrorState(t("confirmCodeIsWronge"));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleValueValidation = (): boolean => {
    let isValid = true;
    if (chackEmptyList(otpCode, 5)) {
      removeErrorState();
      isValid = true;
    } else {
      isValid = false;
      setErrorState(t("confirmCodeIsRequired"));
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

  const handleOtpRequest = (): void => {
    if (phone) {
      setLoading(true);
      requestOtp(phone)
        .then((res: GetOtpResponse) => {
          const validTime = Number(res.expire);
          const time = (validTime - new Date().getTime()) / 1000;
          setOtpTime(Number(time.toFixed(0)) + 1);
        })
        .catch((err) => err)
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="main-container">
      <Header title={t("registerBluCard")} hasBack />
      <div className="container">
        <Form
          text={
            <OtpTimeCounter countTime={otpTime} requestOtp={handleOtpRequest} />
          }
          onSubmit={handeSubmit}
          disabled={isDisabled}
          loading={loading}
        >
          <FormItem
            title={t("confirmCodeText", {
              phone: phoneNumberFormatter(phone ?? ""),
            })}
          >
            <OtpInputs onChange={handelChange} error={error} />
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default OtpPage;
