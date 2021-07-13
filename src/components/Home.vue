<template>
  <div class="home-container">
    <div class="navigation" :class="activeState">
      <ul>
        <li><a href="#home-banner" @click="activeClass">Home</a></li>
        <li><a href="#about-me" @click="activeClass">About Me</a></li>
        <li><a href="#technologies" @click="activeClass">Technologies</a></li>
        <li><a href="#projects" @click="activeClass">Projects</a></li>
        <li><a href="#contact" @click="activeClass">Contact</a></li>
      </ul>
    </div>
    <div class="home-main" :class="activeState">
      <div class="home-topbar" :class="activeState">
        <a href="#home-banner" class="home-logo">Portfolio</a>
        <div class="toggle" @click="activeClass" :class="activeState">
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
          <a
            href="https://firebasestorage.googleapis.com/v0/b/portfoliov1-1.appspot.com/o/cv_selim_sahnoun.pdf?alt=media&token=ba0a0ad9-e250-42b6-9dc5-9ef22cabfcf0"
            target="_blank"
            rel="noopener noreferrer"
            class="cv-button"
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
              <a href="#contact"
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
          <div class="studies-container">
            <div class="banner">
              <font-awesome-icon
                :icon="['fas', 'user-graduate']"
                :class="studyBanner"
                @click="toggleExperience"
              />
              /
              <font-awesome-icon
                :icon="['fas', 'briefcase']"
                :class="workBanner"
                @click="toggleExperience"
              />
            </div>
            <div class="studies-wrapper">
              <div
                class="diploma-box"
                v-for="(diploma, index) in diplomas"
                :key="index"
                @click="showSchool(diploma.diplomaLink)"
              >
                <div class="diploma-year">{{ diploma.diplomaYear }}</div>
                <div class="diploma-title">{{ diploma.diplomaTitle }}</div>
                <div class="diploma-town">{{ diploma.diplomaTown }}</div>
                <div class="diploma-school">{{ diploma.diplomaSchool }}</div>
                <div class="diploma-text">
                  <p>{{ diploma.diplomaText }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Technologies Section  ---------->
      <section class="technologies adjust" id="technologies">
        <div class="section-title">
          <h2>Technologies</h2>
          <p>
            I can work with these technologies and I've built projects with each
            of those.
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
              I used postgres to build the
              <a
                href="https://github.com/selimsahnoun/skymage/tree/main/backend"
                target="_blank"
                rel="noopener noreferrer"
                >thesis project</a
              >
              thesis project, a magic items marketplace.
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
                <img :src="`${publicPath}project_${project.id + 1}.jpeg`" />
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
          <h2>Let's say hi !</h2>
          <p>Feel free to say hi, I'll gladly get back to you</p>
        </div>
        <div class="contactForm">
          <form class="contact-form" @submit.prevent="sendEmail">
            <div class="contact-first-row">
              <input type="text" name="user_name" placeholder="Name" />
              <input
                type="text"
                name="user_email"
                placeholder="Email Address"
              />
            </div>
            <div class="contact-second-row">
              <textarea placeholder="Message" name="message"></textarea>
            </div>
            <div class="contact-second-row">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
        <div v-if="modalState">
          <div class="success-message-container">
            <div class="success-message">
              <div class="close" @click="hideModal">
                <font-awesome-icon :icon="['fas', 'times']" />
              </div>
              Thank you for your E-mail. <br />
              <br />
              I'll get back to you ASAP
            </div>
          </div>
          <div id="overlay" @click="hideModal" :class="overlayClass"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import projectList from "./../assets/informations/projects.json";
import diplomas from "./../assets/informations/diplomas.json";
import jobs from "./../assets/informations/jobs.json";

export default {
  name: "Home",
  data() {
    return {
      modalState: false,
      activeState: null,
      projectShowed: null,
      projectList: projectList,
      diplomas: diplomas,
      overlayClass: "",
      publicPath: import.meta.env.BASE_URL,
      studyBanner: "showBanner",
      workBanner: "hideBanner",
    };
  },
  created() {
    this.projectShowed = projectList[0];
  },
  methods: {
    showSchool(link) {
      window.open(link, "_blank");
    },
    async sendEmail(e) {
      const sentEmail = await emailjs
        .sendForm(
          "service_pr79r2k",
          "contact_form",
          e.target,
          "user_87Izn1aq18kIRmMPX2yrn"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            return true;
          },
          (error) => {
            console.log("FAILED...", error);
            return false;
          }
        );
      sentEmail ? this.showModal() : "";
    },
    activeClass() {
      this.activeState = this.activeState === "active" ? "" : "active";
    },
    changeProjectShown(Id) {
      this.projectShowed = this.projectList[Id];
    },
    showModal() {
      this.modalState = true;
      this.overlayClass = "active-overlay";
    },
    hideModal() {
      this.modalState = false;
      this.overlayClass = "";
    },
    toggleExperience() {
      this.studyBanner =
        this.studyBanner === "showBanner" ? "hideBanner" : "showBanner";
      this.workBanner =
        this.workBanner === "showBanner" ? "hideBanner" : "showBanner";
      if (this.diplomas[0].diplomaSchool === "E.N.I.T.") {
        this.diplomas = jobs;
      } else {
        this.diplomas = diplomas;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/views/home.scss";
</style>
