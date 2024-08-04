# Web Debugging and Optimization Exercise

## Overview

This exercise is designed to improve your skills in web debugging and optimization. You will be working with an intentionally flawed web application. Your task is to identify and document the problems in the provided HTML, CSS, and JavaScript files.

## Instructions

Copy this README.md into your Devtools REPO in a new MD file called Day-5.md

### Step 1: Identify Problems

Go through the provided files (`index.html`, `style.css`, and `app.js`). Each file contains several marked problems (indicated by comments like `<!-- Problem 1: -->`, `/* Problem 5: */`, etc.). Your task is to identify what each problem is and why it is an issue.

### Step 2: Document Each Problem

In this README.md file, document each problem. Write a sentence for each problem explaining what the issue is and why it's problematic. Use the format below for your documentation:

#### Problem 1:

- Description: Does not have a meta name="viewport" tag with width or initial-scale.

#### Problem 2:

- Description: No title tag in the head. Or description meta tag. 

#### Problem 3:

- Description: Unused internal CSS...bad selector.

#### Problem 4:

- Description: Explicitly set width and height for images. 

#### Problem 5:

- Description: Third-party cookies. 

#### Problem 6:

- Description: '!important' set in the body selector in external CSS.

#### Problem 7:

- Description: '#img-container' sizing the img with image container.  

#### Problem 8:

- Description: Unused classes in external CSS. Bad selectors. 

#### Problem 9:

- Description: There is no problem 9. 

#### Problem 10:

- Description: The wrong selector was used. ('body output')

### Step 3: Propose Solutions

For each identified problem, propose a solution or an optimization strategy. Briefly describe how you would fix the issue.

#### Problem 1:

- Solution: Add meta tag with viewport, device-width and scale.

#### Problem 2:

- Solution: Add a title tag and meta tag with description of webpage.

#### Problem 3:

- Solution: With the unused or bad selector, I would delete it or if it is a necessary style you can add it to a element correctly. 

#### Problem 4:

- Solution: You can change the width and height inside the URL, download the image to your machine or set height and width for the image. 

#### Problem 5:

- Solution: I ctrl + clicked the link and downloaded to my machine and put in the script tag the new file name. 

#### Problem 6:

- Solution: Delete the '!important' in the rules. 

#### Problem 7:

- Solution: ?Image and image container?

#### Problem 8:

- Solution: Delete all unused CSS. 

#### Problem 9:

- Solution: There is no 9th problem. 

#### Problem 10:

- Solution: The selector was wrong. Change it from ('body output') to ('#output'). This also slows down the page quite a bit. 


### Step 4: Reflect

From what I have seen, it seems like a lot of issues can be fixed by properly handling your assets. Trying to manipulate more than 1400 elements to the webpage slows down load times. Avoid doing this would be ideal. Adding meta tags with descriptive information helps with the accessability and SEO.  

