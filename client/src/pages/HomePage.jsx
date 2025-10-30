import Neuvieme from "@/components/home/Neuvieme";
import NS4 from "@/components/home/NS4";
import WhyUs from "@/components/home/WhyUs";
import Sponsors from "@/components/home/Sponsors";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import QuickActions from "@/components/home/QuickActions";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Link } from "react-router";
import { useAutoplayProgress } from "@/hooks/useCustomHook";
import { getHeaderCarouselImages } from "@/utils/studentImages";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export const HomePage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ playOnInit: true, delay: 20000 }),
  ]);

  const progressNode = useRef(null);
  const carouselImages = getHeaderCarouselImages();
  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  return (
    <>
      <header className="anim-particles py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
          <div className="bg-white rounded-lg px-5 lg:px-20 py-10 shadow-sm flex items-center h-full">
            <div className="space-y-24">
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Excellez dans vos examens officiels avec confiance
                </h1>
                <p className="text-lg text-gray-600">
                  Préparez-vous aux examens 9AF et NS4 avec nos ressources
                  complètes, exercices pratiques et examens blancs. Votre succès
                  commence ici.
                </p>
                <Link
                  to="/explore"
                  className="mt-4 group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-4 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden">
                  <span>Explorer Maintenant</span>
                  <ArrowLongRightIcon className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1" />

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50/70 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                  <h3 className="text-3xl">200+</h3>
                  <small>Examens disponibles</small>
                </div>
                <div className="bg-gray-50/70 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                  <h3 className="text-3xl">20+</h3>
                  <small>Tests disponibles</small>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg shadow-sm overflow-hidden h-full min-h-[450px] md:min-h-[500px]">
            <div className="embla h-full">
              <div className="embla__viewport h-full" ref={emblaRef}>
                <div className="embla__container h-full">
                  {carouselImages.map((imageUrl, index) => (
                    <div key={index} className="embla__slide">
                      <img
                        src={imageUrl}
                        alt={`Estudiantes - imagen ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="embla__controls">
                <div
                  className={`embla__progress`.concat(
                    showAutoplayProgress ? "" : " embla__progress--hidden"
                  )}>
                  <div className="embla__progress__bar" ref={progressNode} />
                </div>
              </div>
            </div>
            <div className="particles">
              <div className="particle !w-5 !h-5 particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle !w-2 !h-2 particle-3"></div>
            </div>
            <div className="absolute bottom-12 left-5 w-3/5 space-y-2">
              <div className="bg-emerald-600/85 text-white backdrop-blur-2xl shadow rounded-lg px-4 py-3">
                <small>Étudiants satisfaits</small>
                <h3 className="text-xl !text-white">95%</h3>
              </div>
              <div className="bg-blue-600/85 text-white backdrop-blur-2xl shadow rounded-lg px-4 py-3">
                <small>Taux de réussite</small>
                <h3 className="text-xl !text-white">87%</h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <QuickActions />
        <Sponsors />
        {/* <Features /> */}
        <Neuvieme />
        <NS4 />
        <WhyUs />
        <Testimonials />
      </main>
    </>
  );
};
