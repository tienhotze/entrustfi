"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Bot, Building, Coins, Mail, Phone, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/supertrees-mbs.jpg"
            alt="Singapore Gardens by the Bay Supertrees with Marina Bay Sands - representing innovation and sustainability"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight drop-shadow-lg">
            Investing at the Intersection of Tradition and Innovation
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-sans drop-shadow-md">
            A private investment firm leveraging deep global macro expertise and proprietary AI to capitalize on
            opportunities across digital assets, real estate, and high-growth ventures.
          </p>

          <Button
            onClick={() => scrollToSection("philosophy")}
            className="bg-[#B89A6A] hover:bg-[#A08759] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-[#B89A6A] hover:border-[#A08759] shadow-lg"
          >
            Discover Our Philosophy
          </Button>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section id="philosophy" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] text-center mb-8 font-serif">
            Our Investment Philosophy
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-[#222222] leading-relaxed font-sans">
              At EntrustFi, we believe sustainable wealth is built by bridging the gap between established markets and
              the future of finance. Our strategy is founded on rigorous, disciplined analysis from decades of global
              macro experience, applied to a diversified portfolio. We leverage AI in both systematic and discretionary
              trading to enhance our analysis, manage risk, and uncover opportunities that others miss. This fusion of
              human expertise and machine intelligence allows us to create a uniquely balanced and resilient portfolio.
            </p>
          </div>

          {/* Four Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#B89A6A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#222222] mb-4 font-serif">Global Macro Expertise</h4>
                <p className="text-[#222222] font-sans leading-relaxed">
                  Honed at a multi-billion dollar hedge fund, our top-down approach allows us to navigate complex market
                  cycles with discipline.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#B89A6A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#222222] mb-4 font-serif">AI-Driven Insights</h4>
                <p className="text-[#222222] font-sans leading-relaxed">
                  We leverage cutting-edge AI and LLMs in our trading frameworks to process vast datasets and augment
                  our investment decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#B89A6A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#222222] mb-4 font-serif">Tangible Assets</h4>
                <p className="text-[#222222] font-sans leading-relaxed">
                  We invest in real-world businesses, including property and entertainment ventures, that provide
                  stable, long-term value.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#B89A6A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Coins className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#222222] mb-4 font-serif">Digital Frontier</h4>
                <p className="text-[#222222] font-sans leading-relaxed">
                  Leveraging leadership experience from the digital asset space (ex-CEO, HashKey), we strategically
                  engage with the cryptocurrency market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] text-center mb-16 font-serif">
            Proven Leadership
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Headshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-[26rem] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/tien-ho-executive.jpg"
                  alt="Tien Ho, Principal of EntrustFi - Executive Portrait"
                  width={400}
                  height={528}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right Column - Quote and Bio */}
            <div className="space-y-6">
              <blockquote className="text-2xl md:text-3xl font-serif italic text-[#222222] leading-relaxed border-l-4 border-[#B89A6A] pl-6">
                {
                  "My philosophy is built on market discipline and a forward-looking perspective. We leverage proprietary AI to cut through complexity, identifying unique value in an increasingly data-driven world."
                }
              </blockquote>

              <div>
                <h3 className="text-2xl font-bold text-[#222222] mb-6 font-serif">Tien Ho, Principal</h3>

                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#B89A6A] mt-0.5 flex-shrink-0" />
                    <span className="text-[#222222] font-sans">
                      Former Global Macro Hedge Fund Manager at a multi-billion hedge fund in Asia.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#B89A6A] mt-0.5 flex-shrink-0" />
                    <span className="text-[#222222] font-sans">
                      Former CEO for HashKey Singapore, a leader in digital asset financial services.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#B89A6A] mt-0.5 flex-shrink-0" />
                    <span className="text-[#222222] font-sans">
                      Hands-on technologist with deep experience in programming and Large Language Models (LLMs).
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#B89A6A] mt-0.5 flex-shrink-0" />
                    <span className="text-[#222222] font-sans">
                      Proven track record of building sophisticated applications, including proprietary trading
                      programs, payroll management web apps, and client management dashboards.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-8 font-serif">Connect with us</h2>

          <p className="text-lg md:text-xl text-[#222222] mb-12 font-sans leading-relaxed">
            We welcome inquiries from potential partners and investors. Please reach out to discuss how we can build the
            future together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12">
            <a
              href="mailto:tien.ho@entrustfi.io"
              className="flex items-center space-x-3 text-[#222222] hover:text-[#B89A6A] transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-[#B89A6A] group-hover:bg-[#A08759] rounded-full flex items-center justify-center transition-colors duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-sans">tien.ho@entrustfi.io</span>
            </a>

            <a
              href="tel:+6596734436"
              className="flex items-center space-x-3 text-[#222222] hover:text-[#B89A6A] transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-[#B89A6A] group-hover:bg-[#A08759] rounded-full flex items-center justify-center transition-colors duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-sans">+65 96734436</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#B89A6A] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white mb-4 font-sans">© 2022 EntrustFi Pte. Ltd. | All Rights Reserved. | Singapore</p>
          <p className="text-white/80 text-sm font-sans leading-relaxed">
            The information on this website is for informational purposes only and does not constitute an offer to sell
            or a solicitation of an offer to buy any security or investment product.
          </p>
        </div>
      </footer>
    </div>
  )
}
