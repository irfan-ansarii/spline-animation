import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col">
        <div className="relative h-screen overflow-hidden">
          <div className="container mx-auto h-full px-10">
            <div className="flex flex-col gap-6 relative z-[1] py-32  max-w-screen-sm h-full md:justify-center items-start">
              <h1 className="text-6xl font-extrabold	leading-tight">
                <span className="bg-gradient-to-r from-pink-600 to-violet-600 text-transparent bg-clip-text">
                  Spline
                </span>{" "}
                the future of 3D animation
              </h1>
              <p className="text-gray-300 text-xl leading-snug">
                Transform your creative vision with Spline — the most intuitive
                platform for building interactive 3D experiences directly in
                your browser. Elevate design, animation, and collaboration with
                cutting-edge tools crafted for designers and developers alike.
              </p>
              <button className="bg-orange-600 px-10 py-2.5 text-sm inline-flex items-center justify-center rounded-full transform hover:scale-110 transition duration-500 font-semibold">
                GET STARTED
              </button>
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
