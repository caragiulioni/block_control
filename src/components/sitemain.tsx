// Gatsby supports TypeScript natively!
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Skillscode from "../components/skillscode"
import Skillscodetwo from "../components/skillscodetwo"
import Skillscodethree from "../components/skillscodethree"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

import "./layout.css"
import "./sitemain.css"

export default function SiteMain() {
  const data = useStaticQuery(graphql`
    {
      allContentfulMain {
        edges {
          node {
            image {
              file {
                url
              }
              id
            }
            childContentfulMainBioTextNode {
              bio
              id
            }
            childContentfulMainBioShortTextNode {
              bioShort
              id
            }
            childContentfulMainSkillsOneTextNode {
              skillsOne
              id
            }
            childContentfulMainSkillsTwoTextNode {
              skillsTwo
              id
            }
            childContentfulMainSkillsThreeTextNode {
              skillsThree
              id
            }
            childContentfulMainBioThreeTextNode {
              bioThree
              id
            }
            childContentfulMainBioTwoTextNode {
              bioTwo
              id
            }
          }
        }
      }
    }
  `)
  return (
    <div className="sectionMain wrapper">
      <section className="bio">
        <div className="headingStyle h2margin">
          <h2>
            <span>ABOUT</span>
          </h2>
        </div>
        <div className="bioText">
          {data.allContentfulMain.edges.map(({ node: data }) => (
            <div className="bioInfo">
              <img
                key={data.image.id}
                alt={data.image.description}
                src={data.image.file.url}
              />
              <div className="bioMain">
                <div className="bioMainText">
                  <p key={data.childContentfulMainBioTextNode.id}>
                    {data.childContentfulMainBioTextNode.bio}
                  </p>
                  <p key={data.childContentfulMainBioTwoTextNode.id}>
                    {data.childContentfulMainBioTwoTextNode.bioTwo}
                  </p>
                  <p key={data.childContentfulMainBioThreeTextNode.id}>
                    {data.childContentfulMainBioThreeTextNode.bioThree}
                  </p>
                </div>
                <div className="bioSnippet margin">
                  <p className=".span">
                    <span>
                      {data.childContentfulMainBioShortTextNode.bioShort}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills sectionPadding">
        <div className="headingStyle h2margin">
          <h2>
            <span>Skills</span>
          </h2>
        </div>
        <div className="accordionContainer">
          <h3>WEB DEVELOPMENT</h3>
          <p>
            React / Node.js / CSS / Javascript / MongoDB / Gatsby / Vue.JS / Git
            / GraphQL
          </p>
          <Accordion key="accordion-one" allowZeroExpanded="true">
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  className="skillsButton skillsButtonWeb"
                  alt="Skills details."
                ></AccordionItemButton>
              </AccordionItemHeading>
              {data.allContentfulMain.edges.map(({ node: data }) => (
                <AccordionItemPanel>
                  <p key={data.childContentfulMainSkillsOneTextNode.id}>
                    {data.childContentfulMainSkillsOneTextNode.skillsOne}
                  </p>
                </AccordionItemPanel>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="skills sectionPadding">
        <div className="accordionContainer">
          <h3>Visual and Sound</h3>
          <p>
            Photoshop / Illustrator / Video Editing / Sound Design and
            Production
          </p>
          <Accordion key="accordion-two" allowZeroExpanded="true">
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  className="skillsButton skillsButtonVisual"
                  alt="Skills details."
                ></AccordionItemButton>
              </AccordionItemHeading>
              {data.allContentfulMain.edges.map(({ node: data }) => (
                <AccordionItemPanel>
                  <p key={data.childContentfulMainSkillsTwoTextNode.id}>
                    {data.childContentfulMainSkillsTwoTextNode.skillsTwo}
                  </p>
                </AccordionItemPanel>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="skills sectionPadding">
        <div className="accordionContainer">
          <h3>General</h3>
          <p>Creativity / Reliability / Adaptability</p>
          <Accordion key="accordion-three" allowZeroExpanded="true">
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  className="skillsButton skillsButtonGeneral"
                  alt="Skills details."
                ></AccordionItemButton>
              </AccordionItemHeading>
              {data.allContentfulMain.edges.map(({ node: data }) => (
                <AccordionItemPanel>
                  <p key={data.childContentfulMainSkillsThreeTextNode.id}>
                    {data.childContentfulMainSkillsThreeTextNode.skillsThree}
                  </p>
                </AccordionItemPanel>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
