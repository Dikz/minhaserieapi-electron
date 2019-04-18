exports.cardNew = data => {
  $(() => {
    $('.new-card').hover(function () {
      $('.card-img-overlay').css('display', 'none')
      $(this).find('.card-img-overlay').css('display', 'block')
      $(this).find('.card-img-overlay').css('background', 'rgba(0, 0, 0, .6)')
      $(this).find('.card-img').css('transform', 'scale(1.2)')
    })

    $('.new-card').mouseleave(function() {
      $('.card-img-overlay').css('display', 'none')
      $(this).find('.card-img').css('transform', 'scale(1)')
    })
  })
  return data.results.map(noticia => `
  <div class="card new-card text-white">
    <img src="${noticia.thumb}" class="card-img" alt="">
    <div class="card-img-overlay" style="display: none;">
      <h5 class="card-title">${noticia.title}</h5>
      <p class="card-text"></p>
      <p class="card-text">${noticia.published}</p>
    </div>
  </div>
  `)
}