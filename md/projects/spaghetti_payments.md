---
title: Spaghetti Payments
date: 01/05/2009
excerpt: The EU Seventh Framework Programme funds research using a very specific reimbursement model. Working this out manually on a regular basis would be time-consuming, expensive, and awkward, given the constraints of the project management system used. Could I find ways to make this process less time-consuming?
cover_image: '/img/projects/spaghetti.jpg'
tech_used: Java, Microsoft Excel
---
## Background
The EU Seventh Framework Programme (FP7) funds large-scale research projects in a variety of areas. The university I was working in received a million-Euro funding package to research the ethical issues surrounding emerging technologies. The (somewhat confusingly...) Java-based Project.net project management platform had been selected to manage the research activities of the group of 26 staff spread over 11 EU institutions.

The issue arose when working out how to reimburse institutions for their staff members' time. Under FP7, the type of institution (university, SME etc.), the type of work being done (research, presentation, management), travel and subsistence, and the overhead rate of each individual institution all had to be taken into account in working out how much every person-hour of work was reimbursed at.

Finally, I had only two weeks to complete the work(!)

## Investigation
Initially, I investigated the possibility of directly interfacing with the Project.net database, however this solution would be tightly coupled to the data structure which could be subject to change, so instead I looked at Project.net's own export tools, which I could use to extract data from the platform. 

Given time constraints and the end users' familiarity with Microsoft Excel, I encoded the information on institution type, work type, travel and subsistence, and overheads into Excel tables, making them easy to edit without my intervention and respond to any changes further down the line. In this I incorporated an Effective From date field, to ensure that any changes (such as a staff pay rise) would only be in effect from that date and not interfere with older calculations over the course of the two year project.

## Implementation
To generate the accounting report, I created a new table which referenced the lookups I had already created, and included an auto-populated formula to work out the final embursement for each block of work completed by each member of staff. This allowed the spreadsheet to become a quick, single source of truth for accounting decisions.

## Result
With the spreadsheet complete the reams of manual calculations which would have been required were eliminated, freeing up the project manager to complete other tasks. This became particularly important during the eruption of Eyjafjallajökull and associated air travel disruption, when alternative transport arrangements had to be made for many staff and many others became stranded during a conference. Secure in the knowledge that their financial calculations were correct, the project efficiently used their total budget to conduct research and make important recommendations on future technologies to the European Union.