import { Checkout } from '../../components/Checkout';
import { Header } from '@/components/Header';
import { Baselayout } from '@/components/Layout/styles';

export default function CheckoutPage() {
  return (
    <>
      <Baselayout>
        <Header />
        <Checkout />
      </Baselayout>
    </>
  );
}
