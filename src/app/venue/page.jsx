import RSVP from "@/components/common/RSVP";
import FAQ from "@/components/sections/home/FAQ";
import Explore from "@/components/sections/venue/Explore";
import HeroSectionVenue from "@/components/sections/venue/HeroSectionVenue";
import TravelInfo from "@/components/sections/venue/TravelInfo";
import VenueGallery from "@/components/sections/venue/VenueGallery";
import WeddingVenue from "@/components/sections/venue/WeddingVenue";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/components/utils/Constants";

export const metadata = {
  title: "Wedding Venue",
  description:
    "Find recommended hotel accommodations for guests attending Sonal & Kush's wedding celebration. Location, booking details, and directions included.",

  openGraph: {
    title: "Wedding Hotel & Accommodation | Sonal & Kush",
    description: "Hotel and stay information for wedding guests.",
    url: "https://www.sonalskushie.com/venue",
    type: "website",
  },
};

 const slideImg = [
    "/allPageImg/venu/OB1.webp",
    "/allPageImg/venu/OB2.webp",
    "/allPageImg/venu/OB3.webp",
    "/allPageImg/venu/OB4.webp",
  ];

const STA1Txt = "Oberoi"
const STA2Txt = "Marrakech"


 const slideImg2 = [
     "/allPageImg/venu/PH1.webp",
    "/allPageImg/venu/PH2.webp",
    "/allPageImg/venu/PH3.webp",
  ];



const STA1Txt2 = "Park "
const STA2Txt2 = "Hyatt"
const venue = () => {
  return (
    <>
      <WebPageSchema
        name="Wedding Accommodation & Hotel Details | Sonal & Kush"
        description="Find hotel and accommodation details for guests attending Sonal & Kush’s wedding. Get location information, directions, and stay recommendations for a comfortable visit."
        url={`${Const.ClientLink}/venue`}
      />
      <HeroSectionVenue />
      <WeddingVenue />
      <VenueGallery slideImg={slideImg} STA1Txt={STA1Txt} STA2Txt={STA2Txt} />
      <VenueGallery slideImg={slideImg2} STA1Txt={STA1Txt2} STA2Txt={STA2Txt2} />
      {/* <TravelInfo /> */}
      {/* <FAQ /> */}
    </>
  );
};

export default venue;
