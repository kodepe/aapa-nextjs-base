import useWindowSize from "@/utils/windowSise";
import { isMobile } from "react-device-detect";
interface ImageContainerProps {
  image: string;
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export const ImagenContainer = ({
  image,
  className = "w-full h-full min-h-full min-w-full",
}: ImageContainerProps) => {
  const { device } = useWindowSize();

  if (device === "") {
    return <h1>vacio</h1>;
  }
  return (
    <div
      className={`${className} relative`}
      style={{
        height: device === "isMobile" ? 620 : 740,
        maxWidth: "100%",
      }}
    >
      <div
        style={{
          backgroundImage: `url('${image}')`,
        }}
        className={`bg-no-repeat bg-cover w-full h-full absolute bg-center `}
      />
      <div
        style={{ zIndex: 1 }}
        className=" absolute inset-0 w-full h-full bg-[#00000077]"
      />
      <div
        style={{ zIndex: 10, margin: "0 auto" }}
        className="-z-[1] flex flex-col justify-center items-start w-full h-full max-w-[1420px] px-4 "
      >
        <div style={{ zIndex: 20 }} className="max-w-[420px] mb-8 ">
          <p className="text-white z-30 text-[20px] max-w-[550px]:text-[16px]">
            {"AUTENTICA EXPERIENCIA TAILANDESA"}
          </p>
        </div>
        <div
          style={{ zIndex: 20 }}
          className="tablet:max-w-[420px] max-w-[320px] border-l-[5px] border-warning px-4"
        >
          <p className="text-white z-30 tablet:text-[40px] text-[24px]">
            {"Rice Noodles With Souteed Tofu And Bell Peppers"}
          </p>
        </div>
      </div>
    </div>
  );
};
