// Foursquare API Info
const clientId = "HNUCYIFWIZCZAL4RKU3HHQNDRX0PLSBDHGSAH0GDPKYJFQBP";
const clientSecret = "FQM0OZ2DNVQMBRB23YKPAUF3G3LIXFW4R2NWG4450CLZDL1B";
const url = "https://api.foursquare.com/v2/venues/explore?near=";

// OpenWeather Info
const openWeatherKey = "76ce13c734a18ee746d5240547caa4c0";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

// Page Elements
const $input = $("#city");
const $submit = $("#button");
const $destination = $("#destination");
const $container = $(".container");
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200605`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const venues = jsonResponse.response.groups[0].items.map(
        (item) => item.venue
      );
      console.log(venues);
      return venues;
    }
  } catch (error) {
    console.log(error);
  }
};

const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

// Add more Venue Divs
const addDivs = (venues, $venueDivs) => {
  let venueId = "venue";
  let count = $venueDivs.length;
  if (venues.length > $venueDivs.length) {
    for (let i = 0; i <= venues.length; i++) {
      let $newVenuDivs = document.createElement("div");
      document.getElementById("venues").appendChild($newVenuDivs);
      $newVenuDivs.className = "venue";
      $newVenuDivs.id = venueId + count;
      $venueDivs[count] = $newVenuDivs.id;
      count += 1;
    }
  }
};

// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    console.log(venues[index]);
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImageSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(
      venue.name,
      venue.location,
      venueImageSrc
    );
    $venue.append(venueContent);
  });

  $destination.append(`<h2>${venues[0].location.city}</h2>`);
};

const renderForecast = (day) => {
  // Add your code here:
  let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
};

const executeSearch = () => {
  $venueDivs.forEach((venue) => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then((venues) => renderVenues(venues));
  getForecast().then((forecast) => renderForecast(forecast));
  return false;
};

$submit.click(executeSearch);
