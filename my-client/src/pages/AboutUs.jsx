import React from 'react'

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffffff", // Dark green
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        boxShadow : "10px 50px 50px rgba(4, 158, 66, 0.2)"
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          maxWidth: "800px",
          width: "100%",
          padding: "2rem"
        }}
      >
        <h1 style={{ textAlign: "center", color: "#004d40" }}>About Me</h1>
        <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
          Hello! I'm Abdullah Amirr, a passionate developer with experience in
          ASP.NET Core Web API, Entity Framework Core, AutoMapper,
          and React. I love building full-stack applications and learning
          new technologies.
        </p>

        <hr />

        <h2 style={{ color: "#004d40" }}>Skills</h2>
        <ul style={{ fontSize: "1.05rem" }}>
          <li>C# and .NET (ASP.NET Core 8 Web API)</li>
          <li>Entity Framework Core and SQL Server</li>
          <li>React.js (Intermediate)</li>
          <li>REST API design and integration</li>
          <li>AutoMapper and DTOs</li>
          <li>HTML, CSS, JavaScript, Bootstrap</li>
          <li>Git/GitHub and API testing with Postman</li>
        </ul>

        <hr />

        <h2 style={{ color: "#004d40" }}>Experience & Education</h2>
        <p>
          <strong>Bachelor's in Computer Science</strong> - Currently in 4th
          semester.
        </p>
        <p>
          Developed multiple APIs, CRUD applications, and integrated front-end
          and back-end solutions.
        </p>

        <hr />

        <h2 style={{ color: "#004d40" }}>Contact</h2>
        <p>
          Email: <a href="mailto:abdullahamirr9@gmail.com">abdullahamirr9@gmail.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/abdullahhh-bey">@abdullahhh-bey</a>
        </p>
        <p>
          LinkedIn: <a href="/">Not yet- but will come here</a>
        </p>
      </div>
    </div>
  );
}

export default AboutUs
