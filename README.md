# Project 2 Frontend

## Live Website
https://blissful-carson-738adf.netlify.app/


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 4| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Complete

## Project Description

This app allows you to have a daily log of workplace events & situations. You could create a user and job place, repeat job sites, update logs and delete logs.


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://res.cloudinary.com/dlcjnygpy/image/upload/v1596210076/Project-01/20200731_113109_en5mso.jpg)
- [Tablet](https://res.cloudinary.com/dlcjnygpy/image/upload/v1596210072/Project-01/20200731_113105_o8bsdz.jpg)
- [Desktop](https://res.cloudinary.com/dlcjnygpy/image/upload/v1596210063/Project-01/20200731_113056_nbyf2s.jpg)



## Time/Priority Matrix 

- [Graphic](https://res.cloudinary.com/dlcjnygpy/image/upload/v1596192523/0_e0clgi.jpg)

### MVP/PostMVP - 

#### MVP (examples)

- Render data on page
- Adapt to desktop, tablet, & mobile
- Deploy app

#### PostMVP 

- Refactor to bootstrap
- Link page to DOL
- Link page to NYS bar association 

## Functional Components



#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Display with html/css/js | H | 10hr | 14hr | 14hr|
| Adapt to desktop | H | 8hr | 2hr | 2hr|
| Adapt to tablet | H | 4hr | 1hr | 1hr|
| Adapt to mobile | H | 4hr | 1hr | 1hr|
| Deploy | H | 1hr | 1hr | 1hr|
| Total | H | 27hrs| 19hrs | 19hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Refactor to bootstrap | L | 5hr | 6hr | 6hr|
| Link page to DOL | L | 2hr | N/A | N/A|
| Link page to NYS bar association | M | 1hr | N/A | N/A|
| Total | H | 8hrs| 6hrs | 6hrs |

## Additional Libraries
 - Bootstrap
 
 - JSON
 
 - jQUERY
 

## Code Snippet

I was proud at how fast this function worked.  

```
const deleteLog = async (event) => {
  const response = await fetch(`${URL}${event.target.id}`, {
    method: "delete"
  })
   //update dom
   $(".display1").empty()
   getLogs()
}
```

## Issues and Resolutions

#### I originally had a table with bootstrap, but had to ditch the idea to finish to project in time. Instead I made two div's to display the info.

```
 <div>
            <input type=text name=name id="editinput"/>
    <select name="logs">
    </select>
        </div>
        <div>
        <ul class="display1">
        </ul>
    </div>
 ```
