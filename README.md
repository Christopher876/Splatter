# Splatter

*Code Name: Project Bug*

Splatter is a project that is going to be written in Java and ReactJS. The goal of this project is to create a usable Bug Tracker that can provide all of the features that a user might expect from a modern bug tracker.

It will utilize all of my knowledge that I have gained over the past 5-6 years of teaching myself programming and going to college to complete my Computer Science Degree. This project will be a cumulation of my product management skills, documentation skills and application development skills.

## Features

1. Forum-like interface for the bug that is being viewed. This is an interface similar to that of perhaps Github Issues but with quite a few differences
2. Ability to assign bug severity, priority (needs to be a reason for why this bug may be a priority)
3. Assign a task to a developer and show the assigner and the assignees on the bug page.
4. Sort by feature request, OS type, Version, etc.
5. Custom field for bug info such as os, os version, application version.
6. Privacy mode - allows a bug to only be seen by the assigners and assignees until it is made visible
7. Notifications - Email users when there has been an update to a thread that they have subscribed to.
8. Reminders for bugs that have not seen any progress in a while to bring some more attention to them
9. Search engine that is actually good. Allows the user to search for a bug with various different fields such as, by name, severity, status (open/close), OS, etc.
10. Users are listed that have participated in the thread.
11. Pinned bugs that are placed at the top of the bug view
12. listings of the number of bugs that are current opened and closed
13. Show how long ago the bug was opened and show the number of comments on that particular bug
14. Milestones - Check off a goal that has been reached by the bug. E.g. the memory leak has been found
15. Markdown support within the comment editor so that there can be complex messages sent that include code snippets
16. Material design UI
17. Multiple databases for each project that a team is working on so that there an be one bug tracker for every project.
18. OAuth 2 security so that we will be utilizing JWT for our authentication

## Tech Stack

1. Java - writing the backend server side code
2. ReactJS - writing the front end code that consumes the REST API
3. Spring Boot - Responsible for providing security services and our REST platform
4. MongoDB - Provides an easy document system for our data to easily be coupled together. **It was chosen over Postgres because it allows for data to be stored as objects and it allowed for easy coupling of data to a thread and allows for the use of easily adding more attributes to the data**
5. Read The Docs - This is the platform that will be utilized to write beautiful documentation for the entire application from the backend to the frontend.
6. JUnit - Allows for the unit testing for the Java backend and ensure that we are getting the correct information every time that the code is executed.
7. Jenkins - Automates some of the workflow such as unit tests
8. Docker - Allows for easy development across my Windows 10 environment using WSL2 and all of my Linux development environments from my Thinkpad Desktop to my personal development server. It will also be used for deployment.
9. Dockerhub - Allows for the uploading of docker images to the cloud so that they can be synced with the production server.
10. Watchtower - Allows for the automation of docker container updating and deployment at specific times during the day.
11. Nginx - My preferred http server on Linux in which a reverse proxy will be used for the production deployment.
12. Certbot & Let's Encrypt - Allows for easy SSL certificate creation so that users can sta protected.

## Quick Mockup

