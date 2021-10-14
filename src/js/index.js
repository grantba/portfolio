const content = document.getElementById('content');
const navbar = document.getElementById('navbar');

navbar.addEventListener("click", (event) => eventHandler(event));

function eventHandler(event) {
    if (event.target.innerText == 'About') {
        setAboutPage();
    }
    if(event.target.innerText == 'Skills') {
        setSkillsPage();
    }
    if(event.target.innerText == 'Projects') {
        setProjectsPage();
    }
    if(event.target.innerText == 'Contact Info') {
        setContactInfoPage();
    }
};

const profile = document.getElementById('profile');
const tabs = document.getElementById('tabs');

function setAboutPage() {
    if (tabs.innerText !== '') {
        tabs.innerText = "";
    }
    tabs.innerHTML =
    `<div id="tabs">
    <h2 id="bio-title">About Me</h2><br>
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
    </div>
    `
}

function setSkillsPage() {
    tabs.innerText = "";
    tabs.innerHTML =
    `<div id="tabs">
        <h2 id="skills-title">Skills</h2><br>
        <p class="skills-text">
            Technical Skills: Ruby, Rails
        </p>
        </div>
    </div>
    `
}