# Doctor Lookup

#### Asynchrony and APIs with JavaScript Independent Project, 14 February 2020
 
#### By **_Jieun Kang_**

## Description
A application where users can search for doctors in Portland area who can treat their medical issue.

## Setup/Installation Requirements

1. Open Terminal and go to the Desktop directory `("$cd desktop")`.
2. Clone this repository to your local machine `("$git clone https://github.com/jieunkang-101/doctor-lookup")`.
3. Change into the root directory of this project `("$cd doctor-lookup")`.
4. Type  `("$npm install")` to add the correct Node modules and download necessary dependencies to the project.
5. Type `("$npm run build")` to build compile the application.
6. Open cloned directory in Visual Studio Code or preferred text editor `("code .")`.
7. This project requires an API key from BetterDoctor API `(https://developer.betterdoctor.com/)`. Make a `.env` file in the project root `("$touch .env")`.  Obtain your own API key in .env file.
8. Type `("$npm start")` to view the project.

## Behavior Driven Development Specifications

| Behavior(Spec)<img width=800/>  | Input<img width=300/>  | Output<img width=600/>  |
| :---------------- | :-----: | :-----: |
| The Program will return list of qualified doctors based on submitted medical issue. | "sore throat" | "Dr. James" |
| The program will return list of doctors based on submitted name. | "James" | "Dr. James |
| The program will return first name, last name, address, phone number, website and whether or not the doctor is accepting new patients for any response with a doctor | "James" | "Dr. James,  currently accepting new patients." |
| The program will return a notification that states no doctor meet the criteria. | "" | "Sorry, " |

## Technologies Used

* HTML
* Javascript
* JQuery
* Bootstrap 4.4
* Node.js
* webpack


### License

*This webpage is licensed under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license*

Copyright (c) 2020 **_Jieun Kang_**
