import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark">
      <header className="text-black py-12">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Kendrick's Portfolio!
        </h1>
      </header>

      <main>
        <div className="max-w-md md:max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow p-8">
          <div className="flex-1">
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">About Me</h2>
              <p>
                Hi! My name is Kendrick Mausisa, from San Francisco and a recent
                graduate of BYU-Idaho. I finished my bachelor’s degree in
                software engineering with an emphasis in Web Development. I
                learned to love tools such as Angular, React, and Python to
                create user-friendly web apps that solve real-world problems. I
                do my best to be creative with projects to push myself and learn
                something new.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p>
                Want to know more? Feel free to connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/kendrick-mausisa/"
                  className="text-blue-600 underline hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn!
                </a>{" "}
                My email is{" "}
                <a
                  href="mailto:kndrckm18@gmail.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  kndrckm18@gmail.com
                </a>
              </p>
            </section>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/images/headshot.jpg"
              alt="Headshot"
              className="w-48 h-48 object-cover rounded-full border-4 border-blue-700 shadow"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
