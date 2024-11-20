const events = [
  {
    date: "04 Dec 2024",
    title: "Annual Exam",
    description:
      "The Annual Exam at Al Hera International School & Madrasah helps students show their progress and achievements from the year. We encourage all students to prepare well and do their best.",
  },
  {
    date: "15 Dec 2024",
    title: "Annual Exam Result Publish",
    description:
      "The Annual Exam results will be published at Al Hera International School & Madrasah. We celebrate the hard work and progress of our students. Best wishes to all!",
  },
  {
    date: "1 Jan 2025",
    title: "New Campus Grand Opening",
    description:
      "We are excited to announce the grand opening of our new campus at Al Hera International School & Madrasah. Join us to celebrate this milestone as we continue to expand and provide quality education in a modern and Islamic environment. Welcome to the future of learning!",
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
