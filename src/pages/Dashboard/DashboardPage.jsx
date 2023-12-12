import SearchBox from "@/components/searchbox/Searchbox";
import MainLayout from "@/layout/MainLayout";
import SidepageLayout from "@/layout/SidepageFrame";
import SidepagebdyLayout from "@/layout/sidepagebdylayout";

export default function DashboardPage() {
  return (
    <MainLayout>
      <SidepageLayout>
        <SearchBox />
        <SearchBox />
      </SidepageLayout>
      <SidepagebdyLayout></SidepagebdyLayout>
    </MainLayout>
  );
}
