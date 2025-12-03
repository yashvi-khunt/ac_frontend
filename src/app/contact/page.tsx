const Contact = () => {
  return (
    <div className="py-12 container">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-(--color-text-secondary)">
        Email us at{" "}
        <a href="mailto:hello@athleticcore.example" className="underline">
          hello@athleticcore.example
        </a>
      </p>
      <form className="mt-6 max-w-md space-y-4">
        <input className="w-full border rounded px-3 py-2" placeholder="Name" />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Email"
        />
        <textarea
          className="w-full border rounded px-3 py-2"
          placeholder="Message"
          rows={5}
        />
        <button
          className="px-4 py-2 rounded"
          style={{ backgroundColor: "var(--color-primary)", color: "white" }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
