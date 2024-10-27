import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Decorative header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 font-serif">Welcome</h1>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px bg-gray-400 w-16" />
            <span className="text-gray-500 font-mono text-sm">EST. 2024</span>
            <div className="h-px bg-gray-400 w-16" />
          </div>
        </div>

        {/* Signup card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-200">
          {/* Retro decorative element */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400" />
          </div>

          {/* Custom styled Clerk SignUp */}
          <SignUp 
            appearance={{
              elements: {
                card: "shadow-none p-10 bg-transparent w-full",
                headerTitle: "font-serif text-2xl",
                headerSubtitle: "font-mono text-sm",
                formButtonPrimary: 
                  "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all duration-200",
                formFieldInput: 
                  "border-gray-300 focus:border-amber-500 focus:ring-amber-500 font-mono",
                footerAction: "text-amber-600 hover:text-orange-600",
                dividerLine: "bg-gray-300",
                dividerText: "text-gray-500 font-mono",
              },
            }}
          />

          {/* Retro footer decoration */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-orange-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
          </div>
        </div>

        {/* Vintage-style footer text */}
        <p className="text-center mt-6 text-gray-500 font-mono text-xs">
          Crafted with precision • Premium quality
        </p>
      </div>
    </div>
  );
};

export default Page;