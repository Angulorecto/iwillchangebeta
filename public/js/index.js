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
      <svg class="chatCreatedIcon" xmlns="http://www.w3.org/2000/svg" version="1.0" width="1024.000000pt" height="1024.000000pt" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid meet">
<g transform="matrix(1 0 0 1 540 540)" id="e2e65038-f679-4fc3-836b-382002d5dd76"  >
<rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" />
</g>
<g transform="matrix(1 0 0 1 540 540)" id="7b8f678a-b20b-4719-a52a-c3672f944826"  >
</g>
<g transform="matrix(2.35 0 0 2.35 540 540)"  >
<g style=""   >
		<g transform="matrix(0.03 0 0 0.03 0.91 0.91)" id="8"  >
<rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" />
</g>
		<g transform="matrix(0.03 0 0 0.03 0.91 2.32)"  >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(254,254,254); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-415.99, -457.06)" d="M 0 0 C 1.48008742 -0.0023949 2.96017363 -0.00566332 4.44025743 -0.0097166 C 8.48931063 -0.018291 12.53827047 -0.01452923 16.58732499 -0.00866088 C 20.99939145 -0.00447536 25.41144135 -0.01190112 29.82350373 -0.01781338 C 37.55040245 -0.02656414 45.27727466 -0.02789149 53.00417709 -0.02431011 C 64.49464119 -0.01899842 75.98507968 -0.02510312 87.47554099 -0.03339304 C 109.19242247 -0.04863032 130.90929229 -0.05033839 152.626178 -0.04787002 C 169.39679685 -0.04603706 186.16741187 -0.04779703 202.93803024 -0.05209446 C 205.34781987 -0.05269686 207.7576095 -0.05329806 210.16739912 -0.05389806 C 213.79876717 -0.05480532 217.43013521 -0.05571399 221.06150325 -0.05663041 C 254.82271011 -0.06505959 288.58391553 -0.06939588 322.34512329 -0.06522369 C 323.61776191 -0.06506732 324.89040054 -0.06491094 326.20160397 -0.06474983 C 332.65177334 -0.06394405 339.10194271 -0.06309828 345.55211207 -0.06223653 C 346.83312529 -0.06206544 348.11413851 -0.06189435 349.43397031 -0.06171808 C 352.02448991 -0.06137142 354.61500951 -0.06102289 357.20552911 -0.06067249 C 397.51409435 -0.05531528 437.82263772 -0.06324586 478.13119888 -0.08170605 C 523.42363332 -0.10242444 568.71605422 -0.11314907 614.00849366 -0.10913056 C 618.83835872 -0.10873522 623.66822378 -0.10837367 628.49808884 -0.10803318 C 629.68731386 -0.10794245 630.87653887 -0.10785172 632.10180101 -0.10775824 C 650.05012072 -0.10659253 667.99842673 -0.11323857 685.94674301 -0.1238451 C 706.36057166 -0.13589636 726.77437016 -0.13745689 747.18819925 -0.12505493 C 758.60913549 -0.11842683 770.02999965 -0.12005633 781.45093012 -0.13364345 C 789.08504514 -0.14189226 796.71910621 -0.13918476 804.35321686 -0.12766818 C 808.6993415 -0.1214161 813.04532555 -0.11979973 817.39144203 -0.13153151 C 821.35481417 -0.14213132 825.31792767 -0.13861942 829.28128628 -0.12442699 C 830.69688727 -0.1217259 832.11250953 -0.12390847 833.52809034 -0.13193413 C 857.86576478 -0.26036312 883.90564453 5.75962284 901.91122818 23.05916309 C 903.28978892 24.43748846 904.63843868 25.84553218 905.98569107 27.25447559 C 906.72432388 28.02275684 907.4629567 28.79103809 908.22397232 29.58260059 C 925.36786231 49.15659537 928.30068179 75.98910375 928.24638748 100.88808155 C 928.24941213 102.86296633 928.25330318 104.83784994 928.25798005 106.8127315 C 928.26822845 112.21191374 928.26608629 117.61102933 928.26179945 123.01021695 C 928.25932647 128.84404952 928.26835352 134.67786627 928.27583694 140.511693 C 928.28857026 151.93039507 928.29037932 163.34907361 928.28803668 174.76778159 C 928.28625176 184.05222577 928.28800689 193.33666282 928.29226112 202.62110615 C 928.29286354 203.95719542 928.29346474 205.29328468 928.29406473 206.62937395 C 928.29497203 208.64298738 928.2958807 210.6566008 928.29679708 212.67021422 C 928.30522124 231.3811134 928.30956604 250.09200999 928.30539036 268.8029108 C 928.30523398 269.50761395 928.30507761 270.21231709 928.30491649 270.93837488 C 928.30411077 274.50970588 928.30326499 278.08103687 928.30240319 281.65236786 C 928.3022321 282.36158519 928.30206101 283.07080251 928.30188474 283.80151128 C 928.30153808 285.2357196 928.30118955 286.66992792 928.30083915 288.10413624 C 928.29548338 310.4145189 928.30341049 332.72486202 928.32187271 355.03523731 C 928.34261426 380.12913003 928.35331129 405.22299825 928.34929723 430.31690001 C 928.34890191 432.99546067 928.34854036 435.67402132 928.34819984 438.35258198 C 928.34803201 439.67036385 928.34786417 440.98814572 928.34769124 442.34586038 C 928.34725413 451.61243824 928.35413222 460.87899391 928.36401176 470.14556599 C 928.37594063 481.44838102 928.37731356 492.75113788 928.3652216 504.05395374 C 928.35934341 509.81604614 928.35820416 515.57803221 928.370224 521.34011745 C 928.38111808 526.62413045 928.37793763 531.90794877 928.36396232 537.19195279 C 928.36132507 539.09427662 928.36365102 540.99661587 928.37169818 542.8989245 C 928.47322594 568.70963702 923.71996729 595.8844212 905.18100357 615.1800127 C 903.8026782 616.55857344 902.39463448 617.90722321 900.98569107 619.25447559 C 900.21740982 619.99310841 899.44912857 620.73174122 898.65756607 621.49275684 C 883.6295845 634.65501961 860.68215177 641.60619811 840.98569107 641.25447559 C 840.71055679 641.8298003 840.43542252 642.40512501 840.15195084 642.9978838 C 838.99763102 645.23137303 837.72250179 647.27062832 836.32553482 649.35994434 C 835.78807632 650.16552784 835.25061783 650.97111134 834.69687271 651.80110645 C 834.11155777 652.67259327 833.52624283 653.54408009 832.92319107 654.44197559 C 832.30758316 655.36180225 831.69197525 656.28162891 831.05771255 657.22932911 C 823.42672178 668.61148507 815.70700156 679.93349918 807.98569107 691.25447559 C 806.69005221 693.15547231 805.39447717 695.05651254 804.09897232 696.95760059 C 799.78494513 703.28723 795.46834373 709.61510245 791.1517067 715.94295216 C 783.92204087 726.54159616 776.69835803 737.1442543 769.48569107 747.75447559 C 761.05328242 760.15900257 752.60427312 772.5521559 744.1517067 784.94295216 C 736.19912694 796.60138337 728.25578059 808.26602411 720.32211685 819.93733692 C 715.10483124 827.61152424 709.87908729 835.27990114 704.64975357 842.94588184 C 699.92208881 849.87779536 695.20268987 856.81530068 690.48569107 863.75447559 C 679.02390417 880.61410061 667.55376834 897.46753602 655.98569107 914.25447559 C 652.00796574 912.92856715 650.87979027 910.45285646 648.73569107 907.06697559 C 647.83736441 905.68454601 646.93753266 904.30309369 646.03647232 902.92244434 C 645.54743423 902.17011524 645.05839615 901.41778614 644.55453873 900.64265919 C 641.73436402 896.34963881 638.82452786 892.11787421 635.92319107 887.87947559 C 634.63002462 885.98638146 633.33706083 884.09314888 632.04428482 882.19978809 C 631.38154556 881.2294463 630.7188063 880.2591045 630.03598404 879.25935841 C 626.51261556 874.09555521 622.99950418 868.92478349 619.48569107 863.75447559 C 614.15830439 855.91707597 608.82596959 848.08309666 603.48569107 840.25447559 C 598.14541243 832.42585436 592.81317725 824.59180772 587.48569107 816.75447559 C 579.66317699 805.24708517 571.82692919 793.74911273 563.98569107 782.25447559 C 555.42300192 769.7022481 546.86877911 757.14434164 538.32651138 744.57820606 C 531.22309487 734.13000831 524.10547789 723.69152197 516.98569107 713.25447559 C 508.43274159 700.7165257 499.88330029 688.17623571 491.3572731 675.61995411 C 487.78860066 670.36632619 484.20992061 665.12003892 480.61069107 659.88728809 C 479.91653091 658.87601856 479.22237076 657.86474903 478.50717545 656.82283497 C 477.18852413 654.90282769 475.86703946 652.98476237 474.5423317 651.06892872 C 473.95645279 650.21492481 473.37057388 649.36092091 472.76694107 648.48103809 C 472.2519606 647.73418751 471.73698013 646.98733692 471.2063942 646.2178545 C 469.98569107 644.25447559 469.98569107 644.25447559 468.98569107 641.25447559 C 467.45917997 641.25618434 467.45917997 641.25618434 465.90183026 641.2579276 C 421.02666944 641.30796173 376.15150613 641.35424123 331.27632523 641.38150501 C 330.25637623 641.38212627 330.25637623 641.38212627 329.21582219 641.38276008 C 314.43640944 641.39173993 299.65699637 641.40005031 284.87758285 641.40767158 C 277.62919503 641.41141342 270.38080729 641.4153031 263.13241959 641.41927052 C 262.41113863 641.41966279 261.68985767 641.42005507 260.94671971 641.42045923 C 237.59065851 641.43323095 214.23461917 641.45575565 190.87857119 641.48336726 C 166.86637335 641.51170284 142.85418759 641.53014068 118.84197331 641.53622056 C 115.44621401 641.53708496 112.05045476 641.53806187 108.65469551 641.53910732 C 107.65224755 641.53941073 107.65224755 641.53941073 106.62954811 641.53972026 C 96.55899248 641.54303919 86.48847041 641.55499112 76.4179287 641.57166576 C 64.94828647 641.59058801 53.47869354 641.59937881 42.00903554 641.59497973 C 36.15994184 641.59306193 30.31095767 641.59596202 24.46188354 641.61209202 C 19.09779365 641.62677592 13.7338861 641.6273732 8.36978751 641.61717228 C 6.43813478 641.61591298 4.50647031 641.61964615 2.57484043 641.62912514 C -23.32056751 641.74872141 -50.5702775 637.05982802 -69.93984604 618.44978809 C -71.31840678 617.07146272 -72.66705654 615.66341901 -74.01430893 614.25447559 C -74.75294174 613.48619434 -75.49157455 612.71791309 -76.25259018 611.92635059 C -93.39648017 592.35235581 -96.32929965 565.51984743 -96.27500534 540.62086964 C -96.27802999 538.64598485 -96.28192104 536.67110124 -96.28659791 534.69621968 C -96.29684631 529.29703745 -96.29470415 523.89792186 -96.29041731 518.49873424 C -96.28794433 512.66490167 -96.29697138 506.83108491 -96.3044548 500.99725819 C -96.31718812 489.57855612 -96.31899718 478.15987758 -96.31665454 466.7411696 C -96.31486962 457.45672542 -96.31662475 448.17228837 -96.32087898 438.88784504 C -96.3214814 437.55175577 -96.32208259 436.2156665 -96.32268259 434.87957723 C -96.32358989 432.86596381 -96.32449856 430.85235038 -96.32541494 428.83873696 C -96.3338391 410.12783778 -96.3381839 391.41694119 -96.33400822 372.70604038 C -96.33385184 372.00133724 -96.33369546 371.2966341 -96.33353435 370.57057631 C -96.33272862 366.99924531 -96.33188285 363.42791432 -96.33102105 359.85658333 C -96.33084996 359.147366 -96.33067887 358.43814867 -96.3305026 357.70743991 C -96.33015594 356.27323159 -96.32980741 354.83902327 -96.32945701 353.40481495 C -96.32410124 331.09443229 -96.33202835 308.78408916 -96.35049057 286.47371387 C -96.37123212 261.37982116 -96.38192915 236.28595293 -96.37791508 211.19205117 C -96.37751977 208.51349052 -96.37715822 205.83492987 -96.3768177 203.15636921 C -96.37664986 201.83858734 -96.37648203 200.52080547 -96.3763091 199.16309081 C -96.37587199 189.89651295 -96.38275007 180.62995727 -96.39262962 171.3633852 C -96.40455849 160.06057016 -96.40593142 148.75781331 -96.39383946 137.45499745 C -96.38796127 131.69290505 -96.38682201 125.93091898 -96.39884186 120.16883373 C -96.40973594 114.88482074 -96.40655549 109.60100242 -96.39258017 104.31699839 C -96.38994293 102.41467457 -96.39226888 100.51233532 -96.40031604 98.61002669 C -96.5018438 72.79931416 -91.74858515 45.62452999 -73.20962143 26.32893848 C -71.83129606 24.95037775 -70.42325234 23.60172798 -69.01430893 22.25447559 C -67.86188705 21.14652637 -67.86188705 21.14652637 -66.68618393 20.01619434 C -48.6227277 4.19531006 -23.18305928 -0.07877423 0 0 Z M 82.98569107 272.25447559 C 69.653346 289.240396 62.27331438 308.46725705 64.25912857 330.25447559 C 66.89232371 350.52510989 75.82119231 368.1748522 91.57553482 381.43416309 C 108.72164306 394.47209332 128.80401047 400.34287405 150.17319107 397.56697559 C 169.75042279 394.21219175 187.73507196 384.8234468 199.62436295 368.49983692 C 208.24464837 356.14134537 214.31952261 342.5184224 214.98569107 327.25447559 C 215.02565201 326.56482716 215.06561295 325.87517872 215.10678482 325.16463184 C 215.7534421 304.12925091 207.62319978 286.21646595 194.36069107 270.50447559 C 180.1715711 255.58940065 160.30829263 247.4747055 139.79819107 246.94197559 C 117.8648189 247.81931048 97.94582496 256.00554638 82.98569107 272.25447559 Z M 348.98569107 272.25447559 C 335.653346 289.240396 328.27331438 308.46725705 330.25912857 330.25447559 C 332.89232371 350.52510989 341.82119231 368.1748522 357.57553482 381.43416309 C 374.72164306 394.47209332 394.80401047 400.34287405 416.17319107 397.56697559 C 435.75042279 394.21219175 453.73507196 384.8234468 465.62436295 368.49983692 C 474.24464837 356.14134537 480.31952261 342.5184224 480.98569107 327.25447559 C 481.02565201 326.56482716 481.06561295 325.87517872 481.10678482 325.16463184 C 481.7534421 304.12925091 473.62319978 286.21646595 460.36069107 270.50447559 C 446.1715711 255.58940065 426.30829263 247.4747055 405.79819107 246.94197559 C 383.8648189 247.81931048 363.94582496 256.00554638 348.98569107 272.25447559 Z M 617.98569107 272.25447559 C 604.653346 289.240396 597.27331438 308.46725705 599.25912857 330.25447559 C 601.89232371 350.52510989 610.82119231 368.1748522 626.57553482 381.43416309 C 643.72164306 394.47209332 663.80401047 400.34287405 685.17319107 397.56697559 C 704.75042279 394.21219175 722.73507196 384.8234468 734.62436295 368.49983692 C 743.24464837 356.14134537 749.31952261 342.5184224 749.98569107 327.25447559 C 750.02565201 326.56482716 750.06561295 325.87517872 750.10678482 325.16463184 C 750.7534421 304.12925091 742.62319978 286.21646595 729.36069107 270.50447559 C 715.1715711 255.58940065 695.30829263 247.4747055 674.79819107 246.94197559 C 652.8648189 247.81931048 632.94582496 256.00554638 617.98569107 272.25447559 Z" stroke-linecap="round" />
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
