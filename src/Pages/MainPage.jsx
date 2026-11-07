import { Categories } from "../Components/Categories";
import { HeroBanner } from "../Components/HeroBanner";

export const MainPage = () => {
  return (
    <div className="px-16 flex flex-col">
      <HeroBanner />
      <Categories />
    </div>
  );
};
