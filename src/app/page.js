"use client";
import { UserProfile } from '@/components/UserProfile';
import { useState } from 'react';
export default function Home() {
  const [showText, setShowText] = useState(false);
  return (
    <main>
        <h1>Home Page</h1>
        <button>Click me</button>
        <div>
          <label htmlFor="randomText">Enter Random Text</label>
          <input id="randomText" />
        </div>
        <div>
          <label htmlFor="specificText">Enter Specific Text</label>
          <input id="specificText" />
        </div>
        <div>
          <input id="specificText" placeholder="Search..."/>
        </div>
        <div>
          {showText && <span>This is the text!</span>}
          <button onClick={()=>setShowText(!showText)}>Show Text</button>
        </div>
        <UserProfile 
        displayName={'Xtarachieverdsfdgfhgjhkjlkcxvcbnmnm'}
        username={'sfjdgk'}
        email={'abc@gmail.com'}
        isEmailVerified={true}
        />
    </main>
  )
}
