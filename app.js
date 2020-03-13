const Manager = require("./libraries/Manager");
const Engineer = require("./libraries/Engineer");
const Intern = require("./libraries/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamMembers = [];
const idArray = [];