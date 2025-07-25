import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yorfzusldrvboybodxqn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvcmZ6dXNsZHJ2Ym95Ym9keHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzI2OTEsImV4cCI6MjA2OTAwODY5MX0.-DUZQQdcy-c60ht6-dVy4yCtzDrKRLE4W_J0nmI5hEs';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const { data, error } = await supabase
      .from('toggle_state')
      .select('is_active')
      .single();

    if (error) {
      console.error('Error fetching video state:', error);
      return res.status(500).json({ error: 'Failed to fetch data' });
    }

    const userInfo = {
      Username: 'example_user',
      Email: 'user@example.com',
      Country: 'Exampleland',
      Video: data.is_active
    };

    const output = {
      datatest: [userInfo]
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(output);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 