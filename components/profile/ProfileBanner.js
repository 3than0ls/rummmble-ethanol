import React from 'react';
import PropTypes from 'prop-types';

const ProfileBanner = ({ setProfileBannerNav, profileBannerNav, amount }) => (
  <div className="h-160 w-full object-center relative">
    <div className="absolute bottom-0 w-1/2  right-0">
      <ul className="flex items-center justify-around text-2xl">
        {['Projects', 'Followers', 'Following'].map((tabName) => (
          <li key={tabName}>
            <button
              type="button"
              onClick={() => setProfileBannerNav(tabName.toLowerCase())}
              className="pb-6 relative focus:outline-none"
            >
              {`${tabName} (${amount})`}
              {profileBannerNav === tabName.toLowerCase()
                && <hr className="absolute bottom-0 border-custom-5-cyan border-b-8 w-full rounded-full" />}
            </button>
          </li>
        ))}
      </ul>
    </div>
    <img
      draggable={false}
      alt="Profile Banner"
      className="h-full w-full object-none object-bottom"
      src="/ProfileBanner.png"
    />
  </div>
);

ProfileBanner.propTypes = {
  setProfileBannerNav: PropTypes.func.isRequired,
  profileBannerNav: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ProfileBanner;
