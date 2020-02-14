import { Doctor } from './doctor-service';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("form#mdIssueForm").submit(function(event) {
    event.preventDefault();

    const issue = $("#userMdIssue").val();
    $("#userMdIssue").val(""); 

    (async () => {
      let doctorSearch = new Doctor();
      const issueResponse = await doctorSearch.getDoctorByIssue(issue);
      getElementsByIssue(issueResponse);
      console.log(issueResponse);
   
    })();

    const getElementsByIssue = function(issueResponse) {

      if (issueResponse === false) {
        $(".errorOutput").append(`There was an error handling your request. Please try again.`);
      } else if (issueResponse.meta.count > 0) {
        issueResponse.data.forEach(function(data) {
          $(".output").append("<li>" + data.profile.title + ". " + data.profile.first_name + " " + data.profile.last_name + "</li>" + "<ul>" + "<li>" + "Phone Number: " + data.practices[0].phones[0].number + "</li>" + "</ul>");
        });
      }
    
    };
  });
});