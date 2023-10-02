# Saranya Somagani's Automation Challenge Submission

## Introduction
Thank you for considering my submission for the BIMM Automation Challenge. 
In this README, I will provide an overview of my solution, challenges I faced during development and how I addressed them, and any additional information you may need to evaluate my work.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Instructions](#instructions)
- [Dependencies](#dependencies)
- [How to Run](#how-to-run)
- [Challenges Faced](#challenges-faced)


## Overview
I approached this challenge with a focus on reusability, scalability and strategy to ensure a robust and maintainable automation process.

I believe that my solution effectively addresses the automation task outlined in the challenge, and I look forward to your feedback and evaluation.

## Project Structure
In my solution, I organized the project as follows:

- `e2e/api` - Contains the source code for the automation script for front-end and API.
- `fixtures/` - Stored data or resources used by the script.
- `supprt/Page_objects` - This directory holds the page objects.
- `README.md` - The README file providing details about my solution (this document).

## Instructions
To execute my automation script, please follow these steps:

1. Clone the repository to your local machine.
2. Install Node and Cypress followed by opening cypress test runner.
3. Navigate to Cypress/e2e folder to execute test scripts.

## Dependencies
To run my automation script, you'll need the following dependencies:

- cypress: ^13.3.0,
- cypress-file-upload": ^5.0.8

## Challenges Faced
During the project, I encountered some challenges:

- Test site was flaky. To Handle the flakiness i divided tests into small scripts
- Implemented error handling to handle uncaught exceptions
- Its challenging to handle multi tabs in cypress, since its effective for single web page applications i removed some attributes to open new tab into the same tab.
  
I'd love to hear feedback and happy to adress any issues/questions. Thank you for your time and consideration.
