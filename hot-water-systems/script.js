// ****************
// * JSON DATA
// ****************

const energySourceData = {
  Electric: {
    icon: "fas fa-bolt",
    buttonText: "View Products",
    subCategories: [
      {
        name: "Electric Storage",
        icon: "fas fa-database",
        buttonText: "View Products",
        size: {
          icon: "fas fa-database",
          buttonText: "View Range",
          range: [
            "50 Litre",
            "80 Litre",
            "125 Litre",
            "250 Litre",
            "315 Litre",
            "400 Litre",
          ],
        },
      },
      {
        name: "Instantaneous Electric",
        icon: "far fa-calendar-alt",
        buttonText: "View Products",
        size: {
          icon: "fas fa-database",
          buttonText: "View Range",
          range: ["13/DHF-19AMP"],
        },
      },
    ],
  },
  Gas: {
    icon: "fas fa-fire",
    buttonText: "View Products",
    subCategories: [
      {
        name: "Gas Storage",
        icon: "fas fa-database",
        buttonText: "View Products",
        size: {
          icon: "fas fa-database",
          buttonText: "View Range",
          range: [
            "135 Litre",
            "170 Litre",
            "270 Litre",
            "330 Litre",
            "340 Litre",
            "360 Litre",
            "390 Litre",
          ],
        },
      },
      {
        name: "Instantaneous Gas",
        icon: "far fa-calendar-alt",
        buttonText: "View Products",
        size: {
          icon: "fas fa-database",
          buttonText: "View Range",
          range: ["16 L/min", "20 L/min", "26 L/min", "27 L/min"],
        },
      },
    ],
  },
  Solar: {
    icon: "fas fa-sun",
    buttonText: "View Products",
    subCategories: [
      {
        name: "Solar Roof-Mounted",
        icon: "fas fa-database",
        buttonText: "View Products",
        size: {
          icon: "fas fa-database",
          buttonText: "View Range",
          range: ["300 Litre", "330 Litre"],
        },
      },
      {
        name: "Solar Split-System",
        icon: "far fa-calendar-alt",
        buttonText: "View Products",
        size: {
          icon: "fas fa-database",
          buttonText: "View Range",
          range: ["325 Litre", "410 Litre"],
        },
      },
    ],
  },
  "Heat Pump": {
    icon: "fas fa-fan",
    buttonText: "View Products",
    subCategories: [
      {
        name: "Heat-Pump Single Unit",
        icon: "fas fa-database",
        buttonText: "View Products",
        size: {
          icon: "fas fa-database",
          buttonText: "View Range",
          range: ["270 Litre", "315 Litre"],
        },
      },
      {
        name: "Heat-Pump Split-System",
        icon: "far fa-calendar-alt",
        buttonText: "View Products",
        size: {
          icon: "fas fa-database",
          buttonText: "View Range",
          range: ["250 Litre", "315 Litre", "325 Litre"],
        },
      },
    ],
  },
};

// ****************
// * JAVASCRIPT
// ****************

const energySourceContainer = document.getElementById("energySourceContainer");
const subCategoryContainer = document.querySelector(".sub-category-container");
const selectSizeContainer = document.querySelector(".select-size-container");
const panels = document.querySelectorAll(".panel");
let subCategoryOptions;

// Open the first panel by default
if (panels.length > 0) {
  panels[0].style.display = "block";
}

for (const source in energySourceData) {
  const sourceData = energySourceData[source];
  createOption(source, sourceData, energySourceContainer);
}

const energySourceOptions = energySourceContainer.querySelectorAll(".options");
energySourceOptions.forEach((option) => {
  const button = option.querySelector(".options-btn");

  button.addEventListener("click", () => {
    // Clear existing options
    subCategoryContainer.innerHTML = "";
    // Open accordion
    panels[1].style.display = "block";

    const selectedValue = option.getAttribute("data-value");
    const selectedSourceData = energySourceData[selectedValue].subCategories;

    if (selectedValue === "Electric") {
      selectedSourceData.forEach((data) => {
        createOption(data.name, data, subCategoryContainer);
      });
    } else if (selectedValue === "Gas") {
      selectedSourceData.forEach((data) => {
        createOption(data.name, data, subCategoryContainer);
      });
    } else if (selectedValue === "Solar") {
      selectedSourceData.forEach((data) => {
        createOption(data.name, data, subCategoryContainer);
      });
    } else if (selectedValue === "Heat Pump") {
      selectedSourceData.forEach((data) => {
        createOption(data.name, data, subCategoryContainer);
      });
    }
  });
});

function createOption(name, data, container) {
  const option = document.createElement("div");
  option.classList.add("options");
  option.setAttribute("data-value", name);

  const optionsIcon = document.createElement("div");
  optionsIcon.classList.add("options-icon");
  optionsIcon.innerHTML = `<i class="${data.icon}"></i>`;
  option.appendChild(optionsIcon);

  const h3 = document.createElement("h3");
  h3.textContent = name;
  option.appendChild(h3);

  const button = document.createElement("div");
  button.classList.add("options-btn");
  button.textContent = data.buttonText;
  option.appendChild(button);

  container.appendChild(option);
}

function formatDataValue(str) {
  const words = str.split("-");
  const formattedWords = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return formattedWords;
}

function convertToLowercaseWithHyphens(str) {
  const words = str.split(" ");
  const lowercaseWords = words.map((word) => word.toLowerCase()).join("-");
  return lowercaseWords;
}
