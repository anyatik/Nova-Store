import { Tabs as BaseTabs } from "@base-ui/react/tabs";

// items-массив всго [{value,label,component}]
export const Tabs = (props) => {
  const { items = [], defaultValue, value, onValueChange } = props;

  return (
    <BaseTabs.Root
      className="w-110 flex flex-col gap-2"
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <BaseTabs.List className="flex justify-around gap-1 bg-canvas rounded-xl p-1">
        {items?.map((item) => (
          <BaseTabs.Tab
            className="w-full py-2 text-xs font-bold rounded-md transition-colors duration-200 ease-in-out data-active:text-surface data-active:bg-ink"
            value={item.value}
            key={item.value}
          >
            {item.label}
          </BaseTabs.Tab>
        ))}
      </BaseTabs.List>
      <div>
        {items?.map((item) => (
          <BaseTabs.Panel key={item.value} value={item.value}>
            {item.component}
          </BaseTabs.Panel>
        ))}
      </div>
    </BaseTabs.Root>
  );
};
