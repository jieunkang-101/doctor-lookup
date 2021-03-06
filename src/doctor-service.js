export class Doctor {
  async getDoctorByIssue(issue) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=45.512230%2C-122.658722%2C100&sort=distance-asc&limit=25&user_key=${process.env.API_KEY}`);
      let jsonfiedResponse;
      if (response.ok && response.status === 200) {
        jsonfiedResponse = await response.json();
      } else {
        jsonfiedResponse = response.statusText;
      }
      console.log(jsonfiedResponse);
      return jsonfiedResponse;
    } catch(error) {
      return false;
    }
  }

  async getDoctorByName(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.512230%2C-122.658722%2C100&sort=distance-asc&limit=25&user_key=${process.env.API_KEY}`);
      let jsonfiedResponse;
      if (response.ok && response.status === 200) {
        jsonfiedResponse = await response.json();
      } else {
        jsonfiedResponse = response.statusText;
      }
      return jsonfiedResponse;
    } catch(error) {
      return false;
    }
  }

}


