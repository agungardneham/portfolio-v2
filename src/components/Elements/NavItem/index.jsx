import Anchor from "../Anchor";

const NavItem = ({ href, type, img }) => {
  return (
    <Anchor href={href}>
      <div className="navitem__container">
        <div
          className={`navitem ${
            type === "active" ? "navitem__active" : "navitem__inactive"
          }`}
        >
          <div className="navitem__container2">
            <img
              src={
                `resources/${img}` +
                `${type === "active" ? "_active" : ""}` +
                `.svg`
              }
              alt={img}
              className="w-[1.5rem] h-[1.5rem]"
            />

            <p
              className={`${
                type === "active" ? "text-primary" : "text-[#333]"
              } font-raleway text-[0.75rem] not-italic font-semibold leading-[1.25rem]`}
            >
              {img}
            </p>
          </div>
        </div>
      </div>
    </Anchor>
  );
};
export default NavItem;
