"use client";

const RemoteController = () => {
  return (
    <div className="lg:fixed hidden bottom-[40px] right-[40px] lg:flex-col lg:flex lg:justify-center lg:items-start text-[.75rem]">
      <a
        href="#home"
        className="rounded-full w-full px-2 py-1 hover:bg-primary-b"
      >
        Home
      </a>
      <a
        href="#about"
        className="rounded-full w-full px-2 py-1 hover:bg-primary-b"
      >
        About
      </a>
      <a
        href="#skills"
        className="rounded-full w-full px-2 py-1 hover:bg-primary-b"
      >
        Skill
      </a>
      <a
        href="#projects"
        className="rounded-full w-full px-2 py-1 hover:bg-primary-b"
      >
        Project
      </a>
      <a
        href="#contact"
        className="rounded-full w-full px-2 py-1 hover:bg-primary-b"
      >
        Contact
      </a>
    </div>
  );
};

export default RemoteController;
