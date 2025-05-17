import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Linkedin, MapPin, Phone, Download, Github, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Suspense } from "react"
import Loading from "./components/loading"
import ProfileImage from "./components/profile-image"

// Add base path for images and assets
const basePath = process.env.NODE_ENV === 'production' ? '/sumedha-parande-portfolio' : ''

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {/* Navigation */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex h-16 items-center justify-between">
              <div className="font-semibold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform">Sumedha Parande</div>
              <nav className="hidden md:flex gap-6">
                {["About", "Skills", "Experience", "Education", "Certifications", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
              <Button variant="outline" size="sm" className="hidden md:flex border-purple-600 text-purple-600 hover:bg-purple-50 transition-all hover:scale-105 group">
                <Download className="mr-2 h-4 w-4" />
                <a href={`${basePath}/Sumedhe_Parande_Resume.pdf`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Resume
                </a>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 space-y-20">
          {/* Hero Section */}
          <section id="hero" className="py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
              <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <ProfileImage />
              </div>
              <div className="text-center md:text-left space-y-6 flex-1">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
                  Sumedha Parande
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-purple-600 animate-fade-in-delay-1">
                  Senior Software Quality Engineer
                </h2>
                <p className="text-lg text-slate-600 animate-fade-in-delay-2">
                  Experienced Software Quality Engineer with over 3 years of expertise in both manual and automated testing. 
                  Skilled in developing robust test automation frameworks using Selenium WebDriver and Java, while maintaining 
                  strong manual testing capabilities in exploratory testing, UAT, and regression testing. Passionate about 
                  delivering high-quality software through comprehensive testing strategies.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in-delay-3">
                  <Badge className="px-3 py-1 bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors">Manual Testing</Badge>
                  <Badge className="px-3 py-1 bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors">Test Automation</Badge>
                  <Badge className="px-3 py-1 bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors">Selenium</Badge>
                  <Badge className="px-3 py-1 bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors">API Testing</Badge>
                  <Badge className="px-3 py-1 bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors">Quality Assurance</Badge>
                </div>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4 animate-fade-in-delay-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all hover:scale-105 group">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 transition-all hover:scale-105 group">
                    <Download className="mr-2 h-4 w-4" />
                    <a href={`${basePath}/Sumedhe_Parande_Resume.pdf`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Download CV
                    </a>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-20">
            <div className="space-y-8 max-w-7xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</h2>
              </div>
              <p className="text-lg text-slate-600">
                I am a dedicated Software Quality Engineer with a balanced approach to software testing, combining strong 
                manual testing expertise with advanced automation capabilities. With 3 years of experience at Infosys, 
                I have developed comprehensive testing strategies that leverage both manual and automated testing methods 
                to ensure software quality. My approach combines technical expertise in test automation with a keen eye 
                for detail in manual testing, resulting in improved testing efficiency and higher quality software delivery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <Card className="hover:shadow-lg transition-shadow border-purple-100">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-slate-500">Location</h3>
                        <p className="font-medium">Pune, Maharashtra</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow border-purple-100">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-slate-500">Email</h3>
                        <p className="font-medium">sumedhapparande@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow border-purple-100">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-slate-500">Phone</h3>
                        <p className="font-medium">+91 7744010096</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-20">
            <div className="space-y-8 max-w-7xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Technical Skills</h2>
              </div>

              <Tabs defaultValue="testing" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-purple-50">
                  <TabsTrigger value="testing" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Testing</TabsTrigger>
                  <TabsTrigger value="tools" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Tools</TabsTrigger>
                  <TabsTrigger value="automation" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Automation</TabsTrigger>
                  <TabsTrigger value="languages" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Languages</TabsTrigger>
                  <TabsTrigger value="other" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Other</TabsTrigger>
                </TabsList>

                <TabsContent value="testing" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: "Agile and Scrum methodologies", level: "Advanced", value: 90 },
                      { name: "Manual Testing", level: "Expert", value: 95 },
                      { name: "Regression Testing", level: "Advanced", value: 92 },
                      { name: "API Testing", level: "Expert", value: 95 },
                      { name: "UI Testing", level: "Advanced", value: 88 },
                      { name: "Sanity Testing", level: "Advanced", value: 90 },
                      { name: "Functional Testing", level: "Expert", value: 93 },
                      { name: "Cross-Browser Testing", level: "Advanced", value: 89 },
                      { name: "Performance Testing", level: "Intermediate", value: 85 },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-purple-600 font-medium">{skill.level}</span>
                        </div>
                        <Progress value={skill.value} className="h-2 bg-purple-100" />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tools" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: "SoapUI", level: "Advanced", value: 88 },
                      { name: "Git & GitHub", level: "Expert", value: 92 },
                      { name: "TestNG", level: "Expert", value: 95 },
                      { name: "Postman", level: "Advanced", value: 90 },
                      { name: "Jenkins", level: "Advanced", value: 87 },
                      { name: "CI/CD", level: "Advanced", value: 89 },
                      { name: "Jira", level: "Expert", value: 93 },
                      { name: "Xray", level: "Advanced", value: 88 },
                      { name: "Zephyr", level: "Advanced", value: 86 },
                      { name: "SOAP", level: "Advanced", value: 87 },
                      { name: "RestAssured", level: "Expert", value: 91 },
                      { name: "JMeter", level: "Intermediate", value: 85 },
                      { name: "Cypress", level: "Advanced", value: 88 },
                      { name: "AWS", level: "Intermediate", value: 84 },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-purple-600 font-medium">{skill.level}</span>
                        </div>
                        <Progress value={skill.value} className="h-2 bg-purple-100" />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="automation" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: "Selenium", level: "Expert", value: 95 },
                      { name: "Web Driver", level: "Expert", value: 94 },
                      { name: "Maven", level: "Advanced", value: 90 },
                      { name: "SDLC", level: "Expert", value: 92 },
                      { name: "STLC", level: "Expert", value: 93 },
                      { name: "Web Automation", level: "Expert", value: 94 },
                      { name: "JSON", level: "Advanced", value: 89 },
                      { name: "XML", level: "Advanced", value: 88 },
                      { name: "POJO classes", level: "Advanced", value: 90 },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-purple-600 font-medium">{skill.level}</span>
                        </div>
                        <Progress value={skill.value} className="h-2 bg-purple-100" />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="languages" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: "Java", level: "Expert", value: 93 },
                      { name: "OOPS concepts", level: "Expert", value: 94 },
                      { name: "SQL", level: "Advanced", value: 90 },
                      { name: "HTML", level: "Advanced", value: 88 },
                      { name: "CSS", level: "Intermediate", value: 85 },
                      { name: "JavaScript", level: "Intermediate", value: 84 },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-purple-600 font-medium">{skill.level}</span>
                        </div>
                        <Progress value={skill.value} className="h-2 bg-purple-100" />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="other" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: "Team Collaboration", level: "Expert", value: 95 },
                      { name: "Problem Solving", level: "Expert", value: 94 },
                      { name: "Documentation", level: "Advanced", value: 90 },
                      { name: "Test Planning", level: "Expert", value: 92 },
                      { name: "Test Strategy", level: "Advanced", value: 91 },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-purple-600 font-medium">{skill.level}</span>
                        </div>
                        <Progress value={skill.value} className="h-2 bg-purple-100" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-20">
            <div className="space-y-8 max-w-7xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work Experience</h2>
              </div>

              <div className="relative border-l-2 border-purple-200 pl-8 ml-4 space-y-10">
                <div className="absolute w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -left-3 top-0"></div>

                <div className="relative group">
                  <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-purple-100 group-hover:border-purple-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                        <div>
                          <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">Senior System Engineer - Software Quality</CardTitle>
                          <p className="text-purple-600 font-medium">INFOSYS LTD., Pune, MH</p>
                        </div>
                        <Badge className="w-fit bg-purple-100 text-purple-800 group-hover:bg-purple-200 transition-colors">July 2022–Present</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-none space-y-3 text-slate-600">
                        <li className="flex gap-2 group/item">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform" />
                          <span className="group-hover/item:text-purple-600 transition-colors">
                            Designed and developed automation frameworks using Selenium WebDriver and Java, while maintaining 
                            strong manual testing capabilities for exploratory testing and user acceptance testing.
                          </span>
                        </li>
                        <li className="flex gap-2 group/item">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform" />
                          <span className="group-hover/item:text-purple-600 transition-colors">
                            Conducted comprehensive manual testing including regression testing, UAT, and exploratory testing, 
                            while utilizing API testing tools like SoapUI for automated API validation.
                          </span>
                        </li>
                        <li className="flex gap-2 group/item">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform" />
                          <span className="group-hover/item:text-purple-600 transition-colors">
                            Balanced automated and manual testing approaches for GUI applications, enhancing overall testing 
                            efficiency and coverage.
                          </span>
                        </li>
                        <li className="flex gap-2 group/item">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform" />
                          <span className="group-hover/item:text-purple-600 transition-colors">
                            Proficiently wrote SQL queries for data validation and performed manual database testing, while 
                            implementing automated data validation using POJO classes.
                          </span>
                        </li>
                        <li className="flex gap-2 group/item">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform" />
                          <span className="group-hover/item:text-purple-600 transition-colors">
                            Applied both manual and automated testing methodologies using tools like TestNG and Cucumber, 
                            while contributing to CI/CD pipelines for automated test execution.
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-20">
            <div className="space-y-8 max-w-7xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Test Automation Projects</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100 group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-purple-600 transition-colors">E-commerce Test Automation Framework</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge className="bg-purple-100 text-purple-800">Selenium</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Java</Badge>
                      <Badge className="bg-purple-100 text-purple-800">TestNG</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Maven</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Developed a robust test automation framework for an e-commerce platform using Selenium WebDriver and Java.
                    </p>
                    <ul className="list-none space-y-2 text-slate-600">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Implemented Page Object Model for better maintainability</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Integrated with Jenkins for CI/CD pipeline</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Added parallel test execution support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100 group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-purple-600 transition-colors">API Testing Framework</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge className="bg-purple-100 text-purple-800">RestAssured</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Java</Badge>
                      <Badge className="bg-purple-100 text-purple-800">TestNG</Badge>
                      <Badge className="bg-purple-100 text-purple-800">JSON</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Created a comprehensive API testing framework for microservices architecture.
                    </p>
                    <ul className="list-none space-y-2 text-slate-600">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Implemented data-driven testing approach</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Added support for SOAP and REST APIs</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Integrated with reporting tools for better visibility</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100 group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-purple-600 transition-colors">Performance Testing Suite</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge className="bg-purple-100 text-purple-800">JMeter</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Java</Badge>
                      <Badge className="bg-purple-100 text-purple-800">AWS</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Docker</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Developed a scalable performance testing suite for web applications.
                    </p>
                    <ul className="list-none space-y-2 text-slate-600">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Created distributed load testing environment</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Implemented real-time monitoring and reporting</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Automated test data generation and cleanup</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100 group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-purple-600 transition-colors">Mobile Testing Framework</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge className="bg-purple-100 text-purple-800">Appium</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Java</Badge>
                      <Badge className="bg-purple-100 text-purple-800">TestNG</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Android</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Built a cross-platform mobile testing framework for native and hybrid apps.
                    </p>
                    <ul className="list-none space-y-2 text-slate-600">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Supported both Android and iOS platforms</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Implemented gesture-based testing scenarios</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Added cloud device testing support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Test Metrics Section */}
          <section id="metrics" className="scroll-mt-20">
            <div className="space-y-8 max-w-7xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Testing Metrics & Achievements</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-purple-600">95%</div>
                      <p className="text-slate-600">Test Automation Coverage</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-purple-600">500+</div>
                      <p className="text-slate-600">Automated Test Cases</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-purple-600">98%</div>
                      <p className="text-slate-600">Test Pass Rate</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-purple-600">50%</div>
                      <p className="text-slate-600">Time Saved in Testing</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle>Key Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-none space-y-3">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Reduced regression testing time by 60% through automation</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Improved test coverage from 70% to 95%</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Decreased bug leakage to production by 40%</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Implemented CI/CD pipeline reducing release time by 50%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle>Testing Methodologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-none space-y-3">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Agile Testing & Scrum Master</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Behavior Driven Development (BDD)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Test-Driven Development (TDD)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>Continuous Integration/Continuous Testing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Manual Testing Section */}
          <section id="manual-testing" className="scroll-mt-20">
            <div className="space-y-8 max-w-7xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Manual Testing Expertise</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle>Testing Methodologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-none space-y-3">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Exploratory Testing</span>
                          <p className="text-sm text-slate-600">Uncovering unexpected issues through systematic exploration</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">User Acceptance Testing (UAT)</span>
                          <p className="text-sm text-slate-600">Validating software against business requirements</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Regression Testing</span>
                          <p className="text-sm text-slate-600">Ensuring new changes don&apos;t affect existing functionality</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Compatibility Testing</span>
                          <p className="text-sm text-slate-600">Testing across different browsers, devices, and platforms</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle>Test Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-none space-y-3">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Test Plans & Strategies</span>
                          <p className="text-sm text-slate-600">Comprehensive test planning and execution strategies</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Test Cases & Scenarios</span>
                          <p className="text-sm text-slate-600">Detailed test cases covering all requirements</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Bug Reports</span>
                          <p className="text-sm text-slate-600">Clear and detailed bug documentation</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Test Summary Reports</span>
                          <p className="text-sm text-slate-600">Comprehensive test execution reports</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle>Testing Tools & Techniques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-none space-y-3">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Jira & Xray</span>
                          <p className="text-sm text-slate-600">Test case management and defect tracking</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Postman & SoapUI</span>
                          <p className="text-sm text-slate-600">API testing and validation</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">SQL Queries</span>
                          <p className="text-sm text-slate-600">Database testing and validation</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Browser DevTools</span>
                          <p className="text-sm text-slate-600">Frontend debugging and testing</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle>Quality Assurance Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-none space-y-3">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Requirement Analysis</span>
                          <p className="text-sm text-slate-600">Thorough analysis of business requirements</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Test Environment Setup</span>
                          <p className="text-sm text-slate-600">Configuring test environments and test data</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Defect Lifecycle Management</span>
                          <p className="text-sm text-slate-600">Tracking and managing defects through resolution</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Quality Metrics & Reporting</span>
                          <p className="text-sm text-slate-600">Tracking and reporting quality metrics</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-20">
            <div className="space-y-8 max-w-7xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Education</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle>Bachelor of Engineering in Civil Engineering</CardTitle>
                    <p className="text-purple-600 font-medium">Savitribai Phule Pune University</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">July 2017 - June 2021</p>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle>Higher Secondary Certificate (H.S.C.)</CardTitle>
                    <p className="text-purple-600 font-medium">Maharashtra State Board</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">June 2016 - March 2017</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="scroll-mt-20">
            <div className="space-y-8 max-w-7xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Certifications</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    title: "AWS Certified Cloud Practitioner", 
                    issuer: "AWS", 
                    year: "2023",
                    month: "December",
                    image: `${basePath}/certifications/AWS Certified Cloud Practitioner_page-0001.jpg`
                  },
                  { 
                    title: "MasterClass Software Testing with Jira & Agile", 
                    issuer: "Udemy", 
                    year: "2023",
                    month: "November",
                    image: `${basePath}/certifications/MasterClass Software Testing with Jira & Agile.jpg`
                  },
                  { 
                    title: "Java SE8 Developer", 
                    issuer: "Infosys", 
                    year: "2022",
                    month: "October",
                    image: `${basePath}/certifications/Java SE8 Developer_page-0001.jpg`
                  },
                  { 
                    title: "MySQL Associate", 
                    issuer: "Infosys", 
                    year: "2022",
                    month: "September",
                    image: `${basePath}/certifications/MySQL Associate_page-0001.jpg`
                  },
                  { 
                    title: "JavaScript Developer", 
                    issuer: "Infosys", 
                    year: "2022",
                    month: "August",
                    image: `${basePath}/certifications/JavaScript Developer_page-0001.jpg`
                  },
                  { 
                    title: "Selenium Webdriver", 
                    issuer: "Infosys", 
                    year: "2022",
                    month: "July",
                    image: `${basePath}/certifications/Selenium Webdriver.jpeg`
                  },
                  { 
                    title: "API Testing with Postman", 
                    issuer: "Infosys", 
                    year: "2022",
                    month: "June",
                    image: `${basePath}/certifications/API_Testing_With_Postman.jpeg`
                  },
                  { 
                    title: "Learn Test Management Using HP ALM", 
                    issuer: "Infosys", 
                    year: "2022",
                    month: "May",
                    image: `${basePath}/certifications/Learn Test Management Using HP ALM.jpeg`
                  },
                  { 
                    title: "Adobe Experience Manager", 
                    issuer: "Infosys", 
                    year: "2022",
                    month: "April",
                    image: `${basePath}/certifications/Adobe Experience Manager_page-0001.jpg`
                  },
                ].map((cert, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-purple-100 overflow-hidden group">
                    <div className="relative h-56 bg-gradient-to-br from-purple-50 to-pink-50">
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={300}
                          height={300}
                          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg line-clamp-2">{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <p className="text-purple-600 font-medium">{cert.issuer}</p>
                          <Badge className="bg-purple-100 text-purple-800">{cert.month} {cert.year}</Badge>
                        </div>
                        <p className="text-sm text-slate-500">Issued by {cert.issuer}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-20">
            <div className="space-y-8 max-w-7xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Contact Me</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-lg text-slate-600">
                    Feel free to reach out to me for any opportunities or inquiries. I&apos;m always open to discussing new
                    projects, creative ideas, or opportunities to be part of your vision.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-slate-600">sumedhapparande@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-slate-600">+91 7744010096</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Linkedin className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">LinkedIn</h3>
                        <a
                          href="https://linkedin.com/in/sumedha-parande/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:underline flex items-center gap-1"
                        >
                          linkedin.com/in/sumedha-parande
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-slate-600">Pune, Maharashtra, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="shadow-md hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 border-purple-100 bg-white"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 border-purple-100 bg-white"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 border-purple-100 bg-white"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 border-purple-100 bg-white"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t bg-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Sumedha Parande</p>
                <p className="text-slate-600">Software Quality Engineer</p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/sumedha-parande/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-100 p-2 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-slate-600 hover:text-purple-600" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:sumedhapparande@gmail.com"
                  className="bg-slate-100 p-2 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <Mail className="h-5 w-5 text-slate-600 hover:text-purple-600" />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="https://github.com/sumedhaparande"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-100 p-2 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <Github className="h-5 w-5 text-slate-600 hover:text-purple-600" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>

              <p className="text-sm text-slate-500">© {new Date().getFullYear()} Sumedha Parande. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Suspense>
  )
}
