/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open-source contributions, articles you've written, and more.
 *
 * This is a great area for you to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to a string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * can freely use on your site.
 */
import image from "../images/camel-8620974_1280.png";

const imageAltText = "camel";

/**
 * Project list
 *
 * An array of objects that will be used to display your project links section.
 * Below is your list of projects.
 */
const projectList = [
  {
    title: "CSS Button Hover Effect",
    description:
      "Created a CSS button hover effect for enhanced user experience.",
  },
  {
    title: "The Hunted (Unity)",
    description:
      "Developed a 3D Hide and Seek Game for submission to the MIT Blueprint 2020 Hackathon. Utilized AI in Unity using C# for game mechanics.",
  },
  {
    title: "Generating Novel Rhythms with ML",
    description:
      "Implemented machine learning algorithms to generate novel rhythms through interpolation. Applied ML techniques to create new rhythmic patterns.",
  },
  {
    title: "Predicting Visitor Purchases (with BigQuery ML & GCP)",
    description:
      "Utilized Google Cloud Platform's BigQuery ML to analyze an extensive ecommerce dataset. Extracted insights into customer purchasing behavior and made data-driven decisions for business enhancement.",
  },
  {
    title: "Cloud Classifying Weather Predictor",
    description:
      "Developed an ML application to identify cloud types from images using Google Cloud Platform's Vision API and AutoML Vision. Implemented multi-label cloud classification on a public cloud dataset for accurate predictions.",
  },
  {
    title: "PizzaBot: Conversational Pizza Ordering System Bot",
    description:
      "Built a chatbot using GCP Dialogflow for a fictional pizza shop ordering system. Defined intents and identified entities for effective extraction of user queries.",
  },
  {
    title: "Simple Car Customizer (Python)",
    description:
      "Developed a car customization application using Python, featuring various car picking functionalities.",
  },
  {
    title: "The Orange Adventure (Unity)",
    description:
      "Created a 2D platformer game with an 8-bit format using Unity.",
  },
  {
    title: "Simple Stocks Game",
    description:
      "Implemented a Java-based Simple Stocks Game to educate middle-school/high-school students about stock market volatility.",
  },
  {
    title: "Leap Frog (Processing.js)",
    description:
      "Replicated a leapfrog game using the Processing.js language for educational purposes.",
  },
  {
    title: "Online Price Tracker (Python)",
    description:
      "Implemented a Python web scraper using BeautifulSoup and other web services to track online prices.",
  },
  {
    title: "WASD Game (FlowLab/GameSalad)",
    description:
      "Created and tested a simple WASD game using FlowLab/GameSalad for an interactive gaming experience.",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project, index) => (
            <div className="box" key={index}>
              <h3>{project.title}</h3>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;