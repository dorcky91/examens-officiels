export default function TryExamenPage() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 space-y-10 lg:space-y-0">
          <div className="col-span-1 lg:col-span-9">
            <div className="mb-5">
              <h2 className="text-2xl font-bold">Essai d'examen</h2>
              <p className="text-gray-600">
                Anglais / Juillet 2020: Testez vos compétences.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold">Eating Out</h3>
              <div className="mt-4 space-y-4 text-sm text-gray-600">
                <p>
                  Many people enjoy the experience of going out to eat at a
                  restaurant. It's enjoyable to eat one's favorite foods, or to
                  try some entirely new food. Going out to a restaurant is also
                  fun because it allows a change from the usual routine of
                  eating at home. There are many different kinds of restaurants.
                  One popular type of restaurant is the fast food, you must
                  first wait in line at the front of the restaurant, and then
                  order food from the counter. After paying, the food is quickly
                  delivered, and you can enjoy your meal.
                </p>
                <p>
                  In most restaurants, you don't have to go to a counter to
                  order your food. Instead, you are taken to a table soon after
                  entering the restaurant. There, a waiter comes to give you a
                  menu. You can choose your meal from the foods that are listed
                  on the menu. After ordering, it takes some time to prepare
                  your food. After a while, the waiter brings your meal to the
                  table. When you are finished eating, the waiter brings the
                  "bill" or "check". You then pay for the meal, and leave some
                  extra money as a "tip" for the waiter.
                </p>
                <p>
                  In some other restaurants, the waiter does not bring the meal
                  to your table. Instead, after you are taken to a table, you
                  then go to a counter called a "buffet". There you can select
                  different types of foods, such as salads, soups, meats,
                  breads, vegetables and desserts...
                </p>
              </div>
              <div className="mt-4 text-sm">
                <ol className="list-[upper-roman] list-inside space-y-2">
                  <li>
                    <span className="font-semibold">
                      Questions on the reading
                    </span>
                    <ol className="list-[upper-alpha] list-inside space-y-1 mt-1">
                      <li>
                        <span className="font-semibold">
                          Answer the questions below after reading the text
                          carefully.
                        </span>
                        <ol className="list-decimal list-inside space-y-1 mt-1 ml-3">
                          <li>
                            <span className="text-gray-600">
                              What is one reason people enjoy going out to eat?
                            </span>
                            <div className="mt-2">
                              <textarea
                                placeholder="Votre réponse..."
                                className="border border-gray-300 rounded-md p-2 w-full text-gray-600"
                                rows="3"></textarea>
                            </div>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200 text-right text-sm mt-2">
              <button
                disabled
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-l cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                Précédent
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-r cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                Suivant
              </button>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3">
            <div className="sticky top-20">
              <div className="mb-5 flex gap-5 justify-center">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-teal-500 to-teal-800 hover:shadow text-white px-4 py-3 rounded hover:scale-105 transition-transform duration-500 inline-flex gap-1 items-center justify-center">
                  <img
                    src="/src/assets/images/Youtube.png"
                    alt="Logo YouTube"
                    loading="lazy"
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-indigo-500 to-indigo-800 hover:shadow text-white px-4 py-3 rounded hover:scale-105 transition-transform duration-500 inline-flex gap-1 items-center flex-1">
                  <img
                    src="/src/assets/images/Send.png"
                    alt="Send"
                    loading="lazy"
                    className="w-5 h-5"
                  />
                  Envoyer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
