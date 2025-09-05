import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData(e.target);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <label>Name</label>
        <input type="text" name="name" required style={{ width: "100%" }} />

        <label>Email</label>
        <input type="email" name="email" required style={{ width: "100%" }} />

        <label>Message</label>
        <textarea name="message" required style={{ width: "100%" }} />

        <button type="submit" style={{ marginTop: "1rem" }}>Send</button>
      </form>
      <p>{status}</p>
    </main>
  );
}