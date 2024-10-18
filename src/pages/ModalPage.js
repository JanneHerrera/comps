import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>here is a n important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet fringilla urna. Cras felis magna, interdum ut erat sed, dapibus
        sodales dui. Cras eu odio aliquet, pulvinar nunc nec, fermentum lacus.
        Pellentesque egestas feugiat diam, vel varius ante lobortis a. Aenean
        non ultricies sapien. Aenean ornare sem vitae laoreet vulputate. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In mollis, sem vitae commodo fermentum, libero nisl
        placerat nunc, in sagittis mi eros eget lorem. Etiam ultrices vitae diam
        ut semper. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Phasellus interdum, felis vitae
        ullamcorper consequat, enim magna pulvinar tortor, ac congue urna justo
        imperdiet dolor. Ut vitae nisi ut turpis interdum faucibus consectetur
        quis turpis. Nunc egestas libero elit, eget fringilla quam pharetra sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet fringilla urna. Cras felis magna, interdum ut erat sed, dapibus
        sodales dui. Cras eu odio aliquet, pulvinar nunc nec, fermentum lacus.
        Pellentesque egestas feugiat diam, vel varius ante lobortis a. Aenean
        non ultricies sapien. Aenean ornare sem vitae laoreet vulputate. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In mollis, sem vitae commodo fermentum, libero nisl
        placerat nunc, in sagittis mi eros eget lorem. Etiam ultrices vitae diam
        ut semper. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Phasellus interdum, felis vitae
        ullamcorper consequat, enim magna pulvinar tortor, ac congue urna justo
        imperdiet dolor. Ut vitae nisi ut turpis interdum faucibus consectetur
        quis turpis. Nunc egestas libero elit, eget fringilla quam pharetra sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet fringilla urna. Cras felis magna, interdum ut erat sed, dapibus
        sodales dui. Cras eu odio aliquet, pulvinar nunc nec, fermentum lacus.
        Pellentesque egestas feugiat diam, vel varius ante lobortis a. Aenean
        non ultricies sapien. Aenean ornare sem vitae laoreet vulputate. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In mollis, sem vitae commodo fermentum, libero nisl
        placerat nunc, in sagittis mi eros eget lorem. Etiam ultrices vitae diam
        ut semper. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Phasellus interdum, felis vitae
        ullamcorper consequat, enim magna pulvinar tortor, ac congue urna justo
        imperdiet dolor. Ut vitae nisi ut turpis interdum faucibus consectetur
        quis turpis. Nunc egestas libero elit, eget fringilla quam pharetra sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet fringilla urna. Cras felis magna, interdum ut erat sed, dapibus
        sodales dui. Cras eu odio aliquet, pulvinar nunc nec, fermentum lacus.
        Pellentesque egestas feugiat diam, vel varius ante lobortis a. Aenean
        non ultricies sapien. Aenean ornare sem vitae laoreet vulputate. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In mollis, sem vitae commodo fermentum, libero nisl
        placerat nunc, in sagittis mi eros eget lorem. Etiam ultrices vitae diam
        ut semper. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Phasellus interdum, felis vitae
        ullamcorper consequat, enim magna pulvinar tortor, ac congue urna justo
        imperdiet dolor. Ut vitae nisi ut turpis interdum faucibus consectetur
        quis turpis. Nunc egestas libero elit, eget fringilla quam pharetra sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet fringilla urna. Cras felis magna, interdum ut erat sed, dapibus
        sodales dui. Cras eu odio aliquet, pulvinar nunc nec, fermentum lacus.
        Pellentesque egestas feugiat diam, vel varius ante lobortis a. Aenean
        non ultricies sapien. Aenean ornare sem vitae laoreet vulputate. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In mollis, sem vitae commodo fermentum, libero nisl
        placerat nunc, in sagittis mi eros eget lorem. Etiam ultrices vitae diam
        ut semper. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Phasellus interdum, felis vitae
        ullamcorper consequat, enim magna pulvinar tortor, ac congue urna justo
        imperdiet dolor. Ut vitae nisi ut turpis interdum faucibus consectetur
        quis turpis. Nunc egestas libero elit, eget fringilla quam pharetra sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet fringilla urna. Cras felis magna, interdum ut erat sed, dapibus
        sodales dui. Cras eu odio aliquet, pulvinar nunc nec, fermentum lacus.
        Pellentesque egestas feugiat diam, vel varius ante lobortis a. Aenean
        non ultricies sapien. Aenean ornare sem vitae laoreet vulputate. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In mollis, sem vitae commodo fermentum, libero nisl
        placerat nunc, in sagittis mi eros eget lorem. Etiam ultrices vitae diam
        ut semper. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Phasellus interdum, felis vitae
        ullamcorper consequat, enim magna pulvinar tortor, ac congue urna justo
        imperdiet dolor. Ut vitae nisi ut turpis interdum faucibus consectetur
        quis turpis. Nunc egestas libero elit, eget fringilla quam pharetra sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet fringilla urna. Cras felis magna, interdum ut erat sed, dapibus
        sodales dui. Cras eu odio aliquet, pulvinar nunc nec, fermentum lacus.
        Pellentesque egestas feugiat diam, vel varius ante lobortis a. Aenean
        non ultricies sapien. Aenean ornare sem vitae laoreet vulputate. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In mollis, sem vitae commodo fermentum, libero nisl
        placerat nunc, in sagittis mi eros eget lorem. Etiam ultrices vitae diam
        ut semper. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Phasellus interdum, felis vitae
        ullamcorper consequat, enim magna pulvinar tortor, ac congue urna justo
        imperdiet dolor. Ut vitae nisi ut turpis interdum faucibus consectetur
        quis turpis. Nunc egestas libero elit, eget fringilla quam pharetra sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet fringilla urna. Cras felis magna, interdum ut erat sed, dapibus
        sodales dui. Cras eu odio aliquet, pulvinar nunc nec, fermentum lacus.
        Pellentesque egestas feugiat diam, vel varius ante lobortis a. Aenean
        non ultricies sapien. Aenean ornare sem vitae laoreet vulputate. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In mollis, sem vitae commodo fermentum, libero nisl
        placerat nunc, in sagittis mi eros eget lorem. Etiam ultrices vitae diam
        ut semper. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Phasellus interdum, felis vitae
        ullamcorper consequat, enim magna pulvinar tortor, ac congue urna justo
        imperdiet dolor. Ut vitae nisi ut turpis interdum faucibus consectetur
        quis turpis. Nunc egestas libero elit, eget fringilla quam pharetra sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet fringilla urna. Cras felis magna, interdum ut erat sed, dapibus
        sodales dui. Cras eu odio aliquet, pulvinar nunc nec, fermentum lacus.
        Pellentesque egestas feugiat diam, vel varius ante lobortis a. Aenean
        non ultricies sapien. Aenean ornare sem vitae laoreet vulputate. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. In mollis, sem vitae commodo fermentum, libero nisl
        placerat nunc, in sagittis mi eros eget lorem. Etiam ultrices vitae diam
        ut semper. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Phasellus interdum, felis vitae
        ullamcorper consequat, enim magna pulvinar tortor, ac congue urna justo
        imperdiet dolor. Ut vitae nisi ut turpis interdum faucibus consectetur
        quis turpis. Nunc egestas libero elit, eget fringilla quam pharetra sed.
      </p>
    </div>
  );
}

export default ModalPage;
