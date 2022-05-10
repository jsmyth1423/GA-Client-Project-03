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

Back-end:
Node.js
MongoDB
Express
Bcrypt
Mongoose
jsonwebtoken

### Frontend:
React
Axios
Bulma
SCSS

## The Plan: 
![image](https://user-images.githubusercontent.com/53213823/167623926-6f8fc4cb-106e-4a48-a0a5-b655dd4b1bd7.png)

We collaboratively wireframed our goals for the project as well the majority of the steps we would have to take in both front and back-end.

We also used trello in order to divvy up which tasks would be done by each person, this definitely made the larger-scope project easier to keep track of.
![image](https://user-images.githubusercontent.com/53213823/167624348-90b7c9ae-4abb-4cb8-a091-fd76a30df151.png)


## Key Challenges:

The primary issues were as follows:
1. Stopping the player character from moving onto and beyond the edges of the screen.
2. Making the aliens drop one and move in the other direction once colliding with an edge.
3. Collision detection between Alien & Player missile.


The majority of project time was spent on the above issues.

1. Originally I tried to define the edges of the area manually in an array, but found an easier solution being using modulus with the width of the grid pre-defined.

![image](https://user-images.githubusercontent.com/53213823/166149142-b5a20b3e-443e-4434-8717-51184aaac816.png)

---
2. The below function handled Alien movement, with a series of if statements to check for the edges and then subsequent actions to create the moving block effect.

![image](https://user-images.githubusercontent.com/53213823/166149254-334e8601-511c-4066-9280-d80a2ba52de1.png)

This function also contained the logic for win and loss based on 3 factors, if the aliens collided with the player ship, if the aliens reached the bottom of the screen, as well as if the aliens were all destroyed.

![image](https://user-images.githubusercontent.com/53213823/166149286-63b6e2c9-d247-4d99-a53a-3559d38da9b9.png)

---

3. The final challenge was using timeouts for the missile movement as well as checking for collision with the alien, detailed below.

![image](https://user-images.githubusercontent.com/53213823/166149386-d42a6521-f75a-444f-b99a-61ddbbce1f92.png)

---
## Lessons Learned
1. Good planning makes all the difference:
  For the areas I had planned out I flew through the coding since I was already fairly sure of the direction
  Areas which I had not considered took much longer, in part due to complexity but also not having any direction to work towards.
  
2. Expectations are hard to gauge when you're starting out:
  I was unsure of how much I would be able to get done if much at all within the 1 week period, having the stretch goals was useful as I allowed myself to work through   the main project quickly in order to try and implement them, which was a relief as I just about got my initial goals done, stretch aside. As projects have come and     gone I still find it difficult to gauge how long it will take when working with freshly learned material and new tools.
---

## Ideals 

1. Sound, just generally makes a game feel more game-y!
2. Collision detection between missile and alien bombs so that the player can destroy them rather than just dodging.
3. Learning how to make the movement of the aliens more smooth, perhaps CSS animations.
