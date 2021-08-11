$(document).ready(async function () {
  var authToken = getToken("ec-config");
  console.log("AuthToken: ",authToken);
  let user = atob(authToken.split(".")[1]).split(".")[0];
  console.log("Token: ",user);
  let userApi =
    "https://ec-oauth-sso.run.aws-usw02-dev.ice.predix.io/users/" + user;
  var fetchData = { authToken: authToken, userApi: userApi };
  let userData = await getUserRole(fetchData);
  console.log("Userdata: ", userData);
  sessionStorage.setItem("userRole", userData.user);
});

function getToken(name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cookieName) == 0) {
      return c.substring(cookieName.length, c.length);
    }
  }
}

function getUserRole(e) {
  fetch(e.userApi, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + e.authToken,
    },
  }).then((response) => {
    if (response.status === 200) {
      response.json().then((respData) => {
        console.log(respData);
        return {
          user: respData,
        };
      });
    }
  });
}
