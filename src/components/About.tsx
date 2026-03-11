import { GraduationCap, Palette, Music, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our School</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sunshine Primary School has been nurturing young minds for over 30 years,
            providing a vibrant learning environment where creativity and curiosity flourish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/8422087/pexels-photo-8422087.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Students learning"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We strive to create a safe, nurturing environment where every child can develop
              their unique talents and reach their full potential. Our dedicated teachers use
              innovative teaching methods to make learning engaging and meaningful.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through our comprehensive curriculum and enrichment programs, we prepare students
              not just for academic success, but for becoming compassionate, creative, and
              confident individuals ready to make a positive impact on the world.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Core Curriculum</h4>
            <p className="text-gray-600">Strong foundation in literacy, numeracy, and sciences</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-green-500 to-emerald-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Arts Program</h4>
            <p className="text-gray-600">Creative expression through visual arts and drama</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-amber-500 to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Music & Sports</h4>
            <p className="text-gray-600">Physical education and musical development</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-pink-500 to-rose-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Global Awareness</h4>
            <p className="text-gray-600">Cultural diversity and environmental education</p>
          </div>
        </div>
      </div>
    </section>
  );
}
