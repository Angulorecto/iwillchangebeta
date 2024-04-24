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
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid meet">
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
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid meet">
        <path d="M0 0 C0.90674469 -0.0071553 1.81348938 -0.01431061 2.74771118 -0.02168274 C3.73527908 -0.02437164 4.72284698 -0.02706055 5.74034119 -0.02983093 C6.78639526 -0.03640213 7.83244934 -0.04297333 8.91020203 -0.04974365 C12.37433445 -0.06946324 15.83842349 -0.08113796 19.30259705 -0.09111023 C21.08032407 -0.09722352 21.08032407 -0.09722352 22.89396477 -0.10346031 C29.17006633 -0.12431796 35.44614606 -0.13861955 41.72227478 -0.147995 C48.18941856 -0.15904284 54.6562167 -0.19342535 61.12323856 -0.23316669 C66.10856748 -0.25937726 71.09381471 -0.26769093 76.07920647 -0.27127647 C78.46209986 -0.27613297 80.84498984 -0.28772001 83.22781563 -0.30631447 C86.57341074 -0.33079365 89.91812049 -0.32972417 93.26377869 -0.32279968 C94.23717697 -0.33560974 95.21057526 -0.3484198 96.21347046 -0.36161804 C106.09061702 -0.28759071 115.76402075 2.67127314 123.00572205 9.63935852 C129.67754131 16.82439465 132.58668119 25.06128136 132.56846619 34.75166321 C132.56861221 35.40573654 132.56875824 36.05980988 132.56890869 36.73370361 C132.56821421 38.88718528 132.56044363 41.04057954 132.55259705 43.19404602 C132.55073122 44.69048516 132.54930809 46.1869249 132.54830933 47.68336487 C132.54449714 51.61575517 132.53467797 55.54810834 132.52360535 59.48048401 C132.51336328 63.49567665 132.50880572 67.51087532 132.50376892 71.52607727 C132.49305451 79.39979219 132.47599371 87.27347699 132.4549408 95.14717102 C133.19466629 95.27813171 133.93439178 95.40909241 134.6965332 95.54402161 C135.67520859 95.71921326 136.65388397 95.89440491 137.66221619 96.0749054 C138.62881668 96.24711609 139.59541718 96.41932678 140.59130859 96.59675598 C197.30797177 107.4981924 256.41903441 139.48935296 298.24790955 179.24873352 C300.39420429 181.33743313 300.39420429 181.33743313 303.4549408 182.14717102 C305.71170464 181.00947126 305.71170464 181.00947126 308.07603455 179.23701477 C309.46507996 178.25644104 309.46507996 178.25644104 310.88218689 177.25605774 C311.87557068 176.53950012 312.86895447 175.8229425 313.8924408 175.08467102 C314.91418396 174.36037903 315.93592712 173.63608704 316.9886322 172.8898468 C319.10796539 171.38727333 321.22447181 169.88070543 323.33824158 168.37031555 C327.98162353 165.05818677 332.65573977 161.79057712 337.3299408 158.52217102 C338.11812195 157.96779358 338.9063031 157.41341614 339.71836853 156.84223938 C343.54257403 154.1565347 347.38050724 151.49092012 351.2440033 148.86201477 C351.9447699 148.38369202 352.6455365 147.90536926 353.36753845 147.41255188 C361.78036576 142.31270581 371.55042237 141.2537357 381.01353455 143.40107727 C384.77440524 144.55039935 388.02068523 146.23925126 391.4549408 148.14717102 C391.4549408 148.80717102 391.4549408 149.46717102 391.4549408 150.14717102 C392.2902533 150.48748352 392.2902533 150.48748352 393.1424408 150.83467102 C399.15659435 154.24810952 402.65110373 160.09105123 406.3924408 165.70967102 C407.54769769 167.42127924 408.70398133 169.13219482 409.8611908 170.84248352 C410.45415955 171.72065735 411.0471283 172.59883118 411.6580658 173.50361633 C414.52827902 177.72626154 417.45813909 181.90641334 420.3924408 186.08467102 C420.97308289 186.91232971 421.55372498 187.7399884 422.15196228 188.59272766 C423.33060647 190.27238922 424.50956164 191.9518326 425.68882751 193.63105774 C429.1926043 198.62275301 432.68816548 203.62021048 436.182724 208.61836243 C439.21478255 212.95353559 442.25465796 217.28293058 445.3065033 221.60420227 C445.93814392 222.50074524 446.56978455 223.39728821 447.2205658 224.32099915 C448.42378077 226.02850275 449.62935608 227.73434657 450.8377533 229.43818665 C458.15203269 239.83170867 464.01872046 249.98705124 462.4549408 263.14717102 C461.49480956 267.29028276 460.36112244 271.33480773 458.4549408 275.14717102 C457.7949408 275.14717102 457.1349408 275.14717102 456.4549408 275.14717102 C456.1868158 275.95154602 455.9186908 276.75592102 455.6424408 277.58467102 C455.2505658 278.43029602 454.8586908 279.27592102 454.4549408 280.14717102 C453.4649408 280.47717102 452.4749408 280.80717102 451.4549408 281.14717102 C451.20486267 281.72724915 450.95478455 282.30732727 450.6971283 282.90498352 C448.82022309 286.29285643 445.74883819 287.95232863 442.5799408 290.02217102 C441.12736716 290.99500936 439.67558142 291.9690249 438.22447205 292.94404602 C437.45184021 293.46031555 436.67920837 293.97658508 435.88316345 294.50849915 C431.63839223 297.37305821 427.45604403 300.32637517 423.2674408 303.27217102 C415.68288165 308.59253112 408.08118665 313.88673136 400.4549408 319.14717102 C401.09861687 323.88746733 402.38464688 328.23411873 403.96665955 332.72920227 C404.48026335 334.22034731 404.99317534 335.71173077 405.50547791 337.20332336 C405.9069252 338.36695404 405.9069252 338.36695404 406.31648254 339.55409241 C420.08050868 379.64140532 426.90160502 420.33950509 426.7674408 462.70967102 C426.76470657 464.50123627 426.76470657 464.50123627 426.76191711 466.32899475 C426.71785875 483.46468623 426.30367198 500.2159298 423.4549408 517.14717102 C423.27269958 518.30200989 423.09045837 519.45684875 422.9026947 520.64668274 C420.61364637 535.07514528 417.79349379 549.18995374 413.4549408 563.14717102 C414.48167908 563.48941711 414.48167908 563.48941711 415.52915955 563.83857727 C419.15167778 565.45879571 422.12893404 567.69722459 425.2674408 570.08467102 C430.48938963 573.98524143 435.75663007 577.78848496 441.1424408 581.45967102 C447.43796868 585.7580997 453.70678873 590.09259621 459.9549408 594.45967102 C460.77953796 595.0343512 461.60413513 595.60903137 462.45372009 596.2011261 C464.79516452 597.83925865 467.12763823 599.48901784 469.4549408 601.14717102 C470.23740173 601.70195129 471.01986267 602.25673157 471.82603455 602.82832336 C472.55951111 603.36022278 473.29298767 603.89212219 474.0486908 604.44013977 C474.70546814 604.91346741 475.36224548 605.38679504 476.03892517 605.87446594 C476.73985291 606.50445496 476.73985291 606.50445496 477.4549408 607.14717102 C477.4549408 607.80717102 477.4549408 608.46717102 477.4549408 609.14717102 C478.4449408 609.47717102 479.4349408 609.80717102 480.4549408 610.14717102 C481.15705973 611.79921558 481.82465493 613.46640871 482.4549408 615.14717102 C483.1149408 615.47717102 483.7749408 615.80717102 484.4549408 616.14717102 C488.65023988 623.53089741 489.24884247 630.78626259 488.4549408 639.14717102 C485.84646087 647.75390879 481.2551526 654.93092276 476.0174408 662.14717102 C475.31441833 663.13628479 474.61139587 664.12539856 473.8870697 665.14448547 C472.4444688 667.17402535 470.99754817 669.20050192 469.54624939 671.22383118 C466.43787185 675.56888286 463.38556925 679.9524569 460.3299408 684.33467102 C459.18196222 685.97431534 458.03352591 687.61363929 456.8846283 689.25263977 C453.99072431 693.38218958 451.09828831 697.51276311 448.20713806 701.64424133 C447.04686743 703.30163223 445.88590671 704.95854026 444.72422791 706.61494446 C441.6799303 710.95745091 438.64967358 715.30893709 435.63853455 719.67451477 C435.01140564 720.58008118 434.38427673 721.48564758 433.73814392 722.4186554 C432.54123414 724.14752508 431.34827579 725.87913966 430.16001892 727.6139679 C422.67033661 738.40870575 422.67033661 738.40870575 417.4549408 740.14717102 C417.4549408 740.80717102 417.4549408 741.46717102 417.4549408 742.14717102 C408.78123965 747.4532049 400.00817448 749.27814982 389.8924408 747.64717102 C379.57081065 744.78109223 370.85887492 737.37400303 362.4080658 731.06123352 C357.69435023 727.55549622 352.85219773 724.24461776 347.99693298 720.93916321 C347.37463806 720.51538391 346.75234314 720.09160461 346.1111908 719.65498352 C345.50790955 719.24538391 344.9046283 718.8357843 344.2830658 718.41377258 C342.36599758 717.08554743 340.49033434 715.70806785 338.6111908 714.32685852 C335.81994804 711.95775222 335.81994804 711.95775222 333.4549408 712.14717102 C331.88629997 713.69796172 331.88629997 713.69796172 330.2674408 715.70967102 C326.84734716 719.7341471 323.22394417 723.45288358 319.4549408 727.14717102 C316.62952217 729.95795018 313.82512396 732.78780648 311.03697205 735.63545227 C304.96315732 741.81451432 298.96672449 747.90307007 292.0565033 753.15888977 C290.11037959 754.64624257 288.22816829 756.15663252 286.3533783 757.72920227 C249.12001831 788.73843068 183.82718811 831.14717102 133.4549408 831.14717102 C133.46382324 831.82431656 133.47270569 832.5014621 133.4818573 833.1991272 C133.57080475 840.28889977 133.630871 847.3785121 133.67466736 854.46870422 C133.69470076 857.10972032 133.7219353 859.75069251 133.75669861 862.39155579 C133.8055798 866.20213193 133.82799347 870.01211823 133.8455658 873.82295227 C133.86621094 874.99110977 133.88685608 876.15926727 133.90812683 877.36282349 C133.91097528 887.92539821 131.48646268 897.87880927 123.9627533 905.69795227 C117.59967806 911.60652213 109.63872694 915.24687301 100.90988159 915.29434204 C100.0031369 915.30149734 99.09639221 915.30865265 98.16217041 915.31602478 C96.68081856 915.32005814 96.68081856 915.32005814 95.16954041 915.32417297 C93.60045929 915.33402977 93.60045929 915.33402977 91.99967957 915.34408569 C88.53554714 915.36380528 85.0714581 915.37548 81.60728455 915.38545227 C79.82955752 915.39156556 79.82955752 915.39156556 78.01591682 915.39780235 C71.73981526 915.41866 65.46373553 915.43296159 59.18760681 915.44233704 C52.72046303 915.45338488 46.25366489 915.48776739 39.78664303 915.52750874 C34.80131411 915.5537193 29.81606688 915.56203297 24.83067513 915.56561852 C22.44778173 915.57047501 20.06489176 915.58206206 17.68206596 915.60065651 C14.33647085 915.62513569 10.9917611 915.62406621 7.64610291 915.61714172 C6.67270462 915.62995178 5.69930634 915.64276184 4.69641113 915.65596008 C-5.18073542 915.58193275 -14.85413915 912.6230689 -22.09584045 905.65498352 C-28.39348575 898.87290397 -31.67935016 890.77235731 -31.65858459 881.55244446 C-31.65850906 880.43158447 -31.65843353 879.31072449 -31.65835571 878.15589905 C-31.65319443 876.95161255 -31.64803314 875.74732605 -31.64271545 874.50654602 C-31.64059303 872.65056793 -31.64059303 872.65056793 -31.63842773 870.75709534 C-31.6337803 867.47572161 -31.62480268 864.19439729 -31.61372375 860.91304016 C-31.6034744 857.56140091 -31.59900779 854.20975954 -31.59388733 850.85810852 C-31.58285945 844.28777671 -31.56612217 837.71747791 -31.5450592 831.14717102 C-32.52338966 831.06553711 -32.52338966 831.06553711 -33.52148438 830.98225403 C-38.34426895 830.5463275 -42.88926625 829.99729834 -47.54896545 828.61592102 C-48.6062384 828.30485413 -49.66351135 827.99378723 -50.75282288 827.67329407 C-51.85988586 827.33467346 -52.96694885 826.99605286 -54.1075592 826.64717102 C-55.87160095 826.1131366 -55.87160095 826.1131366 -57.67127991 825.5683136 C-113.74094351 808.34469179 -169.55706884 779.46400475 -210.80677795 736.88935852 C-213.05586814 734.6352142 -215.44978357 732.59472859 -217.9044342 730.56904602 C-219.88326487 728.85405945 -221.71006142 727.01408181 -223.5450592 725.14717102 C-234.28416291 732.45725906 -244.98472642 739.81750815 -255.60462952 747.30000305 C-259.50181883 750.04064365 -263.41064965 752.76392321 -267.3497467 755.44404602 C-268.04825745 755.92067688 -268.74676819 756.39730774 -269.46644592 756.88838196 C-277.87817134 761.98244541 -287.64437107 763.03973719 -297.10365295 760.89326477 C-300.86452365 759.74394269 -304.11080364 758.05509078 -307.5450592 756.14717102 C-307.5450592 755.48717102 -307.5450592 754.82717102 -307.5450592 754.14717102 C-308.1019342 753.92029602 -308.6588092 753.69342102 -309.2325592 753.45967102 C-315.24671275 750.04623252 -318.74122214 744.20329081 -322.4825592 738.58467102 C-323.6378161 736.8730628 -324.79409974 735.16214722 -325.9513092 733.45185852 C-326.54427795 732.57368469 -327.1372467 731.69551086 -327.7481842 730.79072571 C-330.61839742 726.5680805 -333.54825749 722.3879287 -336.4825592 718.20967102 C-337.06320129 717.38201233 -337.64384338 716.55435364 -338.24208069 715.70161438 C-339.42072487 714.02195282 -340.59968004 712.34250944 -341.77894592 710.6632843 C-345.28272271 705.67158903 -348.77828389 700.67413156 -352.27284241 695.67597961 C-355.30490096 691.34080645 -358.34477637 687.01141146 -361.3966217 682.69013977 C-362.02826233 681.7935968 -362.65990295 680.89705383 -363.3106842 679.9733429 C-364.51389918 678.2658393 -365.71947449 676.55999547 -366.9278717 674.8561554 C-374.2421511 664.46263337 -380.10883887 654.3072908 -378.5450592 641.14717102 C-377.58492797 637.00405928 -376.45124085 632.95953431 -374.5450592 629.14717102 C-373.8850592 629.14717102 -373.2250592 629.14717102 -372.5450592 629.14717102 C-372.2769342 628.34279602 -372.0088092 627.53842102 -371.7325592 626.70967102 C-371.3406842 625.86404602 -370.9488092 625.01842102 -370.5450592 624.14717102 C-369.5550592 623.81717102 -368.5650592 623.48717102 -367.5450592 623.14717102 C-367.29498108 622.5670929 -367.04490295 621.98701477 -366.7872467 621.38935852 C-364.910334 618.00147207 -361.83893983 616.34203334 -358.6700592 614.27217102 C-357.20967137 613.2941269 -355.75007207 612.31490463 -354.29115295 611.33467102 C-353.51755432 610.81775696 -352.74395569 610.3008429 -351.94691467 609.76826477 C-347.83551275 606.99334012 -343.78774719 604.12831671 -339.7325592 601.27217102 C-330.05991682 594.48078135 -320.31502574 587.79756918 -310.5450592 581.14717102 C-311.67486292 575.83419661 -312.93642479 570.57725385 -314.31459045 565.32295227 C-317.85642169 551.75546755 -321.11897289 538.23688193 -323.4200592 524.39717102 C-323.61059875 523.25933167 -323.80113831 522.12149231 -323.99745178 520.94917297 C-327.03055226 501.78069131 -327.95298765 482.8520288 -327.9200592 463.45967102 C-327.91951538 462.25062103 -327.91897156 461.04157104 -327.91841125 459.79588318 C-327.87811709 440.25853348 -326.92738695 421.41408362 -323.5450592 402.14717102 C-323.33075256 400.88308411 -323.11644592 399.61899719 -322.89564514 398.31660461 C-318.65997456 373.84281369 -311.73431279 350.29815759 -303.17420959 327.00874329 C-302.52026148 325.07379785 -302.01409158 323.1342929 -301.5450592 321.14717102 C-302.92951233 320.19971008 -302.92951233 320.19971008 -304.3419342 319.23310852 C-313.77757052 312.76615268 -323.17115499 306.24120903 -332.5294342 299.66279602 C-335.86094495 297.32166435 -339.20509478 295.00051951 -342.5606842 292.69404602 C-343.74223083 291.87601501 -343.74223083 291.87601501 -344.94764709 291.04145813 C-346.4374183 290.01012705 -347.93122943 288.98460011 -349.42958069 287.96577454 C-354.43221327 284.48570883 -354.43221327 284.48570883 -355.5450592 281.14717102 C-356.5350592 280.81717102 -357.5250592 280.48717102 -358.5450592 280.14717102 C-359.24717814 278.49512646 -359.91477334 276.82793333 -360.5450592 275.14717102 C-361.2050592 274.81717102 -361.8650592 274.48717102 -362.5450592 274.14717102 C-366.74035829 266.76344463 -367.33896087 259.50807945 -366.5450592 251.14717102 C-363.93657928 242.54043325 -359.34527101 235.36341928 -354.1075592 228.14717102 C-353.40453674 227.15805725 -352.70151428 226.16894348 -351.97718811 225.14985657 C-350.53458721 223.12031669 -349.08766658 221.09384013 -347.6363678 219.07051086 C-344.52799026 214.72545919 -341.47568766 210.34188514 -338.4200592 205.95967102 C-337.27208063 204.3200267 -336.12364432 202.68070275 -334.9747467 201.04170227 C-332.08084272 196.91215246 -329.18840672 192.78157893 -326.29725647 188.65010071 C-325.13698584 186.99270981 -323.97602512 185.33580178 -322.81434631 183.67939758 C-319.77004871 179.33689113 -316.73979198 174.98540495 -313.72865295 170.61982727 C-313.10152405 169.71426086 -312.47439514 168.80869446 -311.82826233 167.87568665 C-310.63135255 166.14681697 -309.4383942 164.41520238 -308.25013733 162.68037415 C-300.76045502 151.88563629 -300.76045502 151.88563629 -295.5450592 150.14717102 C-295.5450592 149.48717102 -295.5450592 148.82717102 -295.5450592 148.14717102 C-286.87135806 142.84113714 -278.09829289 141.01619222 -267.9825592 142.64717102 C-257.65059169 145.51612026 -248.93077374 152.93477404 -240.47084045 159.25263977 C-236.54288573 162.17377956 -232.52757213 164.95379804 -228.4825592 167.70967102 C-221.09203002 172.74875057 -213.80292932 177.91923645 -206.5450592 183.14717102 C-203.08909996 181.61118914 -200.44429908 179.56320425 -197.5450592 177.14717102 C-196.56794983 176.33892883 -195.59084045 175.53068665 -194.5841217 174.69795227 C-192.63259001 173.05997001 -190.68911862 171.41230887 -188.7559967 169.75263977 C-150.20709127 136.88518459 -84.55370735 95.14717102 -32.5450592 95.14717102 C-32.55394165 94.33221664 -32.5628241 93.51726227 -32.57197571 92.6776123 C-32.65249875 84.95509633 -32.71321355 77.23278714 -32.75230789 69.50995922 C-32.7730832 65.54062005 -32.80121363 61.57163102 -32.84681702 57.60249329 C-32.8906381 53.76396613 -32.9142717 49.92577336 -32.92456818 46.08701515 C-32.93189517 44.6307328 -32.94620105 43.17446641 -32.96797943 41.71832848 C-33.13948499 29.76348968 -31.71090095 18.59439399 -23.0528717 9.59638977 C-16.68979647 3.68781991 -8.72884535 0.04746903 0 0 Z M-54.89979553 357.09687805 C-84.03696144 385.69960139 -98.65064262 423.63093561 -99.5450592 464.14717102 C-99.71728581 504.09467935 -82.64049376 541.97011167 -54.8575592 570.27217102 C-26.03547795 598.76555858 12.34935983 612.98288556 52.60679626 613.15644836 C92.72179419 612.59626259 130.3164408 595.02614121 158.33653259 566.68281555 C186.12390361 537.65636778 199.99344868 498.89360437 199.43540955 458.93232727 C198.14423304 418.64666015 180.13776216 381.25390135 151.17759705 353.52998352 C92.80264107 299.49110014 1.90585608 302.99403203 -54.89979553 357.09687805 Z " fill="#FFFFFF" transform="translate(462.54505920410156,48.85282897949219)"></path>
        <path d="" fill="#FFFFFF" transform="translate(0,0)"></path>
        <path d="" fill="#FFFFFF" transform="translate(0,0)"></path>
        <path d="" fill="#FFFFFF" transform="translate(0,0)"></path>
        <path d="" fill="#FFFFFF" transform="translate(0,0)"></path>
      </svg>
    `,
    logo: `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 307.000000 307.000000" preserveAspectRatio="xMidYMid meet">
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
    `
};

document.addEventListener("DOMContentLoaded", function() {
    Object.keys(icons).forEach(iconType => {
        replace(iconType, icons[iconType]);
    });
});
