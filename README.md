# Introduction
This repository provides a robust and scalable Playwright template designed to accelerate the automation process for any project. Supporting End-to-End (E2E), UI, and API testing, it adheres to industry best practices such as the Page Object Model (POM) and test isolation for maintainability and reusability. 

The template comes pre-configured with essential tools and libraries, including TypeScript, ESLint, Prettier, Allure Reporting, and Faker.js, ensuring a seamless and efficient development experience. Whether you're building automation for a web application or an API, this template serves as a solid foundation to get started quickly and effectively.

# Features
Key features are briefly described in this paragraph.

## Multiple environments support
One of the key features of this solution is the support of an unlimited number of environments. Therefore, it is possible to execute the same test suit among all environments where it is necessary.
The only thing that need to be adjusted in `.env` variable that contains key configuration variables that are environment specific.

![image](https://github.com/user-attachments/assets/106ad46e-20b5-402b-a3da-91143028a458)


## Custom wait timers
Wait handlers that are provided by Playwright are not always 100% effective. Therefore, the solution contains custom wait handles that are designed to support all cases where the standard approach fails. 

For more information see waitForResponse file:

![image](https://github.com/user-attachments/assets/00c50f2a-0827-4270-9e4d-c3aeffe8315b)



## Custom reports
The solution provides a facility to support custom reports depending on individual needs. 
All default reporters (provided together with Playwright) are supported. On top of that it is possible to add custom reports, as it was done for Allure reporter. The only place that needs to be changed is default playwright config file:

![image](https://github.com/user-attachments/assets/b479906b-6347-4c2a-bb4c-f743dec5608c)


## Keep historical run data.
This feature was designed to allow you to decide whether historical reports and data should be persistent or removed before each test run. This is useful when the same testing suit is run on multiple environments where you might not want to store any test data persistently.

If you decide to keep reports then each of them will be located in a separate ZIP file to reduce occupied space.



## Predefined scripts
Several commonly used `npm` scripts were added to the solution. Each of them can be run separately or can be combined in cascade scripts if needed. See Package.json file:

![image](https://github.com/user-attachments/assets/a3e45e73-b611-4c67-9c0d-3311618cf54c)



## Multiple browsers support
By default this solution supports 3 independent browsers: `chromium` `firefox` and `webkit`.
Each of them can be configured separately in `playwright.config.ts` file:

![image](https://github.com/user-attachments/assets/d63ac197-0fb5-4faa-abde-f5fabe9384fc)

On top of that, tests are designed in a way that is independent on any browser, so it is possible to have a full control on browser(s) on which the tests should be executed. Just use additional parameter while executing the tests, e.g.:
`npx playwright test --project=chromium`


## Ensure coding standards and formatting guidelines
Every developer has his own style of coding and formatting. It has always been like this.
Therefore, tools like `Prettier` and `ESlint` were added to keep consistent layout and coding standards among all files the solution.

Each of them has its own configuration file where all existing rules can be adjusted to individual needs.

![image](https://github.com/user-attachments/assets/45a88d5a-177b-47cd-8b7c-38a7db20fd2d)



# Prerequisites
1. IDE - it can be any text editor, but VSCode is recommended as it supports a dedicated plugin for Playwright.
2. NodeJS ver 20+
3. Docker
4. JAVA (Only for custom reports in Allure)

## Optional
1. SonarQube

# How to start
1. Clone repository
2. Install NodeJS
3. Install Docker
4. Start juice-shop docker image: https://hub.docker.com/r/bkimminich/juice-shop
 
`docker pull bkimminich/juice-shop`
`docker run --rm -p 3080:3000 bkimminich/juice-shop`

This page should be available: `http://127.0.0.1:3080/#/`

6. Copy .env-template and rename it to .env
7. Update content of .env file. Make sure that the address is correct
8. Install JAVA (required for Allure reports)

`sudo apt install default-jre`

10. Install allure
    
If you do not want to install additional tools like Scoop then install it from binaries downloaded from this page: https://github.com/allure-framework/allure2/releases

`sudo dpkg -i allure_2.32.0-1_all.deb`

12. Open Playwright template directory in any terminal

`npm install`
`npx playwright install`
`sudo npx playwright install-deps`

14. Install extension for VScode: `Playwright Test for VSCode`


# Run tests
There are example tests that were added as a template to demonstrate how the solution is structured.
To run these tests use one of the npm commands:

`npm run test`
 
