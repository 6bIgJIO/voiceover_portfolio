
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

function App(){
  return React.createElement('div',{className:'min-h-screen'}, [
    React.createElement('header',{className:'px-8 py-6 flex items-center justify-between'}, [
      React.createElement('div',{className:'flex items-center gap-3'}, [
        React.createElement('div',{className:'w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold'}, 'BV'),
        React.createElement('div',null, [
          React.createElement('div',{className:'text-2xl font-bold'}, 'BestVoice'),
          React.createElement('div',{className:'text-sm text-gray-400'}, 'RU / EN — Narration · Commercials · Characters')
        ])
      ]),
      React.createElement('nav',{className:'space-x-4 text-sm'}, [
        React.createElement('a',{href:'#demos', className:'text-gray-300 hover:text-white'}, 'Demos'),
        React.createElement('a',{href:'#services', className:'text-gray-300 hover:text-white'}, 'Services'),
        React.createElement('a',{href:'#contact', className:'text-gray-300 hover:text-white'}, 'Contact')
      ])
    ]),
    React.createElement('main',{className:'px-8 pb-12'}, [
      React.createElement('section',{className:'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8'}, [
        React.createElement('div', {className:'space-y-4'}, [
          React.createElement('h1',{className:'text-4xl font-extrabold'}, 'Warm, cinematic voice — ready for your project'),
          React.createElement('p',{className:'text-gray-300 max-w-xl'}, 'Professional RU/EN voice actor. Fast turnaround, clean delivery, and flexible performance.'),
          React.createElement('div',{className:'flex gap-3 mt-4'}, [
            React.createElement('a',{href:'https://t.me/BestVoiceOver', className:'px-4 py-2 bg-yellow-500 text-black rounded-lg font-semibold'}, 'Telegram'),
            React.createElement('a',{href:'https://www.youtube.com/watch?v=v_7oNpknQ6g', className:'px-4 py-2 border border-white/10 rounded-lg text-white'}, 'YouTube reel')
          ])
        ]),
        React.createElement('div',{className:'p-6'}, React.createElement('div',{className:'aspect-video bg-black rounded-xl flex items-center justify-center border border-white/5'}, 'Demo player placeholder'))
      ]),
      React.createElement('section',{id:'demos', className:'mt-12 grid grid-cols-1 md:grid-cols-2 gap-6'}, [
        React.createElement('div',{className:'bg-gradient-to-br from-gray-800/60 to-black/40 p-6 rounded-2xl'}, [
          React.createElement('h3',{className:'text-xl font-semibold mb-2'}, 'Promotional Intro (30s)'),
          React.createElement('p',{className:'text-sm text-gray-300'}, 'Clean edit — delivered in WAV/MP3. One free revision included.')
        ]),
        React.createElement('div',{className:'bg-gradient-to-br from-gray-800/60 to-black/40 p-6 rounded-2xl'}, [
          React.createElement('h3',{className:'text-xl font-semibold mb-2'}, 'Character Read'),
          React.createElement('p',{className:'text-sm text-gray-300'}, 'Dynamic reads for games and animation.')
        ])
      ]),
      React.createElement('section',{id:'contact', className:'mt-12 p-6 bg-gradient-to-r from-black/60 to-gray-800/40 rounded-2xl'}, [
        React.createElement('h3',{className:'text-xl font-semibold mb-2'}, 'Contact'),
        React.createElement('p',{className:'text-gray-300'}, 'Telegram: https://t.me/BestVoiceOver'),
        React.createElement('p',{className:'text-gray-300'}, 'Email: heyhochannel92@gmail.com'),
        React.createElement('p',{className:'text-sm text-gray-500 mt-2'}, 'Payments: USDT (TRC20), WebMoney, Alfa-bank')
      ])
    ])
  ]);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
