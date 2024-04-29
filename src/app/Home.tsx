import Ambiente from '@/components/ambiente/Ambiente';
import Banner from '@/components/banner/Banner';
import Chegar from '@/components/chegar/Chegar';
import Depoimentos from '@/components/depoimentos/Depoimentos';
import About from '@/components/quemsou/About';
import Realidade from '@/components/realidade/Realidade';
import Servicos from '@/components/servicos/Servicos';
import Rodape from '../components/rodapé/Rodape';
import Whatsapp from '@/components/whatsapp/Whatsapp';
import Canal from '@/components/canal/Canal';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-bgFundo text-zinc-200">
      <Banner />
      <Whatsapp />
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
