const testimonials = [
  {
    name: "Lina Amir",
    relation: "Mother",
    student: "Ahmed Mujnabin",
    image: "",
    feedback:
      "I'm really impressed with Al Hera International School and Madrasa. I like how we get the lesson plans all at once and the kids can still learn even when they're sick. They're learning English speaking so well! And our principal, Md. Ali Azam, is so nice and helpful.",
  },
  {
    name: "Fatema Begum",
    relation: "Mother",
    student: "Ahmed Bin Kabir",
    image: "",
    feedback:
      "I'm very happy with my decision to enroll my twin sons in Al Hera International School and Madrasa. They are doing very well in all subjects and the teachers are excellent. I highly recommend this school.",
  },
  {
    name: "Shahanaj Akter",
    relation: "Mother",
    student: "Redoan Mostofa Raian",
    image: "",
    feedback:
      "The parent is very happy with their child's progress at Al Hera International School and Madrasa. They are grateful for the teachers' efforts and the institution's focus on both general and religious education. They believe that the school has provided their child with a good foundation for the future.",
  },
  {
    name: "Swarna Islam",
    relation: "Mother",
    student: "Md. Raiyan Islam",
    image: "",
    feedback:
      "Alhamdulillah, I'm so thankful to Allah for letting my child study at Al Hera. All the teachers teach so well and make sure we finish most of the lessons in class. I'm really grateful to Al Hera for letting me teach my child at home and for the teachers' amazing teaching. I hope Al Hera keeps doing well and gets better and better.",
  },
  {
    name: "Romiz Uddin",
    relation: "Father",
    student: "Nuzhayr Uddin",
    image: "",
    feedback:
      "I'm really happy with how my child is learning at Al Hera. The teachers are so caring and make sure my child finishes all their work in class. The school teaches both regular and Islamic subjects, which is great. I hope Al Hera keeps doing well in the future.",
  },
  {
    name: "Mawlana Salim Ahmad",
    relation: "Father",
    student: "Md. Safwan",
    image: "",
    feedback:
      "I'm really happy with how my child is learning at Al Hera. The teachers are so caring and make sure my child finishes all their work in class. The school teaches both regular and Islamic subjects, which is great. I hope Al Hera keeps doing well in the future.",
  },
  {
    name: "Farzana Mondal Niva",
    relation: "Mother",
    student: "Md. Furqan Al-Wasi",
    image: "",
    feedback:
      "I'm very pleased with the progress my child has made at Al Hera. The teachers are dedicated and supportive, and the curriculum is well-rounded. I appreciate the school's emphasis on both academic and Islamic education. I hope Al Hera continues to provide such a positive learning environment for students.",
  },
  {
    name: "Sathi Begum",
    relation: "Mother",
    student: "Ibrahim Ahmed Abid",
    image: "",
    feedback:
      "I'm so glad I chose Al Hera for my son! The teachers are amazing and my son is learning so much. It's great that he memorizes his lessons in class, so we don't need a private tutor.",
  },
  {
    name: "Fahmida Akter",
    relation: "Mother",
    student: "Nishat Tasnim",
    image: "",
    feedback:
      "I'm so happy with Al Hera! My kids are doing great and learning so much, especially about Islam. I love that the school helps out with stuff like tiffin when my kids forget to bring their own. Overall, I'm really happy with their education here.",
  },
  {
    name: "Tahmina Akter",
    relation: "Mother",
    student: "Azmain Adil",
    image: "",
    feedback:
      "I feel so lucky that my child is learning at Al Hera. The teachers are so knowledgeable and care about helping kids grow, both in their faith and in their studies. It’s a great place for them to learn and grow.",
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
            <div style="width: 80px; height: 80px; overflow: hidden; border-radius: 50%;">
              <img class="img-fluid rounded-circle" src=${testimonial.image} alt=${testimonial.name}>
            </div>
            <div class="ps-3 my-auto">
              <h5 class="mb-0">${testimonial.name}</h5>
              <p class="m-0">${testimonial.relation} of <b>${testimonial.student}</b></p>
            </div>
          </div>
          <div class="testimonial-content">
            <p class="fs-6 m-0 pt-3">${testimonial.feedback}</p>
          </div>
        </div>`;

    // Append the testimonial HTML to the carousel
    testimonialCarousel.innerHTML += testimonialHTML;
  });
}

// Call the function to render the testimonials on page load
renderTestimonials();
