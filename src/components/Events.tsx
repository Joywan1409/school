import { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';

type Event = Database['public']['Tables']['events']['Row'];

export function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .gte('event_date', new Date().toISOString())
        .order('event_date', { ascending: true });

      if (error) {
        console.error('Error fetching events:', error);
      } else {
        setEvents(data || []);
      }
      setLoading(false);
    }

    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Calendar className="w-8 h-8 text-green-600" />
            <h2 className="text-4xl font-bold text-gray-900">Upcoming Events</h2>
          </div>
          <p className="text-xl text-gray-600">Mark your calendars for these exciting events</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-green-600" />
                        <span>{formatDate(event.event_date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span>{formatTime(event.event_date)}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-green-600" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="bg-white rounded-lg p-4 text-center shadow-md min-w-[100px]">
                      <div className="text-3xl font-bold text-green-600">
                        {new Date(event.event_date).getDate()}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {new Date(event.event_date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
