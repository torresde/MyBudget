import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let entries = [
            {
                id: 2001,
                name: "Electricity",
                amount: 150,
                month: 5,
                day: 1,
                year: 2017
            },
            {
                id: 2002,
                name: "Water",
                amount: 200,
                month: 5,
                day: 1,
                year: 2017
            },
            {
                id: 2003,
                name: "Gas",
                amount: 50,
                month: 5,
                day: 1,
                year: 2017
            },
            {
                id: 3001,
                name: "TV",
                amount: 200,
                month: 5,
                day: 15,
                year: 2017
            },
            {
                id: 3002,
                name: "Radio",
                amount: 30,
                month: 5,
                day: 20,
                year: 2017
            },
            {
                id: 1001,
                name: "Pay Check",
                amount: 1000,
                month: 5,
                day: 13,
                year: 2017
            },
            {
                id: 1002,
                name: "Poker Night",
                amount: 75,
                month: 5,
                day: 26,
                year: 2017
            },
            {
                id: 1003,
                name: "Sold Stocks",
                amount: 600,
                month: 4,
                day: 9,
                year: 2017
            }
        ];
        
        return {entries};
    }
}
