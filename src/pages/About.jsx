import React from "react";

const About = () => {
  return (
    <>
      <div className="flex felx-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We Love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="state-title text-primary-content text-4xl font-bold tracking-widest">
              Comfort
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A et facilis
        eveniet ipsam ducimus iusto consectetur, atque reprehenderit, sed
        dolorem quis ab eligendi, error velit architecto? Sint, corrupti saepe!
        Voluptas iure consectetur veritatis numquam natus vel blanditiis error
        nemo id.
      </p>
    </>
  );
};

export default About;
