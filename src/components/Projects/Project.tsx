type ProjectProps = {
  coverImage: string;
};

function Project({ coverImage }: ProjectProps) {
  return (
    <>
      <li className="flex flex-col gap-3 w-[400px] h-[450px] items-center rounded-xl border-slate-300 border-2 shadow-md shadow-white ">
        <img
          className="border-white border-2 w-[340px] h-[200px] mt-2"
          src={coverImage}
          alt=""
        />
        <div className="flex flex-col h-[100%] justify-evenly">
          <h2 className="text-2xl text-center underline underline-offset-8">
            Project-1
          </h2>
          <p className="text-md text-center p-2">
            Integer eu ante ornare amet commetus vestibulum blandit integer in
            curae ac faucibus integer adipiscing ornare amet.
          </p>
          <button
            className=" bg-sky-500 w-36 h-10 border-white border-2 rounded-3xl
           hover:bg-sky-700 ml-10"
          >
            Check
          </button>
        </div>
      </li>
    </>
  );
}

export default Project;
