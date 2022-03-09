const urls = [
  "/personalInfo",
  "/technical-skills",
  "/covidStuff",
  "/insights",
  "/submit",
  "/thanks",
  "/",
];

export const nextPage = (url) => {
  //   console.log(urls.indexOf("/personalInfo"));


  console.log("url next", url);


    return urls[urls.indexOf(url) + 1]




};
