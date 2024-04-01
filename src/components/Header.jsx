import { SearchBar } from "./Searchbar";
import { Button } from "@/components/ui/button";
export const Header = () => {
  return (
    <div className="flex justify-between flex-grow gap-5 items-center ">
      <img
        src="https://i.imgur.com/Utv88HY.png"
        alt="Palika logo"
        className="w-full md:w-[12vh] "
      />
      <SearchBar />
      <Button className=''>Contact</Button>
    </div>
  );
};
