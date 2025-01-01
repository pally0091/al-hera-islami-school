const ContactForm = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
      />
      <input
        type="email"
        placeholder="Email"
      />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

const ContactInfo = () => {
  return (
    <div>
      <h2>Contact Information</h2>
      <p>Phone: 123-456-7890</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default Contact;
