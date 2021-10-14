const content = document.getElementById('content');
const navbar = document.getElementById('navbar');

navbar.addEventListener("click", (event) => eventHandler(event));

function eventHandler(event) {
    if (event.target.innerText == 'About') {
        setAboutPage();
    }
    if (event.target.innerText == 'Skills') {
        setSkillsPage();
    }
    if (event.target.innerText == 'Projects') {
        setProjectsPage();
    }
    if (event.target.innerText == 'Contact Info') {
        setContactInfoPage();
    }
};

const profile = document.getElementById('profile');
const tabs = document.getElementById('tabs');
const fixed = document.getElementById("fixed");

function setAboutPage() {
    if (tabs.innerText !== '') {
        tabs.innerText = "";
        fixed.className = "col-md-7"
        tabs.className = "col-md-5"
    }
    tabs.style = "padding: 8% 2% 8% 2%";
    tabs.innerHTML =
        `
    <h2 class="title">About Me</h2><br>
    <p class="bio-text">
        I’m a Registered Nurse by trade but have always had an interest in tech and said 
        that I’d go back to school for a computer science degree one day. It was in my nursing 
        career when I realized the exact area in tech that I wanted to work in. I was part of a 
        team that helped to digitize nursing documentation. I worked closely with the IT team and 
        saw first-hand the impact that designing an application with the user’s desires in mind 
        could have. From that point on I was hooked. I’m now a Flatiron School graduate and certified 
        Full Stack Software Engineer. I’m also attending Auburn University where I’m completing my 
        Bachelor in Computer Science degree.<br><br>

        When I’m not coding or studying, I love spending time with my family, cooking, and baking. But 
        my favorite thing to do is plan another trip to Disney World....my happy place. 
        I love all things Disney!
    </p>
    `
}

function setSkillsPage() {
    fixed.className = "col-md-7"
    tabs.className = "col-md-5"
    tabs.innerText = "";
    tabs.style = "padding: 8% 2% 8% 2%; height: 100vh";
    tabs.innerHTML =
        `
        <h2 class="title">Technical Skills</h2><br>
        <p class="skills-text">
            Ruby | Rails | Vanilla JavaScript (ES6) | ReactJS | Redux | Thunk | Sinatra | Active Record | Java | HTML | CSS | SQLite | PostgreSQL | RESTful API | Kimurai | Nokogiri | Git | GitHub | jGRASP | Visual Studio | MVC pattern | Object-Oriented Programming
        </p>
        </div>
    `
}

function setProjectsPage() {
    fixed.className = "col-md-0";
    tabs.className = "col-md-12";
    tabs.innerText = "";
    tabs.style = "padding: 8% 2% 8% 2%";
    tabs.innerHTML =
        `
    <div id="videos">
        <div class="video">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WTDonCLN-Ls?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
            <a href="https://github.com/grantba/food_nutrition_information_app" target="_blank">Frontend Repo</a> | <a href="https://github.com/grantba/food_nutrition_information_api" target="_blank">Backend Repo</a><br><br>
            <p>The Food Nutrition Information App is a single-page React <br>Redux application with a Rails API backend.</p><br>
            <p>This app allows users to search food for nutritional content, <br>save favorite foods, and create meal plans they can easily <br>access later. It has a calculator added for convenience.</p>
        </div>


        <div>
            <a href="https://github.com/grantba/marvel_character_collection_app" target="_blank">Frontend Repo</a> | <a href="https://github.com/grantba/marvel_character_collection_api" target="_blank">Backend Repo</a><br><br>
            <p>The Marvel Character Collection App is a single-page Vanilla <br>JavaScript application with a Rails API backend.</p><br>
            <p>This app allows users to search and save Marvel characters, <br>comment, like and dislike characters. It has many interactive <br>features creating an enjoyable user experience while navigating <br>the application.</p>
        </div>
        <div class="video">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7wUKdupK5F0?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


        <div class="video">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BDjN6t374Jg?start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
            <a href="https://github.com/grantba/disney_movie_watchlist_app" target="_blank">Repo</a><br><br>
            <p>The Disney Movie Watchlist App is multi-page Ruby on Rails <br>application.</p><br>
            <p>This app allows users to search movies, create watchlists, rate and <br>review movies, while also providing the user with recommendations.</p>
        </div>

        <div>
            <a href="https://github.com/grantba/medication_blood_pressure_logger_sinatra_app" target="_blank">Repo</a><br><br>
            <p>The Medication Blood Pressure Logger App is a multi-page <br>Sinatra application.</p><br>
            <p>This app allows users to log both blood pressure readings and <br>medications. When logging medications, the user can also choose to <br>add an associated physician and/or pharmacy to each medication.</p>
        </div>
        <div class="video">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kYq8o_llnuw?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>
        </div>
    </div>
    `
}

function setContactInfoPage() {
    fixed.className = "col-md-9";
    tabs.className = "col-md-3";
    tabs.innerText = "";
    tabs.style = "padding: 7% 2% 2% 2%";
    tabs.innerHTML =
        `
    <div class="links">
        <a href="https://www.linkedin.com/in/blaire-grant/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg></a>&ensp;&ensp;<h2>LinkedIn</h2><br><br>
        <a href="https://github.com/grantba" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg></a>&ensp;&ensp;<h2>GitHub</h2><br><br>
        <a href="https://grant-blaire.medium.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
            <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
        </svg></a>&ensp;&ensp;<h2>Technical Blogs</h2><br><br>
        <a href="https://www.youtube.com/channel/UC5jveu6_pFt8Mw6Qf8tNGxQ" target="_blank"><svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.38 4.07C19.51 3.56 12 3.56 12 3.56C12 3.56 4.5 3.56 2.63 4.07C1.59 4.34 0.78 5.16 0.5 6.2C0 8.08 0 12.01 0 12.01C0 12.01 0 15.94 0.5 17.83C0.78 18.87 1.59 19.65 2.63 19.93C4.5 20.43 12 20.43 12 20.43C12 20.43 19.51 20.43 21.38 19.93C22.41 19.65 23.22 18.87 23.5 17.83C24 15.94 24 12.01 24 12.01C24 12.01 24 8.08 23.5 6.2C23.22 5.16 22.41 4.34 21.38 4.07ZM9.55 8.45L15.82 12.01L9.55 15.58L9.55 8.45Z"></path>
        </svg></a>&ensp;&ensp;<h2>Project Demos</h2><br><br>
        <a href="https://linktr.ee/blairegrant" target="_blank"><svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.92,2.44a1.06,1.06,0,0,0-1.86,0L.1,15.07A1,1,0,0,0,1,16.44h4.7v4.78a.9.9,0,0,0,.89.89H9.33a.91.91,0,0,0,.89-.89V16.44H8.92a1.05,1.05,0,0,1-1-.89A1,1,0,0,1,8,15.07l3.89-7h0Z"></path>
        <path d="M15.08,2.44a1.06,1.06,0,0,1,1.86,0l7,12.63A1,1,0,0,1,23,16.44H18.39v4.78a.9.9,0,0,1-.89.89H14.59a.9.9,0,0,1-.89-.89V16.44H15a1.05,1.05,0,0,0,1.06-.89,1,1,0,0,0-.08-.48L12.08,8h0Z"></path>
        </svg></a>&ensp;&ensp;<h2>LinkTree</h2><br><br> 
        <a href="mailto:grant.blaire@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
        </svg></a>&ensp;&ensp;<h2>Email</h2><br><br>
    </div>
    `
}