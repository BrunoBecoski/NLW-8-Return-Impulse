export function Brands() {
  return (
    <section className="bg-brand-50">
      <div className="text-center p-10">
        <h3 className="font-bold text-brand-headline text-2xl">
          Empresas que confiam
        </h3>
      </div>

      <div className="flex items-center relative overflow-hidden h-10 w-full">

        <div className="flex items-center absolute gap-10 h-8 animate-scroll">

          <div>
            <svg width="160" height="31" viewBox="0 0 160 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Facebook logo</title>
              <g clipPath="url(#clip0_1729_763)">
              <path className="fill-brand-500" fillRule="evenodd" clipRule="evenodd" d="M81.7166 0L75.3487 0.764086V30.5521H81.7166V28.7843C82.5754 29.3926 83.4096 30.1243 84.3869 30.4713C88.0972 31.7908 92.9907 30.7157 94.7024 25.7918C95.8012 22.6331 95.7727 19.3946 94.9453 16.2003C94.028 12.6518 91.6478 10.6929 87.9602 10.3031C85.5557 10.0483 83.4752 10.7706 81.7166 12.869V12.2169V0.888835V0.764086V0ZM147.379 0.0184283L141.011 0.783931V30.5719H147.379V21.4554L153.246 30.5847H160L153.634 20.6743L160 10.7964H153.246L147.379 19.8974V0.908681V0.783932V0.0184283ZM12.3 0.0482011C9.39641 0.0147194 5.36291 0.798565 4.21763 5.15297C4.21763 5.15443 4.21697 5.15718 4.21478 5.15864C4.21112 5.17388 4.20701 5.18876 4.20334 5.204C3.91513 6.07497 3.93537 10.0638 3.93903 10.5654H0V15.8998H4.18334V30.4089H10.2755V15.8998H14.9346L15.4589 10.5654H14.936H10.3912V7.56714C10.7233 4.73213 15.4418 5.27063 15.4418 5.27063L15.4433 5.07642L15.4418 5.05515V0.398343V0.396891H15.4375C15.3766 0.382469 14.0421 0.0682523 12.3 0.0481626L12.3 0.0482011ZM23.5727 10.2223C20.1755 10.2239 17.1956 12.3639 16.1133 15.8686C15.2947 18.5193 15.2834 21.2464 15.7633 23.9305C16.7998 29.7435 21.1572 31.6902 25.8016 30.7307C27.2266 30.436 28.2853 29.5566 29.2677 28.3307C29.2677 28.3307 29.3566 28.2222 29.4648 28.0132V30.5719H35.407V10.588H29.4648V13.1185H29.4634C29.3888 13.0364 29.3156 12.9563 29.252 12.8902C29.2417 12.8801 29.2336 12.8706 29.2234 12.8605C29.1349 12.769 29.0734 12.7088 29.0734 12.7088C27.6389 11.2615 27.0966 10.9012 25.973 10.5724C25.1628 10.3357 24.3567 10.2219 23.5727 10.2223V10.2223ZM128.916 10.2294C127.805 10.2307 126.693 10.3785 125.589 10.6703C122.284 11.5442 120.069 13.6195 119.355 16.9205C118.965 18.7227 118.888 20.6366 118.991 22.4846C119.225 26.7102 121.86 29.7215 125.946 30.6556C126.004 30.6693 126.064 30.6795 126.122 30.6925H126.123C126.124 30.6927 126.133 30.6947 126.15 30.6981C126.308 30.7293 126.465 30.7585 126.623 30.7818C126.676 30.7868 126.729 30.7916 126.782 30.7945C126.783 30.796 126.785 30.796 126.786 30.796C126.986 30.8323 127.223 30.86 127.472 30.8796C128.274 30.9638 129.294 31.0244 130.142 30.925C130.147 30.9235 130.15 30.9236 130.155 30.9221C130.2 30.9214 130.242 30.9215 130.284 30.9193C134.505 30.7008 137.709 28.0592 138.643 24.0099C139.156 21.7882 139.156 19.5548 138.662 17.3316C137.883 13.8419 135.752 11.5973 132.247 10.6675C131.141 10.3735 130.028 10.2282 128.917 10.2295L128.916 10.2294ZM107.198 10.2337C106.087 10.2351 104.976 10.3828 103.872 10.6746C100.566 11.5477 98.3496 13.6231 97.6356 16.9248C97.2457 18.7262 97.1682 20.6417 97.2713 22.4888C97.5068 26.7145 100.14 29.725 104.228 30.6599C104.284 30.6736 104.344 30.6838 104.402 30.6967H104.404C104.404 30.6969 104.415 30.6989 104.432 30.7024C104.589 30.7336 104.747 30.7621 104.905 30.786C104.958 30.7904 105.012 30.7951 105.064 30.8002H105.068C105.266 30.8365 105.504 30.8628 105.754 30.8824C106.554 30.9666 107.573 31.0272 108.423 30.9278C108.429 30.9278 108.431 30.9271 108.436 30.9263C108.479 30.9256 108.524 30.925 108.567 30.9221C112.788 30.7043 115.99 28.0634 116.925 24.0127C117.438 21.791 117.437 19.559 116.941 17.3358C116.165 13.8461 114.032 11.6007 110.527 10.6702C109.421 10.3767 108.31 10.2323 107.198 10.2336L107.198 10.2337ZM47.194 10.2734C46.6882 10.2907 46.1798 10.3278 45.6696 10.3811C41.3683 10.8319 38.4499 13.3514 37.6401 17.5088C37.2151 19.6964 37.2336 21.9108 37.7215 24.1049C38.4523 27.3906 40.4604 29.5135 43.7236 30.4628C45.8531 31.082 48.0347 31.1136 50.2058 30.7775C51.1188 30.636 52.4291 30.1652 53.3691 29.8306L53.7262 29.7058L53.5576 29.1402C53.2819 28.1393 52.9683 27.151 52.6647 26.1973L52.3775 25.1369C52.3775 25.1369 44.9296 28.6858 43.7679 21.9445C43.6604 20.8318 43.6936 19.6829 43.8479 18.5848C44.1376 16.5126 45.4113 15.4025 47.4384 15.2123C48.1231 15.1477 48.8362 15.1806 49.5143 15.2945C50.4375 15.4491 51.3387 15.7246 52.3489 15.9721C52.7001 14.9059 53.059 13.8515 53.3933 12.7896C53.446 12.6234 53.4904 12.4801 53.5248 12.3516L53.6919 11.7137C53.6503 11.6288 53.5494 11.5413 53.4133 11.4557C53.2422 11.3134 52.9504 11.1959 52.4947 11.0304C52.3125 10.9643 52.1289 10.9056 51.946 10.8489C51.7822 10.7974 51.676 10.7667 51.676 10.7667C50.2084 10.3503 48.7117 10.2214 47.194 10.2734ZM64.2675 10.3131C63.5384 10.3085 62.8073 10.3501 62.0901 10.418C58.164 10.7896 55.1829 13.2165 54.5721 16.8681C54.2012 19.0832 54.1535 21.4338 54.4535 23.6584C54.9063 27.0051 56.5486 29.1375 59.3898 30.1609H59.3912C59.4036 30.1616 59.4173 30.1637 59.4298 30.1652L59.4283 30.1666C60.7253 30.5513 67.0716 32.1989 72.667 29.4096L72.4427 28.5917C72.4405 28.5931 72.4361 28.5931 72.4341 28.5931C72.1752 27.503 71.8645 26.4247 71.5712 25.344L71.5397 25.2391C71.5397 25.2391 71.4231 25.2801 71.2168 25.3454C71.2124 25.3461 71.2069 25.3461 71.2025 25.3469C70.9582 25.41 70.7167 25.4839 70.4767 25.5637C70.4321 25.5783 70.3885 25.5918 70.3439 25.6049C69.4968 25.8415 68.285 26.1333 67.0063 26.2966C65.9332 26.4041 64.8503 26.408 63.756 26.3151C61.9791 26.0233 60.6191 25.0788 60.6842 22.8462H61.6986C65.1821 22.8462 68.6656 22.8469 72.1498 22.8462C72.2325 22.8462 72.3157 22.8462 72.3984 22.8448V22.8462C72.3984 22.8462 73.147 22.8379 73.1785 22.8306C73.1785 22.8306 73.1778 22.6348 73.1785 22.6109L73.1656 21.3223C73.1371 19.9389 73.156 18.548 72.9585 17.1886C72.4149 13.4608 70.1284 11.1024 66.4291 10.4862C65.7232 10.369 64.9965 10.3178 64.2674 10.3132L64.2675 10.3131ZM63.9917 14.5716C64.676 14.5534 65.3649 14.7282 66.0291 15.0932C67.3722 15.8292 67.4766 17.1597 67.4378 18.5975H60.5585C60.5943 17.2395 60.765 15.9767 61.9815 15.2081C62.6274 14.8009 63.3074 14.5897 63.9917 14.5716ZM129.034 15.1953C130.769 15.2287 132.009 16.2062 132.451 17.8646C132.85 19.5326 132.554 22.5012 132.514 22.8801C132.493 23.0122 132.471 23.14 132.441 23.2699C132.017 25.1338 130.654 26.1425 128.835 26.0598C126.879 25.9691 125.538 24.8343 125.349 22.8957C125.213 21.4796 125.2 20.0335 125.319 18.616C125.508 16.3776 126.917 15.1539 129.034 15.1953H129.034ZM85.2385 15.1968C87.1558 15.1343 88.6065 16.0786 88.8917 18.0093C89.1449 19.7106 89.1575 21.5035 88.9117 23.2034C88.6316 25.1674 87.0561 26.1957 85.1856 26.0513C84.7181 26.015 84.2951 25.9208 83.9154 25.7735C82.4078 24.9148 81.9519 23.4768 81.8195 22.5739C81.818 22.5747 81.8165 22.5746 81.8165 22.5754C81.7134 21.1782 81.6026 18.2571 82.2895 16.8766C82.8725 15.8184 83.8887 15.2411 85.2384 15.1968L85.2385 15.1968ZM25.633 15.1982C27.3857 15.2374 28.7358 16.266 28.9334 18.0674C29.1184 19.7528 29.1226 21.4876 28.9405 23.1736C28.7416 25.0215 27.2356 26.1324 25.4544 26.0627C23.6293 25.9923 22.4212 25.0218 22.0269 23.2842C21.5543 20.8121 22.1072 17.8745 22.154 17.6365C22.631 15.9773 23.8481 15.1568 25.633 15.1982H25.633ZM107.314 15.1997C109.053 15.233 110.291 16.2105 110.733 17.869C111.134 19.5376 110.837 22.5034 110.797 22.883C110.776 23.0144 110.753 23.1451 110.723 23.2743C110.3 25.1382 108.936 26.1469 107.117 26.0627C105.161 25.9742 103.819 24.8394 103.631 22.9001C103.495 21.4833 103.484 20.0364 103.602 18.6189C103.788 16.3812 105.198 15.1583 107.314 15.1997H107.314Z"/>
              </g>
              <defs>
              <clipPath id="clip0_1729_763">
              <rect width="160" height="31" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>

          <div>
            <svg width="118" height="39" viewBox="0 0 118 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Google logo</title>
              <g clipPath="url(#clip0_1729_765)">
              <path className="fill-brand-500" d="M15.2097 1.5235e-05C6.94792 1.5235e-05 0.00012207 6.72932 0.00012207 14.9911C0.00012207 23.2528 6.94792 29.9821 15.2097 29.9821C19.667 29.9821 23.0316 28.5195 25.6651 25.7772C28.3725 23.0697 29.2128 19.2697 29.2128 16.1966C29.2128 15.2825 29.1429 14.4382 29.0079 13.7243H15.2046V17.8204L24.9943 17.8162C24.6939 20.0753 23.9323 21.7296 22.7745 22.8874C21.3467 24.3152 19.1178 25.886 15.2046 25.886C9.17149 25.886 4.45331 21.0241 4.45331 14.9911C4.45331 8.95797 9.17149 4.09612 15.2046 4.09612C18.4605 4.09612 20.8375 5.37532 22.5917 7.02071L25.4823 4.13098C23.036 1.79349 19.7802 0 15.2097 0V1.5235e-05ZM93.6481 1.10099V29.3946H97.7833V1.10099H93.6481ZM108.67 10.6731C103.694 10.6731 99.5635 14.5861 99.5635 20.3276C99.5635 25.7426 103.66 29.9821 109.144 29.9821C113.567 29.9821 116.126 27.2746 117.188 25.7032L113.897 23.5098C112.8 25.1203 111.303 26.1819 109.144 26.1819C106.989 26.1819 105.453 25.1943 104.465 23.2573L117.371 17.9114L116.932 16.8147C116.131 14.66 113.68 10.6731 108.67 10.6731ZM40.543 10.6773C35.2064 10.6773 30.8579 14.7341 30.8579 20.3318C30.8579 25.8905 35.2064 29.9864 40.543 29.9864C45.8797 29.9864 50.2282 25.8905 50.2282 20.3318C50.2282 14.7341 45.8797 10.6773 40.543 10.6773ZM61.4368 10.6773C56.1002 10.6773 51.7517 14.7384 51.7517 20.3318C51.7517 25.8905 56.1002 29.9864 61.4368 29.9864C66.7734 29.9864 71.122 25.8905 71.122 20.3318C71.122 14.7341 66.7734 10.6773 61.4368 10.6773ZM81.8868 10.6773C77.0595 10.6773 72.637 14.9169 72.637 20.3667C72.637 25.7773 77.0595 29.9821 81.8868 29.9821C84.1938 29.9821 86.0219 28.9596 86.9708 27.7887H87.1188V29.177C87.1188 32.8726 85.147 34.8358 81.965 34.8358C79.3707 34.8358 77.7602 32.9818 77.1029 31.4104L73.4115 32.9467C74.4736 35.5062 77.2899 38.636 81.9693 38.636C86.9403 38.636 91.1452 35.7238 91.1452 28.5938V11.2648H87.1188V12.8367H86.9708C86.0175 11.7006 84.1895 10.6773 81.8868 10.6773V10.6773ZM108.813 14.4079C110.494 14.4079 111.922 15.2476 112.396 16.4534L103.768 20.036C103.66 16.3099 106.659 14.4079 108.813 14.4079ZM40.543 14.4818C43.4682 14.4818 45.9884 16.8582 45.9884 20.3318C45.9884 23.7662 43.4682 26.1819 40.543 26.1819C37.6179 26.1819 35.0977 23.7706 35.0977 20.3318C35.0977 16.8582 37.6179 14.4818 40.543 14.4818ZM61.4368 14.4818C64.3619 14.4818 66.8822 16.8582 66.8822 20.3318C66.8822 23.7662 64.3619 26.1819 61.4368 26.1819C58.5117 26.1819 55.9915 23.7706 55.9915 20.3318C55.9915 16.8582 58.5117 14.4818 61.4368 14.4818ZM82.2651 14.4818C85.1511 14.4818 87.4189 16.9671 87.4189 20.3667C87.4189 23.7315 85.1511 26.1819 82.2651 26.1819C79.34 26.1819 76.8895 23.7315 76.8895 20.3667C76.8895 16.9671 79.34 14.4818 82.2651 14.4818Z"/>
              </g>
              <defs>
              <clipPath id="clip0_1729_765">
              <rect width="117.371" height="38.636" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>
          
          <div>
            <svg width="153" height="22" viewBox="0 0 153 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Apleona logo</title>
              <g clipPath="url(#clip0_1729_767)">
              <path className="fill-brand-500" d="M33.7003 0.376617H24.7334V21.5359H28.9962V15.0153H33.2616C38.3399 15.0153 41.6325 12.1304 41.6325 7.67917C41.6325 3.22797 38.5257 0.376617 33.7003 0.376617ZM33.4165 11.3795H28.9962V4.01241H33.321C35.953 4.01241 37.5529 5.39293 37.5529 7.67917C37.5529 9.96541 35.8911 11.3795 33.4242 11.3795H33.4165ZM45.4928 21.5359H60.5701V17.6808H49.7814V0.376617H45.485L45.4928 21.5359ZM64.2394 21.5359H80.2895V17.6808H68.4945V12.7574H78.5271V8.99775H68.4945V4.16981H80.1244V0.376617H64.2317L64.2394 21.5359ZM94.4843 21.9333C100.755 21.9333 105.456 17.2318 105.456 10.9614C105.456 4.69106 100.879 -0.00012207 94.4843 -0.00012207C88.214 -0.00012207 83.5125 4.70138 83.5125 10.9718C83.5125 17.2421 88.0875 21.9333 94.4843 21.9333ZM94.4843 18.0782C90.6911 18.0782 87.7753 15.0049 87.7753 10.9305C87.7753 6.85602 90.6911 3.78275 94.4843 3.78275C98.2775 3.78275 101.193 6.85602 101.193 10.9305C101.193 15.0049 98.3085 18.0782 94.4843 18.0782Z"/>
              <path className="fill-brand-500" d="M127.387 21.536H128.265V0.376643H123.971V12.9148L110.052 0.219238H109.175V21.536H113.438V8.93327L127.387 21.536Z"/>
              <path className="fill-brand-500" d="M148.203 21.536H153L142.214 0.219238H141.336L130.648 21.536H135.381L136.857 18.3079H146.727L148.203 21.536ZM141.713 7.67919L145.21 14.796H138.369L141.713 7.67919Z"/>
              <path className="fill-brand-500" d="M17.5468 21.536H22.3515L11.568 0.219238H10.6906L0 21.536H4.73246L6.20846 18.3079H16.0785L17.5468 21.536ZM11.0648 7.67919L14.5612 14.796H7.72315L11.0648 7.67919Z"/>
              </g>
              <defs>
              <clipPath id="clip0_1729_767">
              <rect width="153" height="21.9438" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>

          <div>
            <svg width="123" height="33" viewBox="0 0 123 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Linkedin logo</title>
              <g clipPath="url(#clip0_1729_774)">
              <path className="fill-brand-500" d="M90.6172 2.33329C90.6172 1.04539 91.6885 0.00012207 93.0093 0.00012207H120.59C121.912 0.00012207 122.983 1.04539 122.983 2.33329V30.2378C122.983 31.5261 121.912 32.5705 120.59 32.5705H93.0093C91.6885 32.5705 90.6172 31.5261 90.6172 30.2382V2.33286V2.33329Z"/>
              <path className="fill-brand-500" d="M0.0166016 27.2826H13.5235V22.8478H4.90549V5.92997H0.0166016V27.2826ZM20.362 27.2826V12.5754H15.4735V27.2826H20.362ZM17.9182 10.5677C19.6226 10.5677 20.6837 9.43827 20.6837 8.02606C20.652 6.5831 19.6226 5.48572 17.9507 5.48572C16.2783 5.48572 15.1848 6.58353 15.1848 8.02606C15.1848 9.43827 16.2458 10.5677 17.8862 10.5677H17.9182ZM22.6315 27.2826H27.52V19.0691C27.52 18.6296 27.5516 18.19 27.681 17.8769C28.0339 16.9986 28.8382 16.0888 30.1889 16.0888C31.9582 16.0888 32.666 17.4378 32.666 19.4138V27.2822H37.5536V18.8495C37.5536 14.3319 35.1419 12.2298 31.9253 12.2298C29.2884 12.2298 28.1304 13.7039 27.4871 14.7082H27.52V12.5754H22.6315C22.696 13.9555 22.6315 27.2826 22.6315 27.2826ZM44.4502 5.92997H39.5617V27.2826H44.4502V22.5142L45.6719 20.976L49.4993 27.2826H55.5129L49.0815 18.1528L54.709 11.9419H48.8244C48.8244 11.9419 44.8043 17.4984 44.4502 18.158V5.92997Z"/>
              <path className="fill-brand-500" d="M68.5869 21.1476C68.6514 20.77 68.748 20.0455 68.748 19.2262C68.748 15.4244 66.8181 11.5646 61.7369 11.5646C56.3017 11.5646 53.793 15.8631 53.793 19.7619C53.793 24.5837 56.8485 27.5948 62.1867 27.5948C64.3097 27.5948 66.2709 27.2821 67.8796 26.623L67.2362 23.3945C65.9172 23.8319 64.5665 24.051 62.8946 24.051C60.6114 24.051 58.6178 23.1134 58.4567 21.116L68.5869 21.1467V21.1476ZM58.4247 17.8405C58.5533 16.5855 59.3901 14.7337 61.4802 14.7337C63.6989 14.7337 64.2141 16.7106 64.2141 17.8405H58.4251H58.4247ZM80.8141 5.92987V13.3215H80.7496C80.0418 12.2869 78.5625 11.5966 76.6018 11.5966C72.8385 11.5966 69.5263 14.6081 69.5579 19.7529C69.5579 24.5218 72.5493 27.6277 76.2793 27.6277C78.3058 27.6277 80.2348 26.7486 81.2002 25.0544H81.2964L81.4899 27.2825H85.8311C85.767 26.2471 85.7021 24.459 85.7021 22.702V5.92944H80.8137L80.8141 5.92987ZM80.8141 20.4748C80.8141 20.8507 80.782 21.2279 80.7171 21.5406C80.4288 22.8904 79.2707 23.8306 77.8555 23.8306C75.8299 23.8306 74.5108 22.1997 74.5108 19.6273C74.5108 17.2121 75.6373 15.2668 77.888 15.2668C79.3993 15.2668 80.4604 16.3018 80.75 17.5876C80.8141 17.8708 80.8141 18.1848 80.8141 18.4667V20.4744V20.4748Z"/>
              <path d="M100.428 27.2645V12.5573H95.5393V27.2645H100.428H100.428ZM97.9844 10.5496C99.6888 10.5496 100.75 9.4202 100.75 8.00885C100.718 6.56546 99.6888 5.46765 98.0169 5.46765C96.3437 5.46765 95.251 6.56546 95.251 8.00885C95.251 9.4202 96.3116 10.5496 97.9524 10.5496H97.984H97.9844ZM103.133 27.2645H108.021V19.0523C108.021 18.6132 108.054 18.1732 108.183 17.8597C108.536 16.981 109.34 16.0716 110.691 16.0716C112.459 16.0716 113.167 17.4201 113.167 19.3975V27.2645H118.055V18.8319C118.055 14.3146 115.644 12.2126 112.428 12.2126C109.791 12.2126 108.633 13.6863 107.989 14.6901H108.022V12.5577H103.134C103.198 13.9375 103.133 27.265 103.133 27.265V27.2645Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_1729_774">
              <rect width="123" height="32.5704" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>

          <div>
            <svg width="171" height="33" viewBox="0 0 171 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Rocketseat logo</title>
              <path className="fill-brand-500" d="M35.6288 9.48389C34.1901 9.48389 33.0037 10.6281 33.0037 12.0709V17.5433V23.0157H35.6288V17.5433V12.0709H38.7587H41.8886V9.48389H38.7587H35.6288Z"/>
              <path className="fill-brand-500" d="M57.5387 16.2256V12.0466C57.5387 10.6288 56.3776 9.45966 54.9136 9.45966H50.6731H46.4326C44.9939 9.45966 43.8075 10.6039 43.8075 12.0466V16.2256V20.4045C43.8075 21.8224 44.9686 22.9915 46.4326 22.9915H50.6731H54.9136C56.3524 22.9915 57.5387 21.8472 57.5387 20.4045V16.2256ZM54.9136 16.2256V20.4045H50.6731H46.4326V16.2256V12.0466H50.6731H54.9136V16.2256Z"/>
              <path className="fill-brand-500" d="M62.7881 9.48389C61.3494 9.48389 60.163 10.6281 60.163 12.0709V16.2498V20.4288C60.163 21.8466 61.3241 23.0157 62.7881 23.0157L72.0264 22.8913V20.4288H62.7881V16.2498V12.0709H72.0264V9.60826L62.7881 9.48389Z"/>
              <path className="fill-brand-500" d="M87.0728 9.48383H83.5138L78.3142 14.9314H77.2793V9.48383H74.6542V16.2249V22.9908H77.2793V17.5183H78.5918H78.7938L84.1954 22.9908H87.8048L80.8635 15.9264L87.0728 9.48383Z"/>
              <path className="fill-brand-500" d="M90.9824 20.4045V17.5191L102.089 17.3947V14.9321V12.0466C102.089 10.6288 100.927 9.45966 99.4634 9.45966H95.2229H90.9824C89.5437 9.45966 88.3573 10.6039 88.3573 12.0466V16.2256V20.4045C88.3573 21.8224 89.5184 22.9915 90.9824 22.9915L102.089 22.8671V20.4045H90.9824ZM90.9824 12.0466H95.2229H99.4634V14.9321H96.5355H90.9824V12.0466Z"/>
              <path className="fill-brand-500" d="M108.677 5.52924H107.667L106.051 7.49434V9.45944H104.057V12.0464L106.051 12.0215V20.4043C106.051 21.8222 107.213 22.9913 108.677 22.9913L112.917 22.8669V20.4043H108.677V11.9967L113.296 11.922V9.45944H108.677V5.52924Z"/>
              <path className="fill-brand-500" d="M127.128 17.5191C127.128 16.1012 125.967 14.9321 124.503 14.9321H121.196H117.89V12.0466H127.128V9.58403L117.89 9.45966C116.451 9.45966 115.265 10.6039 115.265 12.0466V14.9321C115.265 16.3499 116.426 17.5191 117.89 17.5191H121.196H124.503V20.4045H115.265V22.8671L124.503 22.9915C125.942 22.9915 127.128 21.8472 127.128 20.4045V17.5191Z"/>
              <path className="fill-brand-500" d="M140.833 9.48383H136.592H132.352C130.913 9.48383 129.726 10.6281 129.726 12.0708V16.2497V20.4287C129.726 21.8465 130.888 23.0156 132.352 23.0156L143.458 22.8913V20.4287H132.352V17.5432L143.458 17.4189V14.9563V12.0708C143.458 10.6281 142.297 9.48383 140.833 9.48383ZM140.833 14.9314H132.352V12.0459H136.592H140.833V14.9314Z"/>
              <path className="fill-brand-500" d="M157.19 9.48389L146.084 9.60826V12.0709H157.19V14.9563L146.084 15.0807V17.5433V20.4288C146.084 21.8466 147.245 23.0157 148.709 23.0157H152.949H157.19C158.629 23.0157 159.815 21.8715 159.815 20.4288V16.2498V12.0709C159.79 10.6281 158.629 9.48389 157.19 9.48389ZM157.19 20.4039H152.949H148.709V17.5184H157.19V20.4039Z"/>
              <path className="fill-brand-500" d="M166.381 11.9965L171 11.9219V9.45929H166.381V5.50421H165.371L163.756 7.46931V9.43441H161.762V12.0214L163.756 11.9965V20.3793C163.756 21.7971 164.917 22.9663 166.381 22.9663L170.621 22.8419V20.3793H166.381V11.9965Z"/>
              <path className="fill-brand-500" d="M26.0624 0.628484L21.7966 0.0066166C21.6704 -0.0182581 21.5442 0.0314883 21.4937 0.0812377L19.6764 2.41946C19.5502 2.56871 19.5249 2.7677 19.5754 2.94183C19.6259 3.11595 19.4745 3.2652 19.2978 3.24033L17.8085 2.91695C17.5814 2.8672 17.329 2.94183 17.1775 3.14083L11.2711 10.6032C11.1701 10.7525 10.9682 10.8022 10.7915 10.7276L8.54504 9.73262C8.34311 9.63313 8.11594 9.658 7.93925 9.78237L6.8034 10.5535C6.62671 10.6779 6.3743 10.7027 6.17237 10.6032L5.61707 10.3296C5.26369 10.1555 4.83459 10.3545 4.73363 10.7276L4.32977 12.4937C4.2288 12.9166 4.40549 13.3395 4.78411 13.5633L5.64231 14.0857L8.39359 15.7523L9.73137 16.5732C10.11 16.797 10.5896 16.7473 10.9177 16.4737L13.1642 14.5334C13.3409 14.3842 13.6185 14.3344 13.8204 14.4588L14.5019 14.8071C14.7291 14.9314 15.0068 14.8817 15.1835 14.7076L16.3193 13.6628C16.496 13.4887 16.7737 13.4638 16.9756 13.5633L18.6667 14.3344C18.9191 14.4588 19.222 14.3842 19.3987 14.1603L20.1812 13.1653L26.1129 5.67804C26.3905 5.3298 26.2138 4.80743 25.7595 4.70793L24.447 4.40943C24.1693 4.35968 24.0431 4.01144 24.245 3.81244L26.2896 1.3001C26.4915 1.0016 26.3653 0.678233 26.0624 0.628484Z"/>
              <path className="fill-brand-500" d="M6.50044 15.7017C6.37423 15.6271 6.24802 15.7515 6.29851 15.8758L6.92954 17.5176C6.98002 17.642 6.98002 17.7663 6.95477 17.8907L6.39947 20.0299C6.37423 20.1792 6.42471 20.3284 6.52568 20.403L8.11587 21.6219C8.26731 21.7214 8.46924 21.7214 8.59545 21.597L10.2614 20.1543C10.3623 20.0797 10.4885 20.0299 10.5895 20.005L12.4826 19.8061C12.6088 19.7812 12.6593 19.607 12.5331 19.5324L6.50044 15.7017Z"/>
              <path className="fill-brand-500" d="M5.94543 21.2243C5.84446 21.1497 5.69302 21.1248 5.56681 21.1746L4.22903 21.8213C4.15331 21.8462 4.10282 21.9208 4.05234 21.9954L1.2001 28.9355C1.2001 28.9603 1.2001 28.9603 1.2001 28.9852C1.22534 29.0101 1.25058 29.035 1.30106 29.035L1.95733 28.7862C1.98257 28.7862 2.00781 28.7862 2.03305 28.7862C2.05829 28.8111 2.08353 28.8608 2.05829 28.8857L0.0137583 32.1941C-0.0367239 32.2687 0.0642429 32.3433 0.114725 32.2687L7.51038 24.9555C7.5861 24.8809 7.61135 24.8063 7.63659 24.7068L7.78803 22.8163C7.78803 22.6919 7.73755 22.5924 7.66183 22.5178L5.94543 21.2243Z"/>
            </svg>
          </div>

          <div>
            <svg width="160" height="31" viewBox="0 0 160 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Facebook logo</title>
              <g clipPath="url(#clip0_1729_763)">
              <path className="fill-brand-500" fillRule="evenodd" clipRule="evenodd" d="M81.7166 0L75.3487 0.764086V30.5521H81.7166V28.7843C82.5754 29.3926 83.4096 30.1243 84.3869 30.4713C88.0972 31.7908 92.9907 30.7157 94.7024 25.7918C95.8012 22.6331 95.7727 19.3946 94.9453 16.2003C94.028 12.6518 91.6478 10.6929 87.9602 10.3031C85.5557 10.0483 83.4752 10.7706 81.7166 12.869V12.2169V0.888835V0.764086V0ZM147.379 0.0184283L141.011 0.783931V30.5719H147.379V21.4554L153.246 30.5847H160L153.634 20.6743L160 10.7964H153.246L147.379 19.8974V0.908681V0.783932V0.0184283ZM12.3 0.0482011C9.39641 0.0147194 5.36291 0.798565 4.21763 5.15297C4.21763 5.15443 4.21697 5.15718 4.21478 5.15864C4.21112 5.17388 4.20701 5.18876 4.20334 5.204C3.91513 6.07497 3.93537 10.0638 3.93903 10.5654H0V15.8998H4.18334V30.4089H10.2755V15.8998H14.9346L15.4589 10.5654H14.936H10.3912V7.56714C10.7233 4.73213 15.4418 5.27063 15.4418 5.27063L15.4433 5.07642L15.4418 5.05515V0.398343V0.396891H15.4375C15.3766 0.382469 14.0421 0.0682523 12.3 0.0481626L12.3 0.0482011ZM23.5727 10.2223C20.1755 10.2239 17.1956 12.3639 16.1133 15.8686C15.2947 18.5193 15.2834 21.2464 15.7633 23.9305C16.7998 29.7435 21.1572 31.6902 25.8016 30.7307C27.2266 30.436 28.2853 29.5566 29.2677 28.3307C29.2677 28.3307 29.3566 28.2222 29.4648 28.0132V30.5719H35.407V10.588H29.4648V13.1185H29.4634C29.3888 13.0364 29.3156 12.9563 29.252 12.8902C29.2417 12.8801 29.2336 12.8706 29.2234 12.8605C29.1349 12.769 29.0734 12.7088 29.0734 12.7088C27.6389 11.2615 27.0966 10.9012 25.973 10.5724C25.1628 10.3357 24.3567 10.2219 23.5727 10.2223V10.2223ZM128.916 10.2294C127.805 10.2307 126.693 10.3785 125.589 10.6703C122.284 11.5442 120.069 13.6195 119.355 16.9205C118.965 18.7227 118.888 20.6366 118.991 22.4846C119.225 26.7102 121.86 29.7215 125.946 30.6556C126.004 30.6693 126.064 30.6795 126.122 30.6925H126.123C126.124 30.6927 126.133 30.6947 126.15 30.6981C126.308 30.7293 126.465 30.7585 126.623 30.7818C126.676 30.7868 126.729 30.7916 126.782 30.7945C126.783 30.796 126.785 30.796 126.786 30.796C126.986 30.8323 127.223 30.86 127.472 30.8796C128.274 30.9638 129.294 31.0244 130.142 30.925C130.147 30.9235 130.15 30.9236 130.155 30.9221C130.2 30.9214 130.242 30.9215 130.284 30.9193C134.505 30.7008 137.709 28.0592 138.643 24.0099C139.156 21.7882 139.156 19.5548 138.662 17.3316C137.883 13.8419 135.752 11.5973 132.247 10.6675C131.141 10.3735 130.028 10.2282 128.917 10.2295L128.916 10.2294ZM107.198 10.2337C106.087 10.2351 104.976 10.3828 103.872 10.6746C100.566 11.5477 98.3496 13.6231 97.6356 16.9248C97.2457 18.7262 97.1682 20.6417 97.2713 22.4888C97.5068 26.7145 100.14 29.725 104.228 30.6599C104.284 30.6736 104.344 30.6838 104.402 30.6967H104.404C104.404 30.6969 104.415 30.6989 104.432 30.7024C104.589 30.7336 104.747 30.7621 104.905 30.786C104.958 30.7904 105.012 30.7951 105.064 30.8002H105.068C105.266 30.8365 105.504 30.8628 105.754 30.8824C106.554 30.9666 107.573 31.0272 108.423 30.9278C108.429 30.9278 108.431 30.9271 108.436 30.9263C108.479 30.9256 108.524 30.925 108.567 30.9221C112.788 30.7043 115.99 28.0634 116.925 24.0127C117.438 21.791 117.437 19.559 116.941 17.3358C116.165 13.8461 114.032 11.6007 110.527 10.6702C109.421 10.3767 108.31 10.2323 107.198 10.2336L107.198 10.2337ZM47.194 10.2734C46.6882 10.2907 46.1798 10.3278 45.6696 10.3811C41.3683 10.8319 38.4499 13.3514 37.6401 17.5088C37.2151 19.6964 37.2336 21.9108 37.7215 24.1049C38.4523 27.3906 40.4604 29.5135 43.7236 30.4628C45.8531 31.082 48.0347 31.1136 50.2058 30.7775C51.1188 30.636 52.4291 30.1652 53.3691 29.8306L53.7262 29.7058L53.5576 29.1402C53.2819 28.1393 52.9683 27.151 52.6647 26.1973L52.3775 25.1369C52.3775 25.1369 44.9296 28.6858 43.7679 21.9445C43.6604 20.8318 43.6936 19.6829 43.8479 18.5848C44.1376 16.5126 45.4113 15.4025 47.4384 15.2123C48.1231 15.1477 48.8362 15.1806 49.5143 15.2945C50.4375 15.4491 51.3387 15.7246 52.3489 15.9721C52.7001 14.9059 53.059 13.8515 53.3933 12.7896C53.446 12.6234 53.4904 12.4801 53.5248 12.3516L53.6919 11.7137C53.6503 11.6288 53.5494 11.5413 53.4133 11.4557C53.2422 11.3134 52.9504 11.1959 52.4947 11.0304C52.3125 10.9643 52.1289 10.9056 51.946 10.8489C51.7822 10.7974 51.676 10.7667 51.676 10.7667C50.2084 10.3503 48.7117 10.2214 47.194 10.2734ZM64.2675 10.3131C63.5384 10.3085 62.8073 10.3501 62.0901 10.418C58.164 10.7896 55.1829 13.2165 54.5721 16.8681C54.2012 19.0832 54.1535 21.4338 54.4535 23.6584C54.9063 27.0051 56.5486 29.1375 59.3898 30.1609H59.3912C59.4036 30.1616 59.4173 30.1637 59.4298 30.1652L59.4283 30.1666C60.7253 30.5513 67.0716 32.1989 72.667 29.4096L72.4427 28.5917C72.4405 28.5931 72.4361 28.5931 72.4341 28.5931C72.1752 27.503 71.8645 26.4247 71.5712 25.344L71.5397 25.2391C71.5397 25.2391 71.4231 25.2801 71.2168 25.3454C71.2124 25.3461 71.2069 25.3461 71.2025 25.3469C70.9582 25.41 70.7167 25.4839 70.4767 25.5637C70.4321 25.5783 70.3885 25.5918 70.3439 25.6049C69.4968 25.8415 68.285 26.1333 67.0063 26.2966C65.9332 26.4041 64.8503 26.408 63.756 26.3151C61.9791 26.0233 60.6191 25.0788 60.6842 22.8462H61.6986C65.1821 22.8462 68.6656 22.8469 72.1498 22.8462C72.2325 22.8462 72.3157 22.8462 72.3984 22.8448V22.8462C72.3984 22.8462 73.147 22.8379 73.1785 22.8306C73.1785 22.8306 73.1778 22.6348 73.1785 22.6109L73.1656 21.3223C73.1371 19.9389 73.156 18.548 72.9585 17.1886C72.4149 13.4608 70.1284 11.1024 66.4291 10.4862C65.7232 10.369 64.9965 10.3178 64.2674 10.3132L64.2675 10.3131ZM63.9917 14.5716C64.676 14.5534 65.3649 14.7282 66.0291 15.0932C67.3722 15.8292 67.4766 17.1597 67.4378 18.5975H60.5585C60.5943 17.2395 60.765 15.9767 61.9815 15.2081C62.6274 14.8009 63.3074 14.5897 63.9917 14.5716ZM129.034 15.1953C130.769 15.2287 132.009 16.2062 132.451 17.8646C132.85 19.5326 132.554 22.5012 132.514 22.8801C132.493 23.0122 132.471 23.14 132.441 23.2699C132.017 25.1338 130.654 26.1425 128.835 26.0598C126.879 25.9691 125.538 24.8343 125.349 22.8957C125.213 21.4796 125.2 20.0335 125.319 18.616C125.508 16.3776 126.917 15.1539 129.034 15.1953H129.034ZM85.2385 15.1968C87.1558 15.1343 88.6065 16.0786 88.8917 18.0093C89.1449 19.7106 89.1575 21.5035 88.9117 23.2034C88.6316 25.1674 87.0561 26.1957 85.1856 26.0513C84.7181 26.015 84.2951 25.9208 83.9154 25.7735C82.4078 24.9148 81.9519 23.4768 81.8195 22.5739C81.818 22.5747 81.8165 22.5746 81.8165 22.5754C81.7134 21.1782 81.6026 18.2571 82.2895 16.8766C82.8725 15.8184 83.8887 15.2411 85.2384 15.1968L85.2385 15.1968ZM25.633 15.1982C27.3857 15.2374 28.7358 16.266 28.9334 18.0674C29.1184 19.7528 29.1226 21.4876 28.9405 23.1736C28.7416 25.0215 27.2356 26.1324 25.4544 26.0627C23.6293 25.9923 22.4212 25.0218 22.0269 23.2842C21.5543 20.8121 22.1072 17.8745 22.154 17.6365C22.631 15.9773 23.8481 15.1568 25.633 15.1982H25.633ZM107.314 15.1997C109.053 15.233 110.291 16.2105 110.733 17.869C111.134 19.5376 110.837 22.5034 110.797 22.883C110.776 23.0144 110.753 23.1451 110.723 23.2743C110.3 25.1382 108.936 26.1469 107.117 26.0627C105.161 25.9742 103.819 24.8394 103.631 22.9001C103.495 21.4833 103.484 20.0364 103.602 18.6189C103.788 16.3812 105.198 15.1583 107.314 15.1997H107.314Z"/>
              </g>
              <defs>
              <clipPath id="clip0_1729_763">
              <rect width="160" height="31" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>

          <div>
            <svg width="118" height="39" viewBox="0 0 118 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Google logo</title>
              <g clipPath="url(#clip0_1729_765)">
              <path className="fill-brand-500" d="M15.2097 1.5235e-05C6.94792 1.5235e-05 0.00012207 6.72932 0.00012207 14.9911C0.00012207 23.2528 6.94792 29.9821 15.2097 29.9821C19.667 29.9821 23.0316 28.5195 25.6651 25.7772C28.3725 23.0697 29.2128 19.2697 29.2128 16.1966C29.2128 15.2825 29.1429 14.4382 29.0079 13.7243H15.2046V17.8204L24.9943 17.8162C24.6939 20.0753 23.9323 21.7296 22.7745 22.8874C21.3467 24.3152 19.1178 25.886 15.2046 25.886C9.17149 25.886 4.45331 21.0241 4.45331 14.9911C4.45331 8.95797 9.17149 4.09612 15.2046 4.09612C18.4605 4.09612 20.8375 5.37532 22.5917 7.02071L25.4823 4.13098C23.036 1.79349 19.7802 0 15.2097 0V1.5235e-05ZM93.6481 1.10099V29.3946H97.7833V1.10099H93.6481ZM108.67 10.6731C103.694 10.6731 99.5635 14.5861 99.5635 20.3276C99.5635 25.7426 103.66 29.9821 109.144 29.9821C113.567 29.9821 116.126 27.2746 117.188 25.7032L113.897 23.5098C112.8 25.1203 111.303 26.1819 109.144 26.1819C106.989 26.1819 105.453 25.1943 104.465 23.2573L117.371 17.9114L116.932 16.8147C116.131 14.66 113.68 10.6731 108.67 10.6731ZM40.543 10.6773C35.2064 10.6773 30.8579 14.7341 30.8579 20.3318C30.8579 25.8905 35.2064 29.9864 40.543 29.9864C45.8797 29.9864 50.2282 25.8905 50.2282 20.3318C50.2282 14.7341 45.8797 10.6773 40.543 10.6773ZM61.4368 10.6773C56.1002 10.6773 51.7517 14.7384 51.7517 20.3318C51.7517 25.8905 56.1002 29.9864 61.4368 29.9864C66.7734 29.9864 71.122 25.8905 71.122 20.3318C71.122 14.7341 66.7734 10.6773 61.4368 10.6773ZM81.8868 10.6773C77.0595 10.6773 72.637 14.9169 72.637 20.3667C72.637 25.7773 77.0595 29.9821 81.8868 29.9821C84.1938 29.9821 86.0219 28.9596 86.9708 27.7887H87.1188V29.177C87.1188 32.8726 85.147 34.8358 81.965 34.8358C79.3707 34.8358 77.7602 32.9818 77.1029 31.4104L73.4115 32.9467C74.4736 35.5062 77.2899 38.636 81.9693 38.636C86.9403 38.636 91.1452 35.7238 91.1452 28.5938V11.2648H87.1188V12.8367H86.9708C86.0175 11.7006 84.1895 10.6773 81.8868 10.6773V10.6773ZM108.813 14.4079C110.494 14.4079 111.922 15.2476 112.396 16.4534L103.768 20.036C103.66 16.3099 106.659 14.4079 108.813 14.4079ZM40.543 14.4818C43.4682 14.4818 45.9884 16.8582 45.9884 20.3318C45.9884 23.7662 43.4682 26.1819 40.543 26.1819C37.6179 26.1819 35.0977 23.7706 35.0977 20.3318C35.0977 16.8582 37.6179 14.4818 40.543 14.4818ZM61.4368 14.4818C64.3619 14.4818 66.8822 16.8582 66.8822 20.3318C66.8822 23.7662 64.3619 26.1819 61.4368 26.1819C58.5117 26.1819 55.9915 23.7706 55.9915 20.3318C55.9915 16.8582 58.5117 14.4818 61.4368 14.4818ZM82.2651 14.4818C85.1511 14.4818 87.4189 16.9671 87.4189 20.3667C87.4189 23.7315 85.1511 26.1819 82.2651 26.1819C79.34 26.1819 76.8895 23.7315 76.8895 20.3667C76.8895 16.9671 79.34 14.4818 82.2651 14.4818Z"/>
              </g>
              <defs>
              <clipPath id="clip0_1729_765">
              <rect width="117.371" height="38.636" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>

        </div>

      </div>

    </section>
  );
}