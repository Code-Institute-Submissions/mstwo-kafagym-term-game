# KafaGym Website

Welcome to [KafaGym Term App](https://kafamem.github.io/mstwo-kafagym-term-game/)
## Project rationale

The KafaGym Term Game project is an extension from the [KafaGym](https://kafamem.github.io/msone-kafagym/) and it aims at equipping the gym members, as site's users, with
the terminology that they are likely to need during their training at the gym. This will allow them to follow the gym instructions using the right terminology.


## User Experience (UX)

The website is an app under the form of a game whereby the user becomes familiar with the gym terms. It is designed in such way that the user will interact with the app
by type flashing word(s) and get 'Passed!' as a positive feedback upon typing the words within the indicated time (counting down 6 seconds). In case of misspelling the user 
gets an immediate 'Fail' feedback. The 'End of game' feedback, on the other hand, pops up when the time runs out before the user was able to type anything.

### User stories<br>

<ul>
    <li>User Stories Goal</li><br>
    a. As a user to the KafaGym Term App site, I want to learn some gym terms by quickly memorizing the flashing words and then typing it.<br>
    b. As a user to the KafaGym Term App site, I want to have fun with the app as I receive the feedback after the validation of my answer.<br>
    
</ul> 

### Design Choices<br>
<ul>
    <li>Colour Scheme</li><br>
    - Three main colours (white, orange and dark grey) were used throught the entire design process of the site. Their combination originated from the branding logo KafaGym
    which is a gym logo from shutterstock customized to meet the KafaGym needs with help of Ai (Adobe Illustrator) where the coined word 'Kafa' was made out of two syllables
    word with 'Ka' standing for 'Karenzi' and 'Fa' standing for 'Fabrice'; the names of the site developer then the word gym.<br><br>
    <li>Typography</li><br>
    - The Roboto font is the main font used for the entire website with Sans Serif as the backup font in case Roboto font does not respond correctly.
    The Roboto font looks nicer on web pages.<br><br>
    <li>Imagery</li><br>
    The site uses only one image which is the logo for branding purpose. It was designed with high resolution images to make it look attractive. The logo was also designed with help of Ai was created with a transparent background
    and is a vector based logo which makes it adjustable to various 'witdh' values without losing its original resolution.<br>
</ul>


### Wireframes
* Home Page and phone view Wireframe - [wireframe](https://github.com/kafamem/mstwo-kafagym-term-game/blob/master/assets/image/KafaGym%20Term%20App%20Wireframe%20Desktop%20%26%20phone.png) 
* Home Page Wireframe tablet view - [wireframe](https://github.com/kafamem/mstwo-kafagym-term-game/blob/master/assets/image/KafaGym%20Term%20App%20Wireframe%20-%20tablet.png)

## Features

### Existing Features
<ul>
    <li>The site is a single page that is responsive on all device sizes.</li><br>
</ul>

### Features Left to implement
<ul>
    <li>The complexity of the app and time constraint did not allow me to set up score functions.</li><br>
</ul>

## Used Technologies

### Languages Used

* HTML5
* CSS3
* JavaScript

### Libraries Used

* [Bootstrap]():
    - Bootstrap was used to ensure the responsiveness and the styling of the website.
* [GoogleFonts]():
    - Google fonts were used to import the 'Roboto and sans-serif' fonts used for typography.
* [Git]():
    - Git was used for version control mainly to commit with help of Gitpod terminal and Push to GitHub.
* [GitHub]():
    - GitHub is used for storing the code pushed from Git. 
* [Balsamiq]():
    - Balsamiq was referred to create the website wireframe in all its responsive dimensions.
* [ColorZilla]():
    - ColorZilla was used to pich the appropriate hexadicimal during the design process. 

## Testing

To ensure the validity of the website code, the following validators were used:
* https://validator.w3.org/
* https://jigsaw.w3.org/css-validator/
* https://jslint.com/

### Testing User Stories from User Experience (UX)
1. User  Goal
   1. a. As a user to the KafaGym term app, I want to learn some gym terms by quickly memorizing the flashing words and then typing it.
        - Once the website home page is opened, an interface is displayed.
        - The user is given instructions on how to play the game.
        - Upon refreshing the page a flashing gym term retrieved from the array appears for 3 seconds to read.
        - Then the user goes on to type the flashing word withing 6 counting down seconds.
        - The correct message pops up if the user typed the word correctly.
        - If the word is wrong, the fail message appears.
        - If the time runs out, the 'End of play' message appears. Hence the user will need to refresh to continue playing.

      b. As a user to the KafaGym Term App site, I want to have fun with the app as I receive the feedback after the validation of my answer.<br>
        - The website interacts with its users by giving feedback after typing the entry word. 
        - The flashing feature conditions the user to memorize a bit the entry word they are going to type, hence allow them to know the terms.
    
### Further Testing

* Jasmine was not used to check bugs due to time constraint and complexity of the app, but the site was checked through various validators.
* 
### Known Bugs
* The typing window move upward after flashing feature fades out but it was not fixed due to limited time.
* After the 'End of play' feedback message the page does not reload automatically to display the follow word entry. It requires the user to refresh
the page.

## Deployment 

### GitHub pages
The following steps were followed to deploy the project to GitHub Pages:
1. After logging in to GitHub, locate the GitHub Repository
1. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
1. Scroll down the Settings page until you reach the "GitHub Pages" Section.
1. Under "Source", click the dropdown called "None" and select "Master Branch".
1. The page will automatically refresh.
1. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Gitpod workspace
In order to deal with coding, I use Gitpod workspace. 
1. After logging in to Gitpod, I choose the 'kafamem/msone-kafagym' workspace.
1. Then I click 'Start' button adjacent to the workspace name. Then the workspace name opens the project design interface. This has terminals, coding area as well as the preview mode.

## Credits

### code
* [Bootstrap4](https://getbootstrap.com/docs/4.1/getting-started/introduction/): Bootstrap Library was used to ensure the responsiveness of the website.

### content

* All the text content was written by the developer.

### Acknowledgements
* My mentor for his useful and practical guidance.  
* Tutor support at Code Institute for their technical intervention.
* Traversy Media.
