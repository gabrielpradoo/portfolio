export function Contact() {
  return (
    <div className="w-full bg-main">
      <div className=" font-raj max-w-screen-8xl mx-auto px-4 py-12 text-white flex flex-col items-center">
        <h3
          className=" font-semibold text-6xl pb-12
            max-sm:text-5xl"
        >
          Contact Me
        </h3>
        <p className="text-white text-lg font-medium text-center">
          Are you a recruiter lookin for someone like me or you just want to
          chat? Leave a message below or contact me through{" "}
          <a
            className="font-semibold text-blue-600"
            href="https://www.linkedin.com/in/gabriel-do-prado-de-oliveira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or send an email to{" "}
          <a
            className="font-semibold text-blue-600"
            href="mailto:gdeoliveira.1999@gmail.com"
            target="_blank"
          >
            gdeoliveira.1999@gmail.com
          </a>
        </p>
        <form className="w-8/12 flex flex-col space-y-4 mt-6 max-midlle:w-9/12">
          <div
            className="flex justify-between space-x-4 
            max-midlle:flex-col max-midlle:space-x-0 max-midlle:space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              className=" w-6/12 py-2 px-4 rounded max-midlle:w-full"
            />
            <input
              type="text"
              placeholder="E-mail address"
              className=" w-6/12 py-2 px-4 rounded max-midlle:w-full"
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="py-2 px-4 h-64 rounded text-main font-medium"
          />
          <button className="bg-green-500 inline-block w-4/12 px-6 py-3 rounded max-md:w-5/12 max-sm:w-full font-semibold text-xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
