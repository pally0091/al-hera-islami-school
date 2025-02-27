const events = [
  {
    date: "01 Mar 2025",
    title: "Class time change for Ramadan",
    description:
      "During the month of Ramadan, classes will be held from 9:00 AM to 2:30 PM. Please note the change in timings. Ramadan Kareem!",
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
