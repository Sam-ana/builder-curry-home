import { useLocation } from "react-router-dom";

export default function PlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname.replace("/", "") || "home";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-golden-foreground">📄</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            {pageName.charAt(0).toUpperCase() + pageName.slice(1)} Page
          </h1>
          <p className="text-gray-600 mb-6">
            This page is currently a placeholder. Continue prompting to fill in
            the content for this page.
          </p>
          <div className="bg-golden-light rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Next steps:</strong> Ask me to implement the specific
              content and functionality for this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
