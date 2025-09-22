import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileSkills from "../components/ProfileSkills";
import ProfileReviews from "../components/ProfileReviews";
import ProfileBadges from "../components/ProfileBadges";
import { useAppContext } from "../context/AppContext";

const ProfilePage = () => {
  // const { user, loading, error } = useAppContext();
  // if (loading) {
  //   return <div className="flex justify-center items-center h-96 text-lg">Loading profile...</div>;
  // }
  // if (error) {
  //   return <div className="flex justify-center items-center h-96 text-red-500">{error}</div>;
  // }
  // if (!user) {
  //   return <div className="flex justify-center items-center h-96 text-gray-500">No user data found. Please log in again.</div>;
  // }
  return (
    <div className="bg-[#f5f5fa] min-h-screen py-8 px-2 md:px-8">
      <ProfileHeader />
      <ProfileSkills />
      <ProfileReviews />
      <ProfileBadges />
    </div>
  );
};

export default ProfilePage;
