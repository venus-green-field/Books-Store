
## Heading ##
 > Books-Store

## Sub-Heading ##
  > you can search about the book that you need and download it
  or buy it.

## Summary ##
  > when you click on the book you git details about the book , you can comment on the book and see previous comments

## Problem ##
  > difficult to find free book and downlod it.

## Solution ##
  > downlod free books , search by gener and search by google api


## How to Get Started ##
  > we started with using angularjs for front end ,mongoose for database and express with node js for server .
 
## Project parts
>server side :(index.js file in the root of the project )
We used node js express that's save atons of code instead of  using nodejs alone 
we have three major blooks the first one for user login and siginup as you it explaind in the comments,
the second blook to handle the search in google Api
the third blook for handling the comment comes for the books 
the fourth blook to load all the books from the database to the client side 
>client side:we used angular js beacuse scalabilty ,simplicity ,template base,single page application  :
we have four components :the first one for the books , the second for api search results the thired one is login  and the fourth is signup   
>dtatbase  :we have three models :we ussed mongodb with mongoose orm because of Schema less,No complex joins,Structure of a single object is clear,Conversion/mapping of application objects to database objects not needed,Uses internal memory for storing the (windowed) working set, enabling faster access of data
first:User Model for storing the user information 
second:Book1 Model for storing the books information 
third :Review Model for storing comments of the books
