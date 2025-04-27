const TextEditor = ({
  start,
  end,
  className = "",
}: {
  start: string;
  end: string;
  className?: string;
}) => {
  return (
    <div className={`text-3xl font-bold px-[2px] ${className}`}>
      {start} <span className="py-1 bg-secondary text-white">{end}</span>
    </div>
  );
};

export default TextEditor;
