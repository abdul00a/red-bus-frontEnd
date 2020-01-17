module.exports = [
  {
    busName: 'Bhanu Pratab Travels',
    busNumber: 'AK-9-1232',
    busTickets: {
      AB16: ['Window', 'Sitting', 'Booked', 'Female', '500'],
      AB14: ['Non-Window', 'Sitting', 'NotBooked', 'NA', '280'],
      AB15: ['Window', 'Sitting', 'NotBooked', 'NA', '310'],
      AB12: ['Window', 'Sleeper', 'NotBooked', 'NA', '400'],
      AB13: ['Non-Window', 'Sleeper', 'NotBooked', 'NA', '320']
    },
    busDriver: 'Bus Driver Name',
    busType: 'AC',
    duration: '10hr',
    startingPrice: '210',
    departure: '2020-01-14T09:18:02.226+0000',
    arrival: '2020-01-14T09:18:02.226+0000',
    totalSeats: 5,
    routeTable: {
      id: 1,
      startingPoint: 'ABC',
      endingPoint: 'DEF',
      routeAvailability: {
        Monday: true,
        Thursday: true,
        Friday: false,
        Wednesday: true,
        Tuesday: false,
        Saturday: true
      },
      routePoint: [
        {
          id: 1,
          pointName: 'BUS STOP-41',
          landMark: 'Near Kormangla',
          boardingTime: '2020-01-14T09:18:02.226+0000',
          departureTime: '2020-01-14T09:18:02.226+0000'
        },
        {
          id: 2,
          pointName: 'BUS STOP-40',
          landMark: 'Near BTM',
          boardingTime: '2020-01-14T09:18:02.226+0000',
          departureTime: '2020-01-14T09:18:02.226+0000'
        }
      ],
      routeName: 'Highway'
    }
  }
];
