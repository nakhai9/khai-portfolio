import clsx from "clsx";

type SectionProps = {
  title: string;
  id?: string;
  children: React.ReactNode;
  classNames?: string;
};

const Section: React.FC<SectionProps> = ({
  title,
  id,
  children,
  classNames,
}) => {
  return (
    <div id={id} className={clsx("flex flex-col mt-10", classNames)}>
      <h2 className="mb-6 text-[var(--hunt-3)] text-bold text-4xl text-center">
        <span className="font-semibold">{title}</span>
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default Section;
