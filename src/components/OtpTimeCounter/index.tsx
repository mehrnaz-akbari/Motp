import { FC, useEffect, useState } from "react";
// Hooks
import { useTranslations } from "next-intl";

interface Props {
  requestOtp: () => void;
  countTime: number;
}

const OtpTimeCounter: FC<Props> = (props) => {
  const { requestOtp, countTime } = props;
  const t = useTranslations("noName");
  const [isCounting, setIsCounting] = useState(false);
  const [time, setTime] = useState(countTime);

  const getTimeRemaining = (time: number) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor((time / 60) % 60);
    return {
      minutes,
      seconds,
    };
  };

  useEffect(() => {
    setIsCounting(true);
  }, []);

  useEffect(() => {
    if (!isCounting) {
      setTime(countTime);
    }
    const countdownInterval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else if (time === 0) {
        clearInterval(countdownInterval);
        setIsCounting(false);
      }
    }, 1000);
    if (!isCounting) clearInterval(countdownInterval);
    return () => {
      clearInterval(countdownInterval);
    };
  }, [time, isCounting]);

  const handleText = (time: number): string => {
    const { minutes, seconds } = getTimeRemaining(time);
    let text = "";
    const formayedTime =
      minutes > 0
        ? `0${minutes}:${seconds > 9 ? seconds : `0${seconds}`}`
        : `00:${seconds > 9 ? seconds : `0${seconds}`}`;
    if (isCounting) {
      text = formayedTime + " " + t("tillSendAgain");
    }

    return text;
  };

  const handleOtpResend = (): void => {
    setIsCounting(true);
    requestOtp();
  };
  return (
    <>
      {isCounting ? (
        <>{handleText(time)} </>
      ) : (
        <span className="text-primary" onClick={handleOtpResend}>
          {t("sendAgain")}
        </span>
      )}
    </>
  );
};

export default OtpTimeCounter;
