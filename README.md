### Introduction

A [Souq](http://en.wikipedia.org/wiki/Souq) is an outdoor marketplace full of vegetables, spices, old books, textiles and all kinds of wonderful goodies. You have been tasked with writing code for one of the first online outdoor marketplaces that will help Souq vendors get their goods out to the entire universe!

### Part 1 - Create your storefront
We can use an array to store the contents of our cart in a variable called
`souqCart`. Write a program that does the following:

* Greet the shopper and take their name. Store this in a variable.
* Ask the user what they want to add to their shopping cart. Here is the kicker. They must ask for something from the following items. Here is a list of possible items they can choose from. If they are not on the list, the user should be notified so:

```
* old paperback book
* potato
* red onion
* dried lemon
* frankincense
* moon dust
* saffron
* glass spice jar
* red fabric
* orange fabric
* handicrafts
* small Persian rug
* used medium space suit
* heffalump shag rug
* woozle hide purse
```
* Once an item has been successfully added, notify the user that it has been added to their cart
* Give the user an option to type a command like "FINISHED" which stops the user from getting asked to add more items.
* If they entered an item, store that item in the the cart (represented by an array)
* Once finished, print out the contents of the cart of the user to see in the following format (`name` here is "Elon"):

```
Elon, thanks for trying our online Souq platform. Here is a list of the items in
your cart:

* handicrafts
* saffron
* moon dust
* orange fabric
* woozle hide purse
```

```js
// Example array of items to choose from.

let items = ["old paperback book", "potato", "red onion", "dried lemon", "frankincense", "moon dust", "saffron", "glass spice jar", "red fabric", "orange fabric", "handicrafts", "small persian rug", "used medium space suit", "heffalump shag rug", "woozle hide purse"]
```


### Part 2 - Refine your storefront

Update your program from Part 1 to store another variable of items that the user
entered but couldn't be in the cart. The output of your program should be
something like the following:

```
Elon, thanks for trying our online Souq platform. Here is a list of the items in
your cart!:

* handicrafts
* saffron
* moon dust
* orange fabric
* woozle hide purse

Btw, we noticed you tried entering in some items that aren't part of the online
Souq. We don't have the following items yet but will let you know if they show
up!:

* toothpaste
* sandwich
* fake bear fur
* siffron
```

* Tell the user immediately if they have entered in an incorrect item, so that they do not enter it again
