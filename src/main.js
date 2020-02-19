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
      if (typeof(issueResponse) == "string") {
        $(".errorOutput").append(`There was an error handling your request: ${issueResponse} <br><a href='index.html'>Click here to try again</a>`);
      } else if (issueResponse.meta.count > 0) {
          issueResponse.data.forEach(function(data) {
          $(".output").show();
          $(".sentence").text(`A list of doctors who treats ${issue}.`);
          if (data.practices[0].website == null) {
            $(".outputResult").append("<li>" + data.profile.title + ". " + data.profile.first_name + " " + data.profile.last_name + "</li>" + "<ul>" + "<li>" + "Phone Number: " + data.practices[0].phones[0].number + "</li>" + "<li>" + "Address: " + data.practices[0].visit_address.street + ", " + data.practices[0].visit_address.city + ", " + data.practices[0].visit_address.state + ", " + data.practices[0].visit_address.zip + "</li>" + "<li>" + "Accept New Patients: " + data.practices[0].accepts_new_patients + "</li>" + "<li>" + "Website: there is no website" + "</li>" + "</ul>" + "<br>" + "</li>");
          } else {
            $(".outputResult").append("<li>" + data.profile.title + ". " + data.profile.first_name + " " + data.profile.last_name + "</li>" + "<ul>" + "<li>" + "Phone Number: " + data.practices[0].phones[0].number + "</li>" + "<li>" + "Address: " + data.practices[0].visit_address.street + ", " + data.practices[0].visit_address.city + ", " + data.practices[0].visit_address.state + ", " + data.practices[0].visit_address.zip + "</li>" + "<li>" + "Accept New Patients: " + data.practices[0].accepts_new_patients + "</li>" + "<li>" + "Website: " + "<a href='" + data.practices[0].website + "'>" + data.practices[0].website + "</a>" +"</li>" + "</ul>" + "<br>" + "</li>");
          }
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
        $(".errorOutput").append(`There was an error handling your request: ${nameResponse} <br><a href='index.html'>Click here to try again</a>`);
      } else if (nameResponse.meta.count > 0) {
          nameResponse.data.forEach(function(data) {
          $(".output").show();
          $(".sentence").text(`A list of doctors with the name of ${name}.`);
          if (data.practices[0].website == null) {
            $(".outputResult").append("<li>" + data.profile.title + ". " + data.profile.first_name + " " + data.profile.last_name + "</li>" + "<ul>" + "<li>" + "Phone Number: " + data.practices[0].phones[0].number + "</li>" + "<li>" + "Address: " + data.practices[0].visit_address.street + ", " + data.practices[0].visit_address.city + ", " + data.practices[0].visit_address.state + ", " + data.practices[0].visit_address.zip + "</li>" + "<li>" + "Accept New Patients: " + data.practices[0].accepts_new_patients + "</li>" + "<li>" + "Website: there is no website" + "</li>" + "</ul>" + "<br>" + "</li>");
          } else {
            $(".outputResult").append("<li>" + data.profile.title + ". " + data.profile.first_name + " " + data.profile.last_name + "</li>" + "<ul>" + "<li>" + "Phone Number: " + data.practices[0].phones[0].number + "</li>" + "<li>" + "Address: " + data.practices[0].visit_address.street + ", " + data.practices[0].visit_address.city + ", " + data.practices[0].visit_address.state + ", " + data.practices[0].visit_address.zip + "</li>" + "<li>" + "Accept New Patients: " + data.practices[0].accepts_new_patients + "</li>" + "<li>" + "Website: " + "<a href='" + data.practices[0].website + "'>" + data.practices[0].website + "</a>" +"</li>" + "</ul>" + "<br>" + "</li>");
          }
        });
        $(".refresh").append(`<a href='index.html'>Click here to try again</a>`);
      } else {
        $(".noResult").append("Unfortunately, there are no doctors meet your search criteria in Portland area");
        $(".refresh").append(`<a href='index.html'>Click here to try again</a>`);
      }        
    };
  });
});