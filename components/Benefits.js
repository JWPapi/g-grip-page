//The benefit section is a 4 column grid that splits into 2 columns on mobile. Each column contains an image and a title

import Image from 'next/image'

export default function Benefits () {
  return (<div className="mb-16">
    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-4 gap-y-12 mb-8 leading-snug">
      <div className="flex flex-col gap-4 items-center">
        <div style={{ width: '128px', height: '128px', position: 'relative' }}>
          <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <defs>
            </defs>
            <g id="Layer_1-2">
              <g>
                <rect style={{fill: '#fff'}} width="1000" height="1000"/>
                <g>
                  <path style={{fill: "#e10a17"}}
                        d="m535.47,947.15h-70.94c-100.1,0-181.53-79.39-181.53-176.98V144.02c0-29.89,12.15-55.37,34.21-71.74,27.85-20.67,68.47-25.07,111.46-12.07l145.6,44.02c78.71,23.8,142.75,99.15,142.75,167.97v497.97c0,97.59-81.43,176.98-181.53,176.98ZM381.44,62.93c-22.51,0-42.67,5.89-58.22,17.44-19.72,14.64-30.14,36.65-30.14,63.65v626.15c0,92.03,76.91,166.9,171.45,166.9h70.94c94.54,0,171.45-74.87,171.45-166.9v-497.97c0-64.69-60.82-135.71-135.58-158.32l-145.6-44.02c-15.32-4.63-30.27-6.92-44.3-6.92Z"/>
                  <g>
                    <path style={{fill: "#e10a17"}}
                          d="m488.49,146.08c11.64,0,25.06,1.77,38.97,5.48l34.33,9.15c6.68,1.78,11.52,5.45,10.79,8.18-.46,1.74-3.07,2.68-6.62,2.68-2.03,0-4.38-.31-6.81-.96l-34.33-9.15c-9.05-2.41-17.78-3.57-25.36-3.57-13.24,0-22.94,3.52-24.66,9.99-2.71,10.17,15.32,23.83,40.19,30.46,8.94,2.38,17.73,3.57,25.41,3.57s14.52-1.24,19.04-3.71c.67-.37.7-.99.08-1.65-.62-.66-1.82-1.28-3.17-1.64l-37.76-10.06c-6.68-1.78-11.52-5.45-10.79-8.18.46-1.74,3.07-2.68,6.62-2.68,2.03,0,4.38.31,6.81.96l57.21,15.25c6.68,1.78,11.52,5.45,10.79,8.18-2.65,9.94-17.56,15.35-37.9,15.35-11.64,0-25.06-1.77-38.97-5.48-38.22-10.19-65.93-31.19-61.77-46.82,2.65-9.94,17.56-15.35,37.9-15.35m0-10.08c-26.41,0-43.78,8.32-47.64,22.83-5.04,18.93,17.01,45.32,68.91,59.16,14.29,3.81,28.66,5.82,41.57,5.82,26.41,0,43.78-8.32,47.64-22.83.69-2.58,1.45-9.22-6.27-15.07-3.1-2.35-7.14-4.23-11.67-5.44l-4.73-1.26c4.22-2.49,5.61-6.2,6.02-7.72,2.34-8.79-4.87-17.03-17.93-20.51l-34.33-9.15c-14.29-3.81-28.66-5.82-41.57-5.82h0Zm-3.57,34.61c1.61-.96,6.01-2.63,14.55-2.63.78,0,1.56.01,2.36.04-2.5,2.26-3.44,4.86-3.76,6.06-.38,1.41-.78,4.04.2,7.09-7.74-4.13-12.14-8.31-13.34-10.57h0Z"/>
                    <path style={{fill: "#e10a17"}}
                          d="m470.39,126.67c18.32,0,39.46,2.79,61.4,8.64,60.24,16.06,103.75,49.04,97.19,73.67-4.17,15.66-27.58,24.17-59.56,24.17-18.32,0-39.46-2.79-61.4-8.64-60.24-16.06-103.75-49.04-97.19-73.67,4.17-15.66,27.58-24.17,59.56-24.17m0-10.08h0c-38.68,0-63.94,11.54-69.3,31.66-4.3,16.13,5.36,34.13,27.19,50.68,19.37,14.69,46.77,27.23,77.14,35.33,22.05,5.88,44.18,8.98,64,8.98,38.68,0,63.94-11.54,69.3-31.66,9.41-35.29-46.73-70.65-104.33-86.01-22.05-5.88-44.18-8.98-63.99-8.98h0Z"/>
                  </g>
                  <path style={{fill: "#e10a17"}}
                        d="m580.33,271.75c-20.73,0-46.09-3.11-76.61-9.26-106.04-21.38-134.66-92.89-136.74-118.64-.83-10.31-1.88-13.04-6.61-17.19-3.63-3.18-12.07.68-23.61,6.49-12.13,6.09-23,17.12-23.1,17.23-1.94,1.99-5.13,2.03-7.13.08-1.99-1.95-2.03-5.13-.08-7.12.49-.5,12.12-12.33,25.79-19.19,13.25-6.66,25.78-12.95,34.78-5.06,7.48,6.57,9.08,12.44,10.01,23.95.07.85,10.19,85.68,128.69,109.57,101.44,20.45,125.41,1.78,134.62-14.04,4.03-6.93,6.18-13.8,8.08-19.87,1.76-5.63,3.28-10.49,5.93-14.09,2.85-3.86,6.16-4.87,8.44-5.03,3.84-.27,7.9,1.62,11.67,5.46,9.56,9.73,16.74,21.15,19.98,27.98,1.19,2.51.12,5.52-2.39,6.72-2.51,1.2-5.52.13-6.72-2.39-2.34-4.93-8.78-15.79-18.07-25.25-2.06-2.1-3.37-2.5-3.77-2.47-.14,0-.53.27-1.04.95-1.65,2.24-2.94,6.36-4.42,11.12-1.95,6.25-4.39,14.03-8.99,21.94-10.98,18.86-32.97,28.11-68.72,28.11Z"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h5 className="text-center">Ergonomic grip</h5>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div style={{ width: '128px', height: '128px', position: 'relative' }}>
          <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <g id="Layer_1-2">
              <g>
                <g>
                  <path style={{fill: "#e10a17"}}
                        d="m585.05,479c16.54,0,30.01,7.48,30.01,16.67s-13.46,16.67-30.01,16.67h-85.05c-61.62,0-111.75,27.85-111.75,62.08s50.13,62.08,111.75,62.08c44.74,0,85.07-14.78,102.74-37.66,1.33-1.72,1.01-3.69-.84-5.25-1.85-1.56-4.99-2.5-8.35-2.5h-93.55c-16.54,0-30-7.48-30-16.67s13.46-16.67,30-16.67h141.76c16.54,0,30.01,7.48,30.01,16.67,0,52.61-77.05,95.41-171.76,95.41s-171.76-42.8-171.76-95.41,77.05-95.42,171.76-95.42h85.05m0-10.08h-85.05c-47.49,0-92.34,10.39-126.29,29.25-35.82,19.9-55.55,46.98-55.55,76.25s19.73,56.35,55.55,76.25c33.95,18.86,78.8,29.25,126.29,29.25s92.34-10.39,126.29-29.25c35.82-19.9,55.55-46.98,55.55-76.25,0-15.25-17.23-26.75-40.08-26.75h-141.76c-22.85,0-40.08,11.5-40.08,26.75s17.23,26.75,40.08,26.75h86.44c-18.59,15.4-51.43,25.25-86.44,25.25-55.11,0-101.67-23.81-101.67-52s46.56-52,101.67-52h85.05c22.85,0,40.08-11.5,40.08-26.75s-17.23-26.75-40.08-26.75h0Z"/>
                  <g>
                    <path style={{fill: "#e10a17"}}
                          d="m754.2,528.39c-1.65,0-3.26-.81-4.23-2.29-37.69-57.88-138.15-96.77-249.97-96.77s-212.28,38.89-249.97,96.77c-1.51,2.33-4.64,3-6.97,1.47-2.33-1.52-2.99-4.64-1.47-6.97,39.47-60.62,143.32-101.35,258.41-101.35s218.94,40.73,258.41,101.35c1.52,2.33.86,5.46-1.47,6.97-.85.55-1.8.82-2.75.82Z"/>
                    <path style={{fill: "#e10a17"}}
                          d="m500,769.37c-163.45,0-296.43-74.87-296.43-166.91,0-29.06,13.38-57.65,38.69-82.7,1.83-1.82,4.73-1.95,6.73-.32,2,1.63,2.44,4.5,1.04,6.66-10.12,15.53-15.25,31.79-15.25,48.32,0,80,118.98,145.09,265.22,145.09s265.22-65.09,265.22-145.09c0-16.53-5.13-32.79-15.25-48.32-1.41-2.16-.96-5.03,1.04-6.66,1.99-1.63,4.89-1.49,6.73.32,25.31,25.04,38.69,53.64,38.69,82.7,0,92.03-132.98,166.91-296.43,166.91Zm-273.42-213.23c-8.52,14.97-12.92,30.62-12.92,46.33,0,86.47,128.46,156.83,286.35,156.83s286.35-70.35,286.35-156.83c0-15.71-4.4-31.35-12.92-46.33,1.25,6.04,1.87,12.14,1.87,18.28,0,85.56-123.5,155.17-275.3,155.17s-275.3-69.61-275.3-155.17c0-6.14.63-12.24,1.87-18.28Z"/>
                    <path style={{fill: "#e10a17"}}
                          d="m500,729.59c-151.8,0-275.3-69.61-275.3-155.17,0-18.51,5.68-36.62,16.88-53.82,1.52-2.33,4.64-3,6.97-1.47,2.33,1.52,2.99,4.64,1.47,6.97-10.12,15.53-15.25,31.79-15.25,48.32,0,80,118.98,145.09,265.22,145.09s265.22-65.09,265.22-145.09c0-16.53-5.13-32.79-15.25-48.32-1.52-2.33-.86-5.46,1.47-6.97,2.34-1.53,5.46-.86,6.97,1.47,11.2,17.2,16.88,35.31,16.88,53.82,0,85.56-123.5,155.17-275.3,155.17Z"/>
                  </g>
                  <g>
                    <path style={{fill: "#e10a17"}}
                          d="m195.83,610.49c-.94,0-1.9-.26-2.75-.82-2.33-1.52-2.99-4.64-1.47-6.97,3.85-5.91,8.29-11.77,13.2-17.42,1.82-2.1,5-2.33,7.11-.5,2.1,1.83,2.33,5.01.5,7.11-4.6,5.3-8.76,10.79-12.36,16.31-.96,1.48-2.58,2.29-4.23,2.29Z"/>
                    <path style={{fill: "#e10a17"}}
                          d="m804.17,610.49c-1.65,0-3.26-.81-4.23-2.29-3.6-5.53-7.76-11.02-12.36-16.31-1.83-2.1-1.6-5.28.5-7.11,2.1-1.83,5.28-1.6,7.11.5,4.9,5.65,9.34,11.51,13.2,17.42,1.52,2.33.86,5.46-1.47,6.97-.85.55-1.8.82-2.75.82Z"/>
                    <path style={{fill: "#e10a17"}}
                          d="m500,851.24c-181.1,0-328.43-82.85-328.43-184.69,0-21.96,6.74-43.44,20.04-63.86,1.52-2.33,4.64-2.99,6.97-1.47,2.33,1.52,2.99,4.64,1.47,6.97-12.21,18.75-18.4,38.39-18.4,58.36,0,96.28,142.81,174.61,318.35,174.61s318.35-78.33,318.35-174.61c0-19.97-6.19-39.61-18.4-58.36-1.52-2.33-.86-5.46,1.47-6.97s5.46-.86,6.97,1.47c13.3,20.41,20.04,41.9,20.04,63.86,0,101.84-147.33,184.69-328.43,184.69Z"/>
                  </g>
                  <g>
                    <path style={{fill: "#e10a17"}}
                          d="m579.04,324.33c-.89,0-1.8-.24-2.61-.73-22.97-13.97-49.39-21.36-76.42-21.36s-53.45,7.38-76.42,21.36c-2.37,1.44-5.48.69-6.92-1.69-1.45-2.38-.69-5.48,1.69-6.92,24.55-14.93,52.78-22.82,81.66-22.82s57.11,7.89,81.66,22.83c2.38,1.45,3.14,4.55,1.69,6.92-.95,1.56-2.61,2.42-4.31,2.42Z"/>
                    <path style={{fill: "#e10a17"}}
                          d="m375.48,268.85c-1.62,0-3.2-.78-4.18-2.21-1.56-2.31-.95-5.44,1.35-7,37.66-25.48,81.7-38.95,127.35-38.95s89.59,13.44,127.22,38.86c2.31,1.56,2.91,4.69,1.35,7-1.56,2.3-4.69,2.91-7,1.35-35.96-24.29-78-37.13-121.57-37.13s-85.72,12.87-121.7,37.22c-.87.59-1.85.87-2.82.87Z"/>
                    <path style={{fill: "#e10a17"}}
                          d="m671.76,213.82c-1.01,0-2.04-.31-2.93-.94-49.45-35.35-107.83-54.04-168.83-54.04s-119.38,18.68-168.83,54.04c-2.27,1.62-5.41,1.09-7.03-1.17-1.62-2.26-1.1-5.41,1.17-7.03,51.17-36.58,111.58-55.92,174.69-55.92s123.52,19.33,174.69,55.92c2.26,1.62,2.79,4.77,1.17,7.03-.98,1.38-2.53,2.11-4.1,2.11Z"/>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h5 className="text-center">Bluetooth® shutter</h5>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div style={{ width: '128px', height: '128px', position: 'relative' }}>
          <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <g id="Layer_1-2">
              <g>
                <g>
                  <path style={{fill: "#e10a17"}}
                        d="m851.22,833.35H148.78c-38.29,0-69.45-31.16-69.45-69.45v-268.18c0-27.04,15.88-51.81,40.45-63.12,2.52-1.17,5.53-.06,6.68,2.47,1.17,2.53.06,5.52-2.47,6.68-21.01,9.67-34.58,30.85-34.58,53.97v268.18c0,32.74,26.64,59.37,59.37,59.37h702.44c32.74,0,59.38-26.64,59.38-59.37v-268.18c0-32.74-26.64-59.37-59.38-59.37H282.88c-2.79,0-5.04-2.26-5.04-5.04s2.25-5.04,5.04-5.04h568.34c38.3,0,69.46,31.16,69.46,69.45v268.18c0,38.3-31.16,69.45-69.46,69.45Z"/>
                  <path style={{fill: "#e10a17"}}
                        d="m215.85,512.54h-26.95c-39.74,0-72.07-31.55-72.07-70.34v-237.8c0-12.37,5.06-22.93,14.25-29.76,11.38-8.45,27.81-10.29,45.1-5.06l55.29,16.72c31.12,9.41,56.44,39.37,56.44,66.78v189.12c0,38.78-32.33,70.34-72.07,70.34Zm-58.51-335.82c-7.87,0-14.87,2.03-20.24,6.01-6.66,4.95-10.18,12.44-10.18,21.66v237.8c0,33.23,27.81,60.26,61.99,60.26h26.95c34.18,0,61.99-27.03,61.99-60.26v-189.12c0-23.29-22.1-48.92-49.27-57.13h0l-55.29-16.72c-5.53-1.67-10.91-2.5-15.94-2.5Z"/>
                  <path style={{fill: "#e10a17"}}
                        d="m228.97,245.84c-7.82,0-16.48-1.25-24.84-3.48-11.68-3.11-22.24-7.95-29.72-13.62-8.71-6.6-12.54-13.89-10.76-20.53,1.76-6.63,8.71-11.05,19.55-12.44,9.32-1.2,20.87-.14,32.56,2.98,23,6.13,44.29,19.83,40.48,34.15,0,0,0,0,0,0-2.43,9.11-13.56,12.94-27.26,12.94Zm-37.78-40.47c-2.36,0-4.61.13-6.71.4-6.98.9-10.6,3.18-11.09,5.04-.5,1.87,1.51,5.65,7.11,9.9,6.46,4.9,15.78,9.13,26.23,11.92,21.97,5.85,38.48,2.48,39.77-2.33,1.27-4.81-11.37-15.96-33.34-21.81-7.71-2.06-15.29-3.12-21.96-3.12Zm60.17,26.23h.05-.05Z"/>
                  <path style={{fill: "#e10a17"}}
                        d="m838.59,680.15h-111.05c-33.24,0-60.28-27.04-60.28-60.28v-111.05c0-33.24,27.04-60.28,60.28-60.28h111.05c33.24,0,60.27,27.04,60.27,60.28v111.05c0,33.24-27.04,60.28-60.27,60.28Zm-111.05-221.52c-27.68,0-50.2,22.52-50.2,50.2v111.05c0,27.68,22.52,50.2,50.2,50.2h111.05c27.68,0,50.2-22.52,50.2-50.2v-111.05c0-27.68-22.52-50.2-50.2-50.2h-111.05Z"/>
                  <g>
                    <path style={{fill: "#e10a17"}}
                          d="m733.37,565.11c-25.92,0-47-21.09-47-47s21.08-47.01,47-47.01,47.01,21.09,47.01,47.01-21.09,47-47.01,47Zm0-83.93c-20.36,0-36.92,16.57-36.92,36.93s16.56,36.92,36.92,36.92,36.93-16.56,36.93-36.92-16.57-36.93-36.93-36.93Z"/>
                    <path style={{fill: "#e10a17"}}
                          d="m783.07,657.6c-25.92,0-47.01-21.09-47.01-47s21.09-47.01,47.01-47.01,47.01,21.09,47.01,47.01-21.09,47-47.01,47Zm0-83.93c-20.36,0-36.93,16.57-36.93,36.93s16.57,36.92,36.93,36.92,36.93-16.56,36.93-36.92-16.57-36.93-36.93-36.93Z"/>
                    <path style={{fill: "#e10a17"}}
                          d="m832.76,565.11c-25.92,0-47-21.09-47-47s21.08-47.01,47-47.01,47.01,21.09,47.01,47.01-21.09,47-47.01,47Zm0-83.93c-20.36,0-36.92,16.57-36.92,36.93s16.56,36.92,36.92,36.92,36.93-16.56,36.93-36.92-16.57-36.93-36.93-36.93Z"/>
                    <path style={{fill: "#e10a17"}}
                          d="m711.29,633.03c-12.22,0-22.16-9.94-22.16-22.16s9.94-22.16,22.16-22.16,22.16,9.94,22.16,22.16-9.94,22.16-22.16,22.16Zm0-34.23c-6.66,0-12.08,5.42-12.08,12.08s5.42,12.08,12.08,12.08,12.08-5.42,12.08-12.08-5.42-12.08-12.08-12.08Z"/>
                    <path style={{fill: "#e10a17"}}
                          d="m854.85,633.03c-12.22,0-22.16-9.94-22.16-22.16s9.94-22.16,22.16-22.16,22.16,9.94,22.16,22.16-9.94,22.16-22.16,22.16Zm0-34.23c-6.66,0-12.08,5.42-12.08,12.08s5.42,12.08,12.08,12.08,12.08-5.42,12.08-12.08-5.42-12.08-12.08-12.08Z"/>
                  </g>
                  <path style={{fill: "#e10a17"}}
                        d="m205.24,779.26h-4.94c-28.53,0-51.75-23.21-51.75-51.74v-130.15c0-28.53,23.22-51.74,51.75-51.74h4.94c28.53,0,51.74,23.21,51.74,51.74v130.15c0,28.53-23.21,51.74-51.74,51.74Zm-4.94-223.56c-22.97,0-41.67,18.69-41.67,41.66v130.15c0,22.97,18.69,41.66,41.67,41.66h4.94c22.97,0,41.66-18.69,41.66-41.66v-130.15c0-22.97-18.69-41.66-41.66-41.66h-4.94Z"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h5 className="text-center">Unique slide on<br/>and off system</h5>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div style={{ width: '128px', height: '128px', position: 'relative' }}>
          <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <g id="Layer_1-2">
              <g>
                <g>
                  <path style={{fill: "#e10a17"}}
                        d="m655.82,913.26h-311.64c-33.52,0-60.78-27.27-60.78-60.78V191.56c0-33.52,27.27-60.78,60.78-60.78h311.64c33.52,0,60.79,27.27,60.79,60.78v660.91c0,33.52-27.27,60.78-60.79,60.78ZM344.18,140.86c-27.96,0-50.7,22.75-50.7,50.7v660.91c0,27.96,22.74,50.7,50.7,50.7h311.64c27.96,0,50.71-22.75,50.71-50.7V191.56c0-27.96-22.75-50.7-50.71-50.7h-311.64Z"/>
                  <path style={{fill: "#e10a17"}}
                        d="m570.52,140.86h-141.04c-2.79,0-5.04-2.26-5.04-5.04v-40.75c0-2.78,2.25-5.04,5.04-5.04h141.04c2.79,0,5.04,2.26,5.04,5.04v40.75c0,2.78-2.25,5.04-5.04,5.04Zm-136-10.08h130.96v-30.67h-130.96v30.67Z"/>
                  <path style={{fill: "#e10a17"}}
                        d="m483.12,744.19c-.37,0-.75-.04-1.12-.13-2.29-.52-3.92-2.56-3.92-4.91v-184.78h-77.06c-1.73,0-3.35-.89-4.27-2.36-.92-1.47-1.02-3.31-.28-4.87l115.85-240.5c1.02-2.11,3.37-3.24,5.66-2.73,2.29.52,3.92,2.56,3.92,4.91v184.78h77.07c1.73,0,3.35.89,4.27,2.36.92,1.47,1.02,3.31.28,4.87l-115.85,240.51c-.86,1.77-2.64,2.85-4.54,2.85Zm-74.08-199.9h74.08c2.79,0,5.04,2.26,5.04,5.04v167.74l102.79-213.39h-74.08c-2.79,0-5.04-2.26-5.04-5.04v-167.74l-102.79,213.39Z"/>
                </g>
              </g>
            </g>
          </svg>        </div>
        <h5 className="text-center">20 hours battery<br/>(4,000 standby)</h5>

      </div>
    </div>
  </div>)
}
