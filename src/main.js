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
      let doctor = new Doctor();
      const issueResponse = await doctor.getDoctorByIssue(issue);
      getElementsByIssue(issueResponse);
    })();

    const getElementsByIssue = function(issueResponse) {
      if (issueResponse === false) {
        $(".errorOutput").append(`There was an error processing this search. Please try again. (Error message:`);
      } 
      
    };
  });
});