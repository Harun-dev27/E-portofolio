const heading = document.querySelector(".content h3");
const description = document.querySelector(".description");
const cards = document.querySelectorAll(".card");
const sidebarMenuList = document.querySelectorAll(".sidebar > ul > li");
const educationList = document.querySelector(".education-list");
const skillsList = document.querySelector(".skills-list");
const pages = {
  Home: "Welcome to my portfolio.",
  Projects: "These are the completed projects.",
  Education: "These are my education qualifications.",
  Skills: "These are the skills that I possess.",
  Contact: "+254712345789",
};

const education = [
  {
    Title: "Bachelor of Education",
    year: "2022 - 2025",
    Institution: "Mount Kenya University",
  },
  {
    Title: "Bachelor of Science in Computer Science",
    year: "In progress",
    Institution: "Open University of Kenya",
  },
  {
    Title: "Diploma in Information Communication Technology",
    year: "2022 - 2025",
    Institution: "Kamukunji Technical and Vocational College",
  },

  {
    Title: "Kenya Certificate of Secondary Education",
    year: "2017 - 2020",
    Institution: "Banisa Mixed Day Secondary School",
  },
];

const skills = ["HTML", "CSS", "JavaScript", "Problem solving"];

sidebarMenuList.forEach(function (item) {
  item.addEventListener("click", function () {
    heading.textContent = item.textContent;
    description.textContent = pages[item.textContent];
    sidebarMenuList.forEach(function (li) {
      li.classList.remove("active");
    });
    item.classList.add("active");

    if (item.textContent === "Projects") {
      cards.forEach(function (card) {
        card.classList.remove("hidden");
      });
    } else {
      cards.forEach(function (card) {
        card.classList.add("hidden");
      });
    }

    if (item.textContent === "Education") {
      educationList.classList.remove("hidden");
    } else {
      educationList.classList.add("hidden");
    }

    if (item.textContent === "Skills") {
      skillsList.classList.remove("hidden");
    } else {
      skillsList.classList.add("hidden");
    }

    localStorage.setItem("page", item.textContent);
  });
});

education.forEach(function (entry) {
  const li = document.createElement("li");
  li.textContent =
    entry.Title + " - " + entry.Institution + " (" + entry.year + ")";
  educationList.appendChild(li);
});

skills.forEach(function (skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

const savedPage = localStorage.getItem("page");
if (savedPage) {
  sidebarMenuList.forEach(function (menuItem) {
    if (menuItem.textContent === savedPage) {
      menuItem.click();
    }
  });
}
