"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Barra superior vermelha com a data */}
      <div className="w-full bg-gradient-moving bg-[length:200%_200%] animate-gradient-x text-white py-3 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl font-medium">27 de Maio - Terça-feira - 8H às 13H - CDL Uberlândia</p>
        </div>
      </div>

      {/* Hero Section - Ajustada conforme solicitação */}
      <section className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Lado esquerdo - Logo e textos */}
            <div className="md:w-3/5 space-y- mb-10 md:mb-0 md:p1-0 md:pr-8">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/logogerson.png"
                  alt="Logo Workshop Só Para Empreendedores"
                  width={280}
                  height={90}
                  className="transform transition-all duration-700 ease-in-out"
                  style={{
                    transform: isVisible ? "scale(1)" : "scale(0.8)",
                    opacity: isVisible ? 1 : 0,
                  }}
                />
              </div>

              <div className="space-y-4 md:ml-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Faça sua empresa <span className="text-yellow-300">lucrar de verdade</span>
                </h1>

                <p className="text-xl md:text-2xl font-light">
                  Lidere o crescimento do seu negócio e tenha mais tempo livre para o que realmente importa!
                </p>

                <div className="space-y-2">
                  {[
                    "Workshop com 5 horas de conteúdo prático",
                    "Gestão de pessoas, estratégica, comercial e financeira",
                    "Material de apoio exclusivo",
                    "Certificado de participação",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xl font-medium">Evento presencial em Uberlândia</p>

                <div className="pt-3">
                  <Link
                    href="https://pay.kiwify.com.br/P6rxrJC"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-lg text-xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-wide w-full md:w-auto text-center border-2 border-green-400 border-pulse"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    GARANTIR A MINHA VAGA NO WORKSHOP
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem à direita que vai até o fim da seção */}
        <div className="absolute right-8 bottom-0 top-0 md:w-2/5 z-0">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-marrom to-amarelo rounded-full blur-3xl"></div>
            <Image src="/gerson.jpg" alt="Gerson Rodrigues" fill className="object-cover object-right-top" priority />
          </div>
        </div>
      </section>

      {/* BLOCO 02 - Para Quem É */}
      <section className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-orange-500">PARA QUEM É O WORKSHOP</h2>

          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-orange-500"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-orange-500"></div>

            <p className="text-center text-xl md:text-2xl font-light leading-relaxed py-8 px-4">
              Um evento <span className="font-bold text-orange-400">exclusivo</span> para empresários que desejam
              <span className="font-bold text-yellow-300"> transformar seus negócios</span> e alcançar
              <span className="font-bold text-orange-400"> resultados extraordinários</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Para o empresário que quer faturar mais",
                description:
                  "Porque sente que as vendas não têm constância e a equipe comercial não entrega o que poderia.",
                icon: "📈",
                color: "from-red-600 to-orange-500",
              },
              {
                title: "Para o empresário que quer sair do operacional",
                description:
                  "Porque está sobrecarregado, centraliza tudo e não consegue focar no que realmente importa.",
                icon: "⏱️",
                color: "from-orange-500 to-yellow-500",
              },
              {
                title: "Para o empresário que quer ter uma equipe que funciona",
                description: "Porque está cansado de cobrar o tempo todo e ver a equipe desmotivada ou perdida.",
                icon: "👥",
                color: "from-yellow-500 to-green-500",
              },
              {
                title: "Para o empresário que quer organizar sua empresa",
                description: "Porque os processos estão confusos, a operação trava e sobra retrabalho.",
                icon: "🔄",
                color: "from-green-500 to-teal-500",
              },
              {
                title: "Para o empresário que quer controlar o financeiro",
                description: "Porque o dinheiro entra, mas o lucro não aparece, e o caixa vive apertado.",
                icon: "💰",
                color: "from-teal-500 to-blue-500",
              },
              {
                title: "Para o empresário que quer mais liberdade e clareza",
                description: "Porque sente o peso da pressão diária e precisa retomar o controle com mais leveza.",
                icon: "🗝️",
                color: "from-blue-500 to-purple-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10 p-6">
                  <div className="text-5xl mb-4 transform transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="https://pay.kiwify.com.br/P6rxrJC"
              className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 px-32 rounded-lg text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,165,0,0.5)] shadow-lg"
            >
              Garantir Minha Vaga
            </Link>
            <p className="text-sm mt-2 text-gray-300">Investimento: apenas R$ 197,00 (2º lote)</p>
          </div>
        </div>
      </section>

      {/* Seção de Storytelling - Substituindo os depoimentos */}
      <section className="w-full bg-gradient-to-r from-black to-red-500 text-white py-16 relative overflow-hidden">
        {/* Imagem de fundo com efeito */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black z-10"></div>
          <Image
            src="/gerson-chair.jpg"
            alt="Gerson Rodrigues"
            fill
            className="object-contain object-center opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-500">A Jornada do Empresário</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-900/70 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">O Desafio</h3>
              <p className="text-lg leading-relaxed">
                Todo empresário já se viu nessa situação: trabalhando mais de 12 horas por dia, resolvendo problemas que
                não deveriam ser seus, com uma equipe que parece não entregar resultados consistentes e um fluxo de
                caixa que nunca parece suficiente. A sensação é de estar em uma esteira que só acelera, sem conseguir
                descer.
              </p>
            </div>

            <div className="bg-gray-900/70 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">A Transformação</h3>
              <p className="text-lg leading-relaxed">
                Mas e se existisse um caminho claro para sair dessa armadilha? Um método testado e comprovado que já
                ajudou mais de 15 mil empresários a organizarem seus negócios, aumentarem seus lucros e conquistarem
                liberdade fora da operação? É exatamente isso que Gerson Rodrigues tem feito há anos com sua metodologia
                exclusiva.
              </p>
            </div>

            <div className="bg-gray-900/70 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-400">O Resultado</h3>
              <p className="text-lg leading-relaxed">
                Empresários que aplicam os conceitos deste workshop conseguem, em média, aumentar seu faturamento em 30%
                nos primeiros 90 dias, reduzir sua carga de trabalho em 20 horas semanais e implementar sistemas que
                fazem a empresa funcionar mesmo quando não estão presentes. Imagine ter uma empresa que trabalha para
                você, e não o contrário.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link
                href="https://pay.kiwify.com.br/P6rxrJC"
                className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all transform hover:scale-105 shadow-xl border-2 border-red-400"
              >
                Quero transformar meu negócio!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 03 - Quem Vai Conduzir */}
      <section className="w-full bg-black text-white py-8 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            <div className="w-full md:w-1/2 order-1">
              <div className="border-l-4 border-red-500 pl-6 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Quem é <span className="text-red-500">Gerson Rodrigues</span>?
                </h2>
              </div>

              <div className="space-y-4 text-lg">
                <p>Empresário, sócio do Grupo Desafio, autor do livro Seja Livre e treinador de empresários.</p>
                <p>É especialista em gestão e vendas, com foco em lucro real e autonomia.</p>
                <p>
                  Já ajudou mais de 15 mil empresários a organizarem seus negócios, aumentarem seus lucros e
                  conquistarem liberdade fora da operação.
                </p>
              </div>
            </div>

            <div className="hidden md:flex md:w-1/2 order-2 items-end justify-end h-full">
              <div className="relative w-full h-[500px] md:h-[600px] overflow-visible">
                {/* Efeito de destaque para a imagem */}
                <div className="absolute -bottom-5 -right-5 w-[90%] h-[90%] bg-gradient-to-tr from-red-600/30 to-orange-500/20 rounded-full blur-3xl z-0"></div>
                <div className="absolute -top-10 -left-10 w-[60%] h-[60%] bg-gradient-to-bl from-purple-600/20 to-blue-500/10 rounded-full blur-3xl z-0"></div>

                <Image
                  src="/gerson-chair.jpg"
                  alt="Gerson Rodrigues"
                  fill
                  className="object-contain object-bottom z-10 relative"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-transparent to-black/80 z-0"></div>
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-red-900/20 to-transparent z-0"></div>
      </section>

      {/* BLOCO 04 - Preço e Inscrição */}
      <section id="inscricao" className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            Quanto custa para ter mais lucro, tempo e controle?
          </h2>

          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="absolute -top-1 -left-6 w-12 h-12 border-t-2 border-l-2 border-orange-500"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-orange-500"></div>

            <p className="text-center text-xl md:text-2xl font-light leading-relaxed py-8 px-4">
              Um investimento que <span className="font-bold text-yellow-300">se paga nos primeiros dias</span> após
              aplicar o conhecimento
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 max-w-4xl mx-auto">
            <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,165,0,0.2)]">
              <div className="relative mb-6 pb-4 border-b border-gray-600">
                <div className="absolute -top-2 -left-2 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold">
                  ESGOTADO
                </div>
                <p className="text-xl font-medium text-gray-400 line-through mt-4">1º Lote</p>
                <p className="text-2xl font-bold text-gray-400 line-through">R$ 147,00</p>
              </div>

              <div className="mt-4 flex-grow">
                <p className="text-xl font-medium text-gray-200">2º Lote</p>
                <p className="text-4xl font-bold text-orange-400">R$ 197,00</p>
                <p className="text-sm text-yellow-300 mt-2">Últimas vagas disponíveis!</p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">5 horas de conteúdo prático</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">Material de apoio exclusivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">Networking com outros empresários</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">Coffee break incluso</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg border border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,165,0,0.2)]">
              <div className="mb-6">
                <Image src="/logogerson.png" alt="Logo Workshop Só Para Empreendedores" width={250} height={80} />
              </div>

              <p className="text-lg text-center mb-6 font-medium text-gray-200">27 de Maio - Terça-feira - 8H às 13H</p>
              <p className="text-lg text-center mb-6 font-medium text-gray-200">CDL Uberlândia</p>

              <div className="relative w-full">
                <div
                  className="absolute inset-0 bg-green-400 rounded-lg animate-pulse"
                  style={{ filter: "blur(4px)" }}
                ></div>
                <Link
                  href="https://pay.kiwify.com.br/P6rxrJC"
                  className="relative inline-block text-white font-bold py-5 px-10 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg w-full text-center border-2 border-green-400"
                  style={{ backgroundColor: "#25D366" }}
                >
                  QUERO MINHA VAGA
                </Link>
              </div>

              <p className="text-sm mt-4 text-gray-300 text-center">Pagamento seguro via PIX ou cartão de crédito</p>

              <div className="mt-6 text-center">
                <p className="font-medium text-gray-300">Dúvidas? Fale conosco:</p>
                <Link
                  href="https://wa.me/5531997071619"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Whatsapp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 05 - Garantia Incondicional */}
      <section className="w-full bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-yellow-300">GARANTIA INCONDICIONAL</h2>

          <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-xl p-8 border-2 border-green-500 relative overflow-hidden">
            {/* Efeito de destaque */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <Image
                  src="/qualidade100.png"
                  alt="Garantia de 100% de Qualidade"
                  width={200}
                  height={200}
                  className="drop-shadow-lg"
                />
              </div>

              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Sem Riscos Para Você</h3>
                <p className="text-lg mb-4">
                  Se por qualquer motivo você participar do workshop e não ficar satisfeito com o conteúdo, basta nos
                  avisar em até 7 dias após o evento e devolveremos 100% do seu investimento.
                </p>
                <p className="text-lg mb-4">
                  Sem perguntas, sem burocracia. Essa é a nossa confiança na qualidade do que entregamos.
                </p>
                <p className="text-lg font-medium">O risco é todo nosso. A oportunidade é toda sua.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://pay.kiwify.com.br/P6rxrJC"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg border-2 border-green-400 border-pulse"
              style={{ backgroundColor: "#25D366" }}
            >
              GARANTIR MINHA VAGA COM SEGURANÇA
            </a>
          </div>
        </div>
      </section>

      {/* BLOCO 06 - FAQ */}
      <section className="w-full bg-black text-white py-16 overflow-visible">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
            Perguntas Frequentes
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Quem pode participar do workshop?",
                answer:
                  "O workshop é exclusivo para empresários, gestores e empreendedores que desejam melhorar os resultados de seus negócios. Se você tem uma empresa ou está em posição de liderança, este evento é para você.",
              },
              {
                question: "Preciso ter conhecimentos prévios?",
                answer:
                  "Não. O workshop foi desenhado para ser acessível a empresários de todos os níveis de experiência. Você só precisa ter vontade de transformar seu negócio.",
              },
              {
                question: "O que eu preciso levar no dia?",
                answer:
                  "Recomendamos que você leve um caderno para anotações, seu celular carregado e, se preferir, um notebook. Todo o material de apoio será fornecido no local.",
              },
              {
                question: "Haverá certificado de participação?",
                answer:
                  "Sim! Todos os participantes receberão um certificado digital de participação que poderá ser baixado após o evento.",
              },
              {
                question: "Posso levar um sócio ou funcionário?",
                answer:
                  "Sim! Na verdade, recomendamos que você traga pessoas-chave do seu negócio. Cada pessoa precisa de uma inscrição individual.",
              },
              {
                question: "O que acontece após o workshop?",
                answer:
                  "Você sairá com um plano de ação prático para implementar em seu negócio. Além disso, terá acesso a um grupo exclusivo para tirar dúvidas por 30 dias após o evento.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 transition-all hover:bg-gray-700">
                <h3 className="text-xl font-bold mb-3 text-orange-400">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold mb-6 text-yellow-300">Ainda tem dúvidas?</p>
            <a
              href="https://wa.me/5531997071619"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all transform hover:scale-105"
              style={{ backgroundColor: "#25D366" }}
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full bg-gradient-to-r from-black to-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não perca a oportunidade de participar deste workshop exclusivo e dar o próximo passo para o sucesso do seu
            negócio.
          </p>
          <a
            href="https://pay.kiwify.com.br/P6rxrJC"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-5 px-10 rounded-lg text-xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-wide border-2 border-orange-400"
          >
            Concluir a Inscrição
          </a>
          <p className="mt-4 text-sm">Vagas limitadas - Garanta a sua agora!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-medium">Tem dúvidas?</p>
              <p>Fale com a gente!</p>
              <Link
                href="https://wa.me/5531997071619"
                target="_blank"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mt-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Whatsapp
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="bg-transparent p-2 rounded-lg">
                <Image src="/logo1.png" alt="Só Para Empreendedores" width={120} height={40} />
              </div>
              <div className="bg-transparent p-2 rounded-lg">
                <Image src="/logo2.png" alt="Desafio Empreendedor" width={120} height={40} />
              </div>
              <div className="bg-transparent p-2 rounded-lg">
                <Image src="/logo3.png" alt="Grupo Desafio" width={120} height={40} />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p>© 2024 Grupo Desafio. Todos os direitos reservados.</p>
            <p className="mt-2">
              Desenvolvido por{" "}
              <Link
                href="https://www.devpro.fun"
                target="_blank"
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 hover:from-red-600 hover:to-orange-400 transition-all duration-300"
              >
                DevPro
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
