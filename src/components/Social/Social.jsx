import React from "react";
import "./Social.css"

import instagram_light from "../../icons/instagram_light.svg";
import linkedin_light from "../../icons/linkedin_light.svg";
import github_light from "../../icons/github_light.svg";
import spotify_light from "../../icons/spotify_light.svg";

import instagram_dark from "../../icons/instagram_dark.svg";
import linkedin_dark from "../../icons/linkedin_dark.svg";
import github_dark from "../../icons/github_dark.svg";
import spotify_dark from "../../icons/spotify_dark.svg";


function Social({isDark}) {
  return (
    <div className="social-container">
      <a href="https://www.instagram.com/shawnprdp/" target="_blank" rel="noreferrer"><img src={isDark ? instagram_dark : instagram_light} alt="instagram"/></a>
      <a href="https://www.linkedin.com/in/shawnprad/" target="_blank" rel="noreferrer"><img src={isDark ? linkedin_dark : linkedin_light} alt="linkedin"/></a>
      <a href="https://www.github.com/shawnpradeep/" target="_blank" rel="noreferrer"><img src={isDark ? github_dark : github_light} alt="github"/></a>
      <a href="https://open.spotify.com/user/shawn.pradeep" target="_blank" rel="noreferrer"><img src={isDark ? spotify_dark : spotify_light} alt="spotify"/></a>
    </div>
  )
}

export default Social;