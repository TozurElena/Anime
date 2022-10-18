const mainData = () => {

const renderTopAnime = (array) => {
  const wrapper = document.querySelector('.filter__gallery');

  wrapper.innerHTML = '';

  array.forEach((item) => {
    wrapper.insertAdjacentHTML('afterbegin', `
      <div class="product__sidebar__view__item set-bg mix"
        data-setbg="${item.image}">
        <div class="ep">${item.rating} / 10</div>
        <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
        <h5><a href="/anime-details.html">${item.title}</a></h5>
    </div>
    `)
  })

  wrapper.querySelectorAll('.set-bg').forEach((elem) => {
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
    })
}

  fetch('https://anime-6e101-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));
    })
}

mainData()