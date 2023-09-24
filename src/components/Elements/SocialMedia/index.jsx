import SocialMedia from "./SocialMedia";

const SocialMediaList = () => {
  return (
    <div className="social-media__container">
      <SocialMedia
        link="https://www.linkedin.com/in/agung-mahendra"
        socialMediaLogo="linkedin_logo"
        alt="linkedin_logo"
        classname="w-[0.985rem] h-[0.93025rem]"
      />
      <SocialMedia
        link="https://github.com/agungardneham"
        socialMediaLogo="github_logo"
        alt="github_logo"
        classname="w-[1.0335rem] h-[1.00806rem]"
      />
    </div>
  );
};

export default SocialMediaList;
