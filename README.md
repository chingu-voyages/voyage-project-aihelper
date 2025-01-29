# voyage-project-prompt-gen

## Table of Contents

* [Overview](#overview)
* [General Instructions](#general-instructions)
* [Requirements & Specifications](#requirements-and-specifications)
* [Acknowledgements](#acknowledgements)
* [About Chingu](#about-chingu)

## Overview

Welcome, Chingus!

It seems impossible to not be flooded by articles and stories about Artifical
Intellegence in our newsfeeds. This technology has come a long way in just two
short years and it is by no means perfected.

But, it's time to explore this relatively new technology to see how we might
use it in the applications we create. So, let's get started!

![Weekly Menu Scheduler](./assets/meal_planner.jpg)

In this voyage, your team will design and build a web application that lets
its users become more effective and building AI prompts. This applicaion,
will follow a structured metodology to help the user build good prompts. To
test them the app will use [Google Gemini's API](https://ai.google.dev/api?lang=node)
to run the prompt and display the result from Gemini.

The structured methodology to follow for creating a prompt is called
[_Pentagram_](https://tinyurl.com/24vge6j2) and it consists of these parts:

* Persona
  A _persona_ describes who the result will be tailored for. For example,
  
  ```text
  You are a Product Owner, Scrum Master, UI/UX Designer, Web Developer, or
  Data Scientist who is at the beginning of your career and is looking to apply
  what you've learned to build practical experience to help you get noticed in
  the job market.
  ```

* Context
  This provides background information to help the AI tool generate a result
  that best fits your needs. For example:

  ```text
  The information provided should assume that I am a Frontend Web Developer
  who understands the technical aspects of what is needed to build websites.
  But, I have not worked in team projects with individuals in different roles.
  ```

* Task
  The _task_ defines what information you need. For example:

  ```text
  Provide a list of websites for organizations that provide programs and
  services which will help me transform what I've learned into experience that
  other job applicants will not have.
  ```

* Output
  The _output_ defines how you want the AI tool to respond to your users. For
  example:

  ```text
  The tone should be informal and the list of websites should include a link
  to the site, it's name, and cost information.
  ```

* Constraint
  Finally, _constraint_ provides more direction for any boundries you would
  like the AI tool to honor in the results it generates. For example:

  ```text
  Avoid generating lots of text only a summary of the websites are needed. Also,
  responses should be tailored to readers with a high school level of education.
  Avoid overly technical responses.
  ```

## General Instructions

This project is designed to be worked on by a team rather than an individual
Chingu. This means you and your team will need to thoroughly read and
understand the requirements and specifications below, **_and_** define and
manage your project following the _Agile Methodology_ defined in the
[Voyage Handbook](https://github.com/chingu-voyages/Handbook/blob/main/docs/guides/voyage/voyage.md#voyage-guide).

As you create this project make sure it meets all of the requirements, but once
it reaches MVP, start implementing the optional features or get creative and
extend it in ways we haven't envisioned. In other words, use the power of
teamwork to make it distinctive and unique.

Remember, UI/UX creativity is yours to explore—design an interface that stands
out while ensuring ease of use.

Also, there is no need for Voyage teams to purchase any subscriptions or software
in order to create or run your app. Gemini's free tier is sufficent and there
many [web hosting services](https://github.com/chingu-voyages/Handbook/blob/main/docs/resources/techresources/appdeployment.md) with free tiers you can use to deploy your app.

## Requirements and Specifications

### What You Need to Do

The following define the minimum requirements and ideas for features you should
implement. But, we've also included stretch goals you should use to enhance
your app once you complete these basic requirements.

#### Structure

* [ ] This is a full-stack application. Frontend and backend are required.
* [ ] You may use any languages, tools, or libraries you prefer when designing and building this app.
* [ ] You may **_NOT_** use AI-based solution generators like GitHub Copilot.
* [ ] Useful links and resources:
  * [Print React Component](https://www.npmjs.com/package/react-to-print)
  * [Dishes API](https://menus-api.vercel.app/dishes)
  * [EmailJS](https://www.emailjs.com/docs)
  * [Github Authentication](https://www.npmjs.com/package/oauth-client-github)
  * [Google Authentication](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid) A detailed guide on how to obtain an API key and perform Google Authentication.

#### Styling

* [ ] Surprise us!!! Use your team's creativity to make this app distinctive.
* [ ] Add a footer containing a link to your team's GitHub repo.
* [ ] In general, you will find these [UI design principles](https://www.justinmind.com/ui-design/principles) helpful.
* [ ] Recommend using this resource for [clean CSS](https://israelmitolu.hashnode.dev/writing-cleaner-css-using-bem-methodology).

#### Functionality

* Application Overview

  * [ ] Develop a fullstack (frontend & backend) application to facilitate weekly menu scheduling.
  * [ ] Ensure the application is user-friendly, accessible, and visually appealing.

* Authentication
  * [ ] Implement a register & login feature.
  * [ ] Authenticate users via Google or GitHub OAuth securely. (links are available in the resources section)

* Allergy Input and Management

  * [ ] Enable managers to input workers' allergies directly within the app using a user-friendly form or interface.
  * [ ] Allow multiple allergy inputs, with the option to save and manage them for future menu planning.
  * [ ] Automatically filter out dishes containing allergens based on workers' allergy data items.
  * [ ] Enable managers to edit and delete an allergy
  
* Week Scheduling

  * [ ] Provide managers with the ability to schedule menus for a specific week using:
    * Date Picker: A calendar interface for seamless week selection.
    * Default Option: Automatically pre-select the upcoming week for scheduling.
    * Manual Input: Allow managers to specify the start and end dates of the week.

  * [ ] Define the weekly menu structure as a 7-day period starting on Monday and ending on Sunday.

* Dish Management

  * [ ] Dish Assignment

    * Enable managers to assign dishes for each day of the week

      * [ ] Automatically generate a menu with one unique dish for each day using [dishes API](https://menus-api.vercel.app/dishes).
      * [ ] Write a logic to randomly select and assign unique dish for each day of the week.
      * [ ] Implement a regenerate weekly menu feature.

    * "Day Off" Feature

      * [ ] Enable marking specific weekdays as "Day Off", where no dish is assigned.
  
  * [ ] Data Requirements

    * Source dishes from the [dishes API](https://menus-api.vercel.app/dishes) containing the following details:

      * Dish Name: Unique identifier for each dish.
      * Ingredients: List of ingredients used.
      * Calories: Nutritional value of the dish.

  * [ ] Allergen Restrictions

    * Cross-reference the stored workers' allergies data to prevent scheduling dishes containing allergens.

* Validation and Error Handling

  * [ ] Ensure menus are created only for the current week or future weeks
  * [ ] Display an error message for invalid inputs (e.g., selecting past weeks or overlapping scheduling entries).
  * [ ] Prohibit duplicate dish assignments for the same week
  * [ ] Provide clear error messages when duplicates are detected.

* User Interface and Experience (UI/UX)

  * [ ] Present the finalized weekly menu in an intuitive and readable format, such as (table view, calendar-like grid) suprise us :).
  * [ ] Ensure the application is fully responsive and adapts to various devices and screen sizes.

* Data Export

  * [ ] Add functionality for managers to download or export the finalized weekly menu as a PDF or Excel file.

### Extras (Not Required)

* [ ] Implement a mail SMTP to notify workers by email the menu scheduled for the week.

* [ ] Use a mailer mocking tool like [EmailJS](https://www.emailjs.com/docs) to simulate sending the email.

## Acceptance Criteria

* [ ] Users can create workers' allergies

* [ ] Users can successfully create a valid weekly menu with:
  * Unique dishes.
  * Exclusion of allergenic options.
  * Specified days off.

* [ ] The UI provides clear feedback for invalid inputs (e.g., duplicate dishes, allergen violations).
* [ ] The weekly menu is displayed in a clean, accessible format.

## Acknowledgements

We would like to express our profound gratitude to the global developer community, whose collaborative spirit and shared knowledge continually motivate and enrich our endeavors. Together, we achieve extraordinary milestones. Thank you.

## About Chingu

If you aren't yet a member of Chingu we invite you to join us. We help our
members transform what they've learned in courses & tutorials into the
practical experience employers need and want.
