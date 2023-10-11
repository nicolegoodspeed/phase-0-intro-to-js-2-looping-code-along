
function writeCards(cards) {
    const thankYouMessages = [];
  
    for (let i = 0; i < cards.length; i++) {
      const message = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const cards = ["Guadalupe", "Ollie", "Aki"];
  console.log(writeCards(cards));


  function countDown(number) {
    let countDown = number;
    while (countDown >= 0) {
      console.log(countDown);
      countDown--;
    }
  
    return countDown;
  }
  
  countDown(10);