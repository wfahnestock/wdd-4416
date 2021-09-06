# Instructions 
Update this document to summarize research and information learned from this activity. 

<br>

# Project & Portfolio VI 

* **RESEARCH - Research 1**
* **William Fahnestock**
* **Due: 9/06/2021**

<br>

## A Complete Guide and List of HTTP Status Codes
This article has a complete list of all HTTP status codes, what they mean, and how to handle them when working with appilications and APIs, and why it matters for SEO purposes.  

* 100s: Informational codes indicating that the request initiated by the browser is continuing.
* 200s: Success codes returned when browser request was received, understood, and processed by the server.
* 300s: Redirection codes returned when a new resource has been substituted for the requested resource.
* 400s: Client error codes indicating that there was a a problem with the request.
* 500s: Server error codes indicating that the request was accepted, but that an error on the server prevented the fulfillment of the request.


<br>

## Express Tutorial Part 4: Routes and controllers
This article is about routing and controller usage in Express.

* "Routes" to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
* Controller functions to get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.
* Views (templates) used by the controllers to render the data.




<br>

## Junction Model Pattern: Many-to-Many - Sequelize
This article describes the different types of relations in a relational database and when the most appropriate time to use them is.  

# One-to-many Relation

![Image of One-to-many](https://www.sqlshack.com/wp-content/uploads/2020/01/one-to-many-relation.png)

For example, for every *one* city, there could be *many* customers located inside of that city.

# Many-to-many Relation

![Image of Many-to-many](https://www.sqlshack.com/wp-content/uploads/2020/01/many-to-many-relation.png)

This relation is used when both tables could have multiple rows on the other side. For example, *one* employee could call *many* customers. In addition, *one* customer could receive calls from *many* employees.

# One-to-one Relation

This relation is rarely used in databases. For example, *one* employee can have only *one* valid identity card in the database. *One* identity card can only belong to *one* employee. There is no many being used here, so this cannot be any type of relation including the word *many*.

<br>

## Reference Links

# What resource(s) did you find most helpful for this research assignment and why? 
I found the article about the different types of relations in SQL the most helpful for this research assignment. With the given examples from this article, I was able to understand the different types of relations much more easier than trying to learn them on my own simply by just looking at databases. The examples put each type of relation in a very simple and easy-to-understand manner that made it really easy to learn what each of the different types of relations are, how they are used, and when they should be used when constructing a database for an application. I believe that because of this article, my understand of relations and when they are used has grown and I will be able to create better, more efficient database and models because of it.


**Resource 1: A Complete Guide and List of HTTP Status Codes**  
[Kinsta.com](https://kinsta.com/blog/http-status-codes/)  

**Resource 2: Express Tutorial Part 4: Routes and controllers**    
[Developer.mozilla.com](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)

**Resource 3: Junction Model Pattern: Many-to-Many - Sequelize**      
[Khalilstemmler.com](https://khalilstemmler.com/articles/sequelize-tags-junction-pattern/)




