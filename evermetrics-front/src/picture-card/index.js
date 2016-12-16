var yo = require('yo-yo');

module.exports = function(pic){
  return yo`<div class="card">
    <div class="card-images">
      <img class="activator" src="${pic.url}">
    </div>
    <div class="card-content">
      <a class="card-title" href="/user/${pic.user.username}">
      <img src="${pic.user.avatar}" class="avatar" />
      <span class="username">${pic.user.username}</span>
      </a>
      <small class="right time">Hace 1 día</small>
      <p>
        <a class="left" href="#"><i class="fa fa-heart-o"></i></a>
        <span class="left likes">${pic.likes} me gusta</span>
      </p>
    </div>
  </div>
  `

}
