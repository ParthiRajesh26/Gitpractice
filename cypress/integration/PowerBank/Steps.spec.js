/// <reference types="Cypress"/>

import{ Given,When,Then,And } from 'cypress-cucumber-preprocessor/steps'

Given("user is on the login page",() => {

    cy.visit("https://opensource-demo.orangehrmlive.com/")


})


When("user enters username and password",()=>{

    cy.get("#divUsername").type("Admin")

     cy.get("#txtPassword").type("admin123")

})


When("the user clicks login button",()=>{

    cy.get("#btnLogin").click()


})


Then("validate the homepage title",()=>{



})


