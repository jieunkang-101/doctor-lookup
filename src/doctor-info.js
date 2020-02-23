export function doctorsInfo(data) {
  let newPatient = `${data.practices[0].accepts_new_patients}`;
  let acceptsNewPatients;
  if (newPatient === "true") {
    acceptsNewPatients = "yes";
  } else {
    acceptsNewPatients = "no";
  }

  let website = `${data.practices[0].website}`;
  let displayWebsite;
  if (website == "undefined") {
    displayWebsite = "There is no website";
  } else {
    displayWebsite = `<a href='${website}'>${website}</a>`;
  } 

  let doctorsInfo = 
    `<div class="card" >
      <div class="card-body">
        <h5 class="card-title">${data.profile.title}. ${data.profile.first_name} ${data.profile.last_name}</h5>
        <ul class="card-text">
          <li><strong>Phone Number</strong>: ${data.practices[0].phones[0].number} </li> 
          <li><strong>Address</strong>: ${data.practices[0].visit_address.street}</br>${data.practices[0].visit_address.city} ${data.practices[0].visit_address.state} ${data.practices[0].visit_address.zip}</li>
          <li><strong>Accept New Patients</strong>: ${acceptsNewPatients}</li>
          <li><strong>Website</strong>: ${displayWebsite}</li>
        </ul>  
      </div>  
    </div>`;

  return doctorsInfo;

}