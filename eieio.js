const cars = [
  { name: "BAC Mono", seats: 1 },
  { name: "MX5", seats: 2 },
  { name: "Mini", seats: 4 },
  { name: "Falcon", seats: 5 },
  { name: "Outlander", seats: 7 },
  { name: "Estima", seats: 8 }
];


const name = prompt("Welcome to Yuvis's Rentals! What's your name?");


const seatRequirement = parseInt(prompt(`Hi ${name}, how many seats do you need?`));


const car = cars.find(c => c.seats >= seatRequirement);

if (!car) {
  alert(`Sorry ${name}, we don't have any cars that can seat ${seatRequirement} people.`);
} else {

  const days = parseInt(prompt(`You have been lended ${car.name}. How many days would you like to rent it for?`));


  const totalCost = car.seats * days * 10;


  alert(
    `Thanks ${name}!\n\n` +
    `Here are your rental details:\n` +
    `Car Assigned: ${car.name}\n` +
    `Rental Duration: ${days} day(s)\n` +
    `Total Cost: $${totalCost}`
  );
}