export default function DemoPage() {
    return (
      <div className="container mx-auto py-16 px-4">
        {/* Left Side: Demo Form */}
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-6">Get started with GreyLabs AI</h2>
          <p className="text-lg mb-6">
            Experience the power of AI in analyzing your customer interactions. Request a demo today to see how GreyLabs AI can help your business achieve better results!
          </p>
  
          {/* Demo Request Form */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Eg. John Doe"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Contact number</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Eg. +918989898989"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Eg. john@company.com"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Company Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Eg. ABC Enterprises"
              />
            </div>
  
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Tell us more</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Write your message here"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-200"
            >
              Request a demo
            </button>
          </form>
        </div>
      </div>
    );
  }
  