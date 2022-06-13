import React from 'react'
import PropTypes from "prop-types";
import './Highlights.css'

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dIG_lO_kTvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SQMcxmkSMSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  );
  
  export default YoutubeEmbed;