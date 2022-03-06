const urls = [
  "/personalInfo",
  "/technical-skills",
  "/covidStuff",
  "/insights",
  "/submit",
  "/thanks",
  "/",
];

export const prevPage = (url) => {
  //   console.log(urls.indexOf("/personalInfo"));


//   console.log("url next", url);

if(urls.indexOf(url) != 0) {
    return urls[urls.indexOf(url) - 1]
}

return "/"

};
