import { Metadata } from "next";
import MainWidthContainer from "../_components/MainWidthContainer";
import WorksContent from "./components/WorksContent";

export const metadata: Metadata = {
  title: "Kebabhan - Works",
};

export default function WorksPage() {
  return (
    <MainWidthContainer>
      <WorksContent />
    </MainWidthContainer>
  );
}
