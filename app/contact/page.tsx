import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, Building, Users, Globe } from "lucide-react"
import Header from "@/components/header"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Biz bilan bog'laning</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Farmatsevtika bo‘yicha mutaxassislarimiz bilan bog‘laning. Savollaringizga javob berish va kerakli yordamni ko‘rsatish uchun shu yerdamiz.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Aloqaga chiqing</h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Telefon raqam</h3>
                      <p className="text-gray-600">Markaziy ofis: +998 (97) 893-87-87</p>
                      <p className="text-gray-600">Savdo bo‘limi: +998 (97) 893-87-87</p>
                      <p className="text-gray-600">Tibbiyot bo‘yicha ma’lumot: +998 (97) 893-87-87</p>
                      
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email manzilimiz</h3>
                      <p className="text-gray-600">Umumiy: info@sabiquun.uz</p>
                      <p className="text-gray-600">Sotuvchi: sales@sabiquun.uz</p>
                      <p className="text-gray-600">Doktor: medical@sabiquun.uz</p>
                      <p className="text-sm text-gray-500 mt-1">24 soat ichida javob</p>
                    </div>
                  </div>
                </Card>

                

               
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Bizga xabar yuboring</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ismingiz *</label>
                      <Input placeholder="Ismingizni kiriting" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Familiyangiz *</label>
                      <Input placeholder="Familiyangizni kiriting" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email manzilingiz *</label>
                    <Input type="email" placeholder="email@example.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">telefon raqamingiz</label>
                    <Input placeholder="+998 99 999-99-99" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">kompaniya/tashkilot</label>
                    <Input placeholder="Kompaniyangiz" />
                  </div>

                 

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea placeholder="Please describe your inquiry in detail..." rows={6} required />
                  </div>

                  

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
