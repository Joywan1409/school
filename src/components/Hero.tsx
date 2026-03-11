import { Sparkles, Users, Award, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Sunshine Primary School</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Where every child's potential shines bright and learning becomes an adventure
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">Committed to academic excellence and personal growth</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-green-500 to-emerald-400 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">Building a supportive and inclusive learning community</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-amber-500 to-orange-400 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Achievement</h3>
            <p className="text-gray-600">Celebrating every milestone and accomplishment</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-pink-500 to-rose-400 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Care</h3>
            <p className="text-gray-600">Nurturing each child with compassion and respect</p>
          </div>
        </div>
      </div>
    </section>
  );
}
