import { features } from "../components/CardDetails"
import Testimonials from "../components/Testimonials"
import WorldMap from "../components/WorldMap";
import FloatingComponent from "../components/floatingcomponent";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <section>
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div>
          <FloatingComponent>
          <h1 className="text-5xl font-montserrat font-bold text-[#2E2F2E]">
            Securing the Future,{" "}
            <span className="block text-[#FF6812] font-semibold">Globally</span>
          </h1>
          </FloatingComponent>
          
        </div>
        <FloatingComponent>
        <div>
          <p className="text-[#888987] font-semibold font-nunito text-lg leading-relaxed">
            Founded in 2020, SafeMax Security is committed to
            empowering businesses by building resilient digital infrastructures.
            With a focus on precision, proactive threat hunting, and adaptive
            security measures, we safeguard sensitive data and critical systems
            against ever-evolving cyber threats.
          </p>
        </div>
        </FloatingComponent>
        
      </div>
      <FloatingComponent>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#2E2F2E] rounded-3xl p-8 text-white flex flex-col justify-between h-full">
          <div>
            <h2 className="text-[#FCF7F0] text-5xl font-montserrat font-semibold mb-2">500,000+</h2>
            <p className="text-[#888987] font-medium text-4xl font-nunito mb-8">hours of annual threat monitoring</p>
          </div>
          <div className="flex justify-between items-end">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
          <g id="Group 2608556">
          <path id="Line 249" d="M3 17.8027L3 42.9994" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
          <path id="Line 250" d="M13.002 3L13.002 42.9997" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
          <path id="Line 251" d="M23 23.1572L23 42.9996" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
          <path id="Line 252" d="M33 10.874L33 42.9997" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
          <path id="Line 253" d="M43 33L43 43" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
          </g>
          </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
          <g id="monitor-svgrepo-com 1">
          <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M105 15H75C46.7157 15 32.5736 15 23.7868 23.7868C15 32.5736 15 46.7157 15 75V82.5C15 86.637 15 90.3705 15.0489 93.75H164.951C165 90.3705 165 86.637 165 82.5V75C165 46.7157 165 32.5736 156.213 23.7868C147.427 15 133.284 15 105 15ZM21.5896 120.91C28.1797 127.5 38.7863 127.5 59.9995 127.5H84.3745V157.5H59.9995C56.8929 157.5 54.3745 160.018 54.3745 163.125C54.3745 166.232 56.8929 168.75 59.9995 168.75H119.999C123.106 168.75 125.624 166.232 125.624 163.125C125.624 160.018 123.106 157.5 119.999 157.5H95.6245V127.5H119.999C141.212 127.5 151.819 127.5 158.409 120.91C162.679 116.64 164.183 110.684 164.711 101.25H15.2871C15.8165 110.684 17.3198 116.64 21.5896 120.91Z" fill="url(#paint0_linear_228_465)"/>
          <path id="Vector" d="M171.962 88.2648C164.94 88.2648 159.212 82.4374 159.212 75.2943C159.212 74.6161 158.666 74.0254 157.988 74.0254H120.664C119.986 74.0254 119.44 74.6161 119.44 75.2943C119.44 77.08 119.071 78.8188 118.424 80.3697C116.484 85.0221 111.957 88.2648 106.691 88.2648C105.829 88.2648 105.093 88.9289 105.143 89.7893C105.212 90.9638 105.317 92.1161 105.444 93.2462C105.906 97.5697 106.737 101.752 107.892 105.794C109.832 112.467 112.696 118.67 116.299 124.075C116.992 125.156 117.731 126.189 118.516 127.176C124.106 134.554 131.127 140.382 139.072 144C158.021 135.428 171.714 114.335 172.978 89.2835C173.006 88.7266 172.519 88.2648 171.962 88.2648Z" fill="#E6B98B" stroke="white" stroke-width="6"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_228_465" x1="90" y1="15" x2="90" y2="312.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF6812"/>
          <stop offset="1" stop-color="#993E0B"/>
          </linearGradient>
          </defs>
          </svg>
          </div>
        </div>

        <div className="bg-[#2E2F2E] rounded-3xl p-8 text-white flex flex-col justify-between h-full">
          <div>
            <h2 className="text-[#FCF7F0] text-5xl font-montserrat font-semibold mb-2">1 million+</h2>
            <p className="text-[#888987] font-medium font-nunito text-4xl mb-8">secured endpoints</p>
          </div>
          <div className="flex justify-between items-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
            <g id="Group 2608556">
            <path id="Line 249" d="M3 17.8027L3 42.9994" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
            <path id="Line 250" d="M13.002 3L13.002 42.9997" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
            <path id="Line 251" d="M23 23.1572L23 42.9996" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
            <path id="Line 252" d="M33 10.874L33 42.9997" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
            <path id="Line 253" d="M43 33L43 43" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
            </g>
            </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
            <g id="lock-protect-security-25-svgrepo-com 2">
            <g id="Group">
            <path id="Vector" d="M136.863 81.2461C136.863 79.3125 135.281 77.7305 133.348 77.7305H46.6523C44.7188 77.7305 43.1367 79.3125 43.1367 81.2461V101.109C43.1367 103.043 44.7188 104.625 46.6523 104.625H133.348C135.281 104.625 136.863 103.043 136.863 101.109V81.2461ZM64.3711 94.3945H54.0703C52.5234 94.3945 51.2578 93.1289 51.2578 91.582C51.2578 90.0352 52.5234 88.7695 54.0703 88.7695H64.3711C65.918 88.7695 67.1836 90.0352 67.1836 91.582C67.1836 93.1289 65.918 94.3945 64.3711 94.3945ZM120.129 96.9961C116.93 96.9961 114.293 94.3945 114.293 91.1601C114.293 87.9258 116.895 85.3242 120.129 85.3242C123.363 85.3242 125.965 87.9258 125.965 91.1601C125.965 94.3945 123.328 96.9961 120.129 96.9961Z" fill="#E6B98B"/>
            <path id="Vector_2" d="M133.348 115.805H46.6523C44.7188 115.805 43.1367 117.387 43.1367 119.32V139.219C43.1367 141.152 44.7188 142.734 46.6523 142.734H133.348C135.281 142.734 136.863 141.152 136.863 139.219V119.355C136.863 117.387 135.316 115.805 133.348 115.805ZM64.3711 132.469H54.0703C52.5234 132.469 51.2578 131.203 51.2578 129.656C51.2578 128.109 52.5234 126.844 54.0703 126.844H64.3711C65.918 126.844 67.1836 128.109 67.1836 129.656C67.1836 131.203 65.918 132.469 64.3711 132.469ZM120.129 135.105C116.93 135.105 114.293 132.504 114.293 129.27C114.293 126.035 116.895 123.434 120.129 123.434C123.363 123.434 125.965 126.035 125.965 129.27C125.965 132.504 123.328 135.105 120.129 135.105Z" fill="#E6B98B"/>
            <path id="Vector_3" d="M159.258 97.6289C153.668 97.6289 149.133 102.164 149.133 107.754C149.133 113.344 153.668 117.879 159.258 117.879C164.848 117.879 169.383 113.344 169.383 107.754C169.383 102.164 164.848 97.6289 159.258 97.6289Z" fill="#FF6812"/>
            <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M23.5547 73.9688V92.25C22.6406 92.0742 21.7266 92.0039 20.7773 92.0039C19.8281 92.0039 18.8789 92.0742 17.9648 92.25V73.9688C17.9648 60.082 29.25 48.7969 43.1367 48.7969V43.1719C43.1367 41.2383 44.7188 39.6562 46.6523 39.6562H50.625C50.625 21.0586 65.7773 5.90625 84.375 5.90625H95.625C114.223 5.90625 129.375 21.0586 129.375 39.6562H133.313C135.246 39.6562 136.828 41.2383 136.828 43.1719V48.7969C150.715 48.7969 162 60.082 162 73.9688V92.25C161.086 92.1094 160.137 92.0039 159.188 92.0039C158.238 92.0039 157.289 92.0742 156.375 92.25V73.9688C156.375 63.2109 147.621 54.4219 136.828 54.4219V63.0352C136.828 64.9688 135.246 66.5508 133.313 66.5508H46.6172C44.6836 66.5508 43.1016 64.9688 43.1016 63.0352V54.4219C32.3438 54.4219 23.5547 63.1758 23.5547 73.9688ZM54.0703 56.2852H64.3711C65.918 56.2852 67.1836 55.0195 67.1836 53.4727C67.1836 51.9258 65.918 50.6602 64.3711 50.6602H54.0703C52.5234 50.6602 51.2578 51.9258 51.2578 53.4727C51.2578 55.0195 52.5234 56.2852 54.0703 56.2852ZM114.293 53.0859C114.293 56.3203 116.93 58.9219 120.129 58.9219C123.328 58.9219 125.965 56.3203 125.965 53.0859C125.965 49.8516 123.363 47.25 120.129 47.25C116.895 47.25 114.293 49.8516 114.293 53.0859ZM95.625 11.5312H84.375C68.8711 11.5312 56.25 24.1172 56.25 39.6562H123.75C123.75 24.1523 111.129 11.5312 95.625 11.5312ZM156.445 123.188V141.469C156.445 152.262 147.656 161.016 136.898 161.016H105.469C105.645 161.859 105.715 162.773 105.75 163.652V163.969C105.75 164.883 105.68 165.762 105.539 166.641H136.934C150.82 166.641 162.105 155.355 162.105 141.469V123.188C161.191 123.363 160.242 123.434 159.293 123.434C158.344 123.434 157.359 123.363 156.445 123.188ZM74.5664 161.051H43.1367C32.3438 161.051 23.5898 152.262 23.5898 141.504V123.223C22.6758 123.398 21.7266 123.469 20.7773 123.469C19.8281 123.469 18.8789 123.363 17.9648 123.223V141.504C17.9648 155.391 29.25 166.676 43.1367 166.676H74.5312C74.3906 165.797 74.3203 164.918 74.3203 164.004V163.688C74.2852 162.809 74.3906 161.895 74.5664 161.051ZM30.8672 107.719C30.8672 102.129 26.332 97.5938 20.7422 97.5938C15.1523 97.5938 10.6172 102.129 10.6172 107.719C10.6172 113.309 15.1523 117.844 20.7422 117.844C26.332 117.844 30.8672 113.309 30.8672 107.719ZM79.9102 163.863C79.9805 158.309 84.4453 153.879 90 153.879C95.5547 153.879 100.02 158.344 100.16 163.863V164.004C100.16 169.594 95.625 174.129 90.0352 174.129C84.4453 174.129 79.9102 169.594 79.9102 164.004V163.863Z" fill="url(#paint0_linear_228_480)"/>
            </g>
            </g>
            <defs>
            <linearGradient id="paint0_linear_228_480" x1="86.3613" y1="5.90625" x2="86.3613" y2="483.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF6812"/>
            <stop offset="1" stop-color="#993E0B"/>
            </linearGradient>
            </defs>
            </svg>
          </div>
        </div>

        <div className="bg-[#2E2F2E] rounded-3xl p-8 text-white flex flex-col justify-between h-full">
          <div>
            <h2 className="text-[#FCF7F0] text-5xl font-montserrat font-semibold mb-2">200+</h2>
            <p className="text-[#888987] font-medium font-nunito text-4xl mb-8">trusted clients worldwide</p>
            <br />
            <br />
          </div>
          <div className="flex justify-between items-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
            <g id="Group 2608556">
            <path id="Line 249" d="M3 17.8027L3 42.9994" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
            <path id="Line 250" d="M13.002 3L13.002 42.9997" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
            <path id="Line 251" d="M23 23.1572L23 42.9996" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
            <path id="Line 252" d="M33 10.874L33 42.9997" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
            <path id="Line 253" d="M43 33L43 43" stroke="#FF6812" stroke-width="4.72441" stroke-linecap="round"/>
            </g>
            </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
            <g id="shield-network-svgrepo-com 2">
            <path id="Vector" d="M89.5716 58.2552C89.8318 58.1256 89.9601 58.123 89.9931 58.123C90.0261 58.123 90.1543 58.1256 90.4146 58.2552C90.6951 58.3945 91.1316 58.6849 91.6873 59.26C92.8326 60.446 94.1473 62.4962 95.3773 65.5706C96.5893 68.6016 97.6003 72.3301 98.3016 76.567C98.7163 79.0683 99.0133 81.6888 99.1873 84.373H80.7988C80.9728 81.6888 81.2698 79.0683 81.6846 76.567C82.3858 72.3301 83.3968 68.6016 84.6088 65.5706C85.8388 62.4961 87.1536 60.446 88.2988 59.26C88.8546 58.6849 89.2911 58.3945 89.5716 58.2552Z" fill="#E6B98B"/>
            <path id="Vector_2" d="M69.5406 84.3786C69.7288 81.0861 70.0823 77.8462 70.5981 74.7336C71.3224 70.3621 72.3647 66.2519 73.711 62.6084C71.441 63.9585 69.3425 65.5887 67.4666 67.4646C64.5067 70.4244 62.1588 73.9383 60.5569 77.8056C59.6786 79.9259 59.034 82.1301 58.6309 84.3786H69.5406Z" fill="#E6B98B"/>
            <path id="Vector_3" d="M58.6309 95.625H69.5406C69.7288 98.9175 70.0823 102.158 70.5981 105.27C71.3224 109.642 72.3647 113.752 73.711 117.395C71.441 116.045 69.3425 114.415 67.4666 112.539C64.5067 109.58 62.1588 106.065 60.5569 102.198C59.6786 100.078 59.034 97.8735 58.6309 95.625Z" fill="#E6B98B"/>
            <path id="Vector_4" d="M121.373 84.3786C120.97 82.1301 120.325 79.9259 119.447 77.8056C117.845 73.9383 115.498 70.4245 112.537 67.4646C110.662 65.5887 108.563 63.9585 106.293 62.6084C107.639 66.2519 108.682 70.3621 109.406 74.7336C109.921 77.8462 110.275 81.0861 110.464 84.3786H121.373Z" fill="#E6B98B"/>
            <path id="Vector_5" d="M110.464 95.625H121.373C120.97 97.8735 120.325 100.078 119.447 102.198C117.845 106.065 115.498 109.58 112.537 112.539C110.662 114.415 108.563 116.045 106.293 117.395C107.639 113.752 108.682 109.642 109.406 105.27C109.921 102.158 110.275 98.9175 110.464 95.625Z" fill="#E6B98B"/>
            <path id="Vector_6" d="M99.1873 95.625C99.0133 98.3092 98.7163 100.93 98.3016 103.431C97.6003 107.668 96.5893 111.397 95.3773 114.427C94.1473 117.502 92.8326 119.552 91.6873 120.738C91.1316 121.313 90.6951 121.604 90.4146 121.743C90.1543 121.873 90.0261 121.875 89.9931 121.875C89.9601 121.875 89.8318 121.873 89.5716 121.743C89.2911 121.604 88.8546 121.313 88.2988 120.738C87.1536 119.552 85.8388 117.502 84.6088 114.427C83.3968 111.397 82.3858 107.668 81.6846 103.431C81.2698 100.93 80.9728 98.3092 80.7988 95.625H99.1873Z" fill="#E6B98B"/>
            <path id="Vector_7" fill-rule="evenodd" clip-rule="evenodd" d="M25.3314 38.12C22.5 42.1541 22.5 54.145 22.5 78.1272V89.9375C22.5 132.222 54.2922 152.743 74.2392 161.457C79.65 163.82 82.3553 165.002 90 165.002C97.6448 165.002 100.35 163.82 105.761 161.457C125.708 152.743 157.5 132.222 157.5 89.9375V78.1272C157.5 54.145 157.5 42.1541 154.669 38.12C151.837 34.086 140.563 30.2267 118.013 22.508L113.717 21.0374C101.963 17.0138 96.0855 15.002 90 15.002C83.9145 15.002 78.0375 17.0138 66.2829 21.0374L61.9868 22.5079C39.4374 30.2267 28.1627 34.086 25.3314 38.12ZM46.875 90.002C46.875 84.3387 47.9905 78.731 50.1577 73.4987C52.3249 68.2666 55.5015 63.5125 59.5061 59.508C63.5105 55.5035 68.2646 52.3269 73.4968 50.1596C78.729 47.9924 84.3368 46.877 90 46.877C95.6633 46.877 101.271 47.9924 106.503 50.1596C111.736 52.3269 116.489 55.5035 120.494 59.508C124.499 63.5125 127.675 68.2666 129.842 73.4987C132.01 78.731 133.125 84.3387 133.125 90.002C133.125 95.6652 132.01 101.273 129.842 106.505C127.675 111.738 124.499 116.491 120.494 120.496C116.489 124.5 111.736 127.677 106.503 129.844C101.271 132.012 95.6633 133.127 90 133.127C84.3368 133.127 78.729 132.012 73.4968 129.844C68.2646 127.677 63.5105 124.5 59.5061 120.496C55.5015 116.491 52.3249 111.738 50.1577 106.505C47.9905 101.273 46.875 95.6652 46.875 90.002Z" fill="url(#paint0_linear_228_501)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_228_501" x1="90" y1="15.002" x2="90" y2="223.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF6812"/>
            <stop offset="1" stop-color="#993E0B"/>
            </linearGradient>
            </defs>
            </svg>
          </div>
        </div>
      </div>
      </FloatingComponent>
      
      </section>

      <div className='h-24'></div>
      
      <section>
        <FloatingComponent>
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h1 className="text-5xl font-montserrat font-bold text-[#2E2F2E]">
            <span className="block text-[#FF6812] font-semibold">Key Features </span>
            & Capabilities
          </h1>
        </div>
        <div>
          <p className="text-[#888987] font-semibold font-nunito text-lg leading-relaxed">
          Harnessing the power of AI and cloud technologies, our advanced solutions are designed to proactively identify and neutralize threats before they can compromise your digital assets. Delivering adaptive security that evolves with your business, ensuring a resilient and secure digital landscape.
          </p>
        </div>
      </div>
        </FloatingComponent>
      
      <FloatingComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
        <div
          key={index}
          className="border bg-[#FCF7F0] bg-card rounded-2xl p-6 transition-colors duration-300 hover:bg-[#2E2F2E] group relative"
        >
    <div className="mb-24 relative h-12 w-12 ">
      <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        {feature.defaultSvg}
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {feature.hoverSvg}
      </div>
    </div>
    <h3 className="text-3xl text-[#2E2F2E] font-montserrat font-semibold mb-2 group-hover:text-[#FCF7F0] transition-colors duration-300">
      {feature.title}
    </h3>
    <p className="text-muted-foreground font-medium font-nunito text-xl text-[#888987] group-hover: transition-colors duration-300">
      {feature.description}
    </p>
  </div>
))}
</div>
      </FloatingComponent>
      
      </section>

      <div className='h-24'></div>

      <section className="bg-[#2e2f2e] -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="max-w-full mx-auto">
            <FloatingComponent>
            <WorldMap />
            </FloatingComponent>
          </div>
        </section>

      <section>
        <FloatingComponent>
        <Testimonials/>
        </FloatingComponent>
      
      </section>
    </div>
  </div>
  );
}