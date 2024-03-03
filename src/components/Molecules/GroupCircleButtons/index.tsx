import {
  CircleIconButton,
  CircleIconButtonProps,
} from "@/components/Atoms/CircleIconButton";

interface GroupCircleButtonsProps {
  items?: CircleIconButtonProps[];
}
export const GroupCircleButtons = ({ items }: GroupCircleButtonsProps) => {
  return (
    <div className="flex flex-row">
      {items?.map((item, index) => {
        return <CircleIconButton key={JSON.stringify(item)} {...item} />;
      })}
    </div>
  );
};
