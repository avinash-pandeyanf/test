import { Brain, Cpu, Upload, BarChart3, Users, MessageSquare, PieChart, UserCheck, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6" />
            <span className="font-semibold text-lg">GreyLabs AI</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/blog" className="text-sm hover:underline">
              Blog
            </Link>
            <Button asChild variant="outline" className="text-sm">
              <Link href="/demo">Request a demo</Link>
            </Button>
          </nav>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let AI fetch insights from your customer calls and emails
            </h2>
            <p className="text-lg mb-6">
              AI powered speech and text analytics tool
            </p>
            <Button asChild size="lg">
              <Link href="/demo">Request a demo</Link>
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-cyan-100 rounded-full"></div>
              <Cpu className="absolute inset-0 m-auto text-cyan-500 w-32 h-32" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Features</h2>
            <p className="text-xl text-center text-gray-600 mb-12">The future of interaction insights</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="h-12 w-12 text-cyan-500" />,
                  title: "Organization-level Suggestions",
                  description: "Get insights and suggestions at an organizational level to improve overall performance."
                },
                {
                  icon: <Users className="h-12 w-12 text-cyan-500" />,
                  title: "Call and Email Summarization",
                  description: "Automatically summarize calls and emails to quickly extract key information."
                },
                {
                  icon: <MessageSquare className="h-12 w-12 text-cyan-500" />,
                  title: "100% Automated Call and Email QA",
                  description: "Fully automated quality assurance for all your customer interactions."
                },
                {
                  icon: <PieChart className="h-12 w-12 text-cyan-500" />,
                  title: "Deep Insights on Customer Interactions",
                  description: "Gain deep, actionable insights from every customer interaction."
                },
                {
                  icon: <UserCheck className="h-12 w-12 text-cyan-500" />,
                  title: "Agent Insights",
                  description: "Get detailed insights on agent performance and areas for improvement."
                },
                {
                  icon: <ArrowRight className="h-12 w-12 text-cyan-500" />,
                  title: "Coach and Close",
                  description: "Use AI-driven insights to coach agents and close more deals."
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold mb-4">Unlock the full potential of your customer interaction data</h2>
                <p className="text-xl text-gray-600 mb-6">Harness the power of AI to transform your customer interactions into valuable insights.</p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-green-500 mr-2" />
                    <span>Improve customer satisfaction and loyalty</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-green-500 mr-2" />
                    <span>Increase sales conversion rates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-green-500 mr-2" />
                    <span>Optimize agent performance and training</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 bg-cyan-100 rounded-full"></div>
                  <Brain className="absolute inset-0 m-auto text-cyan-500 w-48 h-48" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our proven process for driving outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Upload className="h-12 w-12 text-cyan-500" />,
                  title: "Upload your call recordings or emails",
                  description: "Securely upload your customer interaction data to our platform."
                },
                {
                  icon: <Cpu className="h-12 w-12 text-cyan-500" />,
                  title: "Our AI analyzes the data and extracts insights",
                  description: "Our advanced AI algorithms process and analyze your data to extract valuable insights."
                },
                {
                  icon: <BarChart3 className="h-12 w-12 text-cyan-500" />,
                  title: "Actionable data and insights report generated",
                  description: "Receive comprehensive reports with actionable insights to improve your business."
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {step.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Transform your business using AI today!</h2>
            <p className="text-xl mb-8">Harness the power of AI-driven insights to revolutionize your customer interactions and drive growth.</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/demo">Request a demo</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white rounded-t-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6" />
                <span className="font-semibold text-lg">GreyLabs AI</span>
              </div>
              <p className="text-sm">
                Let AI fetch insights from your customer calls and emails. Transform your business using AI today!
              </p>
              <p className="text-sm">Email us at <a href="mailto:support@greylabs.ai" className="underline">support@greylabs.ai</a> for more information.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">About Us</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">Services</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">Contact Us</Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com/greylabs" target="_blank" className="hover:underline">Twitter</a>
                <a href="https://linkedin.com/company/greylabs" target="_blank" className="hover:underline">LinkedIn</a>
                <a href="https://facebook.com/greylabs" target="_blank" className="hover:underline">Facebook</a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm">© {new Date().getFullYear()} GreyLabs AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
