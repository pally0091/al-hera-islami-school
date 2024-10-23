const testimonials = [
  {
    name: "Lina Amir",
    relation: "Mother",
    student: "Ahmed Mujnabin",
    feedback:
      "I'm really impressed with Al Hera International School and Madrasa. I like how we get the lesson plans all at once and the kids can still learn even when they're sick. They're learning English speaking so well! And our principal, Md. Ali Azam, is so nice and helpful.",
  },
  {
    name: "Fatema Begum",
    relation: "Mother",
    student: "Ahmed Bin Kabir",
    feedback:
      "I'm very happy with my decision to enroll my twin sons in Al Hera International School and Madrasa. They are doing very well in all subjects and the teachers are excellent. I highly recommend this school.",
  },
];

// Get the container where the testimonials will be injected
const testimonialCarousel = document.getElementById("testimonial-carousel");

// Function to create the testimonial HTML dynamically
function renderTestimonials() {
  testimonials.forEach((testimonial) => {
    // Create the HTML structure for each testimonial
    const testimonialHTML = `
        <div class="testimonial-item">
          <div class="d-flex mb-3">
            <div class="ps-3 my-auto">
              <h5 class="mb-0">${testimonial.name}</h5>
              <p class="m-0">${testimonial.relation} of <b>${testimonial.student}</b></p>
            </div>
          </div>
          <div class="testimonial-content">
            <p class="fs-5 m-0 pt-3">${testimonial.feedback}</p>
          </div>
        </div>`;

    // Append the testimonial HTML to the carousel
    testimonialCarousel.innerHTML += testimonialHTML;
  });
}

// Call the function to render the testimonials on page load
renderTestimonials();
