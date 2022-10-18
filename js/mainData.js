const mainData = () => {
  fetch('https://anime-6e101-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        
    })
}

mainData();