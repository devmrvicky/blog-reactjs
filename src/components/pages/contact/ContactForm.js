import { FaRegPaperPlane } from "react-icons/fa";

// input components
const Input = ({ title, id, type, placeholder }) => {
  return (
    <div className="input-field">
      <label htmlFor={id} className="focus-within:text-cyan-400  flex flex-col">
        <span>{title}</span>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="text-black outline-none border-b mt-2 text-base focus:border-cyan-400"
        />
      </label>
    </div>
  );
};

// checkbox components
function Checkbox({ id, title }) {
  return (
    <label htmlFor={id} className="pr-6">
      <input type="checkbox" name="work" id={id} className="mr-2" />
      <span className="text-sm">{title}</span>
    </label>
  );
}

// textarea components
const TextArea = () => {
  return (
    <label
      htmlFor="write-message"
      className="flex flex-col focus-within:text-cyan-400"
    >
      <span>Message</span>
      <textarea
        name="write-message"
        id="write-message"
        placeholder="Write your message..."
        className="border-b mt-2 resize-none h-24 focus:border-cyan-400 text-black outline-none"
      ></textarea>
    </label>
  );
};

// main ContactForm component
const ContactForm = () => {
  return (
    <form action="" className="contact-form grow w-full m-4 md:grid md:gap-5">
      {/* first name */}
      <Input
        title="First name"
        id="first-name"
        placeholder="John"
        type="text"
      />
      {/* last name */}
      <Input title="Last name" id="last-name" placeholder="Doe" type="text" />
      {/* email */}
      <Input
        title="Mail"
        id="email"
        placeholder="johndoe@gmail.com"
        type="email"
      />
      {/* Phone */}
      <Input
        title="Phone"
        type="number"
        id="phone"
        placeholder="+91 xxxxx xxxxx"
      />
      {/* Checkboxes */}
      <div className="input-field col-span-full my-7">
        <h3 className="text-xl pb-3">What the of website do you need?</h3>
        <Checkbox id="web-design" title="Web Design" />
        <Checkbox id="web-development" title="Web Development" />
        <Checkbox id="log-design" title="Logo Design" />
        <Checkbox id="other" title="Other" />
      </div>
      {/* textarea for write message */}
      <div className="input-field col-span-full">
        <TextArea />
      </div>
      {/* submit button */}
      <div className="contact-form-button col-span-full flex">
        <button
          type="submit"
          className="bg-cyan-400 text-white hover:bg-cyan-600 border py-3 w-40 ml-auto flex items-center justify-center gap-3"
        >
          <FaRegPaperPlane/>
          <span>Send Message</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
