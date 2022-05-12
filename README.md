# Podcast People - SEI Project 3

[Play it here!](https://podcastsapp.netlify.app//)

## Overview

Podcast People is a simple app in which users can discover new podcasts as well as add their own so that other users can discover them too. It has functions to register, login, upload podcasts, comment/rate and favourite them to maintain a list of your current favourites.


## The Task:

* Build a full-stack application by making your own back-end and your own front-end
* Use an Express API to serve your data from a Mongo database
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD operators for at least a couple of models
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
* Be deployed online so it's publicly accessible.

---

## Tools Used:

* Back-end:
* Node.js
* MongoDB
* Express
* Bcrypt
* Mongoose
* jsonwebtoken

### Frontend:
* React
* Axios
* Bulma
* SCSS

## The Plan: 
![image](https://user-images.githubusercontent.com/53213823/167623926-6f8fc4cb-106e-4a48-a0a5-b655dd4b1bd7.png)

We collaboratively wireframed our goals for the project as well the majority of the steps we would have to take in both front and back-end.

We also used trello in order to divvy up which tasks would be done by each person, this definitely made the larger-scope project easier to keep track of.
![image](https://user-images.githubusercontent.com/53213823/167624348-90b7c9ae-4abb-4cb8-a091-fd76a30df151.png)

## Wins:

1. Using the .populate query made getting the information required to display the podcasts on the myPodcasts page extremely streamlined. I'm sure it will continue to be useful

![image](https://user-images.githubusercontent.com/53213823/167890695-8be2a0ed-28af-41c7-93b5-cf7fcf37823b.png)

2. The component to show the user's home page ended up with some very clean and concise code, which is always a win!

![image](https://user-images.githubusercontent.com/53213823/167911696-d48aecfb-ea93-4d89-aa94-6f9abb0677a8.png)

---

## Key Challenges:

The primary issue I personally encountered were as follows:
1. The like button - This ended up being a very complex feature, much more than anticipated. This is mostly due to the need to sync the page upon refresh to the stored state of the button based on the user's profile. It ended up requiring input from other members of the group as well, which is never a bad thing but certainly wasn't an easy check off the list.

This was resolved over a lot of iteration which I will highlight below:

1. Setting the liked podcasts of the user upon loading of the page with the original useEffect - 
![image](https://user-images.githubusercontent.com/53213823/167912634-30863d8f-3704-48de-855a-c5804f0cea34.png)


2. The onClick function to handle the liking needed to await on two other calls and then set the like status of the user
![image](https://user-images.githubusercontent.com/53213823/167912797-9e8f5132-5e72-45e4-8fd5-9b19619c645d.png)


---
## Lessons Learned:
1. Naming variables and functions **really** matters on bigger projects.

Since the project was fairly large in scope, it was harder to keep track of everything especially since it being a group project meant you were not intimately familiar with every single line of code as in the case of solo projects. I found myself confused at times as to what I was actually looking at, needing to use console.logs and other tools in order to get my bearings. This can be highly mitigated by very specific naming practices, but it's not always possible for that to happen esepcially in our first time collaborating on a group project. What made sense to one person could be nonsensical to another.

2. Having a lot of prep on the back-end makes front-end implementation a lot more seamless.

Going back between the front-end and back-end is to some extent inevitable but we could have had a few more routes and controllers set up from the beginning to make life easier. It seems to me that over-preparing on this front is definitely preferable to under-preparing. 

3. Async functions are tricky to perfect but super handy.

Especially the order of certain lines which would not appear to be codependent, can really influence how seamless the page is and whether or not your states will get out of sync. Tinkering is almost always required since getting it right the first time is a work in progress!

---

## Ideals 

1. A snippet of the podcasts intergrated into the page to play.
2. CSS animations for a more professional look
