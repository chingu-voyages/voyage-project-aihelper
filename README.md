# voyage-project-ai

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
in order to create or run your app. The [Gemini Flash 1.5 free tier](https://ai.google.dev/pricing#1_5flash) is sufficent and theremany [web hosting services](https://github.com/chingu-voyages/Handbook/blob/main/docs/resources/techresources/appdeployment.md) with free tiers you can use to deploy your app.

We have added a sample React app to the `src` directory of this repo you can
use to see how to call the Gemini API.

## Requirements and Specifications

### What You Need to Do

The following define the minimum requirements and ideas for features you should
implement. But, we've also included stretch goals you should use to enhance
your app once you complete these basic requirements.

#### Structure

* [ ] This is a frontend application.
* [ ] You may use any languages, tools, or libraries you prefer when designing and building this app.
* [ ] You may **_NOT_** use AI-based solution generators like GitHub Copilot.

#### Styling

* [ ] Surprise us!!! Use your team's creativity to make this app distinctive.
* [ ] Add a footer containing a link to your team's GitHub repo.
* [ ] Recommend using this resource for [clean CSS](https://israelmitolu.hashnode.dev/writing-cleaner-css-using-bem-methodology).

#### Functionality

* Application Overview

  * [ ] Develop an application to that helps users become more effective at building
  meaningful AI prompts.
  * [ ] Ensure the application is user-friendly, accessible, and visually appealing.
  * This is a single page application whose landing page contains these components:
    * [ ] A _header_ containing the name of the app and the current date
    * [ ] A _footer_ that links to your GitHub repo and a list of who is on the team.
    * [ ] A _Pentagram input form_ to allow the user to enter the various parts that make up the
    Pentagram structure.
    * [ ] A _result_ area that will contain the results returned from Gemini.

* Pentagram input form

  * [ ] The form must include and input field cooresponding to each part of the
  Pentagram methodology.
  * [ ] The user must enter data into all Pentagram fields.
  * [ ] The user must be allowed to update any or Pentagram field between submissions.
  * [ ] Include a reset button for each Pentagram input field to allow it to be cleared
  independently from other form fields.
  * [ ] Include a button to submit the prompt through the Gemini API.
  
* Result

  * [ ] Format the output returned by Gemini so it is readable and displayed as left justified
  paragraphs and lists. Note. Gemini will return these, but a `console.log` of the result text
  will not necessarily be properly formatted. You will need to read the documentation and
  research the returned data to determine how to implement this feature.

* Validation and Error Handling

  * [ ] Display an error message for invalid inputs (e.g. an empty Pentagram input field).
  * [ ] The user must be informed aboout errors at the time they are detected.
  * [ ] Provide clear error messages when they are corrected.

* User Interface and Experience (UI/UX)

* [ ] In general, you will find these [UI design principles](https://www.justinmind.com/ui-design/principles) helpful.
* [ ] If your team doesn't include a dedicated UI/UX Designer you will [find
these tips](https://github.com/chingu-voyages/Handbook/blob/main/docs/resources/techresources/uiux.md)
helpful.

### Stretch Goals (Not Required)

Once you complete the basic application begin enhancing it with any of the
following optional stretch goals. Make sure that any of these you choose to
implement match the capabilities of your tier and the resources (e.g. time &
knowledge) availble to your team.

* [ ] Allow the user to display more information about how to use each field
in the input form. This should be implemented individually for each field.

* [ ] Personalize the application by collecting the user's name and including it
in labels, alerts, and error message.

* [ ] Add functionality export the prompt and result as a PDF or CSV file.

* [ ] Add functionality to allow users to rate and save prompts and their results.

* [ ] Add a dashboard to display metrics including, but not limited to,
the following:
  * Number of prompts created in the current session
  * Number of errors detected in the current session
  * Percentage of errors to successful executions in the current session
  * Average and total number of characters for results in the current session
  * Number of successful and unsuccessful calls to the Gemini API in the
  current session

* [ ] Supplement the dashboard metrics with cooresponding graphs of your choice.

* [ ] If you created a dashboard (see above) and have implmented a backend
application component store all prompts and results in a database and include
lifetime versions of the session metrics.

* [ ] Implement full-stack application that makes the calls to the Gemini API
via a BE route. Frontend and backend are required.

* [ ] Implement a register & login feature.

* [ ] Authenticate users via Google or GitHub OAuth securely.
  * [Github Authentication](https://www.npmjs.com/package/oauth-client-github)
  * [Google Authentication](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)
  A detailed guide on how to obtain an API key and perform Google Authentication.
  
* [ ] Add functionality to print and/or email the results to the user. Check out
[EmailJS](https://www.emailjs.com/docs) for how you might email them.

## Acceptance Criteria

* [ ] You should include a good readme in your project repo.
* [ ] Add acceptance criteria to your readme for any stretch goals you choose
to implement.
* [ ] Users can enter data into the input form, submit it, and formatted
results will be displayed.
* [ ] Error messages are displayed at the time an error is detected. These
should be clear and provide advice for how to correct the error
* [ ] The UI provides clear feedback for invalid inputs.
* [ ] The results returned from Gemini are displayed in a clear and readable
fashion.

## Acknowledgements

We would like to express our profound gratitude to the global developer
community, whose collaborative spirit and shared knowledge continually
motivate and enrich our endeavors. Together, we achieve extraordinary
milestones. Thank you.

## About Chingu

If you aren't yet a member of Chingu we invite you to [join us](https://chingu.io).
We help ourmembers transform what they've learned in courses & tutorials into the
practical experience employers need and want. The experience that helps to set you
apart from other applicants for the same jobs.
