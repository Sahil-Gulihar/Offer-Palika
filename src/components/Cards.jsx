import { Card } from "./Card";

export const Cards = () => {
  return (
    <div>
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-gray-200 pt-2 pb-5 flex justify-between text-center px-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      ))}
    </div>
  );
};
