
# Project Overview


## Project Name

Near Us

## Project Description

"Space is all around our little blue dot--don't you want to know what's out there?" Find out what Near Earth Objects (NEOs) have been near us or will be near us the future. 

## API and Data Sample

https://api.nasa.gov/ 

I'll be specifically using the NEO API >> https://api.nasa.gov/neo/rest/v1/feed? 

Example query for searching based on dates ONLY
https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

Site and example of how I would need to search for multiple NEO data points in this API:

https://api.nasa.gov/neo/rest/v1/neo/browse/



## Wireframes

updated wireframe: https://wireframe.cc/Chdhd3

https://wireframe.cc/fjs3Uz

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use external api 
- Render data on page 
- Allow user to choose search NEOs via a dynamic drop down bar of year/month
-ouput includes dates, size of object and distance 

#### PostMVP  


- Add second or third API -- the Astronomy pic of the Day and maybe something with the ISS
-daily APOD would be totes cool
- Add more interactive features (see above) like a floating space station that you can slick and it give you the location of the ISS
- maybe have daily NASA facts?

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|Nov 10| Project Approval | Complete
|Nov 10| Begin Project: Core Application Structure (HTML, CSS, etc.) | Complete
|Nov 12| Start working with Api/JS| complete
|Nov 13| Begin to finilaze getting data output, finilaze basic design work w/CSS flexbox|  complete
|Nov 15| Schedule time with Squad lead| complete
|Nov 14| MVP basics done!| complete
|Nov 15| post- MVP details start| complete
|Nov 15| Schedule time with Squad lead| complete
|Nov 17| Presentations |  in progress

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes



https://lucid.app/invitations/accept/2cd5e007-209d-4644-847f-bd8ead5e1fad


## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Students usally put in around 40+ hours into their project 1.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Doing all the side work | H | 3hrs| | 5 |
| Adding Form | H | 4hrs| 7  |  |
| Working with API/JS | Very H | 20+hrs| | 15 |
| Setting up Html | H | 2hrs| |  2|
| Setting up basic CSS | H | 2hrs| | 4 |
|Fine-tuning CSS/design | L | 3hrs| | 10 |
|Post MVP work | L | 10hrs| 10|  |
| Adding in more features/content| L | 3hrs| |3  |
| Total | H | 47hrs| hrs | hrs | 55

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

.neo-list {
  color: whitesmoke;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 2px 2px black;
  justify-content: space-around;
  justify-content: center;
  display: flex;  
  flex-wrap: wrap;
  background-image: linear-gradient(to right, black, rgb(26, 25, 25));
  letter-spacing: 5px;
  font-size: 15px;
  background-image: url("https://images.unsplash.com/photo-1583446689741-b39fa2703b22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1596&q=80");
  box-shadow: 0 0 15px 15px rgb(0, 0, 0) inset;
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
