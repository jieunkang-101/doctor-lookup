# Doctor Lookup

#### Asynchrony and APIs with JavaScript Independent Project, 14 February 2020
 
#### By **_Jieun Kang_**

## Description
A application where users can search for doctors in Portland area who can treat their medical issue.

## Setup/Installation Requirements

1. Clone this repository on your local machine from `https://github.com/jieunkang-101/doctor-lookup`

2. Install `Node.js` with following instructions. If you already have Node.js installed, then skip to next step.

    **Node: Windows / Linux Installation Instructions**
    * To install Node on other systems, go to the [Node website](https://nodejs.org/en/), download and install the appropriate installer for your operating system.

    **Node: OSX Installation Instructions**
    * On OS X systems, install Node.js through Homebrew with the following command in your home directory:
      * `$ brew install node`
    * Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):  
      * `$ node -v`
      * `npm -v`

3. Install dependencies 
   *  Enter the following code in the command line to install all necessary dependencies to the project.
      * `$ npm install`

4. Linking API key
    * This application requires an API key to run properly.
      * Get a personal API key from https://developer.betterdoctor.com/   
      * Create a .env files in the root directory or the project. Obtain your own API key in .env file.</br>
      `API_KEY = YOUR UNIQUE API KEY GOES HERE`

5. Working with the project in Node
    * To build and buldle the project in webpack run:
      * `$ npm run build`
    * To spin up a development server at http://localhost:8080/.
      * `$ npm run start`

## Behavior Driven Development Specifications

| Behavior(Spec)<img width=800/>  | Input<img width=300/>  | Output<img width=600/>  |
| :---------------- | :-----: | :----- |
| The Program will return list of qualified doctors based on submitted medical issue. | "sore throat" | "MD. Nathan Sautter" |
| The program will return list of doctors based on submitted name. | "Nathan" | "MD. Nathan Sautter" |
| The program will return a notification that states no doctor meet the criteria. | "aaaaaaaa" | "Unfortunately, there are no doctors meet your search criteria in Portland area" |
| The program will return first name, last name, address, phone number, website and whether or not the doctor is accepting new patients for any response with a doctor |  | <ul>MD. Nathan Sautter <li>Phone Number: </li><li>Address: </li><li>Accept New Patients:</li><li>Website:</li></ul>|
| The program will return error message when the API call doesn't return a 200 OK status |  | "There was an error handling your request" |

## Technologies Used
| Development dependencies | Front end dependencies |
| :------ | :------ |
| webpack | Boostrap |
| eslint-loader | jquery |
| babel-loader | popper |
| css-loader & style-loader | |

### License

*This webpage is licensed under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license*

Copyright (c) 2020 **_Jieun Kang_**
