---
title: Consistently Inconsistent
date: 10/12/2016
excerpt: Processing visa applications is hugely complex, with numerous rules, exceptions to rules, additions to rules, addendums to the additions to the rules ad infinitum. Attempting to codify this as a set of profiles resulted in two previous attempts, one complex and user-hostile, the other ending up with a million-row spreadsheet that took half an hour to load from the network - I was asked to do better...
cover_image: '/img/projects/confusion.jpg'
tech_used: Microsoft Access
---
## Background
Particularly post-9/11, travel visa applications are scrutinised to varying degrees based on a number of factors. Those factors however were not always obvious or immediately apparent, and the software used to process and record the process of evaluating a visa application did not have the process 'baked in'. This at best resulted in slow processing times as each application had to be vetted against multiple sets of sometimes conflicting regulations, and at worst could result in an application not receiving enough scrutiny, allowing criminals or even terrorists legal entry into the UK.

A previous UK Visas and Immigration employee had created a highly complex profiling system, but as they had long since left the organisation and had never produced any documentation, nobody knew how to use it, and even if the more tech-savvy members of staff could work out how to use it, general staff would likely not be able to. My line manager took another tack, creating a gargantuan spreadsheet which contained every possible combination of factors that could be applied to a visa application, but this ended up with over a million rows of data and took half an hour to open on an already taxed LAN. Even worse, any new additions (which happened regularly) would exponentially increase the size of the spreadsheet, and any changes would likely have to be verified manually by going through thousands of rows of data before the profiles could be deemed accurate enough to be relied upon for what is a safety-critical job.

## Investigation
I chose to approach the problem from a different angle. Each application was not a 'profile', but a chosen path in a Choose Your Own Adventure book, wherein the reader makes decisions in the narrative by turning to a particular page in the book, then following the instructions on that page and turning to another, until they reached a destination endpoint. Steve Jackson's Fighting Fantasy books, although similar to Choose Your Own Adventure, added elements from pencil-and-paper roleplaying games, such as an inventory, and allowing certain choices only if the reader had acquired certain items. In the same way, visa applications could 'pick up' additional checks, such as if the applicant had diplomatic status, which would override certain checks, or a criminal record, which would ensure certain checks. The end result would be a complete pathway that reflected every possible connotation of the visa processing regulations, but which could be amended with a single addition to the database.

## Implementation
Due to security limitations on UKVI IT systems, I was required to use only Microsoft Office applications, and chose Access as the most performant and suitable application avaiable. However, the relational model did not fit well with the decision tree structure I had in mind, so I created a graph database on top of Access, with just a table of Nodes, Node Properties, Edges, and Edge Properties. This gave me the flexibility to build a decision tree, and build a log of the decisions made for each visa application for auditing purposes, by simply creating a node for each application, and edges connecting to the Nodes and Edges used by the application as it followed the decision tree.

For the interface, as much as possible I created Yes/No questions, to keep the interface as simple as possible, and alongside the user interface I built an administration interface which could be used to edit the decision tree easily at any point, and without leaving 'orphan' branches of the decision tree to clutter up the database.

## Result
Having demonstrated the usefulness, efficiency, reliability and customisability of my tool, I was able to successfully roll this out to all the visa sections worldwide, who were able to customise the tool for their own applicants and scrutiny rules. Having the rules embodied in a simple tool had a positive impact on visa processing times, and also resulted in fewer errors such as unnecessary checks on visa applications.