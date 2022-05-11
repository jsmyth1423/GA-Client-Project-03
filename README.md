# Podcast People - SEI Project 3

[Play it here!](https://podcastsapp.netlify.app//)

## Overview

Podcast People is a simple app in which users can discover new podcasts as well as add their own so that other users can discover them too. It has function to register, login, upload podcasts, comment/rate and favourite them to maintain a list of your current favourites.


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

* Using the .populate query made getting the information required to display the podcasts on the myPodcasts page extremely streamlined. I'm sure it will continue to be useful

![image](https://user-images.githubusercontent.com/53213823/167890695-8be2a0ed-28af-41c7-93b5-cf7fcf37823b.png)

* The component to show the user's home page ended up with some very clean and concise code, which is always a win!

![image](https://user-images.githubusercontent.com/53213823/167911696-d48aecfb-ea93-4d89-aa94-6f9abb0677a8.png)

---

## Key Challenges:

The primary issue I personally encountered were as follows:
1. The like button - This ended up being a very complex feature, much more than anticipated. This is mostly due to the need to sync the page upon refresh to the stored state of the button based on the user's profile. It ended up requiring input from other members of the group as well, which is never a bad thing but certainly wasn't an easy check off the list.

This was resolved over a lot of iteration which I will highlight below:

1. Setting the liked podcasts of the user upon loading of the page with the original useEffect - 
![image](https://user-images.githubusercontent.com/53213823/167672087-42036ecc-5649-4b83-b69a-9adaec8958d3.png)

2. 


---
## Lessons Learned
1. Naming variables and functions **really** matters on bigger projects.

Since the project was fairly large in scope, it was harder to keep track of everything especially since it being a group project meant you were not intimately familiar with every single line of code as in the case of solo projects. I found myself confused at times as to what I was actually looking at, needing to use console.logs and other tools in order to get my bearings. This can be highly mitigated by very specific naming practices, but it's not always possible for that to happen esepcially in our first time collaborating a group project. What made sense to one person could be nonsensical to another.

2. Having a lot of prep on the back-end makes front-end implentation a lot more seamless.

Going back between the front-end and back-end is to some extent inevitable but we could have had a few more routes and controllers set up from the beginning to make life easier. It seems to me that over-preparing on this front is definitely preferable to under-preparing. 
---

## Ideals 

1. Sound, just generally makes a game feel more game-y!
2. Collision detection between missile and alien bombs so that the player can destroy them rather than just dodging.
3. Learning how to make the movement of the aliens more smooth, perhaps CSS animations.
