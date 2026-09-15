import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
  // All technology data
  const [technologies, setTechnologies] = useState([]);

  // Selected technologies
  const [stack, setStack] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Load technologies from JSON file
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/technologies.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);

        toast.error("Failed to load technologies");

        setLoading(false);
      });
  }, []);

  // Add technology to stack
  const handleAddToStack = (technology) => {
    // Check if technology already exists
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );

      return;
    }

    // Add technology
    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  // Remove one technology
  const handleRemoveFromStack = (id) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack`
      );
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty!");

      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack!");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Technologies Section */}
      <main
        className="technology-section"
        id="technologies"
      >
        {/* Section heading */}
        <div className="section-heading">
          <span className="small-title">
            EXPLORE TECHNOLOGIES
          </span>

          <h2>
            Explore the{" "}
            <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build
            your ideal stack.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>

            <p>Loading technologies...</p>
          </div>
        ) : (
          <div className="technology-layout">

            {/* Technology Cards */}
            <div className="technology-grid">
              {technologies.map((technology) => {
                const isAdded = stack.some(
                  (item) => item.id === technology.id
                );

                return (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={isAdded}
                    onAdd={handleAddToStack}
                  />
                );
              })}
            </div>

            {/* Your Stack */}
            <YourStack
              stack={stack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />

          </div>
        )}
      </main>

      {/* About */}
      <section
        className="simple-section"
        id="about"
      >
        <span className="small-title">
          ABOUT DEV STACK
        </span>

        <h2>
          Build your perfect{" "}
          <span>developer toolkit.</span>
        </h2>

        <p>
          Dev Stack helps developers discover popular
          technologies and create their own personalized
          development stack.
        </p>
      </section>

      {/* Projects */}
      <section
        className="simple-section"
        id="projects"
      >
        <span className="small-title">
          PROJECTS
        </span>

        <h2>
          Choose the right{" "}
          <span>tools for your project.</span>
        </h2>

        <p>
          Explore frontend, backend, database and DevOps
          technologies for your next project.
        </p>
      </section>

      {/* Contact */}
      <section
        className="simple-section"
        id="contact"
      >
        <span className="small-title">
          CONTACT
        </span>

        <h2>
          Let's build something{" "}
          <span>amazing.</span>
        </h2>

        <p>
          Start building your ideal development stack
          today.
        </p>
      </section>

      {/* Footer */}
      <Footer />

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;