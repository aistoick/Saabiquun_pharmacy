import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  Users,
  Globe,
  Shield,
  Microscope,
  Heart,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Building,
  Beaker,
  Pill,
} from "lucide-react"
import Header from "@/components/header"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Pharmaceutical Excellence Since</Badge> */}
                <h1 className="text-5xl lg:text-7xl font-bold text-blue-900 leading-tight">
                  SAABIQUUN
                  <span className="block text-3xl lg:text-4xl text-blue-600 font-normal mt-2">
                    Dori-darmon ishlab chiqaruvchi kompaniya
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                 Sog‘lig‘ingiz – bizning ustuvorligimiz. Har doim g‘amxo‘rlik qilamiz. Har doim yoningizdamiz.
                </p>
              </div>

              {/* <div className="flex items-center space-x-6">
                <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">FDA</div>
                      <div className="text-sm text-gray-600">Approved</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">50+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                </Card>
              </div> */}

               <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Bizning mahsulotlarimiz
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-3 text-lg border-2">
                  Batafsil
                </Button>
              </div>
            </div>

            

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-green-200/30">
                <img src="images/hero-2.jpg" alt="" /></div>
                <div className="relative z-10 text-center">
                
                </div>

                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Pill className="w-8 h-8 text-green-600" />
                </div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Microscope className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "yil davomida sifatli xizmat", icon: <Award className="w-8 h-8" /> },
              { number: "50+", label: "Farmatsevtik mahsulotlar", icon: <Pill className="w-8 h-8" /> },
           
              { number: "15", label: "Research Centers", icon: <Building className="w-8 h-8" /> },
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-6">Biz haqimizda</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Farmatsevtika sohasidagi mukammallik va innovatsiyalar yetakchisi</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
               2020-yilda tashkil etilgan SAABIQUUN farmatsevtika sohasidagi innovatsiyalarning ilg‘or peshqadami bo‘lib, inson hayotini saqlab qoluvchi dori vositalari va sog‘liqni saqlash yechimlarini ishlab chiqib, dunyo bo‘ylab millionlab insonlarning hayotini o‘zgartirib kelmoqda.


              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Tadqiqotlar, sifat va bemor parvarishiga bo‘lgan sadoqatimiz bizning har bir faoliyatimizning asosini tashkil etadi. Zamonaviy ishlab chiqarish korxonalarimizdan tortib, jahon darajasidagi ilmiy laboratoriyalarimizgacha, biz farmatsevtika sohasida eng yuqori standartlarga rioya qilamiz.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "FDA va WHO-GMP talablarga javob beruvchi ishlab chiqarish bazalari",
                  "24/7 sifat nazorati va kafolat tizimi",
                  "Barqaror va atrof-muhitga do‘stona amaliyotlar",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
{/* 
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sifat nazorati va kafolati</h3>
                <p className="text-gray-600">Har bir bosqichda sinchkovlik bilan testdan o‘tkazish va sifat nazorati amalga oshiriladi</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 mt-8">
                <Microscope className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ilmiy-tadqiqot va innovatsiyalar</h3>
                <p className="text-gray-600">Innovatsion davolash usullari uchun ilg‘or tadqiqotlar</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 -mt-4">
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bozorimiz kengaymoqda</h3>
                <p className="text-gray-600">Mahsulotlarimiz 50+ dorixonada mavjud</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 mt-4">
                <Heart className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bemorlarga g‘amxo‘rlik</h3>
                <p className="text-gray-600">Bemor salomatligini oshirish — bizning ustuvor vazifamiz</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      

      {/* Testimonials */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Healthcare Professionals Worldwide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                title: "Chief of Cardiology, Mayo Clinic",
                quote:
                  "SABIQUUN's cardiovascular medications have been instrumental in treating my patients. The quality and efficacy are unmatched.",
                rating: 5,
              },
              {
                name: "Prof. Michael Chen",
                title: "Oncology Research Director",
                quote:
                  "Their innovative cancer treatments have given hope to countless patients. SABIQUUN is truly advancing the field of oncology.",
                rating: 5,
              },
              {
                name: "Dr. Emily Rodriguez",
                title: "Diabetes Specialist",
                quote:
                  "The diabetes management solutions from SABIQUUN have transformed how we treat our patients. Excellent results every time.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600">{testimonial.title}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">SAABIQUUN bilan hamkorlik qilishga tayyormisiz?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            SAABIQUUN kompaniyasining innovatsion farmatsevtik yechimlari va yuqori sifatli bemor parvarishiga ishonch bildirgan butun dunyo bo‘ylab sog‘liqni saqlash mutaxassislariga qo‘shiling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Savdo bilan bog‘lanish
            </Button>
            <Button
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
             Ma’lumot olish uchun so‘rov
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
            <img src="/images/saabiquun-logo.svg" alt="Logo" className="h-12 w-14" />    
                <span className="text-2xl font-bold">SAABIQUUN</span>
              </div>
              <p className="text-gray-400 mb-6">2025-yildan beri sog‘liq uchun yangi farmatsevtik yondashuvlar yetakchisimiz.</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+998 (97) 893-87-87</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>info@sabiquun.uz</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Samarqand, O'zbekiston</span>
                </div>
              </div>
            </div>

            {/* <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Cardiovascular
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Oncology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Neurology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Diabetes Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Respiratory
                  </a>
                </li>
              </ul>
            </div> */}

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    bosh sahifa
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-white">
                    mahsulotlarimiz
                  </a>
                </li>
                
        
                <li>
                  <a href="contact" className="hover:text-white">
                    Biz bilan bog'laning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 © SAABIQUUN Farmatsevtika Kompaniyasi. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
