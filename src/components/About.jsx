export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 items-center flex-col md:flex-row">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I am Garima.
            <br />I love to build amazing apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm Garima Shingal from Canada. I've worked for 6 years as a
            software engineer. Currently, I am interested in developing
            responsive web applications using HTML, CSS, JavaScript, React,
            Bootstrap, Tailwind CSS with a keen ability to keep up with the
            latest industry trends and standards.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 py-2 px-6 border-0 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work with Me
            </a>
            <a
              href="#projects"
              className="inline-flex ml-4 rounded py-2 px-6 border-0 bg-grey-800 text-grey-400 hover:bg-grey-600 focus:outline-none hover:text-white text-lg"
            >
              See my Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-72 md:w-1/2 w-5/6">
          <img
            src="garima.jpeg"
            className="object-center object-cover rounded-full"
          ></img>
        </div>
      </div>
    </section>
  );
}
