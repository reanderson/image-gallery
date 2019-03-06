# Image Gallery
An image gallery app that allows users to do the following:
* Navigate pages of image thumbnails
* Click a thumbnail to view a full image
* While viewing a full image, set an image as a favorite
* View list of favorite images
* Remove an image from the favorites list


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the App

Clone the repository to your computer. In the command line, navigate to the app's repository, and run `yarn install`. Once that finishes, run `yarn start`.

## Development Notes
This app was built as a code challenge. As part of the requirements, I was to use the following tech stack: react, redux, redux-saga, jest.

Having never used any of these technologies beyond React before, I began by doing research. I quickly found that Redux would make my life using React much simpler in many circumstances. Jest was easy enough to figure out, and finding that it's bundled as a part of Create React App, I realize that it's something I should be using much more often.

Redux-Saga, however, I found myself struggling with. I understand that it is helpful when dealing with asynchronous code, but I feel that I will need more time than the time given for this challenge to really go through the documentation and gain a deep enough understanding to feel confident making use of it. Instead, I opted to focus on learning to use Redux as effectively as I could, rather than stretch myself too thin learning new npm packages.

## Moving Forward
In its current form, this image gallery app is very simplistic. Some possibilities for steps moving forward include:
* A better UI. I used Twitter Bootstrap to help build a very simple UI for a proof of concept, but while it's functional, it's certainly not the nicest to look at.
* Persistant data. A backend connected to a database could be added to manage users and their favorites lists. On a smaller, more personal scale, local storage might be utilized to manage an individual's favorites list, though this is fairly limited in terms of storage space.
* More efficient code. The provided API for retrieving images returns an array of 5,000 objects. Right now, the code filters and maps this array fairly regularly (such as when switching from one page to another). While it still functions fairly quickly, if this 5,000 objects were scaled up, it's likely that the code would begin to show its inefficiencies.