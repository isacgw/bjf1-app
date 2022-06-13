import React from 'react'
import YoutubeEmbed from "./YoutubeEmbed";
import './Highlights.css'

const Highlights = ({ embedId }) => {
  return (
    <section id="highlights">
        <h2>HIGHLIGHTS</h2>
        <YoutubeEmbed/>
   </section>
   
  )
  
};


export default Highlights