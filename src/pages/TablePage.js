import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 5,
    },
    {
      name: "Apple",
      color: "bg-red-500",
      score: 3,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 1,
    },
    {
      name: "Lime",
      color: "bg-green-500",
      score: 4,
    },
  ];
  const config = [
    {
      label: "Name",
      render: (fruit) => {
        return fruit.name;
      },
      sortName: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => {
        return <div className={`p-3 m-3 ${fruit.color}`}></div>;
      },
    },
    {
      label: "Score",
      render: (fruit) => {
        return fruit.score;
      },
      sortName: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
