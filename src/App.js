import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(
    'The quick brown fox jumps over the lazy dog'
  );
  const [fontSize, setFontSize] = useState(64);

  const [leading, setLeading] = useState(1.5);

  const [checked, setChecked] = useState('normal');

  const [fontFam, setFontFam] = useState('Kanit');

  const [weight, setWeight] = useState(400);

  // const [backColor, setBackColor] = useState('#2a2a2a');

  const updateOuput = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const updateFont = (e) => {
    e.preventDefault();
    setFontSize(e.target.value);
  };

  const updateLeading = (e) => {
    e.preventDefault();
    setLeading(e.target.value);
  };

  const updateFontStyle = (e) => {
    // checkbox does not need preventDefault
    if (checked === 'normal') {
      setChecked('italic');
    } else {
      setChecked('normal');
    }
  };

  const updateFamily = (e) => {
    e.preventDefault();
    setFontFam(e.target.value);
  };

  const updateWeight = (e) => {
    e.preventDefault();
    setWeight(e.target.value);
  };

  // const updateBackColor = (e) => {
  //   e.preventDefault();
  //   setBackColor(this.style.backgroundColor);
  //   console.log(backColor);
  // };

  return (
    <div className='App'>
      <section className='options'>
        <div className='primary'>
          <h1>TypedFaces</h1>
          <div className='option'>
            <label>Your text</label>
            <input
              type='text'
              name='sentence'
              placeholder='The quick brown fox...'
              onKeyUp={updateOuput}
            ></input>
          </div>

          <div className='option'>
            <label>Type Face</label>
            <select name='typeface' onChange={updateFamily}>
              <option value='Kanit'>Kanit</option>
              <option value='Montserrat'>Montserrat</option>
              <option value='Poppins'>Poppins</option>
              <option value='Taviraj'>Taviraj</option>
              <option value='Tourney'>Tourney</option>
              <option value='Urbanist'>Urbanist</option>
            </select>
          </div>
        </div>
        <div className='secondary'>
          <div className='option'>
            <label>
              Size<span className='text-Output'>{fontSize}px</span>
            </label>
            <input
              type='range'
              name='typesize'
              min={12}
              max={200}
              defaultValue={fontSize}
              onChange={updateFont}
            />
          </div>

          <div className='option'>
            <label>
              Weight <span className='weight-Output'>{weight}</span>
            </label>
            <input
              type='range'
              name='typeweight'
              min={100}
              max={900}
              step={100}
              defaultValue={weight}
              onChange={updateWeight}
            />
          </div>

          <div className='option'>
            <label>
              Leading <span className='lineheight-Output'>{leading}</span>
            </label>
            <input
              type='range'
              name='leading'
              min={0.7}
              max={2.5}
              step={0.1}
              defaultValue={leading}
              onChange={updateLeading}
            />
          </div>

          <div className='option option-checkbox'>
            <label>Italic</label>
            <input
              type='checkbox'
              name='italic'
              onChange={updateFontStyle}
            ></input>
          </div>
        </div>

        {/* <div className='option'>
          <label>Background Colors</label>
          <div className='colors'>
            <div
              style={{
                backgroundColor: '#2a2a2a',
                color: '#fffff',
                cursor: 'pointer',
              }}
              onClick={updateBackColor}
            >
              a
            </div>
            <div
              style={{
                backgroundColor: '#ffffff',
                color: '#2a2a2a',
                cursor: 'pointer',
              }}
              onClick={updateBackColor}
            >
              a
            </div>
            <div
              style={{
                backgroundColor: '#63ff03',
                color: '#2a2a2a',
                cursor: 'pointer',
              }}
              onClick={updateBackColor}
            >
              a
            </div>
            <div
              style={{
                backgroundColor: '#ee0073',
                color: '#2a2a2a',
                cursor: 'pointer',
              }}
              onClick={updateBackColor}
            >
              a
            </div>
          </div>
        </div> */}
      </section>

      {/* This version does not allow for text editing on right hand side 
          will need to update CSS*/}
      {/* <section className='output' ref={outputTag} value={text}></section> */}
      <textarea
        className='output'
        placeholder='The quick brown fox jumps over the lazy dog'
        value={text}
        style={{
          fontSize: fontSize + 'px',
          lineHeight: leading,
          fontStyle: checked,
          fontFamily: fontFam,
          fontWeight: weight,
        }}
      ></textarea>
    </div>
  );
}

export default App;
