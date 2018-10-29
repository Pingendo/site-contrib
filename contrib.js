
if(window.location.hash && window.location.hash.split("=")[0] == "#invite_token")
	location = "https://vigilant-wright-b014c5.netlify.com/pingendocontrib/complete_signup?token="+window.location.hash.split("=")[1];

if(window.location.hash && window.location.hash.split("=")[0] == "#recovery_token")
	location = "https://vigilant-wright-b014c5.netlify.com/pingendocontrib/recovery_password?token="+window.location.hash.split("=")[1];
