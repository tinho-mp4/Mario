// Include the jQuery libray in your web page with <script language="javascript" type="text/javascript" src="jquery.js"/></script>
// Include this script in your web page with <script language="javascript" type="text/javascript" src="whereami.js"/></script>


// you may change the following value to suit your website design
var css = "color: #e32925;; background-color: white";


// --------------Do not edit anything below here!!!!--------------------------//
// --------------Do not edit anything below here!!!!--------------------------//
// --------------Do not edit anything below here!!!!--------------------------//
// --------------Do not edit anything below here!!!!--------------------------//
// --------------Do not edit anything below here!!!!--------------------------//
// grab page name to sPage
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
if (sPage == '') sPage = 'index.html';
$(document).ready(function() {
	var selector = 'nav ul li a[href="' + sPage + '"]';
	$(selector).attr("style", css);
});