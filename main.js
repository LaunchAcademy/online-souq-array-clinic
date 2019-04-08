let items = [
  "old paperback book",
  "potato",
  "red onion",
  "dried lemon",
  "frankincense",
  "moon dust",
  "saffron",
  "glass spice jar",
   "red fabric",
   "orange fabric",
   "handicrafts",
   "small persian rug",
   "used medium space suit",
   "heffalump shag rug",
   "woozle hide purse"
 ]

console.log("What's up, how did you find our outdoor internet store? Why am I questioning this. I need your bussiness. PLEASE!")
let name = prompt("Enter your name:")

// items.forEach((item) => { // item represents the element in the items array that we are currently iterating over
//   console.log(item)
// })

let stringOfItems = items.join(", ")
console.log(stringOfItems)

let promptUserStatus = true
let userCart = []
let incorrectInputs = []

while(promptUserStatus === true) {
  let userInput = prompt("Enter the item that you want OR type 'done'")

  if (userInput === "done"){
    promptUserStatus = false
  } else if (!items.includes(userInput)) {
    console.log("Unfortunately we do not have that item!")
    incorrectInputs.push(userInput)
  } else {
    userCart.push(userInput)
    console.log(`${userInput} has been added to the cart`)
  }
}

console.log(`${name}, thanks for trying our online Souq platform. Here is a list of the items in your cart:`)

userCart.forEach((userItem) => {
  console.log(`* ${userItem} `)
})

console.log("Btw, we noticed you tried entering in some items that aren\'t part of the online Souq. We don't have the following items yet but will let you know if they show up!")

incorrectInputs.forEach((input) => {
  console.log(`* ${input} `)
})


// let formattedItems = userCart.map((userItem) => {
//   return `* ${userItem} \n`
// })
//
// console.log(formattedItems.join(""))
