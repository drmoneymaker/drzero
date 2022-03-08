var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

if (baseUrl != "https://thisstartupdoesnotexist.com/") {
    console.log("showads");
}