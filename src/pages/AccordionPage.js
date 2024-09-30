import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function AccordionPage({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (nextIndex) => {
    if (nextIndex === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    console.log(isExpanded);

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex  justify-between p-3 bf-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5"> {item.content} </div>}
      </div>
    );
  });
  return <div className="borer-x border-t rounded">{renderedItems}</div>;
}

export default AccordionPage;
