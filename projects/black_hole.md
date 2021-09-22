---
title: The Data Black Hole
date: 22/09/2021
excerpt: Working for a company that sold and fitted garage doors, I stepped in when a new cloud-based workflow monitoring system began causing wildly more errors than the system it was meant to improve upon. All the right data was going in, but nothing useful was coming back out...a Data Black Hole.
cover_image: '/img/projects/black_hole.jpg'
---

# The Data Black Hole
*Working for a company that sold and fitted garage doors, I stepped in when a new cloud-based workflow monitoring system began causing wildly more errors than the system it was meant to improve upon. All the right data was going in, but nothing useful was coming back out...a Data Black Hole.*
> **Tech Used:** Node.js, Parcel, Express, lit-html, Heroku, MongoDB Atlas, Twilio SendGrid

![A Black Hole](../public/img/projects/black_hole.jpg)

## Background
The garage door company I worked for signed up to a new cloud-based workflow monitoring system, [BigChange JobWatch](https://www.bigchange.com/job-management-software/). The system consisted of a webapp which in-office staff used, and a mobile app using tablets which were used by remote staff conducting surveys and performing new fittings and repair jobs. Despite holding far more data than the old manual system of a whiteboard for the next five days' jobs and a paper diary book, errors were occurring across the board such as surveys not being followed up to make a sale, doors not being ordered from manufacturers until the day it was supposed to be fitted, and parts not being ordered for repairs. All the data was there, but it wasn't being presented in a way that provided any value to the end users in the office.

## Investigation
Firstly I investigated what could be done about the default task view calendar in the BigChange JobWatch webapp. The intention was to display this view on a large screen in all four offices of the company, but this quickly proved unworkable because the webapp was not designed to be used this way, was not in any way reactive to changes in screen size, and could only show either a job type denoted by a cryptic icon, or a job flag denoted by a background colour for a job with no description or legend visible to show what the colours meant. Clearly a more comprehensive solution was needed!

Delving into the documentation, I discovered that a number of API endpoints existed for the BigChange JobWatch webapp. Requesting an API key, I set to work firing sample queries at the endpoints to see what useful data I could extract. I then consulted with staff in the office to see what data they needed to be able to see to work more effectively.

## Implementation
Having developed a basic [Node.js](https://nodejs.org/en/) [Express app](https://expressjs.com/) which polled for data from the BigChange API endpoints, I then proceeded to implement a CSS grid UI which targeted high readability on a large 720p screen, and for the sake of simplicity used the [Parcel](https://parceljs.org/) bundler to quickly get an ES6 site up and running, and the [lit-html](https://lit.dev/) rendering engine with DIY hash routing to render the interface without becoming bogged down in implementation details of a particular front-end framework. As there was no value in updating the UI unless new data had been received from BigChange, I used [Socket.io](https://socket.io/) to push new data to my webapp when it was received successfully. This made it easy to have new data cascade down a set of DIY functional components which returned a `TemplateResult`, and only issued a single `render()` command per data update.

The resulting webapp gave a view of all jobs for a single day, and was able to show any day past or future. Jobs were colour coded by type, progress (Not Started, Started, Finished), but also had text descriptions, and showed the status flags for the job (such as Order Placed, Door Ordered From Manufacturer, Order Confirmation Received, Door Delivered, Ready To Fit). 

Although not strictly required, given the ease of development, I also added a Google Map showing the current GPS location of each remote worker, which was useful if a customer contacted the office to check when a remote worker would be arriving at their location. For the privacy of the remote workers, I disabled this feature outside of office hours as they would often take their tablets home with them.

I deployed the webapp to [Heroku](https://www.heroku.com/), as this provided a fast, extensible and low-maintenance alternative to self-hosting on the company's own old and overworked server.

## New Features
Following the successful rollout of my new dashboard, which already helped to reduce mistakes, I was approached to generate several reports by the owner of the company. These reports would help to monitor the effectiveness of sales staff, the performance of fitting teams, and provide early warning of issues such as failing to order a door before it was due to be fitted. Analysing these reporting requirements, it quickly became clear that such queries would be difficult to develop using on the API methods from BigChange, and so I resolved to develop a means to extract the data from BigChange and cache it locally for querying, while also providing some continued operating capability during the occasional lapse in service from the BigChange JobWatch webapp.

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) provided the quickest solution, and with only slight transformation I was able to extract and save the data from BigChange into a new format amenable to querying hosted in the cloud. I connected this to my Heroku-deployed webapp to provide real-time querying capabilities, and used [node-cron](https://www.npmjs.com/package/node-cron) to schedule regular reports. These reports were then emailed using [Twilio Sendgrid API](https://www.twilio.com/sendgrid/email-api) to in-office staff and managers.

## Errors Eliminated, Customers Happy, Orders Up
With the new reporting features provided by my webapp, the errors which had plagued office staff and customers for months were effectively eliminated. This resulted in a major uptick in positive feedback from customers, and through recommendations many more orders began to come in, resulting in the need to hire additional sales staff and another fitting team to meet demand. Able to leverage the BigChange JobWatch system to its full potential with my additional views and reports, the company avoided a costly mistake, and my separate MongoDB data cache ensured that the company would not be susceptible to vendor lock-in if they wished to switch to a different system in the future without losing their data.
