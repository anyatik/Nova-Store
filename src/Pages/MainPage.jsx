import { Categories } from "../Components/Categories";
import { HeroBanner } from "../Components/HeroBanner";
import { ProductHits } from "../Components/ProductHits";
import { PromoBanner } from "../Components/PromoBanner";

export const MainPage = () => {
  return (
    <div className="px-16 flex flex-col">
      <HeroBanner />
      <Categories />
      <ProductHits />
      <PromoBanner />
    </div>
  );
};
