import { useRouteError } from "react-router-dom";
import Anchor from "../components/Elements/Anchor";
import Header from "../components/Layouts/Header";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="body__container min-w-screen">
      <Header />
      <div className="flex flex-col my-10 min-h-screen items-center">
        <h1 className="text-[5rem] font-bold text-second font-poppins dark:text-secondaryDark">
          Oops!
        </h1>
        <h1 className="mt-5 mb-2 text-center text-3xl font-raleway text-[#000] dark:text-textDark">
          An unexpected error has occured
        </h1>
        <p className="text-lg mb-5 font-raleway text-[#000] dark:text-textDark2">
          Go back to{" "}
          <Anchor href="/" classname="text-second">
            main page
          </Anchor>
        </p>
        <p className="text-lg font-raleway text-[#000] dark:text-textDark">
          Error details : {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
