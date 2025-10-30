import { Link } from "react-router";

export default function Login() {
  return (
    <div id="login" className="h-screen relative">
      <div className="fixed top-0 left-0 h-screen w-full md:hidden bg-linear-to-b from-blue-100 via-white to-indigo-50 z-0"></div>
      <div className="grid grid-cols-3 h-full">
        <div
          id="login-left"
          className="col-span-1 py-4 px-6 relative h-full flex-col justify-between bg-blue-100 hidden md:flex">
          <div>
            <Link to="/">
              <img src="/logoArche.png" alt="Logo" className="h-16 inline" />
            </Link>
          </div>
          <div>
            <blockquote className="relative">
              <svg
                className="absolute -top-6 -start-8 size-16 text-gray-50/30"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"></path>
              </svg>

              <div className="relative z-10">
                <p className="text-white/90 sm:text-xl">
                  Cette plateforme a révolutionné ma façon d'étudier. Les
                  examens officiels sont parfaitement organisés et m'ont aidé à
                  réussir mes évaluations avec confiance.
                </p>
              </div>

              <div className="mt-5">
                <p className="text-base font-semibold text-white/80">
                  Robert Jean Francois
                </p>
                <small className="text-gray-200">Étudiant en Médecine</small>
              </div>
            </blockquote>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 flex items-center justify-center">
          <div className="w-full max-w-md px-3 py-8 md:p-8 z-10 text-center md:text-left">
            <div className="bg-white/60 p-6 md:p-0 md:bg-transparent rounded-2xl backdrop-blur-3xl">
              <div className="md:hidden mb-5">
                <Link to="/">
                  <img
                    src="/logoArche.png"
                    alt="Logo"
                    className="h-32 mx-auto"
                  />
                </Link>
              </div>
              <div className="mb-7">
                <h2 className="text-2xl font-semibold mb-1">
                  Bienvenue sur Arche!
                </h2>
                <p className="opacity-65">
                  Connectez-vous pour accéder à votre compte et continuer votre
                  apprentissage.
                </p>
              </div>
              <div className="space-y-5">
                <form>
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="peer p-4 block w-full border border-gray-300 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2"
                        placeholder="you@email.com"
                      />
                      <label
                        htmlFor="email"
                        className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-blue-500 peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:translate-x-0.5  peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-blue-500">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="relative mb-2">
                      <input
                        type="password"
                        id="password"
                        className="peer p-4 block w-full border border-gray-300 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
    focus:pt-6    focus:pb-2    not-placeholder-shown:pt-6    not-placeholder-shown:pb-2    autofill:pt-6    autofill:pb-2"
                        placeholder="********"
                      />
                      <label
                        htmlFor="password"
                        className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-blue-500 
      peer-not-placeholder-shown:scale-90
      peer-not-placeholder-shown:translate-x-0.5
      peer-not-placeholder-shown:-translate-y-1.5
      peer-not-placeholder-shown:text-blue-500">
                        Mot de passe
                      </label>
                    </div>
                    <div className="text-end">
                      <a
                        href="#"
                        className="text-sm text-blue-600 hover:underline">
                        Mot de passe oublié ?
                      </a>
                    </div>
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full cursor-pointer group relative gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-4 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden">
                      <span>Se connecter</span>

                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                  </div>
                </form>

                <div>
                  <div className="text-xs text-center flex items-center justify-center gap-2">
                    <div className="h-0.5 bg-gray-200/50 rounded-full w-full"></div>
                    <div className="p-3 text-gray-500">OU</div>
                    <div className="h-0.5 bg-gray-200/50 rounded-full w-full"></div>
                  </div>
                  <div className="mt-4">
                    <button className="w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-300 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                      <img
                        src="/icons/google.png"
                        alt="Google Logo"
                        className="h-5 w-5"
                      />
                      <span className="hidden md:inline">
                        Se connecter avec Google
                      </span>
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Pas encore de compte ?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      S'inscrire
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
