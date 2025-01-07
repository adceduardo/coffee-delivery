import { Confirmation } from '@/components/Confirmation';
import { Header } from '@/components/Header';
import { Baselayout } from '@/components/Layout/styles';

export default function ConfirmationPage() {
  return (
    <>
      <Baselayout>
        <Header />
        <Confirmation />
      </Baselayout>
    </>
  );
}
