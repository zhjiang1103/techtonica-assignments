class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
  

  addAvailableTickets(type,price){
    this.availableTickets.push({type:type,price:price});
  }

  allTickets(){
    let returnStr ="";
    for(let i=0;i<this.availableTickets.length; i++){
      returnStr += `${i+1}. ${this.availableTickets[i].type} ($${this.availableTickets[i].price}) `;
    }
    return `All tickets: ${returnStr}`;
  
  }

  searchTickets(lowerBound,upperBound){
    let eligibleTicket=[];
    for(let i=0;i<this.availableTickets.length; i++){
      if (this.availableTickets[i].price >= lowerBound && this.availableTickets[i].price <= upperBound){
        eligibleTicket.push(this.availableTickets[i])
      }
    }
    if(eligibleTicket.length===0){return `No tickets available.`}
    else{
      let EligibleStr="";
        for (let j=0; j < eligibleTicket.length; j++){
          EligibleStr += `${j+1}. ${eligibleTicket[j].type} ($${eligibleTicket[j].price}) `;
        }
        return `Eligible tickets: ${EligibleStr}.`
      }
  }
}


  // The below statement creates an object.
const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
  );

const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');
const eventArray = new Array();

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)


eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

console.log(eventObj3.searchTickets(0, 250))

// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
// in order to check whether the elements are pushed, use console.log
//console.log(eventArray);

document.addEventListener('DOMContentLoaded', () => {
   //Handler when the DOM is fully loaded
  let html1 = '';
  let html2 = '';
  eventArray.forEach((item) => {
    html1 += `<li>${item.name} - ${item.description} - Eligible tickets: ${item.allTickets()}`;
    html2 += `<li>${item.name} - ${item.description} - Eligible tickets: ${item.searchTickets(0,100)}`;
  });
  document.querySelector('#event').innerHTML = html1;
  document.querySelector('#tickets').innerHTML = html2;

})




class TicketType {
  constructor(name, price) {
    this.name= name;
    this.price=price;
  }
}

