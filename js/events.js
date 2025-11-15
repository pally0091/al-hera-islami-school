const events = [
  {
    date: "7 December 2025",
    title: "Final Semester Exam",
    description:
      "The final semester exam will be held from 7th to 15th December 2025. Students are advised to prepare well and check the schedule for their respective subjects.",
  },
  {
    date: "10 January 2026",
    title: "New year orientation program",
    description:
      "An orientation program for new students will be conducted on 10th January 2026. This program aims to familiarize new students with the campus, faculty, and academic expectations.",
  },
];

// Get the container where the events will be injected
const eventsContainer = document.getElementById("events-container");

// Function to create the event HTML dynamically
function renderEvents() {
  events.forEach((event) => {
    // Create the HTML structure for each event
    const eventHTML = `
        <div class="row g-4 event-item wow fadeIn" data-wow-delay="0.5s">
          <div class="col-3 col-lg-2 pe-0">
            <div class="text-center border-bottom border-dark py-3 px-2">
              <h6>${event.date}</h6>
            </div>
          </div>
          <div class="col-9 col-lg-6 border-start border-dark pb-5">
            <div class="ms-3">
              <h4 class="mb-3">${event.title}</h4>
              <p class="mb-4">${event.description}</p>
            </div>
          </div>
        </div>`;

    // Append the event HTML to the container
    eventsContainer.innerHTML += eventHTML;
  });
}

// Call the function to render the events on page load
renderEvents();
