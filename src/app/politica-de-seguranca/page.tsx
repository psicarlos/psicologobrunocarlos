import React from 'react';

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-bgFundo text-zinc-200">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-2xl">Política de privacidade</h2>
          </div>
        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gap-4">
            <div className="col-lg">
              <div className="portfolio-info">
                <h3 className="text-center">Política de privacidade</h3>
                <p>Este site é mantido e operado por PABLO SANTOS.</p>
                <p>
                  A política de privacidade se aplica a todos os usuários que
                  acessam este website.
                </p>
                <p>
                  Agimos na qualidade de controlador desses dados de acordo com
                  a legislação federal e com as normas internacionais de
                  segurança da informação.
                </p>
                <p>
                  <strong>INTRODUÇÃO</strong>
                </p>
                <p>
                  Esta política de privacidade contém informações importantes
                  sobre:
                </p>
                <ul>
                  <li>Quem deve utilizar este website;</li>
                  <li>Quais dados coletamos e o que fazemos com eles;</li>
                  <li>Seus direitos em relação aos seus dados pessoais;</li>
                  <li>Como entrar em contato conosco.</li>
                </ul>
                <p>
                  Esta política explica o que faremos com suas informações
                  pessoais e visa esclarecer a todos os (as) interessados (as)
                  sobre os tipos de dados que coletados e os motivos da coleta.
                </p>
                <p>
                  Os presentes termos foram elaborados em conformidade com a Lei
                  Geral de Proteção de Dados Pessoais (Lei 13.709/18), o Marco
                  Civil da Internet (Lei 12.965/14) e o Regulamento da EU
                  (n.2016/6790).
                </p>

                <ol className="privacy-policy">
                  {/* POLITICA 3 */}
                  <li className="font-semibold">COOKIES E BEACONS</li>
                  <p>
                    Nosso site utiliza cookies e tecnologias similares para
                    melhorar sua experiência de navegação. Ao navegar pelo site,
                    você concorda com a nossa política de monitoramento.
                  </p>
                  <p>
                    Os cookies são pequenos arquivos de texto que são
                    armazenados no seu dispositivo para salvar informações
                    relacionadas à navegação do site. Eles permitem uma
                    navegação mais eficiente e personalizada.
                  </p>
                  <p>
                    Os beacons são imagens inseridas em páginas da web ou
                    e-mails. Eles são usados para rastrear informações sobre o
                    comportamento dos usuários, como tempo de visita, tipo de
                    navegador, páginas visitadas, entre outros.
                  </p>
                  <p>
                    Os cookies e beacons são utilizados para os seguintes fins:
                  </p>
                  <ul>
                    <li>Manter o site funcionando corretamente;</li>
                    <li>
                      Coletar informações para análise estatística e melhoria do
                      site;
                    </li>
                    <li>
                      Personalizar o conteúdo de acordo com o perfil do usuário;
                    </li>
                    <li>
                      Realizar ações de marketing baseadas nos interesses do
                      usuário.
                    </li>
                  </ul>
                  <p>
                    Você pode desativar os cookies nas configurações do seu
                    navegador, mas isso pode afetar a funcionalidade do site.
                  </p>
                  {/* POLITICA 4 */}
                  <li className="font-semibold">COMPARTILHAMENTO DE DADOS</li>
                  <p>
                    Não vendemos, alugamos ou compartilhamos seus dados pessoais
                    com terceiros sem o seu consentimento, exceto nos casos
                    previstos nesta política.
                  </p>
                  <p>
                    Seus dados podem ser compartilhados com as seguintes
                    empresas ou organizações:
                  </p>
                  <ul>
                    <li>Fornecedores de serviços de e-mail marketing;</li>
                    <li>
                      Empresas parceiras para fornecer serviços específicos.
                    </li>
                  </ul>
                  <p>
                    O compartilhamento ocorre apenas para os fins descritos
                    nesta política, e todas as empresas terceirizadas são
                    obrigadas a manter a confidencialidade e a segurança dos
                    dados fornecidos.
                  </p>
                  {/* POLITICA 5 */}
                  <li className="font-semibold">SEUS DIREITOS</li>
                  <p>Você tem o direito de solicitar:</p>
                  <ul>
                    <li>O acesso aos seus dados pessoais;</li>
                    <li>
                      A correção de dados incompletos, inexatos ou
                      desatualizados;
                    </li>
                    <li>
                      A exclusão dos seus dados pessoais, exceto nos casos em
                      que a lei exige a manutenção desses dados;
                    </li>
                    <li>
                      A revogação do seu consentimento para o uso de dados
                      pessoais para fins específicos;
                    </li>
                    <li>
                      A portabilidade dos dados para outro serviço ou produto,
                      mediante solicitação expressa.
                    </li>
                  </ul>

                  {/* POLITICA 6 */}
                  <li className="font-semibold">
                    ALTERAÇÕES NA POLÍTICA DE PRIVACIDADE
                  </li>
                  <p>
                    Nos reservamos o direito de alterar esta política de
                    privacidade a qualquer momento, conforme necessário para
                    refletir melhorias e mudanças em nossos serviços.
                    Recomendamos que você revise esta política regularmente para
                    estar sempre informado sobre como estamos protegendo suas
                    informações.
                  </p>
                  {/* POLITICA 7 */}
                  <li className="font-semibold">CONTATO</li>
                  <p>
                    Se você tiver dúvidas sobre esta política de privacidade ou
                    sobre o tratamento dos seus dados pessoais, entre em contato
                    conosco:
                  </p>
                  <ul>
                    <li>E-mail: casaloperante@gmail.com</li>
                  </ul>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
