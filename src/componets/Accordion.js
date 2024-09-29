import { useState } from "react";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    console.log(isExpanded);

    const content = isExpanded && <div>{item.content}</div>;
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{content}</div>
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
