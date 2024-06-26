import Ambiente from '@/components/ambiente/Ambiente';
import Banner from '@/components/banner/Banner';
import Canal from '@/components/canal/Canal';
import Chegar from '@/components/chegar/Chegar';
import Depoimentos from '@/components/depoimentos/Depoimentos';
import About from '@/components/quemsou/About';
import Realidade from '@/components/realidade/Realidade';
import Servicos from '@/components/servicos/Servicos';
import Rodape from '../components/rodapé/Rodape';
import WhatsAppButton from '@/components/whatsapp/Whatsapp';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-bgFundo text-zinc-200">
      <Banner />
      <WhatsAppButton />
      <Realidade />
      <Servicos />
      <Depoimentos />
      <About />
      <Canal />
      <Chegar />
      <Ambiente />
      <Rodape />
    </main>
  );
}
