# Introduction
This repository provides a robust and scalable Playwright template designed to accelerate the automation process for any project. Supporting End-to-End (E2E), UI, and API testing, it adheres to industry best practices such as the Page Object Model (POM) and test isolation for maintainability and reusability. 

The template comes pre-configured with essential tools and libraries, including TypeScript, ESLint, Prettier, Allure Reporting, and Faker.js, ensuring a seamless and efficient development experience. Whether you're building automation for a web application or an API, this template serves as a solid foundation to get started quickly and effectively.

# Features
Key features are briefly described in this paragraph.

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
 
