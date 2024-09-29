import Button from "../componets/Button";
import { GiAbstract042 } from "react-icons/gi";
function ButtonPage() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5" onClick={handleClick}>
          <GiAbstract042 />
          Hi there!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Click Me!
        </Button>
      </div>
      <div>
        <Button warning outline>
          See deals
        </Button>
      </div>
      <div>
        <Button success rounded>
          asdasd
        </Button>
      </div>
      <div>
        <Button danger>asdasd</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
