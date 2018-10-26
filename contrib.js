
if(window.location.hash && window.location.hash.split("=")[0] == "#invite_token")
	location.pathname = "/pingendocontrib/complete_signup?token="window.location.hash.split("=")[1];