
if(window.location.hash && window.location.hash.split("=")[0] == "#invite_token"){
	var pathname = "/pingendocontrib/complete_signup?token="+window.location.hash.split("=")[1];

	location = "https://vigilant-wright-b014c5.netlify.com/"+pathname;
}