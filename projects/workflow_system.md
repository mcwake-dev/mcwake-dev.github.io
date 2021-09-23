---
title: So Much Work, So Little Time...?
date: 09/03/2016
excerpt: Up to 60 members of staff were assigned to completed telephone interviews with people sponsoring overseas travel visa applications. Despite this, regular overtime was needed to even approach meeting the deadline for completion. Managers reprimanded staff for just not working hard enough, but I wasn't convinced...
cover_image: '/img/projects/busy.jpg'
tech_used: Visual Basic for Application (VBA), Microsoft Excel, Microsoft Access
---
## Background
UK Visas and Immigration (part of the Home Office) conduct telephone interviews with UK citizens whose details have been provided by overseas visa applicants as sponsoring their applications, either by providing accommodation or by just 'vouching' for them. As it was obviously much cheaper and simpler to contact people in the UK from the UK, the details of the people to be interviewed were sent to our UK Interview Hub, with the completed interview transcripts sent back to the overseas posts for a decision to be made.

Despite assigning up to 60 staff at a time to complete these interviews, with over a thousand interviews per week with a 48 hour turnaround time, coupled with the need to retry any missed calls up to three times, it was always going to be a difficult task. But as no statistics were being kept to show the amount of work either required or being done, managers assumed that staff were simply not working hard enough, and regularly pulled the entire team into a room for a reprimand. This damaged staff morale and reduced productivity even further.

### Steps Required To Complete An Interview
1. Check interview record sheet in Excel for scheduled or unscheduled interview
2. Make a copy of the correct interview transcript template in Word and copy the required details across from the Excel sheet
3. Attempt the interview - if interviewee could not be reached, record time and date of attempt and save file in correct location, or update file if interview had previously been attempted
4. Complete interview transcript with recommendations based on interview
5. Save interview transcript to correct location for day, location and interview type
6. Update interview record sheet in Excel with recommendations and attempt times
7. Repeat until done

## Investigation
Having become the de facto supervisor for the Interview Hub due to staff sickness, I decided to investigate what was going wrong with the interview hub. Although I had done many interviews myself, by shadowing colleagues who were less IT savvy (for example using the Edit > Copy and Edit > Paste menu items instead of Ctrl+C and Ctrl+V) I was able to quantify the true scale of the problem. More than half the allotted time per interview was being used just to set up and clear down each interview correctly, and many interview records were being returned from overseas posts due to incomplete data, while others were going missing entirely, being saved on local hard drives instead of the correct location on the network drive. 

Given the repetitive nature of the work required to set up and clear down each interview, I strongly felt that much of this could be effectively automated. The primary limitation was that the only software approved for use on UKVI IT systems was Microsoft Office, so I set to work learning Visual Basic for Applications from scratch in order to develop a solution.

## Implementation
Firstly, I re-engineered each different type of interview template as an actual Microsoft Word template with form fields which were individually addressable, to make input and extraction of data from the forms as easy as possible. Because the interview transcript templates were subject to regular alteration, I ensured that any updates went via myself or a fellow tech-savvy colleague to make sure that changes would be implemented without impacting functionality.

Next, I added VBA code to the Microsoft Excel interview record sheet, which contained the details of each interview to be completed, such that a staff member could simply click a button and be presented with the correct interview transcript template, already saved to the correct network location, and with the details of the interviewee already filled in. This eliminated a huge source of errors, as files were always in the right place, and never had data missing.

Finally, to the interview transcript itself I added a macro trigged on closing the file which would auto-save but also check the form fields required for a complete transcript to ensure that they had been filled in, and alerting the staff member to the error if found. This removed another source of errors entirely.

As an additional feature, I added code to update a Microsoft Access database with the time taken per interview, and the number of interviews completed. After allowing this system to record data over several days, I was able to develop acceptable performance benchmarks which we could use to demonstrate that the vast majority of staff were working to their full potential, and managers had been incorrect to reprimand the entire team.

## Result
As a result of automating away many aspects of the interview programme, the number of errors resulting in an interview record being returned dropped from tens per day to barely one per fortnight. Additionally, the improved efficiency of automating the boilerplate requirements for each interview meant that what had taken 60 members of full time staff and needed weekend overtime dropped to needing less than 10 members of full time staff with no overtime. These staff were then able to be trained to support other areas of the organisation, which had a massive positive impact on the entire global organisation, allowing UKVI to effectively double their capacity for processing visa applications.
<br />

*Image Rights:  License: Creative Commons 3 - CC BY-SA 3.0*

*Attribution Link: Pix4free.org - link to - https://pix4free.org/*

*Original Author: Nick Youngson - link to - http://www.nyphotographic.com/*

*Original Image: https://www.thebluediamondgallery.com/laptop01/b/busy.html*