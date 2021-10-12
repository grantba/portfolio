const content = document.getElementById('content');
const navbar = document.getElementById('navbar');

setAboutPage();

navbar.addEventListener("click", (event) => eventHandler(event));

function eventHandler(event) {
    if (event.target.innerText == 'About') {
        setAboutPage()
    }
    if(event.target.innerText == 'Skills') {
        setSkillsPage()
    }
    if(event.target.innerText == 'Projects') {
        setProjectsPage()
    }
    if(event.target.innerText == 'Contact Info') {
        setContactInfoPage()
    }
}

function setAboutPage() {
    const div = document.createElement('div');
    content.appendChild(div);
    div.innerHTML = 
    `<div id="about">   
    <div id="profile-image">
            <img
                src='assets/images/profile-image.png';
                alt="profile-picture"
                loading="lazy"
                class="profile-img"
            />
        </div>
        <div id="bio">
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
    </div>
    `
}