import Img from "../Elements/Img";
import SocialMediaList from "../Elements/SocialMedia";
import ContactCard from "./ContactCard";

const Profile = () => {
  return (
    <main className="profile__container">
      <div className="profile-card__container">
        <div className="profile-card__container2">
          <div className="profile-photo">
            <Img
              src="/resources/profile_picture.png"
              alt="profile_picture"
              classname="rounded-[1.25rem] w-[12.5rem] h-[12.5rem] mx-auto object-cover object-top"
            />
          </div>
          <div className="fullname__container">
            <h1 className="fullname">Agung Mahendra</h1>
          </div>
          <div className="title__container">
            <h2 className="title">FullStack Developer</h2>
          </div>
          <SocialMediaList />
          <ContactCard />
        </div>
      </div>
    </main>
  );
};

export default Profile;
