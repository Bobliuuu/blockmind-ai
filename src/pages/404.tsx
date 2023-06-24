import Button from "~/components/UI/Button";
import { ChevronRight } from "react-feather";

export default function Home() {
  return (
    <>
      <section className="mx-container mt-32 grid sm:mt-40 lg:mt-48 xl:mt-52">
        <h1 className="mx-auto mb-4 text-center font-display text-10xl font-bold leading-tight text-white 2xs:max-w-[322px] 2xs:text-8xl xs:max-w-[none] sm:text-9xl md:max-w-none md:text-10xl lg:text-12xl xl:mb-5 xl:text-14xl">
          <span className="text-gradient">404</span>
        </h1>
        <p className="mx-auto mb-10 max-w-[353px] text-center text-beige xs:text-lg sm:max-w-[400px] sm:text-xl lg:mb-12 lg:max-w-[492px] lg:text-2xl">
          The route you are trying to access
          <span className="text-gradient">DOES NOT EXIST</span>
        </p>
        <Button
          type="route"
          route="/dashboard"
          hierarchy="primary"
          padding="py-3 xs:py-4.5 xs:pl-7 xs:pr-12 lg:pr-14"
          font="font-display font-bold text-lg xs:text-xl lg:text-2xl"
          icon={<ChevronRight size={48} className="w-5 xs:w-6 lg:w-7" />}
          classes="w-full xs:w-auto xs:mx-auto"
        >
          Back to Dashboard
        </Button>
      </section>
    </>
  );
}
