import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <main className="w-full flex flex-col items-center bg-gray-50 py-4">
      <h1 className="text-3xl font-semibold p-3">Contact Us</h1>
      <p className="text-md text-zinc-400 pb-5">Any question or remarks? Just write us a message!</p>
      <div className="max-w-5xl w-full contact-body sm:flex gap-3 bg-white p-2 rounded-md shadow-md my-4 mx-2">
      {/* contact detail like phone no, email and address */}
        <ContactDetails />
        {/* contact form */}
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
