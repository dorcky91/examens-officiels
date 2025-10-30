import parse from "html-react-parser";

export default function Creole({ examen }) {
  const {
    theme,
    texte,
    structure: { sections },
  } = examen;

  return (
    <>
      <div className="text-sm mb-10">
        <h3 className="font-semibold mb-2">{theme}</h3>
        <p className="mb-4 text-gray-600">{texte}</p>

        <ol className="list-[upper-roman] list-inside">
          {sections.map((section) => (
            <li key={section.section} className="mb-8">
              <span className="font-semibold">{section.section}</span>
              {renderSubQuestions(section.questions)}
            </li>
          ))}
        </ol>
      </div>
      {/* <pre className="bg-gray-100 p-4 rounded-md">
        {JSON.stringify(sections, null, 2)}
      </pre> */}
    </>
  );
}

function renderSubQuestions(subQuestions) {
  return (
    <ol className="list-[upper-alpha] list-inside mt-1 ml-3">
      {subQuestions.map((subQuestion) => (
        <li key={subQuestion.instruction} className="mb-5">
          <span className="font-semibold">{subQuestion.instruction}</span>
          {renderNestedQuestions(subQuestion.sousQuestions)}
        </li>
      ))}
    </ol>
  );
}

function renderNestedQuestions(nestedQuestions) {
  return (
    <ol className="list-decimal list-inside mt-1 ml-3 space-y-4">
      {nestedQuestions.map((nestedQuestion) => {
        const question = parse(nestedQuestion.question);
        const choices = nestedQuestion.choix;

        return (
          <li key={question}>
            <span className="text-gray-600">{question}</span>
            {isMultipleChoice(choices)
              ? renderMultipleChoiceOptions(choices, question)
              : renderTextArea()}
          </li>
        );
      })}
    </ol>
  );
}

const isMultipleChoice = (choices) => {
  return choices && choices.length > 0;
};

function renderMultipleChoiceOptions(choices, question) {
  return (
    <div className="mt-2 space-y-2">
      {choices.map((choice) => (
        <div key={choice} className="flex items-center">
          <input
            type="radio"
            id={choice}
            name={`multiple-choice-${question}`}
            className="mr-2 cursor-pointer"
          />
          <label htmlFor={choice} className="text-gray-600">
            {choice}
          </label>
        </div>
      ))}
    </div>
  );
}

function renderTextArea() {
  return (
    <div className="mt-2">
      <p className="text-teal-600">La bonne réponse sera affichée ici.</p>
      {/* <textarea
        placeholder="Votre réponse..."
        className="border border-gray-300 rounded-md p-2 w-full text-gray-600"
        rows="3"></textarea> */}
    </div>
  );
}
