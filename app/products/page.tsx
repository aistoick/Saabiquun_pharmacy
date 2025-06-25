"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Star, ShoppingCart, Heart, X, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import { useState } from "react"
import Image from "next/image"

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Barcha mahsulotlar")

  const categories = [
    { name: "Barcha mahsulotlar", count: 10 },
    { name: "Yurak va qon bosimi uchun dorilar", count: 2 },
    { name: "Vitaminlar", count: 4 },
    { name: "Nevrologiya", count: 2},
    { name: "Nafas yo'llari uchun dorilar", count: 1},
    { name: "Ko‘z dori vositalari", count:1},
  ]

  const products = [
    {
      id: 1,
      name: "Magniy B6 Strong",
      category: "Nevrologiya",
      description: "Stress va asabiylikni kamaytirish uchun",
      fullDescription:
        "Magniy B6 Strong — bu organizmda magniy tanqisligini bartaraf etuvchi va asab tizimini qo'llab-quvvatlovchi kompleks preparatdir. Preparat tarkibida magniy va B6 vitamini uyg'unligi tufayli stress holatlarida, asabiylikda va uyqu buzilishlarida samarali yordam beradi.",
      activeIngredient: "Magniy oksidi 400mg, Piridoksin HCl 5mg",
      dosage: "Kuniga 2 marta 1 tabletkadan ovqatdan keyin",
      sideEffects: ["Oshqozon buzilishi", "Bosh aylanishi", "Charchoq"],
      contraindications: ["Homiladorlik", "Buyrak yetishmovchiligi", "Allergik reaktsiyalar"],
      price: "35,000 so'm",
      image: "/images/magniy-b6.jpg",
      inStock: true,
      rating: 4.8,
      reviews: 234,
      prescriptionRequired: false,
    },
    {
      id: 2,
      name: "Androvigor",
      category: "Vitaminlar",
      description: "Energiya va jismoniy bardoshlilikni ko‘paytirish",
      fullDescription:
        "Androvigor — erkaklar salomatligini qo‘llab-quvvatlovchi biologik faol qo‘shimcha (BAA) bo‘lib, u erkaklarda umumiy quvvatni oshirish, jinsiy funksiyani normallashtirish va stressga chidamlilikni yaxshilash maqsadida ishlab chiqilgan. U o‘z tarkibida tabiiy ekstraktlar, vitaminlar va mikroelementlarni jamlagan.",
      activeIngredient: "Lisinopril 10mg",
      dosage: "Kuniga 1 marta ertalab ovqatdan oldin",
      sideEffects: ["Quruq yo'tal", "Bosh aylanishi", "Charchoq"],
      contraindications: ["Homiladorlik", "Angionevrotik shish tarixi", "Ikki tomonlama buyrak arteriyasi stenozi"],
      price: "85,000 so'm",
      image: "/images/androvigor.jpg",
      inStock: true,
      rating: 4.9,
      reviews: 189,
      prescriptionRequired: true,
    },
    {
      id: 3,
      name: "Androwell",
      category: "Yurak va qon bosimi uchun dorilar",
      description: "Energiya va umumiy faollikni oshiradi",
      fullDescription:
        "AndroWell — erkaklar salomatligini qo‘llab‑quvvatlash uchun mo‘ljallangan biologik faol qo‘shimchadir (BAA). U jinsiy faollikni, energiya hosil bo‘lishini va umumiy tonusni yaxshilashga yordam beradi. Preparat tarkibida tabiiy ekstraktlar, vitaminlar va minerallar mavjud bo‘lib, ularning uyg‘unligi erkak organizmiga ijobiy ta’sir ko‘rsatadi.",
      activeIngredient: "Levetiracetam 500mg",
      dosage: "Kuniga 2 marta ovqat bilan yoki ovqatsiz",
      sideEffects: ["Uyquchanlik", "Xulq-atvor o'zgarishi", "Koordinatsiya buzilishi"],
      contraindications: ["Og'ir buyrak yetishmovchiligi", "Yuqori sezuvchanlik"],
      price: "125,000 so'm",
      image: "/images/androwell.jpg",
      inStock: true,
      rating: 4.7,
      reviews: 156,
      prescriptionRequired: true,
    },
    {
      id: 4,
      name: "babycalfood.jpg",
      category: "Yurak va qon bosimi uchun dorilar",
      description: "Qand diabetini boshqarish uchun uzaytirilgan ta'sir",
      fullDescription:
        "BabyCalFood – bu chaqaloqlar va bolalar uchun mo‘ljallangan kaltsiy va vitamin D bilan boyitilgan biologik faol qo‘shimchadir. U suyak va tishlar rivojlanishini qo‘llab‑quvvatlash, immun tizimini mustahkamlash va umumiy salomatlikni ta’minlash uchun ishlab chiqilgan.",
      activeIngredient: "Metformin HCl 1000mg XR",
      dosage: "Kuniga 1 marta kechki ovqat bilan",
      sideEffects: ["Ko'ngil aynishi", "Diareya", "Og'izda metall ta'mi"],
      contraindications: ["Og'ir buyrak kasalligi", "Metabolik atsidoz", "Suvsizlanish"],
      price: "45,000 so'm",
      image: "/images/babycalfood.jpg",
      inStock: true,
      rating: 4.6,
      reviews: 312,
      prescriptionRequired: true,
    },
    {
      id: 5,
      name: "bifokids",
      category: "Nafas yo'llari uchun dorilar",
      description: "Ovqatdan ozuqaviy moddalarni yaxshiroq so‘rilshtirishga yordam beradi",
      fullDescription:
        "Bifido Kids — bu chaqaloq va bolalar uchun mo‘ljallangan synbiotic (ya’ni, probiotic + prebiotic) qo‘shimcha bo‘lib, ichak microflora’sini muvozanatlashtirishga, hazmni yaxshilashga va immun tizimini mustahkamlashga yordam beradi",
      dosage: "Kuniga 2 marta 2 nafas olish",
      sideEffects: ["Tomoq tirnalishi", "Ovoz o'zgarishi", "Bosh og'rig'i"],
      contraindications: ["Og'ir sut oqsili allergiyasi", "Davolanmagan qo'ziqorin infeksiyalari"],
      price: "220,000 so'm",
      image: "/images/bifokids.jpg",
      inStock: true,
      rating: 4.8,
      reviews: 198,
      prescriptionRequired: true,
    },
    {
      id: 6,
      name: "Ferrostrong",
      category: "Nevrologiya",
      description: "Organizmdagi temir rezervini to‘ldirish",
      fullDescription:
        "Ferrostrong — og‘iz orqali qabul qilinadigan temir qo‘shimchasi bo‘lib, gemoglobin va mioglobin sintezini qo‘llab‑quvvatlash orqali temir tanqisligiga qarshi kurashadi .",
      activeIngredient: "Amoksitsillin/Klavulanat 875/125mg",
      dosage: "7-10 kun davomida kuniga 2 marta ovqat bilan",
      sideEffects: ["Diareya", "Ko'ngil aynishi", "Teri toshmasi"],
      contraindications: ["Penitsillin allergiyasi", "Og'ir jigar kasalligi"],
      price: "38,000 so'm",
      image: "/images/ferrostrong.jpg",
      inStock: true,
      rating: 4.5,
      reviews: 267,
      prescriptionRequired: true,
    },
    {
      id: 7,
      name: "Fertisupreme",
      category: "Vitaminlar",
      description: "Organizmdagi temir rezervini to‘ldirish",
      fullDescription:
        "FertiSupreme – bu reproduktiv salomatlikni qo‘llab-quvvatlashga mo‘ljallangan biologik faol qo‘shimcha. U ayollar uchun mo‘ljallangan bo‘lib, homiladorlikni rejalashtirishda organizmni tayyorlash va ovulyatsiya funksiyasini yaxshilashga yordam beradi. Tarkibida L-arginin, Chasteberry, folat, sink, CoQ10 va boshqa muhim elementlar bor",
      activeIngredient: "Amoksitsillin/Klavulanat 875/125mg",
      dosage: "7-10 kun davomida kuniga 2 marta ovqat bilan",
      sideEffects: ["Diareya", "Ko'ngil aynishi", "Teri toshmasi"],
      contraindications: ["Penitsillin allergiyasi", "Og'ir jigar kasalligi"],
      price: "38,000 so'm",
      image: "/images/fertisupreme.jpg",
      inStock: true,
      rating: 4.5,
      reviews: 267,
      prescriptionRequired: true,
    },

     {
      id: 8,
      name: "Kalsiy D3",
      category: "Vitaminlar",
      description: "Mushak, asab va immun tizimining shirkatini yaxshilaydi",
      fullDescription:
        "Kaltsiy D3 — bu og‘iz orqali qabul qilinadigan preparat bo‘lib, unda kaltsiy va D vitamini uyg‘unligi mavjud. Organizmda kaltsiy darajasini ushlash va suyak sog‘ligini ta’minlashda xizmat qiladi",
      activeIngredient: "Amoksitsillin/Klavulanat 875/125mg",
      dosage: "7-10 kun davomida kuniga 2 marta ovqat bilan",
      sideEffects: ["Diareya", "Ko'ngil aynishi", "Teri toshmasi"],
      contraindications: ["Penitsillin allergiyasi", "Og'ir jigar kasalligi"],
      price: "45,000 so'm",
      image: "/images/kalsiy-d3.jpg",
      inStock: true,
      rating: 4.5,
      reviews: 267,
      prescriptionRequired: true,
    },
 {
      id: 9,
      name: "Nefrostrong",
      category: "Vitaminlar",
      description: "Surunkali siydik yo‘li infektsiyalarini muolaja qilish va oldini olish",
      fullDescription:
        "Nephrosten — bu buyrak va siydik yo‘li salomatligini qo‘llab‑quvvatlash uchun mo‘ljallangan o‘simlik asosidagi BAA bo‘lib, surunkali siydik yo‘li infeksiyalari (masalan, sistit, pielonefrit), interstitsial nefrit yoki glomerulonefrit kabi yallig‘lanishli holatlarni davolashda, shuningdek, buyrak toshlari oldini olishda ham foydalidir .",
      activeIngredient: "Amoksitsillin/Klavulanat 875/125mg",
      dosage: "7-10 kun davomida kuniga 2 marta ovqat bilan",
      sideEffects: ["Diareya", "Ko'ngil aynishi", "Teri toshmasi"],
      contraindications: ["Penitsillin allergiyasi", "Og'ir jigar kasalligi"],
      price: "128,000 so'm",
      image: "/images/nefrostrong.jpg",
      inStock: true,
      rating: 4.5,
      reviews: 267,
      prescriptionRequired: true,
    },

    {
      id: 10,
      name: "Oftalymoks",
      category: "Ko‘z dori vositalari",
      description: "Bakterial kon’yunktivitni (qamishqalash, og‘riq, oqaradigan ko‘z) samarali davolaydi",
      fullDescription:
        "Oftalymox — bu ko‘z infektsiyalarini (masalan, bakterial kon’yunktivit) davolash uchun mo‘ljallangan Moksifloksatsin asosidagi ko‘z tomchilari.",
      activeIngredient: "Amoksitsillin/Klavulanat 875/125mg",
      dosage: "7-10 kun davomida kuniga 2 marta ovqat bilan",
      sideEffects: ["Diareya", "Ko'ngil aynishi", "Teri toshmasi"],
      contraindications: ["Penitsillin allergiyasi", "Og'ir jigar kasalligi"],
      price: "55,000 so'm",
      image: "/images/oftalymoks.jpg",
      inStock: true,
      rating: 4.5,
      reviews: 267,
      prescriptionRequired: true,
    },
    
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Barcha mahsulotlar" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const ProductModal = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <Badge className="bg-blue-100 text-blue-800">{product.category}</Badge>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-6 flex items-center justify-center">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-gray-600 ml-2">({product.reviews} sharh)</span>
              </div>

              <div className="text-3xl font-bold text-blue-600 mb-4">{product.price}</div>
              {product.prescriptionRequired && (
                <Badge variant="outline" className="mb-4">
                  Retsept talab qilinadi
                </Badge>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tavsif</h3>
                <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Faol modda</h3>
                <p className="text-gray-600">{product.activeIngredient}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dozaj</h3>
                <p className="text-gray-600">{product.dosage}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Keng tarqalgan yon ta'sirlar</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.sideEffects.map((effect, index) => (
                    <li key={index}>{effect}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kontrendikatsiyalar</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.contraindications.map((contraindication, index) => (
                    <li key={index}>{contraindication}</li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={!product.inStock}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? "Narx so'rash" : "Mavjud emas"}
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Bizning mahsulotlarimiz</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turli yo'nalishlarda bemor salomatligini yaxshilashga qaratilgan innovatsion dori vositalarimiz bilan
              tanishing.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Dori nomi, kasallik yoki tarkibiy modda bo'yicha qidiring..."
                className="pl-12 pr-4 py-3 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Kategoriyalar</h3>
                <Button variant="ghost" size="sm">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedCategory === category.name ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span
                      className={`text-sm ${selectedCategory === category.name ? "text-blue-200" : "text-gray-500"}`}
                    >
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-600">{filteredProducts.length} ta mahsulot topildi</span>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                    >
                      <Heart className="w-4 h-4" />
                    </Button>

                    {product.prescriptionRequired && (
                      <Badge className="absolute top-3 left-3 bg-red-500">Retsept kerak</Badge>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2">
                        {product.category}
                      </Badge>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                    </div>

                    <div className="flex items-center space-x-1 mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-600">{product.price}</span>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                        disabled={!product.inStock}
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Batafsil
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Qidiruv shartlariga mos mahsulot topilmadi</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  )
}
