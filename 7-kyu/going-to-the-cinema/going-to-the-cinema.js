function movie(card, ticket, perc) {
  let systemA = 0;
  let systemB = card;
  let n = 0;
  let currentTicketPrice = ticket * perc;
​
  while (Math.ceil(systemB) >= systemA) {
    n++;
    systemA += ticket;
    systemB += currentTicketPrice;
    currentTicketPrice *= perc;
  }
​
  return n;
}
​