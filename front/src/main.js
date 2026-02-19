import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header class="header">
          <h1>My Quizz</h1>
          <p>Pour accéder a la page /about <a href="about/" style="text-decoration: none;">click ici</a></p>
        </header>


        <nav "Réseaux sociaux">
          <a href="#" class="fa fa-facebook" "Facebook"></a>
          <a href="#" class="fa fa-twitter" "Twitter"></a>
          <a href="#" class="fa fa-google" "Google"></a>
          <a href="#" class="fa fa-linkedin" "LinkedIn"></a>
          <a href="#" class="fa fa-youtube" "YouTube"></a>
          <a href="#" class="fa fa-instagram" "Instagram"></a>
          <a href="#" class="fa fa-pinterest" "Pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost" "Snapchat"></a>
          <a href="#" class="fa fa-skype" "Skype"></a>
          <a href="#" class="fa fa-android" "Android"></a>
          <a href="#" class="fa fa-dribbble" "Dribbble"></a>
          <a href="#" class="fa fa-vimeo" "Vimeo"></a>
          <a href="#" class="fa fa-tumblr" "Tumblr"></a>
          <a href="#" class="fa fa-vine" "Vine"></a>
          <a href="#" class="fa fa-foursquare" "Foursquare"></a>
          <a href="#" class="fa fa-stumbleupon" "StumbleUpon"></a>
          <a href="#" class="fa fa-flickr" "Flickr"></a>
          <a href="#" class="fa fa-yahoo" "Yahoo"></a>
          <a href="#" class="fa fa-reddit" "Reddit"></a>
          <a href="#" class="fa fa-rss" "RSS"></a>
        </nav>

        <main>
          <section class="row">
            <article class="leftcolumn">
              <section class="card">
              <h1>Nom étudiant</h1>
              <h2>description</h2>
              <div id="quiz">
                <h2>A TOI DE JOUER</h2>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
              </section>
            </article>
            <aside class="rightcolumn">
              <section class="card">
                <img alt="Image d'un point d'interrogation" src="/question.png" width="500" height="600">
              </section>
            </aside>
          </section>
        </main>

        <footer>
          <h2>@2024</h2>
        </footer>
`

initQuizz();