import { useState } from "react";

const States = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="block relative">
            <button id="states-button" data-dropdown-toggle="dropdown-states" onClick={() => setToggle(!toggle)} className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm text-center text-gray-200 bg-gray-800/40 border border-gray-800/40 rounded-l-lg" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 -4 28 28" fill="none">
                    <g clipPath="url(#clip0_503_4143)">
                        <rect width="28" height="20" rx="2" fill="white" />
                        <mask id="mask0_503_4143" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
                            <rect width="28" height="20" rx="2" fill="white" />
                        </mask>
                        <g mask="url(#mask0_503_4143)">
                            <rect width="28" height="20" fill="#0B36B2" />
                            <g filter="url(#filter0_d_503_4143)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.6665 20V0H8.6665L22.6665 20Z" fill="#FFD045" />
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.3333 18.6667L16.3905 18.9428L16.6667 18L16.3905 17.0572L17.3333 17.3333L18.2761 17.0572L18 18L18.2761 18.9428L17.3333 18.6667Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6668 14.6667L13.724 14.9428L14.0002 14L13.724 13.0572L14.6668 13.3334L15.6096 13.0572L15.3335 14L15.6096 14.9428L14.6668 14.6667Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9998 10.6667L11.057 10.9428L11.3332 10L11.057 9.05721L11.9998 9.33335L12.9426 9.05721L12.6665 10L12.9426 10.9428L11.9998 10.6667Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.33333 6.66666L8.39052 6.9428L8.66667 5.99999L8.39052 5.05718L9.33333 5.33332L10.2761 5.05718L10 5.99999L10.2761 6.9428L9.33333 6.66666Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.66683 2.66669L5.72402 2.94283L6.00016 2.00002L5.72402 1.05721L6.66683 1.33335L7.60964 1.05721L7.3335 2.00002L7.60964 2.94283L6.66683 2.66669Z" fill="white" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_503_4143" x="8.6665" y="0" width="14" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_503_4143" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_503_4143" result="shape" />
                        </filter>
                        <clipPath id="clip0_503_4143">
                            <rect width="28" height="20" rx="2" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                BiH
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <div id="dropdown-states" className={`absolute z-10 ${!toggle ? "hidden" : ""} bg-gray-800  rounded-lg shadow w-[15rem] text-white`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 divide-y divide-gray-700" aria-labelledby="states-button">
                    <li>
                        <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-white transition duration-500">
                            <div className="inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 -4 28 28" fill="none">
                                    <g clipPath="url(#clip0_503_4143)">
                                        <rect width="28" height="20" rx="2" fill="white" />
                                        <mask id="mask0_503_4143" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
                                            <rect width="28" height="20" rx="2" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_503_4143)">
                                            <rect width="28" height="20" fill="#0B36B2" />
                                            <g filter="url(#filter0_d_503_4143)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M22.6665 20V0H8.6665L22.6665 20Z" fill="#FFD045" />
                                            </g>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.3333 18.6667L16.3905 18.9428L16.6667 18L16.3905 17.0572L17.3333 17.3333L18.2761 17.0572L18 18L18.2761 18.9428L17.3333 18.6667Z" fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6668 14.6667L13.724 14.9428L14.0002 14L13.724 13.0572L14.6668 13.3334L15.6096 13.0572L15.3335 14L15.6096 14.9428L14.6668 14.6667Z" fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9998 10.6667L11.057 10.9428L11.3332 10L11.057 9.05721L11.9998 9.33335L12.9426 9.05721L12.6665 10L12.9426 10.9428L11.9998 10.6667Z" fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.33333 6.66666L8.39052 6.9428L8.66667 5.99999L8.39052 5.05718L9.33333 5.33332L10.2761 5.05718L10 5.99999L10.2761 6.9428L9.33333 6.66666Z" fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.66683 2.66669L5.72402 2.94283L6.00016 2.00002L5.72402 1.05721L6.66683 1.33335L7.60964 1.05721L7.3335 2.00002L7.60964 2.94283L6.66683 2.66669Z" fill="white" />
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_503_4143" x="8.6665" y="0" width="14" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_503_4143" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_503_4143" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_503_4143">
                                            <rect width="28" height="20" rx="2" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Bosnia and Herzegovina
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default States;