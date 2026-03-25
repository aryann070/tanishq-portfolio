import Hero from "@/app/components/Hero";
import SelectedWork from "./components/SelectedWork";
import ExperienceEducation from "./components/Experience";

export default function Home() {
  return (

    <>
      {/* Hero Section */}
      < Hero />
      <SelectedWork />
      <ExperienceEducation/>
    </>


  );
}