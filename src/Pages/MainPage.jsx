import { Categories } from "../Components/Categories";
import { HeroBanner } from "../Components/HeroBanner";
import { ProductHits } from "../Components/ProductHits";

export const MainPage = () => {
  return (
    <div className="px-16 flex flex-col">
      <HeroBanner />
      <Categories />
      <ProductHits />
    </div>
  );
};
