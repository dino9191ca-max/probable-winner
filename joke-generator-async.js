async function getRandomJoke() {
  try {
    const response = await fetch('https://icanhazdadjoke.com/?format=json');
    const joke = await response.json();
    console.log(joke.joke);
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}

getRandomJoke();