export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to My Website</h1>
      <p>This is a simple static site built with Next.js and deployed to Azure.</p>
      <img
        src="/images/sample.jpg"
        alt="Sample"
        style={{ maxWidth: "400px", borderRadius: "8px", marginTop: "1rem" }}
      />
      <p>
        <a href="/contact">Go to Contact Page</a>
      </p>
    </main>
  );
}