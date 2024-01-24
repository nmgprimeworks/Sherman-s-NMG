# Automation Testing of Sherman´s Website
This is a tecnihcal manual of the automated testing project for the Sherman's website.
## Table of Contents
1. [General information]()
2. [Installation and settings]()
3. [Folder structure]()
4. [Notes]()


## General information
In this section you can figure out some general features of the project.
* Operating System: Windows 11
* Code editor: Visual Studio Code
* Framwork Automation testing: playwright
* Browser: chrome 120.0.6099.225
* Pattern Design: POM (Page Object Model)

## Installation and settings

### Requirements
* Visual Studio Code
* Node Js
* Google chrome

Below is the step by step of installing the necessary libraries to create the project
1. npm init playwright@latesd
2. npm i @cucmber/cucumber -D
3. npm i typescript -D
4. npm i ts-node -D
5. npm i cucumber-html-reporter -D
6. npm install multiple-cucumber-html-reporter --save-dev

## Folder structure
The pattern design that is used in the project is POM (Page Object Model).POM allows que de project can be organized, understandable for other programmers. This pattern suggest the following folder structure that is applied in the project:

*Steps Folder: this folder contains the classes with the steps that cucumber tool gives after every feature it is executed the fist time. 
 Note: To every feature belongs one step class.
*Locators Folder: this folder contains files type "jason", where are the locators of the elementes of the websites.
*Actions Folder: this folder contains the classes where is programed every action it is gonna be executed in the automation.
*Feature Folder: this folder contains the files con the scenarios os the test ,written in a common lenguage then later it can be translate to machine lenguage, to program every test.
*Data Folder: this folder contains the files type "jason", where are the neccesary data to executed the test cases.
*Utils Folder: this folder contains some classes with specific and repetitive tasks that will use in the project.

## Notes
### Others files
1. cucumber.json: This file containsall the necessary configuration for the operation of the cucumber tool.
2. package.json: This file contains all the general configurations of the project, for example here it can be especificated the plugins and tools with their versions.
3. tsconfig.json: This file contains the configurations of the tools of programing language "typescript". 
   
### List of plugins and technologies
* Cucumber (version 10.3.1): tool based on BDD.
* Playwright (version: 1.41.0): Integración framework Serenity con Cucumber para la gestion de features de Gherkin.
* Types node (version 20.11.5): Framework para la gestion de features de Gherkin.
  
### To get latest source code (Repository cloning)
Repository cloning:
git clone https://github.com/nmgprimeworks/Sherman-s-NMG.git

After cloning the project repository, it must be taken into account that the only branch that the repository has is the main one, which is why a branch must be created for the modifications to be made.

### Developers <a name="Developers"></a>
[Felipe Molina Rios](mailto:felipe.molina@nationwidegroup.org)
