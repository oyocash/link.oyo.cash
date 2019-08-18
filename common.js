async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}
async function loadNav() {
    const contentDiv = document.getElementById("nav");
    contentDiv.innerHTML = await fetchHtmlAsText("nav.html");
}
async function loadFooter() {
    const contentDiv = document.getElementById("footer");
    contentDiv.innerHTML = await fetchHtmlAsText("footer.html");
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function redirectTo (payment) {
  console.log(JSON.stringify(payment))
}
