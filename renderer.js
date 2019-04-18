const { BrowserWindow } = require('electron').remote
const { cardNew } = require('./src/components/NewController')

$('#min').click(() => {
  BrowserWindow.getFocusedWindow().minimize();
});
$('#max').click(() => {
BrowserWindow.getFocusedWindow().isMaximized()
  ? BrowserWindow.getFocusedWindow().restore()
  : BrowserWindow.getFocusedWindow().maximize();
});
$('#close').click(() => {
  BrowserWindow.getFocusedWindow().close();
});


$(() => {
  fetch('https://minhaserieapi.herokuapp.com/news').then(res => res.json())
    .then(res => {
      $('.content').append(cardNew(res))
    })
    .catch(err => {
      $('.content').empty().html(`
        <div class="alert col-4 offset-4 mt-2 alert-danger" role="alert">
          Erro ao buscar noticias!
        </div>
      `)
      console.log(err)
    })
})