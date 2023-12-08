import { Program } from "./interfaces";

export const WILLOW_COLOR = "#3068cd";
export const WILLOW_COLOR_HOVER = "#1d478f";
export const SECONDARY_COLOR = "#FFFF";
export const DARK_GREY_COLOR = "#333333";

export const OPENAI_ASSISTANT_ID_SUMMARIZER = "asst_LkIZXhCrOK5qaG2APJQJMFbM";
export const OPENAI_ASSISTANT_ID_PERMITTER = "asst_XHOPVJFngzpWKcY7XOFamIsA";
export const OPENAI_ASSISTANT_ID_CHATTER = "asst_7L3FWsem5NHHVl7B7Ki6Gk4z";

export const programs: Program[] = [
  {
    name: "Affordable Housing Trust Fund",
    level: "City",
    criteria: {
      amiRange: [0, 80],
      adaRange: [0, 10],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: false,
      affordabilityTerm: [0, 30],
      constructionStartDate: new Date("2024-12-31"),
      dateOfOccupancyRequired: new Date("2026-09-30"),
    },
    description: "Program for the Affordable Housing Trust Fund.",
    link: "https://www.worcesterma.gov/uploads/e1/6e/e16ee06f7891e370cdedbfc1cde18311/ahtf-application-scoring-guidance.pdf",
  },
  {
    name: "HOME Investment Partnerships Program",
    level: "City & Federal",
    criteria: {
      amiRange: [0, 80],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: false,
      affordabilityTerm: [0, 20],
    },
    description: "Program for HOME Investment Partnerships.",
    link: "https://www.worcesterma.gov/uploads/d5/40/d540113d70884df976490fbed48d0456/home-tbra-rfp-2022.pdf",
  },
  {
    name: "HOME-ARP",
    level: "City",
    criteria: {
      amiRange: [0, 30],
      adaRange: [0, 0],
      unhoused: true,
      firstTimeHomebuyers: false,
      mixedIncome: false,
      affordabilityTerm: [0, 0],
    },
    description: "Program for HOME-ARP.",
  },
  {
    name: "First Time Homeownership Development",
    level: "City",
    criteria: {
      amiRange: [0, 80],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: true,
      mixedIncome: false,
      affordabilityTerm: [0, 0],
    },
    description: "Program for First Time Homeownership Development.",
    link: "https://www.masshousing.com/en/home-ownership/homebuyers/down-payment-assistance",
  },
  {
    name: "Housing First Solutions",
    level: "City",
    criteria: {
      amiRange: [0, 30],
      adaRange: [0, 0],
      unhoused: true,
      firstTimeHomebuyers: false,
      mixedIncome: false,
      affordabilityTerm: [0, 0],
    },
    description: "Program for Housing First Solutions.",
    link: "https://endhomelessness.org/resource/rapid-re-housing-toolkit/",
  },
  {
    name: "Housing Development Incentive Program / TIE",
    level: "City",
    criteria: {
      amiRange: [0, 0],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: true,
      affordabilityTerm: [0, 0],
    },
    description: "Program for Housing Development Incentive / TIE.",
    link: "https://www.mass.gov/info-details/housing-development-incentive-program-hdip#application-process-",
  },
  {
    name: "Inclusionary Zoning",
    level: "City",
    criteria: {
      amiRange: [60, 80],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: false,
      affordabilityTerm: [0, 0],
    },
    description: "Program for Inclusionary Zoning.",
  },
  {
    name: "DHCD HOME Investment Partnerships Program",
    level: "State",
    criteria: {
      amiRange: [0, 80],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: false,
      affordabilityTerm: [0, 0],
    },
    description: "Program for DHCD HOME Investment Partnerships.",
    link: "https://www.mass.gov/doc/home-hsfprogguidpdf/download",
  },
  {
    name: "Low Income Housing Tax Credits (LIHTC)",
    level: "State",
    criteria: {
      amiRange: [0, 80],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: false,
      affordabilityTerm: [0, 30],
    },
    description: "Program for Low Income Housing Tax Credits (LIHTC).",
    link: "https://www.mass.gov/info-details/low-income-housing-tax-credit-lihtc-0#how-it-works-",
  },
  {
    name: "Housing Stabilization Fund",
    level: "State",
    criteria: {
      amiRange: [0, 80],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: false,
      affordabilityTerm: [0, 40],
    },
    description: "Program for Housing Stabilization Fund.",
    link: "https://www.mass.gov/info-details/housing-stabilization-fund-hsf#eligible-activities-and-affordability-requirements-",
  },
  {
    name: "Affordable Housing Trust Fund",
    level: "State",
    criteria: {
      amiRange: [0, 80],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: false,
      affordabilityTerm: [0, 30],
    },
    description: "Program for the State's Affordable Housing Trust Fund.",
    link: "https://www.masshousing.com/en/developers/new-construction/ahtf",
  },
  {
    name: "Community-Based Housing (Accessibility)",
    level: "State",
    criteria: {
      amiRange: [0, 110],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: false,
      affordabilityTerm: [0, 0],
    },
    description: "Program for Community-Based Housing (Accessibility).",
    link: "https://www.mass.gov/info-details/community-based-housing-cbh",
  },
  {
    name: "Housing Innovations Fund (Special Needs)",
    level: "State",
    criteria: {
      amiRange: [0, 30],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: true,
      affordabilityTerm: [0, 0],
    },
    description: "Program for Housing Innovations Fund (Special Needs).",
    link: "https://www.mass.gov/info-details/housing-innovations-fund-hif#eligible-activities-and-affordability-requirements-",
  },
  {
    name: "Commercial Area Transit Node (CATN) Housing",
    level: "State",
    criteria: {
      amiRange: [0, 0],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: true,
      affordabilityTerm: [0, 0],
    },
    description: "Program for Commercial Area Transit Node (CATN) Housing.",
    link: "https://www.mass.gov/info-details/commercial-area-transit-node-housing-program-catnhp#eligible-activities-and-affordability-requirements-",
  },
  {
    name: "Commonwealth Builders (MassHousing)",
    level: "State",
    criteria: {
      amiRange: [0, 120],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: true,
      mixedIncome: false,
      affordabilityTerm: [0, 30],
    },
    description: "Program for Commonwealth Builders by MassHousing.",
    link: "https://www.masshousing.com/-/media/Files/Developers/CommonWealth-Builder-Guidelines.ashx",
  },
  {
    name: "Workforce Housing Program (MassHousing)",
    level: "State",
    criteria: {
      amiRange: [0, 120],
      adaRange: [0, 0],
      unhoused: false,
      firstTimeHomebuyers: false,
      mixedIncome: false,
      affordabilityTerm: [15, 40],
    },
    description: "Program for Workforce Housing by MassHousing.",
    link: "https://www.masshousing.com/-/media/Files/Developers/WorkforceHousing_Guidelines.ashx",
  },
];

export const permittingQuestions: string[] = [
  "What is the current zoning of this property?",
  "Are there any properties that abut (next to or have a common boundary with) onto this property?",
  "Is my property within 300 feet of another town?",
  "What is the zoning ordinance for this property?",
  "Where are the existing utilities on the property?",
  "What is the current topography of the property?",
  "What is the location of all trees on the property?",
  "What elevation is the property at? Is the property in a floodplain?",
  "Is my property in a historical district?",
  "Is this property in a flood zone?",
  "An application will be considered to result in insignificant traffic impacts on the local roadway network if it is expected to generate less than 20 vehicle trips, ends during the peak hour period, or less than 200 vehicle trips per day.",
  "An application will be considered to significantly impact the local roadway network if it is expected to generate 20 or more vehicle trip ends during the peak hour period or 200 or more vehicle trip ends per day. Applications that result in significant traffic impact will be required to submit a complete traffic impact analysis addressing the site-specific impact on the adjacent roadway network.",
  "What is the total land area of the proposed site?",
  "Can you generate a detailed map of the site, including neighboring properties and key landmarks?",
  "Are there any natural features on the site, such as water bodies or vegetation, that need to be marked on the map?",
  "What is the address and coordinates (latitude and longitude) of the proposed site?",
  "Can you identify nearby amenities such as schools, public transportation, and healthcare facilities?",
  "What is the current zoning classification of the site?",
  "Are there any zoning restrictions or regulations that may impact the development of affordable housing?",
  "Can you provide a map overlay indicating the zoning boundaries in the vicinity?",
  "What are the adjacent properties to the project site, and are there any known environmental issues in the vicinity?",
  "What is the flood risk status of the project site according to the FEMA Flood Insurance Rate Map (FIRM)?",
  "Is radon testing applicable to the project site?",
  "Are there any known or suspected hazardous materials on or near the project site?",
  "What local, state, and federal environmental regulations apply to the project, and how can the development ensure compliance with these regulations?",
  "Are there any potential environmental impacts on the surrounding community, and what measures are in place to mitigate or address these concerns?",
  "Are there potential future environmental risks or considerations that should be taken into account for the long-term sustainability of the affordable housing project?",
];

export const worcesterOutline = [
  [42.3112684530103, -71.7682676039714],
  [42.2962299322113, -71.7585425662142],
  [42.2545030181324, -71.7512794797252],
  [42.2438474308288, -71.7460797065391],
  [42.241294830832, -71.731237841394],
  [42.2379835909711, -71.7334296012108],
  [42.2100483473818, -71.7971409620091],
  [42.220935027737, -71.8038352893097],
  [42.2239072671328, -71.8067519867285],
  [42.2312712870606, -71.8100353677156],
  [42.2266842132594, -71.8566330781298],
  [42.2812613674887, -71.8840439963136],
  [42.2865530671148, -71.8753883739337],
  [42.3313541171204, -71.8020429802236],
  [42.3313541630813, -71.8020430051913],
  [42.3411956629323, -71.7858952183199],
  [42.3289708550481, -71.7797203704754],
  [42.3112684530103, -71.7682676039714],
];
