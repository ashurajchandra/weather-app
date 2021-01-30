export function fetchWeather() {
  return (dispatch) => {
    console.log("fetching url");
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a747ffc0cf00fab3b725fb571a9edc97`;

    fetch(url)
      .then((response) => {
        return response.json;
      })
      .then((data) => {
        console.log("data", data);
        // dispatch(updatePosts(data.data.posts));
      });
  };
}
