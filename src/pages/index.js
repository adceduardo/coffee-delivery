import { Baselayout } from '@/components/Layout/styles';
import { Header } from '@/components/Header';
import { PresentationSection } from '@/components/PresentationSection';
import { ProductList } from '@/components/ProductList';

export default function Home() {
  return (
    <>
      <Baselayout>
        <Header />
        <PresentationSection />
        <ProductList /> 
      </Baselayout>
    </>
  );
}
