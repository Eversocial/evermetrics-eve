var yo = require('yo-yo');
var empty = require('empty-element');

var el = yo`<div class="container">
        <div class="row">
          <div class="col m3 cont-logo">
            <a class="logo" href="#">Evermetrics</a>
          </div>
          <div class="col m9 cont-header">
          <div class="col m4 cont-ano">
            <a class='dropdown-button btn-ano' href='#' data-activates='dropdowna'><h5>Año - 2014</h5></a>
            <ul id='dropdowna' class='dropdown-content drop-mes'>
              <li><a href="#">2014</a></li>
              <li><a href="../../2015/enero">2015</a></li>
              <li><a href="../../2016/enero">2016</a></li>
            </ul>
          </div>
          <div class="col m5 cont-mes">
            <a class='dropdown-button btn-mes' href='#' data-activates='dropdown1'><h5>Datos - Diciembre</h5></a>
            <ul id='dropdown1' class='dropdown-content drop-mes'>
              <li><a href="#">Diciembre</a></li>
            </ul>
          </div>
          <div class="col m3  cont-user">
            <a href="#" data-activates="drop-users" class="btn btn-large btn-flat dropdown-button "><i aria-hidden="true" class="fa fa-user"></i></a>
            <ul id="drop-users" class="dropdown-content">
                 <li><a href="#">Salir</a></li>
            </ul>
          </div>
          </div>
        </div>
      </div>`;

module.exports = function(ctx, next){
    var container = document.getElementById('header-container');
    empty(container).appendChild(el);
    next();
}
