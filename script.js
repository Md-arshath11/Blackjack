// let firstCard= getRandomCard()
// let secondCard=getRandomCard()
let cards=[]
let sum = ""
let hasBlackJack=false
let isAlive=false
let message=" "
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13) + 1
    if(randomNumber===1){
        return (randomNumber=11)
    }
    else if(randomNumber>11){
        return (randomNumber=10)
    }
    else{
        return randomNumber
    }
}
function startGame(){
    let firstCard=getRandomCard()
    let secondCard=getRandomCard() 
     cards=[firstCard,secondCard]
     sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent="Cards: "

    for (let i=0; i<cards.length;i++){
        cardsEl.textContent += cards[i]+" "
    }
    sumEl.textContent="sum:"+ sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }else if(sum == 21){
        message = "Wohoo! You've Blackjack!"
        hasBlackJack=true
    }else{
        message = "you're out of the game!"
        isAlive=false
    }
    messageEl.textContent=message
}

function newCard(){
    // if(isAlive===true && hasBlackJack===false){ 
    let card=getRandomCard()
    sum +=card
    cards.push(card)
    renderGame()
    // }
}