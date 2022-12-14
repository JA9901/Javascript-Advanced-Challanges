// Question number 1
// Given a rating, display a star (*) for each full rating and a 
// full-stop (.) for each half rating.

function showRating(rating){
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); i++){
        ratings = ratings + "*";
        if (i !== Math.floor(rating) - 1){
        ratings = ratings + " ";
        }
    }
    if (!Number.isInteger(rating)){
        ratings = ratings + " .";
    }
    console.log(ratings)
}
// += is a short way of typing out the same line
// function showRating(rating){
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); i++){
//         ratings += "*";
//         if (i !== Math.floor(rating) - 1){
//         ratings += " ";
//         }
//     }
//     if (!Number.isInteger(rating)){
//         ratings += " .";
//     }
//     console.log(ratings)
// }

showRating(3)
showRating(4.5)
showRating(0.5)

// Question number 2
// Given an array of numbers, return the prices sorted by low to high.

function sortLowToHigh(numbers){
    console.log(numbers.sort((a,b) => a - b))

}

sortLowToHigh([20,40,10,30,50,10])
sortLowToHigh([5,10,0,-5])
sortLowToHigh([3,2,1,0])

// Question number 3
// Given an array of objects, return the prices sorted by high to low.

function sortHighToLow(ids){
    console.log(ids.sort((a,b) => b.price - a.price ))
}

sortHighToLow([
    {id:1, price: 50},
    {id:2, price: 30},
    {id:3, price: 60},
    {id:4, price: 10},
])

// Question number 4
// On Youtbe , Watch videos

// Question number 5
// Call this API "https://jsonplaceholder.typicode.com/posts" and return
// all the posts by any given user id.


async function postsByUser(userId){
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    
    const result = await promise.json()

    const posts = result.filter(element => element.userId === userId)

    console.log(posts)
}

postsByUser(4)

// Question number 6
// Call this API "https://jsonplaceholder.typicode.com/todos" and return
// the first 6 incomplete todo's from the result.

async function firstSixINcomplete(completedStatus){
    const prom = await fetch("https://jsonplaceholder.typicode.com/todos")

    const res = await prom.json()

    const incompleteTasks = res.filter(elem => !elem.completed).slice(0, 6)

    console.log(incompleteTasks)
}

firstSixINcomplete(false)