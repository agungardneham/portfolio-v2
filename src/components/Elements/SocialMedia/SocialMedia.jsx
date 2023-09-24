import Anchor from "../Anchor";
import Img from "../Img";

const SocialMedia = ({ link, socialMediaLogo, alt, classname }) => {
  return (
    <Anchor href={link}>
      <div className="flex items-start py-[1.29194rem] px-[1.55038rem] bg-[#F2F7FC] rounded-[0.51681rem] gap-[0.51681rem] hover:bg-[#BCC0C4] dark:bg-bgDark2 dark:hover:bg-[#BCC0C4]">
        <div className="flex w-[1.24031rem] py-[0.15506rem] px-[0.10338rem] flex-col items-start gap-[0.51681rem] rounded-[0.51681rem]">
          <Img
            src={`resources/${socialMediaLogo}.svg`}
            alt={alt}
            classname={classname}
          />
        </div>
      </div>
    </Anchor>
  );
};

export default SocialMedia;
