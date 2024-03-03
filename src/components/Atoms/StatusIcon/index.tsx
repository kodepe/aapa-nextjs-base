import { CiCircleCheck, CiWarning } from "react-icons/ci";
import { VscError } from "react-icons/vsc";

interface StatusIconProps {
  type?: "success" | "error" | "warning";
}
export const StatusIcon = ({ type }: StatusIconProps) => {
  return (
    <div>
      {type === "error" && <VscError size={75} color="#ff4500" />}
      {type === "warning" && <CiWarning size={75} color="#ff9300" />}
      {type === "success" && <CiCircleCheck size={75} color={"#00b341"} />}
    </div>
  );
};
