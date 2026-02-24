let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

// get filter buttons
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("all-card");
const mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");

// calculate
function calculateCount() {
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();

//  for filter btn listen
function toggleStyle(id) {
  // remove blue bg and white text
  allFilterBtn.classList.remove("bg-blue-700", "text-white");
  interviewFilterBtn.classList.remove("bg-blue-700", "text-white");
  rejectedFilterBtn.classList.remove("bg-blue-700", "text-white");

  // adding white bg and navyblue text
  allFilterBtn.classList.add("bg-white", "text-[#002c5c]");
  interviewFilterBtn.classList.add("bg-white", "text-[#002c5c]");
  rejectedFilterBtn.classList.add("bg-white", "text-[#002c5c]");

  const selected = document.getElementById(id);
  currentStatus = id;
  // console.log(selected);

  // finally adding blue bg for selected btn
  selected.classList.remove("bg-white");
  selected.classList.add("bg-blue-700", "text-white");

  // filteredSection hide unhide er kaj
  if (id == "interview-filter-btn") {
    allCardSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterview();
  } else if (id == "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  } else if (id == "rejected-filter-btn") {
    allCardSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejected();
  }
}

// main container
mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector("#company-name").innerText;
    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const aboutJob = parentNode.querySelector(".about-job").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const jobDescription =
      parentNode.querySelector(".job-description").innerText;

    parentNode.querySelector(".status").innerHTML = `
    <button
      class="text-green-600 font-semibold"
    >
      Interview
    </button>
    `;

    const cardInfo = {
      companyName,
      jobTitle,
      aboutJob,
      status: "Interview",
      jobDescription,
    };

    // find / check what.........
    const companyExist = interviewList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExist) {
      interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    calculateCount();

    // renderInterview();
    //************ */

    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }

    if (currentStatus == "rejected-filter-btn") {
      renderRejected();
    }
  }
  // else if part rejected btn
  else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector("#company-name").innerText;
    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const aboutJob = parentNode.querySelector(".about-job").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const jobDescription =
      parentNode.querySelector(".job-description").innerText;

    parentNode.querySelector(".status").innerHTML = `
    <button
      class="text-green-600 font-semibold"
    >
      Rejected
    </button>
    `;

    const cardInfo = {
      companyName,
      jobTitle,
      aboutJob,
      status: "Rejected",
      jobDescription,
    };

    // find / check what.........
    const companyExist = rejectedList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }

    calculateCount();
  }

  // delete functionality
  else if (event.target.closest(".delete-btn")) {
    const parentNode = event.target.closest(".card");
    const companyName = parentNode.querySelector("#company-name").innerText;

    interviewList = interviewList.filter(
      (item) => item.companyName != companyName,
    );

    rejectedList = rejectedList.filter(
      (item) => item.companyName != companyName,
    );

    parentNode.remove();

    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }

    if (currentStatus == "rejected-filter-btn") {
      renderRejected();
    }

    calculateCount();
  }
});

// for interview button
function renderInterview() {
  filteredSection.innerHTML = "";

  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className =
      "card flex justify-between bg-white rounded-lg p-7 mt-8 shadow-md";
    div.innerHTML = `
                <div class="space-y-3.5">
            <div>
              <h3 id="company-name" class="text-xl font-bold">
                ${interview.companyName}
              </h3>
              <h4 class="job-title text-neutral-500">React Native Developer</h4>
            </div>

            <p class="about-job text-neutral-500">
              Remote &#x2022; Full-time &#x2022; &dollar;130,000 -
              &dollar;175,000
            </p>

            <!-- status -->
            <button
              class="status bg-blue-50 font-semibold rounded-sm px-4 py-1.5 border border-neutral-300"
            >
              ${interview.status}
            </button>

            <p class="job-description">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>

            <!-- actionable btn part  -->
            <div class="flex gap-2.5">
              <button
                class="interview-btn font-semibold border-2 rounded-sm px-4 py-1.5 border-green-400 text-green-400"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn font-semibold border-2 rounded-sm px-4 py-1.5 border-red-400 text-red-400"
              >
                REJECTED
              </button>
            </div>
          </div>

          <!-- right side  -->
          <div>
            <button
              class="delete-btn border-2 border-neutral-200 w-10 h-10 rounded-full text-neutral-500"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;

    filteredSection.appendChild(div);
  }
}

// for rejected btn
function renderRejected() {
  filteredSection.innerHTML = "";

  for (let rejected of rejectedList) {
    let div = document.createElement("div");
    div.className =
      "card flex justify-between bg-white rounded-lg p-7 mt-8 shadow-md";
    div.innerHTML = `
                <div class="space-y-3.5">
            <div>
              <h3 id="company-name" class="text-xl font-bold">
                ${rejected.companyName}
              </h3>
              <h4 class="job-title text-neutral-500">React Native Developer</h4>
            </div>

            <p class="about-job text-neutral-500">
              Remote &#x2022; Full-time &#x2022; &dollar;130,000 -
              &dollar;175,000
            </p>

            <!-- status -->
            <button
              class="status bg-blue-50 font-semibold rounded-sm px-4 py-1.5 border border-neutral-300"
            >
              ${rejected.status}
            </button>

            <p class="job-description">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>

            <!-- actionable btn part  -->
            <div class="flex gap-2.5">
              <button
                class="interview-btn font-semibold border-2 rounded-sm px-4 py-1.5 border-green-400 text-green-400"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn font-semibold border-2 rounded-sm px-4 py-1.5 border-red-400 text-red-400"
              >
                REJECTED
              </button>
            </div>
          </div>

          <!-- right side  -->
          <div>
            <button
              class="delete-btn border-2 border-neutral-200 w-10 h-10 rounded-full text-neutral-500"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;

    filteredSection.appendChild(div);
  }
}
