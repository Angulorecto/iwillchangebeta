function reload() {
    window.location.reload();
}
function replace(iconType, iconSVG) {
    const icons = document.querySelectorAll(`.${iconType}`);
  
    icons.forEach(span => {
      const iconSVGImage = new DOMParser().parseFromString(iconSVG, 'image/svg+xml').querySelector('svg');
  
      span.parentNode.replaceChild(iconSVGImage, span);
    });
}

const icons = {
    linkIcon: `
    <svg class="linkCreatedIcon" xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
      <path d="M5645 9966 c-46 -17 -95 -68 -112 -117 -21 -59 -233 -1210 -233 -1266 0 -93 34 -144 121 -182 61 -27 143 -36 199 -21 52 14 109 68 127 120 22 61 233 1211 233 1267 0 62 -17 109 -51 140 -63 58 -206 87 -284 59z"/>
      <path d="M4159 9916 c-122 -33 -192 -110 -190 -212 0 -49 23 -110 187 -502 103 -246 212 -507 242 -581 66 -157 110 -214 182 -232 95 -24 237 33 286 116 51 89 48 100 -162 603 -103 246 -212 507 -242 580 -63 151 -107 211 -170 230 -48 15 -74 14 -133 -2z"/>
      <path d="M2953 9139 c-138 -68 -202 -216 -140 -321 39 -65 914 -934 959 -953 78 -32 160 -9 237 65 84 82 106 181 58 262 -39 65 -914 934 -959 953 -51 21 -105 19 -155 -6z"/>
      <path d="M7120 8389 c-321 -32 -648 -150 -914 -329 -56 -37 -120 -88 -144 -114 -88 -95 -133 -242 -113 -366 37 -226 249 -396 470 -377 92 8 151 31 260 99 218 137 364 186 601 203 216 16 473 -57 677 -192 88 -57 235 -205 297 -297 142 -212 203 -429 193 -686 -9 -217 -67 -394 -191 -579 -57 -84 -171 -202 -938 -967 -741 -739 -885 -878 -953 -921 -317 -199 -689 -232 -1033 -92 -475 193 -769 706 -688 1200 31 184 84 319 192 485 71 109 93 166 101 263 9 123 -27 224 -114 321 -97 108 -216 156 -361 148 -65 -4 -93 -11 -153 -40 -100 -48 -145 -90 -221 -205 -238 -363 -349 -724 -348 -1137 1 -553 217 -1059 615 -1445 63 -61 152 -138 197 -172 525 -389 1212 -501 1832 -298 216 70 452 197 630 336 110 86 1842 1823 1915 1921 302 402 452 901 412 1374 -34 412 -170 770 -412 1090 -127 167 -347 364 -540 485 -371 232 -824 336 -1269 292z"/>
      <path d="M4285 7429 c-374 -39 -752 -193 -1049 -426 -93 -73 -1753 -1729 -1858 -1853 -111 -132 -188 -251 -268 -415 -83 -169 -131 -308 -164 -475 -89 -441 -37 -878 153 -1275 108 -225 222 -388 393 -557 441 -437 1020 -646 1624 -587 265 26 492 92 744 219 116 58 281 171 329 226 89 100 132 240 112 365 -37 226 -248 395 -470 376 -92 -8 -151 -31 -260 -99 -218 -137 -364 -186 -601 -203 -168 -12 -348 24 -517 105 -139 66 -202 109 -310 213 -223 215 -343 497 -343 807 0 230 65 442 195 635 43 63 241 266 927 952 913 911 933 930 1088 1000 298 135 612 143 908 22 121 -49 218 -110 320 -201 210 -187 332 -418 371 -703 35 -250 -34 -541 -179 -755 -108 -159 -142 -294 -106 -425 53 -199 231 -338 432 -336 116 1 236 51 315 132 150 154 328 521 394 814 45 197 58 492 31 690 -63 453 -243 823 -560 1152 -173 180 -332 296 -561 408 -336 164 -721 233 -1090 194z"/>
      <path d="M6183 2609 c-138 -68 -202 -216 -140 -321 39 -65 914 -934 959 -953 78 -32 160 -9 237 65 84 82 106 181 58 262 -39 65 -914 934 -959 953 -51 21 -105 19 -155 -6z"/>
      <path d="M4355 2146 c-46 -17 -95 -68 -112 -117 -21 -59 -233 -1210 -233 -1266 0 -93 34 -144 121 -182 61 -27 143 -36 199 -21 52 14 109 68 127 120 22 61 233 1211 233 1267 0 62 -17 109 -51 140 -63 58 -206 87 -284 59z"/>
      <path d="M5319 2096 c-122 -33 -192 -110 -190 -212 0 -49 23 -110 187 -502 103 -246 212 -507 242 -581 66 -157 110 -214 182 -232 95 -24 237 33 286 116 51 89 48 100 -162 603 -103 246 -212 507 -242 580 -63 151 -107 211 -170 230 -48 15 -74 14 -133 -2z"/>
    </g>
    </svg>
    `,
    settingsIcon: `
      <svg class="linkCreatedIcon" xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid meet"><g id="svgg"><path id="path0" d="" stroke="none" fill="#FFFFFF" fill-rule="evenodd"></path><path id="path1" d="" stroke="none" fill="#FFFFFF" fill-rule="evenodd"></path><path id="path2" d="" stroke="none" fill="#FFFFFF" fill-rule="evenodd"></path><path id="path3" d="" stroke="none" fill="#FFFFFF" fill-rule="evenodd"></path><path id="path4" d="" stroke="none" fill="#FFFFFF" fill-rule="evenodd"></path></g></svg>
    `,
    logo: `
      <svg class="logoCreated" xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 307.000000 307.000000" preserveAspectRatio="xMidYMid meet">
<g><path style="opacity:1" fill="#dc5656" d="M 127.5,180.5 C 127.027,179.094 126.027,178.427 124.5,178.5C 109.696,170.599 95.3625,161.932 81.5,152.5C 81.0269,151.094 80.0269,150.427 78.5,150.5C 69.3551,145.712 60.6884,140.045 52.5,133.5C 52.1667,131.667 51.8333,129.833 51.5,128C 54.634,103.493 57.8006,78.9927 61,54.5C 61.8055,48.8781 62.9721,43.3781 64.5,38C 91.7446,25.2095 119.078,12.7095 146.5,0.5C 173.953,12.7261 201.286,25.2261 228.5,38C 229.714,40.3506 230.548,42.8506 231,45.5C 234.736,74.5381 238.403,103.538 242,132.5C 233.604,139.282 224.77,145.449 215.5,151C 193.213,164.527 170.88,177.86 148.5,191C 140.75,189.125 133.75,185.625 127.5,180.5 Z M 69.5,51.5 C 70.3094,50.5313 71.3094,49.6979 72.5,49C 71.5842,48.7216 70.9175,48.2216 70.5,47.5C 70.178,45.2776 70.8446,43.4443 72.5,42C 97.385,30.8216 122.218,19.655 147,8.5C 172.484,19.9095 197.817,31.5762 223,43.5C 227.674,70.0753 230.841,96.742 232.5,123.5C 204.438,135.44 175.938,146.44 147,156.5C 118.381,146.738 89.8813,136.571 61.5,126C 60.9415,125.275 60.6082,124.442 60.5,123.5C 63.7635,99.5312 66.7635,75.5312 69.5,51.5 Z M 215.5,140.5 C 215.5,140.833 215.5,141.167 215.5,141.5C 192.803,154.603 169.969,167.603 147,180.5C 125.99,168.586 105.157,156.586 84.5,144.5C 105.914,151.494 127.081,158.494 148,165.5C 170.352,156.786 192.852,148.453 215.5,140.5 Z M 80.5,143.5 C 80.5,142.833 80.8333,142.5 81.5,142.5C 83.0269,142.427 84.0269,143.094 84.5,144.5C 83.1667,144.167 81.8333,143.833 80.5,143.5 Z"/></g>
<g><path style="opacity:0.357" fill="#2b181a" d="M 70.5,47.5 C 70.9175,48.2216 71.5842,48.7216 72.5,49C 71.3094,49.6979 70.3094,50.5313 69.5,51.5C 69.2322,49.901 69.5655,48.5676 70.5,47.5 Z"/></g>
<g><path style="opacity:1" fill="#1f2029" d="M 77.5,48.5 C 80.0009,48.5109 80.1676,49.1776 78,50.5C 77.5357,49.9056 77.369,49.2389 77.5,48.5 Z"/></g>
<g><path style="opacity:0.698" fill="#753233" d="M 219.5,139.5 C 219.5,138.833 219.167,138.5 218.5,138.5C 219.943,137.297 221.609,136.797 223.5,137C 222.307,138.095 220.973,138.928 219.5,139.5 Z"/></g>
<g><path style="opacity:1" fill="#5d2928" d="M 217.5,138.5 C 217.5,139.167 217.833,139.5 218.5,139.5C 218.027,140.906 217.027,141.573 215.5,141.5C 215.5,141.167 215.5,140.833 215.5,140.5C 216.167,139.833 216.833,139.167 217.5,138.5 Z"/></g>
<g><path style="opacity:0.173" fill="#2d1717" d="M 81.5,142.5 C 80.8333,142.5 80.5,142.833 80.5,143.5C 79.0267,142.928 77.6934,142.095 76.5,141C 78.3908,140.797 80.0575,141.297 81.5,142.5 Z"/></g>
<g><path style="opacity:1" fill="#582726" d="M 78.5,150.5 C 80.0269,150.427 81.0269,151.094 81.5,152.5C 79.9731,152.573 78.9731,151.906 78.5,150.5 Z"/></g>
<g><path style="opacity:0.533" fill="#592626" d="M 124.5,178.5 C 126.027,178.427 127.027,179.094 127.5,180.5C 125.973,180.573 124.973,179.906 124.5,178.5 Z"/></g>
<g><path style="opacity:1" fill="#dc5656" d="M 197.5,195.5 C 199.027,195.573 200.027,194.906 200.5,193.5C 203.788,190.551 207.121,187.551 210.5,184.5C 211.768,183.572 213.101,183.405 214.5,184C 223.934,190.468 233.101,197.301 242,204.5C 239.149,214.862 234.149,224.195 227,232.5C 202.187,256.311 177.02,279.811 151.5,303C 148.242,305.104 145.242,304.77 142.5,302C 126.359,287.693 110.693,272.86 95.5,257.5C 95.1667,256.5 94.5,255.833 93.5,255.5C 82.9263,246.43 72.7596,236.764 63,226.5C 61.3545,224.391 60.1878,222.057 59.5,219.5C 59.7148,217.821 59.0481,216.821 57.5,216.5C 56.6226,213.699 55.4559,211.032 54,208.5C 53.2025,206.741 53.3691,205.074 54.5,203.5C 63.8333,196.5 73.1667,189.5 82.5,182.5C 103.848,201.179 125.515,219.513 147.5,237.5C 164.479,223.853 181.145,209.853 197.5,195.5 Z M 97.5,204.5 C 97.8333,205.5 98.5,206.167 99.5,206.5C 111.833,217.5 124.167,228.5 136.5,239.5C 136.973,240.906 137.973,241.573 139.5,241.5C 141.17,244.002 143.336,246.002 146,247.5C 166.617,232.047 186.784,216.047 206.5,199.5C 207.5,199.167 208.167,198.5 208.5,197.5C 210.47,194.687 213.137,193.52 216.5,194C 220.5,197 224.5,200 228.5,203C 201.579,225.925 174.079,248.092 146,269.5C 119.09,249.26 92.7567,228.26 67,206.5C 67.1953,204.255 68.3619,202.422 70.5,201C 74.7565,197.955 78.9232,194.788 83,191.5C 88.028,195.699 92.8613,200.032 97.5,204.5 Z M 162.5,282.5 C 160.973,282.427 159.973,283.094 159.5,284.5C 156.703,286.795 154.036,289.295 151.5,292C 149.788,293.751 147.788,294.418 145.5,294C 132.167,282.333 118.833,270.667 105.5,259C 91.6376,246.636 78.3043,233.803 65.5,220.5C 65.3284,219.508 65.6618,218.842 66.5,218.5C 84.2139,232.882 102.214,246.882 120.5,260.5C 120.973,261.906 121.973,262.573 123.5,262.5C 127.254,266.548 131.587,269.882 136.5,272.5C 136.973,273.906 137.973,274.573 139.5,274.5C 141.481,276.303 143.648,277.97 146,279.5C 174.303,258.193 202.303,236.526 230,214.5C 230.667,215.167 230.667,215.833 230,216.5C 228,219.167 226,221.833 224,224.5C 203.82,244.446 183.32,263.78 162.5,282.5 Z"/></g>
<g><path style="opacity:1" fill="#4a2323" d="M 200.5,193.5 C 200.027,194.906 199.027,195.573 197.5,195.5C 197.973,194.094 198.973,193.427 200.5,193.5 Z"/></g>
<g><path style="opacity:0.027" fill="#201312" d="M 208.5,197.5 C 208.167,198.5 207.5,199.167 206.5,199.5C 206.5,198.167 207.167,197.5 208.5,197.5 Z"/></g>
<g><path style="opacity:1" fill="#331b1b" d="M 97.5,204.5 C 98.8333,204.5 99.5,205.167 99.5,206.5C 98.5,206.167 97.8333,205.5 97.5,204.5 Z"/></g>
<g><path style="opacity:1" fill="#5d2a2a" d="M 57.5,216.5 C 59.0481,216.821 59.7148,217.821 59.5,219.5C 58.5987,218.71 57.9321,217.71 57.5,216.5 Z"/></g>
<g><path style="opacity:0.427" fill="#251112" d="M 66.5,218.5 C 65.6618,218.842 65.3284,219.508 65.5,220.5C 64.4017,219.399 64.235,218.066 65,216.5C 65.7172,217.044 66.2172,217.711 66.5,218.5 Z"/></g>
<g><path style="opacity:1" fill="#5c2928" d="M 136.5,239.5 C 138.027,239.427 139.027,240.094 139.5,241.5C 137.973,241.573 136.973,240.906 136.5,239.5 Z"/></g>
<g><path style="opacity:0.008" fill="#2f1817" d="M 93.5,255.5 C 94.5,255.833 95.1667,256.5 95.5,257.5C 94.1667,257.5 93.5,256.833 93.5,255.5 Z"/></g>
<g><path style="opacity:1" fill="#462120" d="M 120.5,260.5 C 122.027,260.427 123.027,261.094 123.5,262.5C 121.973,262.573 120.973,261.906 120.5,260.5 Z"/></g>
<g><path style="opacity:1" fill="#5d2a2a" d="M 136.5,272.5 C 138.027,272.427 139.027,273.094 139.5,274.5C 137.973,274.573 136.973,273.906 136.5,272.5 Z"/></g>
<g><path style="opacity:1" fill="#5f2a29" d="M 162.5,282.5 C 162.027,283.906 161.027,284.573 159.5,284.5C 159.973,283.094 160.973,282.427 162.5,282.5 Z"/></g>
</svg>
    `,
    chatIcon: `
      <svg class="chatCreatedIcon" xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid meet">
<desc>Created with Fabric.js 5.2.4</desc>
<defs>
</defs>
<g transform="matrix(1 0 0 1 540 540)" id="3eb792a7-3f20-4b3e-bc6f-d999085fc633"  >
<rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" />
</g>
<g transform="matrix(1 0 0 1 540 540)" id="0f33eea2-d15d-46ad-8406-5b59d29e2acf"  >
</g>
<g transform="matrix(1.94 0 0 1.94 1326 1370.38)"  >
<g style=""   >
		<g transform="matrix(1.33 0 0 1.33 -415.74 -416.02)" id="path0"  >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(252,252,252); fill-rule: evenodd; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-200.2, -199.99)" d="M 61.613 53.325 C 45.499 56.034 36.019 65.603 33.39 81.813 C 32.529 87.116 32.529 221.477 33.39 226.78 C 35.912 242.331 44.119 251.166 59.579 254.971 C 62.103 255.593 69.026 255.657 153.222 255.848 L 244.138 256.055 L 266.686 301.66 C 279.088 326.743 289.332 347.266 289.453 347.266 C 289.573 347.266 299.761 326.831 312.093 301.855 C 324.425 276.88 334.627 256.31 334.765 256.145 C 334.902 255.979 336.595 255.589 338.526 255.276 C 354.833 252.639 364.352 243.113 367.001 226.78 C 367.861 221.477 367.861 87.116 367.001 81.813 C 364.35 65.47 354.843 55.962 338.499 53.311 C 333.507 52.502 66.431 52.515 61.613 53.325 M 117.553 127.964 C 144.948 134.589 144.948 174.395 117.553 181.021 C 100.493 185.146 83.984 172.1 83.984 154.492 C 83.984 136.885 100.493 123.838 117.553 127.964 M 206.616 127.964 C 234.011 134.589 234.011 174.395 206.616 181.021 C 189.556 185.146 173.047 172.1 173.047 154.492 C 173.047 136.885 189.556 123.838 206.616 127.964 M 293.725 127.964 C 321.12 134.589 321.12 174.395 293.725 181.021 C 276.665 185.146 260.156 172.1 260.156 154.492 C 260.156 136.885 276.665 123.838 293.725 127.964" stroke-linecap="round" />
</g>
		<g transform="matrix(1.33 0 0 1.33 -417.18 -476.55)" id="path1"  >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(137,137,137); fill-rule: evenodd; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-199.12, -154.59)" d="M 91.776 135.449 L 90.43 136.914 L 91.895 135.568 C 93.258 134.315 93.539 133.984 93.241 133.984 C 93.175 133.984 92.516 134.644 91.776 135.449 M 130.078 135.352 C 130.807 136.104 131.491 136.719 131.599 136.719 C 131.706 136.719 131.198 136.104 130.469 135.352 C 129.74 134.6 129.056 133.984 128.948 133.984 C 128.841 133.984 129.349 134.6 130.078 135.352 M 180.838 135.449 L 179.492 136.914 L 180.957 135.568 C 181.763 134.828 182.422 134.168 182.422 134.103 C 182.422 133.805 182.091 134.086 180.838 135.449 M 219.141 135.352 C 219.869 136.104 220.554 136.719 220.661 136.719 C 220.768 136.719 220.26 136.104 219.531 135.352 C 218.802 134.6 218.118 133.984 218.011 133.984 C 217.903 133.984 218.412 134.6 219.141 135.352 M 267.948 135.449 L 266.602 136.914 L 268.066 135.568 C 269.43 134.315 269.711 133.984 269.413 133.984 C 269.347 133.984 268.688 134.644 267.948 135.449 M 306.25 135.352 C 306.979 136.104 307.663 136.719 307.77 136.719 C 307.878 136.719 307.369 136.104 306.641 135.352 C 305.912 134.6 305.228 133.984 305.12 133.984 C 305.013 133.984 305.521 134.6 306.25 135.352 M 91.797 173.633 C 92.526 174.385 93.21 175 93.317 175 C 93.425 175 92.916 174.385 92.188 173.633 C 91.459 172.881 90.774 172.266 90.667 172.266 C 90.56 172.266 91.068 172.881 91.797 173.633 M 130.057 173.73 L 128.711 175.195 L 130.176 173.849 C 130.981 173.109 131.641 172.45 131.641 172.384 C 131.641 172.086 131.31 172.367 130.057 173.73 M 180.859 173.633 C 181.588 174.385 182.272 175 182.38 175 C 182.487 175 181.979 174.385 181.25 173.633 C 180.521 172.881 179.837 172.266 179.73 172.266 C 179.622 172.266 180.131 172.881 180.859 173.633 M 219.12 173.73 L 217.773 175.195 L 219.238 173.849 C 220.602 172.596 220.883 172.266 220.584 172.266 C 220.519 172.266 219.86 172.925 219.12 173.73 M 267.969 173.633 C 268.698 174.385 269.382 175 269.489 175 C 269.597 175 269.088 174.385 268.359 173.633 C 267.631 172.881 266.946 172.266 266.839 172.266 C 266.732 172.266 267.24 172.881 267.969 173.633 M 306.229 173.73 L 304.883 175.195 L 306.348 173.849 C 307.711 172.596 307.992 172.266 307.694 172.266 C 307.629 172.266 306.969 172.925 306.229 173.73" stroke-linecap="round" />
</g>
		<g transform="matrix(1.33 0 0 1.33 -682.67 -682.67)" id="path2"  >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(188,188,188); fill-rule: evenodd; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(0, 0)" d="" stroke-linecap="round" />
</g>
		<g transform="matrix(1.33 0 0 1.33 -682.67 -682.67)" id="path3"  >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(180,180,180); fill-rule: evenodd; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(0, 0)" d="" stroke-linecap="round" />
</g>
		<g transform="matrix(1.33 0 0 1.33 -682.67 -682.67)" id="path4"  >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(228,228,228); fill-rule: evenodd; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(0, 0)" d="" stroke-linecap="round" />
</g>
</g>
</g>
</svg>
    `
};

document.addEventListener("DOMContentLoaded", function() {
    Object.keys(icons).forEach(iconType => {
        replace(iconType, icons[iconType]);
    });
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.key === 'r') {
    location.reload();
  }
});
