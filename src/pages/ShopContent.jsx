import CategorySlider from "@/components/CategorySlider";
import { Coupon } from "@/components/Coupon";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

export const ShopContent = () => {
  return (
    <div>
      <div className="bg-black">
        <Header />
        <Navbar />
      </div>

      <div className="grid grid-cols-12 p-4">
        <div className="md:col-span-2"></div>
        <div className="md:col-span-8  col-span-9">
          <div className="text-3xl font-bold p-6">ABC DEPOT (Company name Here)</div>
          {Array.from({ length: 9 }, (_, index) => (
            <Coupon  key={index} />
          ))}
        </div>
      </div>
      <CategorySlider />
      <Footer />
    </div>
  );
};
