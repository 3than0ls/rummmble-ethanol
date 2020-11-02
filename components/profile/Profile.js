import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import { v4 as uuidv4 } from 'uuid';
import ProfileSidebar from './ProfileSidebar';
import ProfileBanner from './ProfileBanner';
import ProfileCard from './ProfileDetails/ProfileCard';
import ProjectCard from './ProfileDetails/ProjectCard';

const Profile = () => {
  const [profileBannerNav, setProfileBannerNav] = useState('followers');

  const name = 'Marcela Lagil';

  const followers = [
  ];

  const following = [
    {
      name: 'Dorvin Vanke',
      title: 'UX Designer',
      followers: 50,
      following: 25,
      avatar: 'https://images.unsplash.com/photo-1602775498090-f574a9c33b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
    },
  ];

  const projects = [
    {
      name: 'Travel Website',
      description: 'Do you have trouble planning your travels?',
      image: 'https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1319&q=80',
    },
  ];

  // generates arrays of placeholder values, but needs key prop, not sure what to use for it...
  // probably have to dynamically load projects/followers/following if they are too many
  const amount = 15;

  const content = () => {
    switch (profileBannerNav) {
      case 'followers':
        if (followers.length) {
          return followers.map((user) => (
            <LazyLoad offsetTop={600} key={uuidv4()}>
              <ProfileCard
                name={user.name}
                title={user.title}
                followers={user.followers}
                following={user.following}
                imgSrc={user.avatar}
              />
            </LazyLoad>
          ));
        }
        return (
          <div className="text-3xl m-8 text-center">
            {`${name} has no followers.`}
          </div>
        );
      case 'following':
        if (following.length) {
          return following.map((user) => (
            <LazyLoad offsetTop={600} key={uuidv4()}>
              <ProfileCard
                name={user.name}
                title={user.title}
                followers={user.followers}
                following={user.following}
                imgSrc={user.avatar}
              />
            </LazyLoad>
          ));
        }
        return (
          <div className="text-3xl m-8 text-center">
            {`${name} does not follow anyone.`}
          </div>
        );
      case 'projects':
        if (projects.length) {
          return projects.map((project) => (
            <LazyLoad offsetTop={600} key={uuidv4()}>
              <ProjectCard
                name={project.name}
                description={project.description}
                imgSrc={project.image}
              />
            </LazyLoad>
          ));
        }
        return (
          <div className="text-3xl m-8 text-center">
            {`${name} has no projects`}
          </div>
        );
      default:
        return <div className="text-center">Error</div>;
    }
  };

  return (
    <>
      <ProfileBanner
        profileBannerNav={profileBannerNav}
        setProfileBannerNav={setProfileBannerNav}
        amount={amount}
      />
      <div className="flex flex-row w-full">
        <ProfileSidebar />
        <div className="flex-grow w-2/3 flex flex-wrap justify-evenly py-8 px-2">
          {content()}
        </div>
      </div>
    </>
  );
};

export default Profile;
