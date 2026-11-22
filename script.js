const heading = document.querySelector(".content h3");
const description = document.querySelector(".description");
const cards = document.querySelectorAll(".card");
const sidebarMenuList = document.querySelectorAll(".sidebar > ul > li");
const educationList = document.querySelector(".education-list");
const skillsList = document.querySelector(".skills-list");
const contactList = document.querySelector(".contact-list");
const pages = {
  Home: "Welcome to my portfolio.",
  Projects: "These are the completed projects.",
  Education: "These are my education qualifications.",
  Skills: "These are the skills that I possess.",
  Contact: "You can reach me through:",
};

const education = [
  {
    title: "Bachelor of Education",
    year: "2022 - 2025",
    institution: "Mount Kenya University",
  },
  {
    title: "Bachelor of Science in Computer Science",
    year: "In progress",
    institution: "Open University of Kenya",
  },
  {
    title: "Diploma in Information Communication Technology",
    year: "2022 - 2025",
    institution: "Kamukunji Technical and Vocational College",
  },

  {
    title: "Kenya Certificate of Secondary Education",
    year: "2017 - 2020",
    institution: "Banisa Mixed Day Secondary School",
  },
];

const skills = ["HTML", "CSS", "JavaScript", "Problem solving"];

const contact = [
  { label: "Phone", value: "+2547123456789" },
  { label: "Email", value: "h@gmail.com" },
  { label: "Nationality", value: "Kenyan" },
];

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

    if (item.textContent === "Contact") {
      contactList.classList.remove("hidden");
    } else {
      contactList.classList.add("hidden");
    }

    localStorage.setItem("page", item.textContent);
  });
});

education.forEach(function (entry) {
  const li = document.createElement("li");
  li.textContent =
    entry.title + " - " + entry.institution + " (" + entry.year + ")";
  educationList.appendChild(li);
});

skills.forEach(function (skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

contact.forEach(function (details) {
  const li = document.createElement("li");
  li.textContent = details.label + ":  " + details.value + ":  ";
  contactList.appendChild(li);
});

const savedPage = localStorage.getItem("page");
if (savedPage) {
  sidebarMenuList.forEach(function (menuItem) {
    if (menuItem.textContent === savedPage) {
      menuItem.click();
    }
  });
}
