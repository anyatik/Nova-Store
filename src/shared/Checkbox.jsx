import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { Check } from "lucide-react";

export const Checkbox = (props) => {
  const { label, defaultChecked } = props;

  function BaseCheckIcon() {
    return <Check className="w-max size-3" />;
  }

  return (
    <div>
      <label className="flex flex-row gap-2 text-xs text-muted items-center">
        <BaseCheckbox.Root
          defaultChecked={defaultChecked}
          className="flex items-center justify-center bg-accent rounded-md text-surface size-5 data-unchecked:border data-unchecked:border-border data-unchecked:bg-canvas data-unchecked:hover:border-accent "
        >
          <BaseCheckbox.Indicator>
            <BaseCheckIcon />
          </BaseCheckbox.Indicator>
        </BaseCheckbox.Root>
        {label}
      </label>
    </div>
  );
};
