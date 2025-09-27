const Achievements = () => {
  const data = [
    {
      title: "Years of Experience",
      value: "1+",
    },
    {
      title: "Projects Completed",
      value: "10+",
    },
    {
      title: "Award Winner",
      value: "5",
    },
    {
      title: "Real-world Projects",
      value: "3",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:!grid-cols-4 md:p-5 bg-[#171717] rounded-2xl border border-gray-500">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-3"
        >
          <div className="text-white text-4xl font-bold">{item.value}</div>
          <div className="text-gray-400 text-sm">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
