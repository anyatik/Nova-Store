import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import cn from "classnames";
import { ChevronRight } from "lucide-react";

// items-массив всго [{value,label,component}]
export const Tabs = (props) => {
  const {
    items = [],
    defaultValue,
    value,
    onValueChange,
    direction = "horizontal",
    listClassName,
  } = props;
  const itemComponents = items
    .map((item) => item?.component)
    .filter((component) => component);

  return (
    <BaseTabs.Root
      className="flex flex-col gap-2"
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <BaseTabs.List
        className={cn(
          "flex justify-around gap-1 bg-canvas rounded-xl p-1",
          direction === "vertical" && "flex-col",
          listClassName,
        )}
      >
        {items?.map((item) => (
          <BaseTabs.Tab
            className={cn(
              "flex justify-center items-center gap-2 w-full min-w-54 p-2 text-xs font-bold rounded-xl transition-colors duration-200 ease-in-out data-active:text-surface data-active:bg-ink",
              direction === "vertical" && "justify-start py-3",
            )}
            value={item.value}
            key={item.value}
          >
            {item.icon ? item.icon : null} {item.label}
            {direction === "vertical" && (
              <ChevronRight className="ml-auto size-3" />
            )}
          </BaseTabs.Tab>
        ))}
      </BaseTabs.List>
      {itemComponents.length ? (
        <div>
          {items?.map((item) => (
            <BaseTabs.Panel key={item.value} value={item.value}>
              {item.component}
            </BaseTabs.Panel>
          ))}
        </div>
      ) : null}
    </BaseTabs.Root>
  );
};
