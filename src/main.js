import { Doctor } from './doctor-service';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("form#mdIssueForm").submit(function(event) {
    event.preventDefault();

    const issue = $("#inputMdIssue").val();
    $("#inputMdIssue").val(""); 

    (async () => {
      let doctorSearch = new Doctor();
      const issueResponse = await doctorSearch.getDoctorByIssue(issue);
      getElementsByIssue(issueResponse);
      console.log(issueResponse);
   
    })();

    const getElementsByIssue = function(issueResponse) {

      if (issueResponse === false) {
        $(".errorOutput").append(`There was an error handling your request. <a href='index.html'>Click here to try again</a>`);
      } else if (issueResponse.meta.count > 0) {
        issueResponse.data.forEach(function(data) {
          $(".output").show();
          $(".sentence").text(`A list of doctors who treats ${issue}.`);
          $(".outputResult").append("<li>" + data.profile.title + ". " + data.profile.first_name + " " + data.profile.last_name + "</li>" + "<ul>" + "<li>" + "Phone Number: " + data.practices[0].phones[0].number + "</li>" + "<li>" + "Address: " + data.practices[0].visit_address.street + ", " + data.practices[0].visit_address.city + ", " + data.practices[0].visit_address.state + ", " + data.practices[0].visit_address.zip + "</li>" + "<li>" + "Accept New Patients: " + data.practices[0].accepts_new_patients + "</li>" + "<li>" + "Website: " + "<a href='" + data.practices[0].website + "'>" + data.practices[0].website + "</a>" +"</li>" + "</ul>" + "<br>" + "</li>");
        });
      } else {
        $(".noResult").append("<h5>Unfortunately, There are no doctors meet your search criteria in Portland area</h5>");
      }
    
    };
  });
});