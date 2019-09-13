# API
https://www.holidu.de/rest/search?regionId=22458

# Result
{
    apartments: [
        {
            publicId: 123456,
            apartmentSimples: [
                {
                    apartmentId: 98765, // int
                    photos: [10, 20, 5, 7], // array of int
                    holiduShortTitle: "Zelt für 16 Personen", // string
                    providerTitle: "Booking.com", // string
                    providerPhotoDirectory: "BOOKING_COM", // string
                    provider: "BOOKING_COM", // string
                    persons: 16, // int
                    minDayPrice: 999, // int
                    rating: 98.72, // float, out of 100, optional
                    countOfFeedbacks: 47, // int, optional
                    sleepingRooms: 8, // int, optional
                    bathRooms: 3, // int, optional
                }, …
            ], …
        }, …
    ], …
}

# Photo URL
Example:
https://static.holidu.com/images/e0sRv1/12178615/t/9.jpg
Pattern:
https://static.holidu.com/images/<providerPhotoDirectory: string>/<apartmentId: int>/<size: t, m, l>/<photoNr: int>.jpg

# Task
Use Redux to initialize your state container and to dispatch actions, and render the data using react.
Request the endpoint asynchronously and store this in Redux (don't worry about SSR).
Nice to haves are Sagas, the use of immutable data and reselect.
You can use `create-react-app` as your starting point.
The goal is to show a gallery of apartments with their images and any other data that's available (price, rating, countOfFeedbacks).
Don't focus on the design, but try to use flexbox and to make the HTML semantic.
You can use any CSS solution you're familiar with.

Good luck!