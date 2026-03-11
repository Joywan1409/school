import { useEffect, useState } from 'react';
import { Newspaper, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';

type NewsItem = Database['public']['Tables']['news']['Row'];

export function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('published_date', { ascending: false })
        .limit(3);

      if (error) {
        console.error('Error fetching news:', error);
      } else {
        setNews(data || []);
      }
      setLoading(false);
    }

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Newspaper className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">Latest News</h2>
          </div>
          <p className="text-xl text-gray-600">Stay updated with what's happening at our school</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(item.published_date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
