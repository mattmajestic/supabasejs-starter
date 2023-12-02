import React, { useEffect } from 'react';
import { supabase } from './supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

function App() {

  return (
    <div>
      <Auth
        supabaseClient={supabase}
        providers={['google', 'azure', 'github', 'bitbucket', 'gitlab']}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  );
}

export default App;