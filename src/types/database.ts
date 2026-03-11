export interface Database {
  public: {
    Tables: {
      news: {
        Row: {
          id: string;
          title: string;
          content: string;
          image_url: string | null;
          published_date: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          image_url?: string | null;
          published_date?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          image_url?: string | null;
          published_date?: string;
          created_at?: string;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          description: string;
          event_date: string;
          location: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          event_date: string;
          location?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          event_date?: string;
          location?: string | null;
          created_at?: string;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          subject: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          subject: string;
          message: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          subject?: string;
          message?: string;
          created_at?: string;
        };
      };
    };
  };
}
