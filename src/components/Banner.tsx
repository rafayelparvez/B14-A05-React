import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div>
      <section className="w-full">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-14 md:flex-row md:justify-between md:py-20">
          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Build Your Ideal
              <br />
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#"
                className="rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#4338CA] hover:shadow-md"
              >
                Explore Technologies
              </a>

              <a
                href="#"
                className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-[#4F46E5] hover:bg-[#EEF2FF] hover:text-[#4F46E5]"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full max-w-md md:w-1/2">
            <img
              src={bannerImg}
              alt="Development stack illustration"
              className="mx-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
