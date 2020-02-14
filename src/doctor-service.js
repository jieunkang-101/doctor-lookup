export class DoctorService {
  async getDoctor() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=45.512230%2C-122.658722%2C100&user_location=45.512230%2C-122.658722&sort=distance-asc&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonfiedResponse;
      if (response.ok && response.status === 200) {
        jsonfiedResponse = await response.json();
      } else {
        jsonfiedResponse = false;
      }
      return jsonfiedResponse;
    } catch {
      return false;
    }
  }
}