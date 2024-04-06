import { Button } from "./ui/button";

export const Coupon = () => {
  return (
    <div className="bg-gray-300 flex justify-between p-4 border border-spacing-80 rounded-md">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Bw8Lklz1dt5ZtH9w1NJMfVMuL8oVDt6nnXHmQ284zA&s"
        className="md:h-[15ch] h-[7vh]"
        alt="Image Aayega"
      />
      <div>
        <p className="text-xl font-bold">Badha Text jaise Deal ho</p>
        <p>Suxxess rates</p>
      </div>
      <Button className="bg-red-600 text-white">Get Deals</Button>
    </div>
  );
};
