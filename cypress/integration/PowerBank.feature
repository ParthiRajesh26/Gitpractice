Feature: Login Feature

Scenario: Login Scenario
 Given user is on the login page
  When user enters username and password
  When the user clicks login button
 Then validate the homepage title
 