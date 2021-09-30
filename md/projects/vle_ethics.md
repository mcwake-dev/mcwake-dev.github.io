---
title: Blackboard Black Box
date: 01/01/2009
excerpt: While developing research training modules using the Blackboard VLE, I encountered a problem. How could we show different content to different students, dependent on the scores of their tests and surveys? Though not officially supported by Blackboard's Virtual Learning Environment, I came up with a cunning plan...
cover_image: '/img/projects/black_box.jpg'
tech_used: Blackboard Virtual Learning Environment
---
## Background
While developing a set of research training modules for overseas PhD students, I came across an issue. While the Blackboard VLE included a number of useful tools to assess students, such as quizzes and surveys, the system did not allow us to selectively show or hide content based on these scores or the results from individual questions. This was particularly problematic when dealing with research ethics. While ostensibly an art PhD student would not need any training in handling human tissue, one year several art students became interested in painting with human blood, and suddenly there was a need for them to learn about the Human Tissue Act - I needed a way to differentiate students' research ethics training based on their research subject. While I could easily write a quiz to get this information, how could I then change the content the students were required to complete when I could only perform simple comparisons (e.g. greater than, less than, equal to) and basic arithmetic operations?

## Implementation
The solution I devised was to store the score for the research students as a bitmap, with ones and zeroes representing answer yes or no to questions such as "Does your research involve human tissue in any way?". By performing arithmetic on the answers to these questions, I was able to extract individual answers to questions and then show and hide course content based on these values.

## Result
As a result I was able to adapt this approach to a number of research training courses, and the platform was rolled out to hundreds of PhD students studying abroad who were unable to attend face-to-face training sessions.