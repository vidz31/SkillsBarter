import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileSkills from "../components/ProfileSkills";
import ProfileReviews from "../components/ProfileReviews";
import ProfileBadges from "../components/ProfileBadges";

const ProfilePage = () => (
  <div className="bg-[#f5f5fa] min-h-screen py-8 px-2 md:px-8">
    <ProfileHeader />
    <ProfileSkills />
    <ProfileReviews />
    <ProfileBadges />
  </div>
);

export default ProfilePage;
