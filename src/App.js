import Accordion from "./componets/Accordion";
function App() {
  const items = [
    {
      id: "asd",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want.",
    },
    {
      id: "zxc",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want.",
    },
    {
      id: "rty",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
