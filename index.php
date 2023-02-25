<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="spotify.png">
    <title>Spotify</title>
</head>
<body>

    <div class="sidebar">
      <div class="logo">
        <a onclick="location.href = '/'">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" />
        </a>
      </div>

      <div class="navigation">
        <ul>
          <li>
            <a href="#">
              <span class="fa fa-home"></span>
              <span>Home</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="fa fa-search"></span>
              <span>Search</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="fa fas fa-book"></span>
              <span>Your Library</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="navigation">
        <ul>
          <li>
            <a href="#">
              <span class="fa fas fa-plus-square"></span>
              <span>Create Playlist</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="fa fas fa-heart"></span>
              <span>Liked Songs</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="policies">
        <ul>
          <li>
            <a href="#">Cookies</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="main-container">
      <div class="topbar">
        <div class="prev-next-buttons">
          <button type="button" class="fa fas fa-chevron-left"></button>
          <button type="button" class="fa fas fa-chevron-right"></button>
        </div>

        <div class="navbar">
          <ul>
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li class="divider">|</li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
          <button type="button">Log In</button>
        </div>
      </div>

      <div class="spotify-playlists">
        <h2>Spotify Playlists</h2>
        <span style="color: white;">Volume: </span>
        <span style="color: white" class="voice">100</span><br>
        <input type="range" min='0' max="100" step="1" value="100" class="valume">
        <div class="list">
          <?php 
            $arr = [
              'Кукла колдуна',
              'Прыгну со скалы',
              'Проклятый старый дом',
              'Дурак и молния',
              'Лесник',
              'Ели мясо мужики',
              'Два друга и разбойники',
              'Два монаха в одну ночь'
            ];

            $clases = [
              'one',
              'two',
              'three',
              'four',
              'five',
              'six',
              'seven',
              'eight',
            ];

            $audios = [
              'a',
              'b',
              'c',
              'd',
              'e',
              'f',
              'g',
              'h',
            ];
            for ($i = 0; $i < 8; $i++):
          ?>
            <div class="item">
              <img src="https://ir.ozone.ru/s3/multimedia-w/c1000/6375627632.jpg">
              <div class="play">
                <span class="fa fa-play  <?=$clases[$i]?>"></span>
              </div>
              <audio class="<?=$audios[$i]?>" src="audio<?=$i?>.mp3" ></audio>
              <h4><?=$arr[$i]?></h4>
              <p>Король и Шут</p>
          </div>
          <?php
            endfor
          ?>
        </div>
      </div>

      <div class="spotify-playlists">
        <h2>Focus</h2>
        <div class="list">
          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Peaceful Piano</h4>
            <p>Relax and indulge with beautiful piano pieces</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Deep Focus</h4>
            <p>Keep calm and focus with ambient and pos...</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Instrumental Study</h4>
            <p>Focus with soft study music in the...</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>chill lofi study beats</h4>
            <p>The perfect study beats, twenty four...</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Coding Mode</h4>
            <p>Dedicated to all the programmers out there.</p>
          </div>
          
          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Focus Flow</h4>
            <p>Uptempo instrumental hip hop beats.</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Calm Before The Storm</h4>
            <p>Calm before the storm music.</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Beats to think to</h4>
            <p>Focus with deep techno and tech house.</p>
          </div>
        </div>
      </div>

      <div class="spotify-playlists">
        <h2>Mood</h2>
        <div class="list">
          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Mood Booster</h4>
            <p>Get happy with today's dose of feel-good...</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Feelin' Good</h4>
            <p>Feel good with this positively timeless...</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Dark & Stormy</h4>
            <p>Beautifully dark, dramatic tracks.</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Feel Good Piano</h4>
            <p>Happy vibes for an upbeat morning.</p>
          </div>

          <div class="item">
            <img src="https://ir.ozone.ru/s3/multimedia-w/c1000/6375627632.jpg" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Feelin' Myself</h4>
            <p>The hip-hop playlist that's a whole mood...</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Chill Tracks</h4>
            <p>Softer kinda dance</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Feel-Good Indie Rock</h4>
            <p>The best indie rock vibes - classic and...</p>
          </div>

          <div class="item">
            <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>idk.</h4>
            <p>idk.</p>
          </div>
        </div>

        <hr>
      </div>

      <div class="preview">
        <div class="text">
          <h6>Preview of Spotify</h6>
          <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <div class="button">
          <button type="button">Sign up free</button>
        </div>
      </div>
    </div>

    <script
      src="https://kit.fontawesome.com/23cecef777.js"
      crossorigin="anonymous"
    ></script>
    <script src="script.js"></script>
  </body>
</html>