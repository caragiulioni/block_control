import React from "react"
import Reaudio from "./Reaudio/Reaudio.js"
import "./Reaudio/assets/styles.css"

// IMAGES
import keak from "../music/keak.jpg"
import riot from "../music/riot.jpg"
import hells from "../music/hellsbells.jpg"
import loop from "../music/loopholes.jpg"
import eighty from "../music/1984.jpg"
import paper from "../music/paper.jpg"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion"
import "./sitemain.css"
import "./layout.css"

    const demos = [
        {
        id: "1",
        source: "https://storage.googleapis.com/webaudio/blockctrl_superhyphyrmx_full.mp3",
        trackName: "Super Hyphy RMX",
        trackImage: keak,
        description: "Remix of Super Hyphy by Keak da Sneak. Shout out big to all Bay Area."
        },
        {
        id: "1",
        source: "https://storage.googleapis.com/webaudio/blockctrl_brokenbottles.mp3",
        trackName: "Broken Bottles",
        trackImage: riot,
        description:"A big and rowdy anthem for people who want to break stuff."
        },
        {
         id:"3",
         source: "https://storage.googleapis.com/webaudio/blockctrl_hellsbells.mp3",
         trackName: "Hells Bells",
         trackImage: hells,
         description:"Dark, gloomy, and slow motion with a big build up to break down."
        },    
        {
        id: "4",
        source: "https://storage.googleapis.com/webaudio/blockctrl_loopholes.mp3",
        trackName:"Loop Holes",
        trackImage: loop,
        description:"Vocal cuts, bleepyboops and a classic sample. My personal favorite."
        },
        {
        id: "5",
        source: "https://storage.googleapis.com/webaudio/blockctrl_1984.mp3",
        trackName:"1984",
        trackImage: eighty,
        description:"The blackout theme for the those that were last ones left."
        },
        {
        id: "6",
        source: "https://storage.googleapis.com/webaudio/blockctrl_papercuts.mp3",
        trackName:"Paper Cuts",
        trackImage: paper,
        description:"Before there were beat machines, there was breaks and breaks only."
        },
        


    ]


const Tracks = () => (
    <section id="musicprodduction" className="accordionContainer margin"> 
     <h3>Music Production</h3>
        <Accordion allowZeroExpanded="true">
            <AccordionItem>
            <AccordionItemHeading>
            <AccordionItemButton className="skillsButton mediaAccordionButton" alt="Skills details.">
            </AccordionItemButton>
            </AccordionItemHeading>
                <AccordionItemPanel>
                <Reaudio className="reaaudio" playlist={demos} />
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </section>
)

export default Tracks
