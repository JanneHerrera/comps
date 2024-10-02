import Link from "./componets/Link";
import Route from "./componets/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
function App() {
  return (
    <div>
      <Link to="/accordion"> go to accordion</Link>
      <Link to="/dropdown"> go to dropdown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
