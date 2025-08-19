import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FormStep {
  id: string;
  title: string;
  isActive?: boolean;
}

const formSteps: FormStep[] = [
  { id: "article-type", title: "Article Type Selection" },
  { id: "attach-files", title: "Attach Files" },
  { id: "general-info", title: "General Information" },
  { id: "review-preferences", title: "Review Preferences" },
  { id: "additional-info", title: "Additional Information" },
  { id: "comments", title: "Comments" },
  { id: "manuscript-data", title: "Manuscript Data" },
];

export default function SubmitManuscript() {
  const [currentStep, setCurrentStep] = useState("article-type");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [opposeReviewers, setOpposeReviewers] = useState("");

  const renderStepContent = () => {
    switch (currentStep) {
      case "article-type":
        return (
          <div className="space-y-6">
            <p className="text-gray-700 italic">
              Please provide the requested information.
            </p>

            <div className="space-y-4">
              <div className="bg-golden-dark text-white px-4 py-2 rounded">
                <span className="text-sm">▼ Selection/Category</span>
              </div>

              <div className="bg-golden-light p-6 rounded min-h-[200px]">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-transparent"
                >
                  <option value="">Select a category...</option>
                  <option value="environmental-sciences">
                    Environmental Sciences
                  </option>
                  <option value="biological-sciences">
                    Biological Sciences
                  </option>
                  <option value="medical-sciences">Medical Sciences</option>
                  <option value="physical-sciences">Physical Sciences</option>
                </select>
              </div>

              <div className="flex justify-end">
                <span className="bg-golden px-3 py-1 rounded text-sm">
                  Environmental Sciences
                </span>
              </div>
            </div>
          </div>
        );

      case "review-preferences":
        return (
          <div className="space-y-6">
            <p className="text-gray-700 italic">
              Please provide the requested information.
            </p>

            <div className="space-y-4">
              <div className="bg-golden-dark text-white px-4 py-2 rounded">
                <span className="text-sm">▼ Oppose Reviewers</span>
              </div>

              <div className="bg-golden-light p-6 rounded space-y-4">
                <div className="text-sm text-gray-800">
                  <p className="font-semibold mb-2">
                    Name any opposed ACADEMIC EDITORS or REVIEWERS. The journal
                    will accommodate requests where possible. In some cases,{" "}
                    <em>PLOS</em> may need to contact opposed individuals.
                  </p>

                  <ul className="space-y-1 text-sm">
                    <li>
                      *Enter as much information as possible so that we can
                      identify the correct person.
                    </li>
                    <li>*Provide a reason for excluding each person.</li>
                    <li>
                      *Check each name against the <em>PLOS ONE</em> editorial
                      Board, and indicate whether the individual is an editor or
                      reviewer.
                    </li>
                  </ul>
                </div>

                <textarea
                  value={opposeReviewers}
                  onChange={(e) => setOpposeReviewers(e.target.value)}
                  placeholder="Enter details about opposed reviewers..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-transparent min-h-[120px]"
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Currently Opposed Reviewers List
                </span>
                <button className="bg-golden hover:bg-golden-dark text-golden-foreground px-4 py-2 rounded text-sm">
                  +Add Opposed Reviewer
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <p className="text-gray-700 italic">
              Please provide the requested information.
            </p>
            <div className="bg-golden-light p-6 rounded min-h-[200px] flex items-center justify-center">
              <p className="text-gray-600">
                Content for {currentStep} step will be implemented here.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-golden text-golden-foreground px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <span className="font-medium">Home</span>
          <span className="font-medium">Main Menu</span>
          <span className="font-medium">Submit a Manuscript</span>
          <div className="flex items-center space-x-2">
            <span className="font-medium">About</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">Help</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm">Bhoj Raj Ghimire</span>
          <span className="text-sm">⭕</span>
          <button className="text-sm hover:underline">logout</button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6">
            <nav className="space-y-2">
              {formSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                    currentStep === step.id
                      ? "bg-golden-light border-golden text-golden-foreground"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {step.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            {renderStepContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
