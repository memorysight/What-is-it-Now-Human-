# Project Overview
I will use Rails and React to make a voice to text, journal/ memory tracker and collector.  It is called the 'Memorizer' and the intent is to make it have features that allow the user to quickly and easily use their cell phone or mobile device to record thoughts.  Why not use a recorder built in?  Well, this one is going to be personalized with the ability to add images and make comments later.  It will be more of a personal experience for the user.


## Project Schedule



|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description|  Complete
|Day 2| Wireframes, Priority Matrix,   Rails Programming, React Programming| Complete
|Day 3| Complete the MVP part of the program, make it able to save memories to a database and consume the API.|Complete

REACHING MVP took me up to Thursday because I had trouble with auth.  I didn't have as much time as I wanted to have to do the chat bot.  However, this is going to be a project that I keep working on to make it really shine. 

I like the atmosphere of future horror, like sci-fi B movies style.  I tried to go for that with the font.

I accomplished one of my post MVP goals which was to include auth.

|Day 4| Start the speech to text part of the program for Post MVP.| Incomplete
|Day 5| Continue to work on the speech to text and have it make a log of what is said.  This should be real-time so that when a user speaks into the device, it starts to actually record and log what is said|Incomplete
|Day 6| Have the authentification part included into the design | Complete
 |Day 6 1/2 | Also start to work on the AI unit in dialogflow.  Hook up the external API to the speech synthesis unit so that it starts to look out for certain words that trigger a response using the "includes" method in Javascript.|InComplete
|Day 7| If time allows keep working on the logic for the AI and work on the styling of the AI.|Incomplete



## Project Description

There will be two tables, the 'Group' table and the 'Memories' table.  The group table will be divided into 4 sections, 'serious', 'fun', 'love', and 'work'.  These will act like the 4 categories that will divide the main memories and have them render separately. 

Then there will be the actual memories or journal entries.  They will be nested in the resources of the groups in the routes, so that the route /groups/:id/memories/:id will be accessible to display, edit, create, and delete, journal entries or "memories".  This will provide the CRUD functionality of the unit.

The distinctive thing about this is that the post MVP will be a chatbot capable of asking questions and taking API requests for the weather, stock quotes, etc.  As part of the MVP, the app will be able to save journal entries in the form or memories and the post MVP will allow it to do it by speaking into the phone, laptop, or mobile device.

One of the inspirations for doing this project was wanting to use voice synthesis and the speechsynthesis features in Javascript.  They allow you to use the global command, speechsynthesisuttterance, to store text in a variable and have the brower emit the sound, even with different accents and languages.  The Web Speech API is then accessed by the Window object returned.  

This is the example in MDM: 
var synth = window.speechSynthesis;

for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    

A new speechsynthesisutterance instance is created which allows the text to be spoken.  As indicated, post MVP will be an AI chatbot that will ask the user questions such as their name, if they would like to store a memory, ask the weather etc. 

TensorFlow is a library often used for AI.  This will more than likely be post MVP but if I get into MVP territory like on Tuesday, which I'm hoping I will use DialogFlow API for the chatbot.  This allows you to "Train" the bot with several phrases and it starts by going through its own neural network.

The AI's name will be Moby, for Mobius Strip.  This is how it will look.

https://i.ibb.co/9bbtqBS/Screen-Shot-2019-07-08-at-8-49-38-AM.png



## Wireframes

https://i.ibb.co/191VMsc/Screen-Shot-2019-07-08-at-11-04-56-AM.png

## Priority Matrix

https://i.ibb.co/b23HVZf/20190708-093447.jpg

### MVP/PostMVP - 

The MVP will be the following:  Be able to input memories into a text field or form, and have it save to a database that I created using my own API that will be hosted on a server set up with routes form Rails.  This API will be consumed by my handmade front-end using React.  Memorizer will use full CRUD functionality.  

I will employ CSS flexbox and other styling techniques to make it look sharp.  

POST MVP will include the speech to text functionality and then of course the AI unit.  I want the AI unit to be fairly robust.  This is passion project of mine and seriously a dream for me to do.  Now, if I was getting paid to do this, that would be different but one thing at a time.  

Post MVP will look like a project that has an AI interface and allows the user to speak commands and record their voice.  the AI will link into at least 3 APIs for weather, sports and other news.  

#### MVP 

-Allow user to input memories and have them saved to a database.
-Allow the user to associate URLs to the memories and save them together for a more personal experience.
-Allow the user to edit and change, as well as delete memories.
-Be visually sharp and responsive.

#### PostMVP 

- Speech to text functionality.
- AI unit that will allow the user to give commands, record their voice, categorize their memories, and then of course look up requests from an API.
- Auth
- Advanced SVG work.

## Architectural Design

The components will be app.js, for the routes and the Links, using react-router-dom.  Then the main component will be the 'categories' class based component that will have state, and display the 4 categories, 'serious', 'fun', 'love', and 'work'.  These will be like the doctors in the hospital project.  

Then these will be routable Links to the memories pages which will be divided into categories, so clicking on 'serious', links the user to the serious memories and so on.  On this page there will be a button to edit, delete, and create memories.

This will take the user to either the edit or create memories component.  These will have forms as usual to get the user data and handle the submit.  The backend in Ruby will handle the database in PSQL.

## ERD
https://i.ibb.co/ckLgHw1/Screen-Shot-2019-07-08-at-11-07-36-AM.png

There will be 2 tables, the Groups, which will be subdivided into 4 (serious, funny, love, work) and then the memories will be nested into the Groups so that you can access the funny memories by the appropriate route using the params in react.

## UI Components
App.js will just be the routing area and have the routes.  The Category page will stateful and be a classbased component.  It will have linked List to each memories page according to the category.  The All Memories page will also be stateful and be a class based component.  The Create Memory and Edit Memory could be functional but that's still possible to be stateful class based.  The single memory page will be functional and simply display the memory with its URL.  

The URL is not a mandatory element but additionally possible to personalize the memory.

#### SAMPLE.....
| Component | Description | 
| --- | :---: |  
| App.js | This will have the routes and the switch, but no state and will be primarily functional, not class based | 
| Category | This will be the main "hub" for the components, will have state, will be class based, and might make some of the axios calls, so it will transfer props and have props|
| AllMemories| This will have the memories by category which will be linked from Category.  It will resemble the patients component in the hospitals build. It will have state and be class based.
|CreateMemories and EditMemories| will be functional and have a form and the appropriate buttons.
|SingleMemories| will be functional and have the abiliy to view the memories and the URL associated with it if it has one.  The URLs will not be mandatory but an extra "touch".
|User| for the auth if its going to be put in.


#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| App.js | H | .1hr|  |  1hr
|TrafficLights| .2hr| 3 hours, this one took some time as well.
| AllGroups | H | .2hrs|  4hr , I had to continually add to this one.  
|CreateMem|H | .2hr| 1hr
|EditMem|H| .3hr| 1hr
|Mem|H| .5hr|  1hr
|User|H|1 hr|  1 hour


## Additional Libraries
 TensorFlow, DialogFlow, SpeechSynthesis API, ReactStrap 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| TensorFlow| Is used for adding robust features to the machine learning model and make the chatbot 'smarter' | 
| DialogFlow | This or TensorFlow will be used to train the chatbot | 
| ReactStrap| Bootstrap library used to make the site responsive|



## Code Snippet


#### SAMPLE.....


```var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');


function populateVoiceList() {
  voices = synth.getVoices();

  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
```
## Change Log
Getting the routes to work was difficult at first and I had to do a lot of changing once auth was included.  For awhile, auth wasn't working and then I had to redo the project because the back-end wasn't working.  I initially had the front end but it wasn't working to get the auth involved.  That was a big change that I had to do then.

Then there was the issue with the SVGs not being inbedded.

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  


## Issues and Resolutions
I had some issues with auth initially.  I wouldn't load up after I put the routes in for the groups and the memories.
Then the map wouldn't work because it was set up to the wrong URL.  

One of my params wasn't going to the right place, that didn't work either.  Then I had to redo my project which took a lot of time and a tool on my patience a bit.  I learned quite a lot though in doing this and it was a great experience.  I really like this project but once it was working I wanted to leave it be and not tinker with it to disrupt it.

Seijla helped me out a lot in this project and so did Brayhan and Kyle.  

Thanks!