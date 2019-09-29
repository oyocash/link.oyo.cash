async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}
async function loadNav() {
    const contentDiv = document.getElementById("nav");
    if (contentDiv !== null) {
      contentDiv.innerHTML = await fetchHtmlAsText("/includes/nav.html");
    }
}
async function loadFooter() {
    const contentDiv = document.getElementById("footer");
    if (contentDiv !== null) {
      contentDiv.innerHTML = await fetchHtmlAsText("/includes/footer.html");
    }
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~\{\}+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}
