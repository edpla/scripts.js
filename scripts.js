// Topic for the Project: Mindfulness Quotes

const firstQuote = ["stay focused", "spread love", "enjoy life", "understand yourself", "have self respect"];

const secondQuote = [" enjoy the gift of being healthy", "be grateful of what you are given", "don't forget, healthy mind, healthy life", "don't forget to say Thakn You"];

const thirdQuote =["You are always loved", "You are the reason of somebody else's smile.", "You are exactly where you need to be."]

const getTerm = (array) => {
    const ind = Math.floor(Math.random() * array.length);
    return array[ind];
  };

const generate = () =>
  `All you need today is to ${getTerm(firstQuote)} and ${getTerm(secondQuote)} 
  and really ${getTerm(thirdQuote)}.`;
  
