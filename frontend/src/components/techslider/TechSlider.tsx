const TechSlider = () => {
  const icons = [
    "devicon-python-plain colored",
    "devicon-javascript-plain colored",
    "devicon-react-original colored",
    "devicon-nodejs-plain colored",
    "devicon-tailwindcss-plain colored",
    "devicon-github-original colored",
    "devicon-cplusplus-plain colored",
    "devicon-tensorflow-original colored",
    "devicon-supabase-plain colored",
    "devicon-mongodb-plain colored",
  ];
  return (
    <div className="overflow-hidden">
      <div className="animate-marquee">
        {icons.concat(icons).map((icon, i) => (
          <i key={i} className={`${icon} text-3xl mx-8`}></i>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
