import Project from "./Project";

function Projects() {
  return (
    <>
      <section className="min-h-[50vh]">
        <h2 className="text-5xl text-center mb-12">Projects</h2>
        {/* <p>
          Integer eu ante ornare amet commetus vestibulum blandit integer in
          curae ac faucibus integer non. Adipiscing cubilia elementum integer.
          Integer eu ante ornare amet commetus.
        </p> */}
        <ul className="min-h-[500px] flex justify-center gap-36 flex-wrap">
          <Project coverImage="./image 1.png" />
          <Project coverImage="./image 1.png" />
        </ul>
      </section>
    </>
  );
}

export default Projects;
