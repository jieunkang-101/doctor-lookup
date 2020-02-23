import { Doctor } from './doctor-service';
import { doctorsInfo } from './doctor-info.js';
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
      if (typeof(issueResponse) == "string") {
        $(".errorOutput").append(`There was an error handling your request: ${issueResponse} <br><a href='index.html'>Click here to try again</a>`);
      } else if (issueResponse.meta.count > 0) {
          issueResponse.data.forEach(function(data) {
          $(".output").show();
          $(".sentence").text(`A list of doctors who treats "${issue}".`);
          $(".outputResult").append(doctorsInfo(data));
        });
        $(".refresh").append(`<a href='index.html'>Click here to try again</a>`);
      } else {
        $(".noResult").append("Unfortunately, there are no doctors meet your search criteria in Portland area");
        $(".refresh").append(`<a href='index.html'>Click here to try again</a>`);
      }        
    };
  });

  $("form#nameForm").submit(function(event) {
    event.preventDefault();

    const name = $("#inputDocName").val();
    $("#inputDocName").val(""); 

    (async () => {
      let doctorSearch = new Doctor();
      const nameResponse = await doctorSearch.getDoctorByName(name);
      getElementsByName(nameResponse); 
    })();

    const getElementsByName = function(nameResponse) {

      if (typeof(nameResponse) == "string") {
        $(".errorOutput").append(`There was an error handling your request: "${nameResponse}"<br><a href='index.html'>Click here to try again</a>`);
      } else if (nameResponse.meta.count > 0) {
          nameResponse.data.forEach(function(data) {
          $(".output").show();
          $(".sentence").text(`A list of doctors with the name of "${name}".`);
          $(".outputResult").append(doctorsInfo(data));
        });
        $(".refresh").append(`<a href='index.html'>Click here to try again</a>`);
      } else {
        $(".noResult").append("Unfortunately, there are no doctors meet your search criteria in Portland area");
        $(".refresh").append(`<a href='index.html'>Click here to try again</a>`);
      }        
    };
  });
});