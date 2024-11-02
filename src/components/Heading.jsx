import { cn } from "@/lib/utils";

const Heading = ({ title, className }) => {
  return (
    <section>
      <h1
        className={cn(
          "text-[#037826] text-[24px] md:text-[32px] font-semibold",
          className,
        )}
      >
        {title}
      </h1>
    </section>
  );
};

export default Heading;
