gsap.registerPlugin(ScrollTrigger);

const circles = document.querySelectorAll(".circle");

let mouseX = 0;
let mouseY = 0;

circles.forEach((circle) => {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCircles() {
  let x = mouseX;
  let y = mouseY;

  circles.forEach((circle, index) => {
    circle.x += (x - circle.x) * 0.28;
    circle.y += (y - circle.y) * 0.28;

    circle.style.left = circle.x + "px";
    circle.style.top = circle.y + "px";

    const scale = (circles.length - index) / circles.length;
    circle.style.transform = `translate(-50%, -50%) scale(${scale})`;

    x = circle.x;
    y = circle.y;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from("nav", {
  y: -30,
  opacity: 0,
  duration: 0.8
})
.from(".nav-links h4", {
  y: -14,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1
}, "-=0.4")
.from(".hand-left", {
  x: -340,
  opacity: 0,
  duration: 1.4,
  ease: "power3.out"
}, "-=0.2")
.from(".hand-right", {
  x: 340,
  opacity: 0,
  duration: 1.4,
  ease: "power3.out"
}, "-=1.2")
.from(".hero-tag", {
  y: 14,
  opacity: 0,
  duration: 0.5
}, "-=0.7")
.from(".hero-title", {
  y: 40,
  opacity: 0,
  scale: 0.94,
  duration: 0.8
}, "-=0.4")
.from(".hero-subtext", {
  y: 16,
  opacity: 0,
  duration: 0.6
}, "-=0.45");

gsap.to(".hand-left", {
  y: -280,
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "bottom top",
    scrub: 1.2
  }
});

gsap.to(".hand-right", {
  y: -280,
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "bottom top",
    scrub: 1.2
  }
});

gsap.to("#page2 h1", {
  x: "-160%",
  ease: "none",
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: "top -120%",
    scrub: 2,
    pin: true
  }
});

const teamMembers = [
  {
    image: "aman.jpg",
    title: "Aman",
    subtitle: "Frontend Developer",
    description: "I create modern UI and unique visual experiences with a strong focus on minimal design and smooth interactions."
  },
  {
    image: "gaurav.jpg",
    title: "Gaurav",
    subtitle: "Full Stack Developer",
    description: "I build responsive websites, handle frontend and backend logic and love turning ideas into complete products."
  },
  {
    image: "saurabh.jpg",
    title: "Saurabh",
    subtitle: "UI / UX Designer",
    description: "I focus on visual balance, user experience and making interfaces feel clean, premium and easy to explore."
  }
];

const teamSliderTrack = document.getElementById("teamSliderTrack");

function createCard(member) {
  return `
    <div class="card">
      <img class="card-image" src="${member.image}" alt="${member.title}" />
      <div class="card-content">
        <h2>${member.title}</h2>
        <h3>${member.subtitle}</h3>
        <p>${member.description}</p>
        <div class="buttons">
          <button class="profile-btn">Profile</button>
          <button class="primary follow-btn">Follow</button>
        </div>
      </div>
    </div>
  `;
}

if (teamSliderTrack) {
  const allCards = [...teamMembers, ...teamMembers];
  teamSliderTrack.innerHTML = allCards.map(createCard).join("");
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("profile-btn")) {
    alert("Open profile section here");
  }

  if (e.target.classList.contains("follow-btn")) {
    alert("Add your social or contact link here");
  }
});
