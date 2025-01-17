const events = [
  {
    date: "1 Jan 2025",
    title: "New Campus Grand Opening",
    description:
      "We are excited to announce the grand opening of our new campus at Al Hera International School & Madrasah. Join us to celebrate this milestone as we continue to expand and provide quality education in a modern and Islamic environment. Welcome to the future of learning!",
  },
  {
    date: "9 Jan 2025",
    title: "Orientation Class",
    description:
      "Join us for the orientation class at Al Hera International School & Madrasah to welcome our new students and parents. This session will provide an overview of our school policies, academic programs, and facilities. We look forward to seeing you there!",
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
