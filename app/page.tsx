import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col">
        <div className="relative h-screen overflow-hidden">
          <div className="container mx-auto h-full px-10">
            <div className="flex flex-col gap-6 relative z-[1] py-32  max-w-screen-sm h-full md:justify-center items-start">
              <h1 className="text-6xl font-extrabold	leading-tight">
                Spline the future of 3D
                <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.orange.600),theme(colors.orange.200),theme(colors.sky.400),theme(colors.pink.600),theme(colors.indigo.600),theme(colors.orange.200),theme(colors.orange.600))] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  {" "}
                  animation
                </span>
              </h1>
              <p className="text-gray-400 text-xl leading-snug">
                Transform your creative vision with Spline — the most intuitive
                platform for building interactive 3D experiences directly in
                your browser. Elevate design, animation, and collaboration with
                cutting-edge tools crafted for designers and developers.
              </p>
              <div className="bg-gradient-to-r from-pink-600 to-indigo-600 rounded-full overflow-hidden p-0.5">
                <a
                  href="https://spline.design/"
                  target="_blank"
                  className="inline-flex items-center rounded-full transition gap-2 bg-black px-5 py-2 text-sm font-medium text-white hover:gap-3 hover:bg-transparent"
                >
                  Get Started
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -right-44 md:-right-72 -bottom-44">
            <Spline scene="https://prod.spline.design/31qLSlUJ1MnxTh36/scene.splinecode" />
          </div>
        </div>
      </main>
    </div>
  );
}
