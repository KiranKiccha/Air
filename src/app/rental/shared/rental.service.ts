import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { Rental } from "./rental.model";

@Injectable()
export class RentalService {
    private rental: Rental[] = [
        {
            id: "1",
            title: 'Central Apartment',
            city: 'New York',
            street: 'Times Square',
            category: 'apartment',
            image: 'http:\\via.placeholder.com/350x250',
            bedrooms: 3,
            description: 'Very Good',
            dailyRate: 34,
            shared: false,
            createdAt: '24/12/2017'
        },

        {
            id: "2",
            title: 'Mysore Apartment',
            city: 'Mysore',
            street: 'Mysore main road',
            category: 'apartment',
            image: 'http:\\via.placeholder.com/350x250',
            bedrooms: 3,
            description: 'Very Good',
            dailyRate: 40,
            shared: false,
            createdAt: '24/12/2017'
        },

        {
            id: "3",
            title: 'Bangalore Central Apartment',
            city: 'Bangalore',
            street: 'MG road',
            category: 'apartment',
            image: 'http:\\via.placeholder.com/350x250',
            bedrooms: 3,
            description: 'Very Good',
            dailyRate: 50,
            shared: false,
            createdAt: '24/12/2017'
        }
    ];

    public getRentalById(rentalId: string): Observable<Rental> {
        return new Observable<Rental>((observer) => {

            setTimeout(() => {
                const foundRental= this.rental.find((rental) => {
                    return rental.id == rentalId;
                });
                observer.next(foundRental);
            }, 5000)
        });
    }


    public getRentals(): Observable<Rental[]> {
   return new Observable<Rental[]>((observer) => {

            setTimeout(() => {
                observer.next(this.rental);
            }, .5000);
           
        });

        
    }
}