import style from "./about.module.css";

function About() {
  return (
    <>
      <section className="flex h-[90vh] items-center gap-20">
        <div className="self-start pt-[13rem]">
          <h1 className="text-6xl pl-20">Lorem ipsum dolor sit amet</h1>
          <p className="text-2xl text-slate-400 w-[80%] pl-28 leading-8 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            className=" bg-sky-500 w-48 h-12 border-white border-2 rounded-3xl ml-36 mt-8
           hover:bg-sky-700"
          >
            Download CV
          </button>
        </div>
        <img className="w-[700px] h-[700px]" src="/drawing.png" alt="" />
        {/* <div className={style.loader}>
          <div className={style.box}></div>
          <div className={style.hill}></div>
        </div> */}
      </section>
    </>
  );
}

export default About;
