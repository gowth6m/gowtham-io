import { useState } from "react";

type FilterItemProps = {
    title: string;
    initialClicked: boolean;
    setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
    currentFilter: string;
  };
  
  export function FilterItem({
    title,
    initialClicked,
    setCurrentFilter,
    currentFilter,
  }: FilterItemProps) {
    const [isClicked, setIsClicked] = useState(initialClicked);
  
    return (
      <div
        className={
          isClicked && currentFilter === title
            ? "filters-item filters-item-active"
            : "filters-item"
        }
        onClick={() => {
          setCurrentFilter(title);
          if (currentFilter !== title) {
            setIsClicked(false);
          }
          setIsClicked(true);
        }}
      >
        {title}
      </div>
    );
  }
  