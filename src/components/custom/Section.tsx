export const Section = ({
  children,
  sec = "",
  div = "",
  h = true,
}: {
  children: any;
  sec?: string;
  div?: string;
  h?: boolean;
}) => {
  return (
    <section
      className={`${sec} ${h && "max-2xl:min-h-screen 2xl:py-4"}  w-full flex`}
    >
      <div
        className={`${div} max-w-[1500px] w-full mx-auto px-12 max-lg:px-6 max-md:px-3`}
      >
        {children}
      </div>
    </section>
  );
};
