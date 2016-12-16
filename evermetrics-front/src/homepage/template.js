var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');


module.exports = function(pictures){
  var el = yo`<div class="container timeline">
  <div class="row">
    <div class="col m3 cont-menu">
        <ul class="tabs menu-lateral">
          <li class="tab"><a class="active" href="#fb">Facebook</a></li>
          <li class="tab"><a href="#tw">Twitter</a></li>
          <li class="tab"><a href="#ins">Instagram</a></li>
        </ul>
    </div>
    <div class="cont-redes">
        <div id="fb" class="col m9 cont-datos">
          <h4>Crecimiento</h4>
              <div class="row">
                <div class="col m4 cont-variables">
                  <h5>Fans Totales</h5>
                  <p id="count-number" class="timer count-title" data-to="16041" data-speed="1500"></p>
                </div>
                <div class="col m4 cont-variables">
                  <h5>Fans Nuevos</h5>
                  <p id="count-number" class="timer count-title" data-to="315" data-speed="1500"></p>
                </div>
                <div class="col m4 cont-variables">
                  <h5>No me Gusta</h5>
                  <p id="count-number" class="timer count-title" data-to="82" data-speed="1500"></p>
                </div>
              </div>
              <div class="row">
                <div class="col m6 cont-variables">
                  <h5>Impresión</h5>
                  <p id="count-number" class="timer count-title" data-to="169980" data-speed="1500"></p>
                </div>
                <div class="col m6 cont-variables">
                  <h5>Usuarios Activos</h5>
                  <p id="count-number" class="timer count-title" data-to="14146" data-speed="1500"></p>
                </div>
              </div>
          <h4>Demográficos</h4>
              <div class="row">
                <div class="col m3 cont-variables">
                  <h5><i class="fa fa-venus" aria-hidden="true"></i> Mujeres</h5>

                  <p><i class="fa fa-square" ></i> </p>
                  <h5><i class="fa fa-mars" aria-hidden="true"></i> Hombres</h5>
                  <p style="color: #c62241;"><i class="fa fa-square" ></i> 51% </p>
                </div>
                <div class="col m9 cont-variables">
                  <canvas id="genero" width="150" height="150"></canvas>
                </div>
              </div>
              <div class="row">
                <div class="col m6 cont-variables">
                  <div class="col m7" style="padding:0px;">
                    <h5>Edades Principales</h5>
                    <p><i class="fa fa-square" ></i> 25 - 34 Años: 41,90%<br><span style="color: #c62241;"><i class="fa fa-square" ></i> 18 - 24 Años: 32,38%</span><br><span style="color: #ee6e73;"><i class="fa fa-square" ></i> 13 - 17 Años: 9,20%</span></p>
                  </div>
                  <div class="col m5">
                      <canvas id="edad" width="150" height="150"></canvas>
                  </div>
                </div>
                <div class="col m6 cont-variables">
                  <div class="col m7" style="padding:0px;">
                    <h5>Principales idiomas</h5>
                    <p><i class="fa fa-square" ></i> Español: 82,53%<br><span style="color: #c62241;"><i class="fa fa-square" ></i> Inglés: 16,19%</span></p>
                  </div>
                  <div class="col m5">
                      <canvas id="idioma" width="150" height="150"></canvas>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col m6 cont-variables">
                  <div class="col m7" style="padding:0px;">
                    <h5>Principales Países</h5>
                    <p><i class="fa fa-square" ></i> Colombia: 92,38%<br><span style="color: #c62241;"><i class="fa fa-square" ></i> EEUU: 1,58%</span></p>
                  </div>
                  <div class="col m5">
                    <canvas id="pais" width="150" height="150"></canvas>
                  </div>
                </div>
                <div class="col m6 cont-variables">
                  <div class="col m7" style="padding:0px;">
                    <h5>Principales Ciudades</h5>
                    <p><i class="fa fa-square" ></i> Medellín: 63,80%<br><span style="color: #c62241;"><i class="fa fa-square" ></i> Bogotá: 7,93%</span><br><span style="color: #ee6e73;"><i class="fa fa-square" ></i> Pasto: 1,58%</span></p>
                  </div>
                  <div class="col m5">
                    <canvas id="ciudades" width="150" height="150"></canvas>
                  </div>
                </div>
              </div>
          <h4>Interacción</h4>
                  <div class="row">
                    <div class="col m6 cont-variables">
                      <h5>Referencias Externas</h5>
                      <p id="count-number" class="timer count-title" data-to="11" data-speed="1500"></p>
                    </div>
                    <div class="col m6 cont-variables">
                      <h5>Vistas Pestañas</h5>
                      <p id="count-number" class="timer count-title" data-to="155" data-speed="1500"></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col m6 cont-variables">
                      <h5>Principales Pestañas</h5>
                      <p>Aplicación personalizada: 3<br>Timeline: 139<br>Fotos: 6<br>Info: 4<br>Profile: 3</p>
                    </div>
                    <div class="col m6 cont-variables">
                      <h5>Principales Referencias</h5>
                      <p>Eversocial.co: 4<br>Google Mundo: 2<br>Otras búsquedas: 5</p>
                    </div>
                  </div>
              <h4>Contenido</h4>
                  <div class="row">
                    <div class="col m6 cont-variables">
                      <h5>Post más efectivo</h5>
                      <img src="./assets/img/post-efectivo.png" style="width:100%;" />
                    </div>
                    <div class="col m6 cont-variables">
                      <h5>Datos del post</h5>
                      <p>Fecha | Miércoles 4 de diciembre<br>Likes | 9<br>Comentarios | 0<br>Compartido | 0<br>Alcance | 150<br>Interacción | 9</p>
                    </div>
                  </div>
        </div>
        <div id="tw" class="col m9 cont-datos">
          <h4>Crecimiento</h4>
              <div class="row">
                <div class="col m6 cont-variables">
                  <h5>Total seguidores</h5>
                  <p id="count-number" class="timer count-title" data-to="4015" data-speed="1500"></p>
                </div>
                <div class="col m6 cont-variables">
                  <h5>Total seguidos</h5>
                  <p id="count-number" class="timer count-title" data-to="2919" data-speed="1500"></p>
                </div>
              </div>
              <div class="row">
                <div class="col m6 cont-variables">
                  <h5>Nuevos Seguidores</h5>
                  <p id="count-number" class="timer count-title" data-to="72" data-speed="1500"></p>
                </div>
                <div class="col m6 cont-variables">
                  <h5>Fotos / Videos Globales</h5>
                  <p id="count-number" class="timer count-title" data-to="218" data-speed="1500"></p>
                </div>
              </div>
              <div class="row">
                <div class="col m12 cont-variables">
                  <h5>Favoritos Globales</h5>
                  <p id="count-number" class="timer count-title" data-to="432" data-speed="1500"></p>
                </div>
              </div>
          <h4>Interacción</h4>
                  <div class="row">
                      <div class="col m4 cont-variables">
                        <h5>Total Tweets</h5>
                        <p id="count-number" class="timer count-title" data-to="7419" data-speed="1500"></p>
                      </div>
                      <div class="col m4 cont-variables">
                        <h5>Tweets</h5>
                        <p id="count-number" class="timer count-title" data-to="392" data-speed="1500"></p>

                      </div>
                      <div class="col m4 cont-variables">
                        <h5>Retweets</h5>
                        <p>98</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col m4 cont-variables">
                        <h5>Menciones</h5>
                        <p>136</p>
                      </div>
                      <div class="col m4 cont-variables">
                        <h5>Favoritos</h5>
                        <p>158</p>
                      </div>
                      <div class="col m4 cont-variables">
                        <h5>Mensajes Directos</h5>
                        <p>0</p>
                      </div>
                  </div>
           <h4>Otros datos</h4>
             <div class="row">
                 <div class="col m3 cont-variables">
                   <h5>#werunmedellín</h5>
                   <p>14</p>
                 </div>
                 <div class="col m3 cont-variables">
                   <h5>#maratónflores</h5>
                   <p>158</p>
                 </div>
                 <div class="col m3 cont-variables">
                   <h5>#maratónmedellín</h5>
                   <p>165</p>
                 </div>
                 <div class="col m3 cont-variables">
                   <h5>#yoelegícorrer</h5>
                   <p>22</p>
                 </div>
             </div>
             <div class="row">
                 <div class="col m3 cont-variables">
                   <h5>#runner</h5>
                   <p>53</p>
                 </div>
                 <div class="col m3 cont-variables">
                   <h5>#running</h5>
                   <p>18</p>
                 </div>
                 <div class="col m3 cont-variables">
                   <h5>#repost</h5>
                   <p>34</p>
                 </div>
                 <div class="col m3 cont-variables">
                   <h5>#berunner</h5>
                   <p>43</p>
                 </div>
             </div>
        </div>
        <div id="ins" class="col m9 cont-datos">
          <h4>Crecimiento</h4>
              <div class="row">
                <div class="col m6 cont-variables">
                  <h5>Total seguidores</h5>
                  <p>978</p>
                </div>
                <div class="col m6 cont-variables">
                  <h5>Total seguidos</h5>
                  <p>271</p>
                </div>
              </div>
              <div class="row">
                <div class="col m6 cont-variables">
                  <h5>Total post</h5>
                  <p>342</p>
                </div>
                <div class="col m6 cont-variables">
                  <h5>Filtro más usado</h5>
                  <p>Ratio</p>
                </div>
              </div>
              <div class="row">
                <div class="col m4 cont-variables">
                  <h5>Tags más usados</h5>
                  <p>#maratónmedellín</p>
                </div>
                <div class="col m4 cont-variables">
                  <h5>Likes</h5>
                  <p>374</p>
                </div>
                <div class="col m4 cont-variables">
                  <h5>Comentarios</h5>
                  <p>20</p>
                </div>
              </div>
          <h4>Usuarios Principales</h4>
                  <div class="row">
                      <div class="col m3 cont-variables">
                        <h5>@pulis</h5>
                        <p>(24 Likes)</p>
                      </div>
                      <div class="col m3 cont-variables">
                        <h5>@jhonfredygalvez</h5>
                        <p>(24 Likes)</p>
                      </div>
                      <div class="col m3 cont-variables">
                        <h5>@dorian85_</h5>
                        <p>(14 Likes)</p>
                      </div>
                      <div class="col m3 cont-variables">
                        <h5>@ggualdron</h5>
                        <p>(20 Likes)</p>
                      </div>
                  </div>
           <h4>Interacción</h4>
                  <div class="row">
                      <div class="col m12 cont-variables">
                        <img src="./assets/img/interaccion-ins.png"  />
                      </div>
                  </div>
        </div>
    </div>
  </div>
  </div>`;
  return layout(el);
}
