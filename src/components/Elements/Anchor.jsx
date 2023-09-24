import { Link } from "react-router-dom";

const Anchor = ({ children, href, classname, id }) => {
  return (
    <Link to={href} className={classname} id={id}>
      {children}
    </Link>
  );
};

export default Anchor;
