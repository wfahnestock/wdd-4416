# Instructions 
This document is to summarize research and information learned from this activity. 


<br>

# Web Application Development

* **RESEARCH - Research 2**
* **William Fahnestock**
* **Due: 09/13/2021**

<br>

## Character encodings for beginners
This article is about character encoding in web documents and why it matters when constructing applications. 

* Character encoding is a way for a computer to know how to map the bits and bytes of information (text) to the characters in the specific character set. Without this map of sorts, the given data looks jumbled up and could be illegible.
* In the modern day and age, you should always choose the 'UTF-8' encoding because this Unicode standard means you can use a single character encoding to handle any character that you will likely need to use to display and server data.
* Developers need to ensure that each different part of an application can communicate with other parts of the application, and understand what encoding is being used. In addition, a developer needs to add support for any additional encodings and characters that may be used by end users of their application.

<br>

## Understanding cloud services: stateful vs stateless applications
This article describes the difference between stateful and stateless applications and when to use each of these different types of applications. 

* Stateful applications are where information about the state of the application is stored on the server hosting the application. For example, on applications where you have to log in, your login and session details are saved on the server to allow to continue accessing the app while logged in to it.
* Stateful applications create issues when there is a load balancer that balances server load between multiple servers hosting the application. If your login and session details are stored on one server at first, but then the load balancer redirects you to another server it will force you to log in again since your information is not stored on the new server you are redirected to. This is not conducive to a positive user experience.

* Stateless applications are when these login and session details are stored on your local machine instead of on the server you are accessing. This is typically done by the server generating a unique token of random characters and a length of time that this unique token will remain valid before you will need to get another one from the server.
* This unique token is stored on a separate database server from the servers hosting the application you are accessing, so when you decide to view the app your browser will send the unique token with the correct URL and because the application is stateless, it doesn't matter which server you are accessing the application from the load balancer.


<br>

## You don't need passport.js - Guide to node.js authentication
This article describes how to set up authentication features in Node.js

* It is important to choose a good cryptographic algorithm to has password to prevent any type of attacks on your applications and from malicious users stealing other user's information. This can be achieved by using various public authentication libraries, one of which being Passport.js.
* JWT is an acronym for 'JSON Web Token'. JWTs are signed by the server with a specific string or sequence of characters so the server can easily distinguish legitimate JWTs between falsified JWTs that may be created by malicious users trying to attack the application. It is impossible to encode a new JWT with new data without knowing the specific string or sequence of characters that were used when the JWT was signed by the server, and that specific sequence is impossible to obtain without someone looking at the code of the application which is never visible to their browser.


<br>

## Reference Links

# What resource(s) did you find most helpful for this research assignment and why? 

All of the resources I used for my research were extremely helpful in my exploration into user authentication in NodeJS and React. These resources have taught me the appropriate methodologies and conventions for creating an effective authentication system that is both safe from any potential attacks aimed at stealing user information as well as streamlined for a positive user experience. After reading all of these articles, I can safely say that my knowledge on the subject has increased as a result and I am looking forward to adding authentication to my project for the next milestone assignment.


**Resource 1: Character encodings for beginners**
[W3.org](https://www.w3.org/International/questions/qa-what-is-encoding)  

**Resource 2: Understanding cloud services: stateful vs stateless applications**    
[Wirehive.com](https://www.wirehive.com/thoughts/understanding-cloud-services-stateful-vs-stateless/)

**Resource 3: You don't need passport.js - Guide to node.js authentication**      
[Softwareontheroad.com](https://softwareontheroad.com/nodejs-jwt-authentication-oauth/)




