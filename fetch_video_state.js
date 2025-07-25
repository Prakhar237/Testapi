import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yorfzusldrvboybodxqn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvcmZ6dXNsZHJ2Ym95Ym9keHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzI2OTEsImV4cCI6MjA2OTAwODY5MX0.-DUZQQdcy-c60ht6-dVy4yCtzDrKRLE4W_J0nmI5hEs';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchVideoState() {
  const { data, error } = await supabase
    .from('toggle_state')
    .select('is_active')
    .single();

  if (error) {
    console.error('Error fetching video state:', error);
    return;
  }

  const userInfo = {
    Username: 'example_user',
    Email: 'user@example.com',
    Country: 'Exampleland',
    Video: data.is_active
  };

  console.log(JSON.stringify(userInfo, null, 2));
}

fetchVideoState(); 