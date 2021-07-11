<template>
  <div class="home-container">
    <div class="navigation">
      <ul>
        <li><a href="#home-banner" @click="activeClass">Home</a></li>
        <li><a href="#about-me" @click="activeClass">About Me</a></li>
        <li><a href="#technologies" @click="activeClass">Technologies</a></li>
        <li><a href="#projects" @click="activeClass">Projects</a></li>
        <li><a href="#contact" @click="activeClass">Contact</a></li>
      </ul>
    </div>
    <div class="home-main">
      <div class="home-topbar">
        <a href="#" class="home-logo">Portfolio</a>
        <div class="toggle" @click="activeClass">
          <font-awesome-icon icon="bars" />
        </div>
      </div>
      <!-- Banner presentation Section  --->
      <section class="home-banner" id="home-banner">
        <div class="banner-content">
          <div class="imgBox">
            <img src="./../assets/pictures/profil-picture.jpg" alt="" />
          </div>
          <h3>Selim Sahnoun</h3>

          <p>
            I'm an engineer, fullstack web developper, passionate about finance
            and blockchain technology
          </p>
          <a href="" class="cv-button" download="CV Selim SAHNOUN"
            >Download my CV</a
          >
          <ul class="socialMedia">
            <li>
              <a
                href="https://www.linkedin.com/in/selimsahnoun/"
                target="_blank"
                rel="noopener noreferrer"
                ><font-awesome-icon :icon="['fab', 'linkedin']"
              /></a>
            </li>
            <li>
              <a href=""
                ><font-awesome-icon :icon="['fas', 'envelope-open-text']"
              /></a>
            </li>
          </ul>
        </div>
      </section>
      <!-- About Me Section  -------------->
      <section class="about-me adjust" id="about-me">
        <div class="section-title">
          <h2>About me</h2>
        </div>
        <div class="about-content">
          <div class="about-text-box">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae enim doloribus voluptatibus nostrum provident recusandae
              id pariatur, eius, nisi consectetur libero tenetur debitis hic
              assumenda rerum! Quisquam consectetur quaerat nisi? <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              fugit enim eius numquam quis ab accusamus vero voluptates nemo
              officiis, fuga quasi voluptatibus perferendis nostrum deserunt
              quas? Nisi, praesentium mollitia.<br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              fugit enim eius numquam quis ab accusamus vero voluptates nemo
              officiis, fuga quasi voluptatibus perferendis nostrum deserunt
              quas? Nisi, praesentium mollitia.
            </p>
          </div>
          <div class="imgBox">
            <img src="./../assets/pictures/profil-picture.jpg" alt="" />
          </div>
        </div>
      </section>
      <!-- Technologies Section  ---------->
      <section class="technologies adjust" id="technologies">
        <div class="section-title">
          <h2>Technologies</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            officiis
          </p>
        </div>
        <div class="tech-content">
          <div class="techBox">
            <img
              src="./../assets/pictures/technologies/javascript.png"
              alt=""
              style="border: 1px solid rgba(0, 0, 0, 0.19)"
            />
            <h2>Javascript</h2>
            <p>Self taught at first then I did a hackreactor bootcamp.</p>
          </div>
          <div class="techBox">
            <img src="./../assets/pictures/technologies/python.jpeg" alt="" />
            <h2>Python</h2>
            <p>
              Self taught, I built a blockchain crypto-currency ui, with Python
              (project 02)
            </p>
          </div>
          <div class="techBox">
            <img src="./../assets/pictures/technologies/angular.png" alt="" />
            <h2>Angular JS</h2>
            <p>
              Self taught, I built a mock Front End Uber project, with a Google
              API call
            </p>
          </div>
          <div class="techBox">
            <img src="./../assets/pictures/technologies/vue.png" alt="" />
            <h2>Vue JS</h2>
            <p>
              Self taught, the framework that I appreciate the most, I write
              mainly with Vue 2 & 3
            </p>
          </div>
          <div class="techBox">
            <img src="./../assets/pictures/technologies/solidity.svg" alt="" />
            <h2>solidity</h2>
            <p>
              After a BlockChain bootcamp in 2020, I built a real estate token
              exchange plateform (project 03)
            </p>
          </div>
          <div class="techBox">
            <img src="./../assets/pictures/technologies/node.png" alt="" />
            <h2>NODE JS</h2>
            <p>
              Very diligent on the good practices with Node, I'm learning to
              implement the
              <a
                href="https://softwareontheroad.com/ideal-nodejs-project-structure/?utm_source=devto&utm_medium=post"
                target="_blank"
                rel="noopener noreferrer"
                >"bullet proof method"</a
              >
            </p>
          </div>
          <div class="techBox">
            <img src="./../assets/pictures/technologies/react.png" alt="" />
            <h2>React JS</h2>
            <p>
              First framework that I practiced and did several projects with it
              during the hackreactor bootcamp
            </p>
          </div>
          <div class="techBox">
            <img src="./../assets/pictures/technologies/mongo_db.png" alt="" />
            <h2>Mongo DB</h2>
            <p>
              Database that I appreciate the most. Project 03 was done with
              Mongo Atlas as a database
            </p>
          </div>
          <div class="techBox">
            <img src="./../assets/pictures/technologies/postgres.png" alt="" />
            <h2>Postgres</h2>
            <p>
              I used postgres to build the thesis project, a magic items
              marketplace.
            </p>
          </div>
        </div>
      </section>
      <!-- Projects Section  -------------->
      <section class="projects adjust" id="projects">
        <div class="section-title">
          <h2>projects</h2>
          <p>
            Projects I've done so far. Either by personal work or freelancing.
          </p>
        </div>
        <div class="project-container">
          <div class="projects-small-box-container">
            <div
              class="project-box"
              v-for="(project, index) in projectList"
              :key="project.id"
              @click="changeProjectShown(index)"
            >
              <div class="project-image">
                <img :src="`${publicPath}project_${project.id}.jpeg`" />
              </div>
              <div class="project-text">
                <h3 v-for="(tech, index) in project.techList" :key="index">
                  {{ tech }}
                </h3>
              </div>
            </div>
          </div>
          <div class="clicked-project-box">
            <div class="video-box">
              <iframe
                width="533"
                height="300"
                :src="projectShowed.videoEmbedSrc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="description-box">
              <div class="description-title">
                <h2>{{ projectShowed.descriptionTitle }}</h2>
              </div>
              <div class="description-text">
                <p>
                  {{ projectShowed.descriptionText }}
                </p>
              </div>
              <div class="description-links">
                <div class="url-row">
                  <font-awesome-icon :icon="['fas', 'link']" /> :
                  {{ projectShowed.linkUrl }}
                </div>
                <div class="github-row">
                  <font-awesome-icon :icon="['fab', 'github']" /> :
                  <a
                    :href="projectShowed.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Click here</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Contact Section  -------------->
      <section class="contact adjust" id="contact">
        <div class="section-title">
          <h2>Let's say hi</h2>
          <p>
            Mettre ici le rouleau rellaxMettre ici le rouleau rellaxMettre ici
            le rouleau rellax
          </p>
        </div>
        <div class="contactForm">
          <div class="contact-first-row">
            <input type="text" name="" placeholder="Name" />
            <input type="text" name="" placeholder="Email Address" />
          </div>
          <div class="contact-second-row">
            <textarea placeholder="Message"></textarea>
          </div>
          <div class="contact-second-row">
            <input type="submit" value="Send" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import projectList from "./../assets/informations/projects.json";
export default {
  name: "Home",
  data() {
    return {
      toggle: null,
      topBar: null,
      navigation: null,
      homeMain: null,
      projectShowed: null,
      projectList: projectList,
      publicPath: import.meta.env.BASE_URL,
    };
  },
  created() {
    this.toggle = document.querySelector(".toggle");
    this.topBar = document.querySelector(".home-topbar");
    this.navigation = document.querySelector(".navigation");
    this.homeMain = document.querySelector(".home-main");
    this.projectShowed = projectList[0];
  },
  methods: {
    activeClass() {
      this.toggle.classList.toggle("active");
      this.topBar.classList.toggle("active");
      this.navigation.classList.toggle("active");
      this.homeMain.classList.toggle("active");
    },
    changeProjectShown(Id) {
      this.projectShowed = this.projectList[Id];
    },
    getImage(path) {
      return path;
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/views/home.scss";
</style>
