import { Button } from "@/components/Atoms/Button";
import Image from "next/image";

interface LandingTwoCardsProps {
  image: string;
  rtl?: boolean;
  title: string;
  description: string;
  buttonText?: string;
  onPressBtn?: any;
  bgContainer?: string;
}
export const LandingTwoCards = ({
  image,
  rtl = false,
  title,
  description,
  buttonText,
  onPressBtn,
  bgContainer = "bg-light",
}: LandingTwoCardsProps) => {
  return (
    <div
      className={`w-full my-0 flex items-center justify-centermin-h-[500px] py-4 ${bgContainer}`}
    >
      <div
        className={`w-full min-h-[420px] px-8 flex max-w-[1420px]  ${
          rtl ? "tablet:flex-row-reverse" : "tablet:flex-row"
        } justify-center items-center ${
          !rtl ? "flex-col-reverse" : "flex-col"
        }`}
      >
        <div className="w-full h-[320px] relative my-8 ">
          <div className="w-[100%] h-full max-h-[320px] absolute bg-primary inset-0 z-0">
            <Image
              src={image}
              alt="title"
              width={1500}
              height={520}
              className="w-full h-full max-h-[320px] transform -rotate-3"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="max-w-[420px] flex flex-col w-full">
            <p className="text-[30px] text-primary tablet:text-[40px] font-semibold mb-4">
              {title}
            </p>
            <p className="text-[14px] text-secondary tablet:text-[16px] font-normal w-full ">
              {description}
            </p>
            {buttonText && onPressBtn && (
              <Button
                text={buttonText}
                onClick={onPressBtn}
                variant="primary"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
