<template>
    <div class="w-full h-4/5 dark:text-white dark:bg-gray-900 dark:text-white">
        <article class="lg:prose-xl justify-center indent-4 mx-10 center items-center my-7 h-4/5">
            <h2 class="drop-shadow-md font-bold my-1 flex justify-center">Sereis Como Deuses</h2>
            <h3 class="drop-shadow-md font-bold my-1 flex justify-center">O STF e a subversão da Justiça </h3>
            <p class="drop-shadow-md text-justify m-[2px]">
                A soberania nacional está em risco se não é o povo que decide o destino da nação.
            </p>
            <p class="drop-shadow-md text-justify m-[2px]">A ordem política e o regime democrático representativo não
                sub-sistem sem soberania popular exercida pelo sufrágio universal,direto e orientado pelo escrutínio
                público. A cláusula do exercí-cio secreto do voto não repele a também pétrea cláusula do voto direto,
                nem mesmo o escrutínio público imposto pelo princípio da publicidade. Ao invés de orgulhar-se da roupa
                nova prodi-giosa, o povo brasileiro deveria envergonhar-se da nudez de sua cidadania, imposta pelo
                arbítrio do serviço eleitoral. Orgulhosas devem ser as nações que podem contar e recontar seus votos em
                escrutínio público. Não por acaso que, apesar de dominarem a tecnologia de ponta, fazem prova física do
                voto.
            </p>
            <p class="drop-shadow-md text-justify m-[2px]"><b>CAPÍTULO 4</b> <br />
                URNA VIRTUAL: A ROUPA NOVA DO REI <br />
                Felipe M. Gimènez <br />
                <a target="_blank" href="https://convergencias.org.br/urna-virtual-ditadura-real/" class="inline mt-0">
                    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" class="inline mr-2" >
                        <path
                            d="m11 1c-2.1973 0-4 1.8027-4 4 0 .35477.062329.69321.15039 1.0215l2.3945-2.3945c.36302-.38506.87563-.62695 1.4551-.62695 1.1164 0 2 .8836 2 2 0 .57388-.23667 1.0829-.61523 1.4453l-2.4043 2.4043c.32773.087749.66541.15039 1.0195.15039 2.1973 0 4-1.8027 4-4s-1.8027-4-4-4zm-.013672 3.002a1 1 0 0 0 -.69336.29102l-6 6a1 1 0 0 0 0 1.4141 1 1 0 0 0 1.4141 0l6-6a1 1 0 0 0 0-1.4141 1 1 0 0 0 -.7207-.29102zm-5.9863 2.998c-2.1973 0-4 1.8027-4 4s1.8027 4 4 4 4-1.8027 4-4c0-.35412-.062641-.6918-.15039-1.0195l-2.4043 2.4043c-.36245.37857-.87143.61523-1.4453.61523-1.1164 0-2-.8836-2-2 0-.57944.24189-1.0921.62695-1.4551l2.3945-2.3945c-.32827-.088062-.66671-.15039-1.0215-.15039z"
                            fill-rule="evenodd" fill="#111827"/>
                    </svg>A ROUPA NOVA DO REI
                </a>
            </p>
        </article>
    </div>
    <div class="opacity-100 pb-5 dark:bg-gray-900 dark:text-white flex justify-center items-center h-full">
        <button @click="toggleOffdonmiguel"
            class="shadow-md px-5 py-3 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 rounded"> Mais do Que Reis
        </button>
        <button @click="toggleOffcanvas"
            class="shadow-md px-5 py-3 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 rounded"> Sumário </button>
        <button @click="toggleOffcreditos"
            class="shadow-md px-5 py-3 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 rounded"> Os Toltecas </button>
        <button @click="sabedoria_tolteca"
            class="shadow-md px-5 py-3 text-slate-200 bg-violet-700 dark:bg-violet-700 hover:bg-blue-700 rounded">
            Os Quatro Compromissos </button>
        <button @click="toggleTheme" class="shadow-md px-5 py-3 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 rounded">
            <svg v-if="isDark" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                    class="fill-gray-400/20"></path>
                <path
                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                    class="fill-white"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                    class="fill-white"></path>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="w-6 h-6">
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-gray-400/20 stroke-gray-600"></path>
                <path
                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                    class="stroke-gray-600"></path>
            </svg>
        </button>
        <br />
        <Offcanvas v-model="showOffdonmiguel">
            <template #header>
                <h1 class="drop-shadow-md font-bold my-1 flex justify-center lg:prose-xl">MAIS DO QUE REIS</h1>
            </template>
            <!-- <section v-for="i in 20" :key="i"> -->
            <section class="lg:prose-lg justify-center indent-4 mx-10">
                <p class="drop-shadow-md text-justify m-[2px]"> Você certamente já ouviu falar em “ativismo judicial”;
                    mas você sabe
                    realmente do que se trata, e dos efeitos gravíssimos que pode ter esse fenômeno? Juízes não têm como
                    função
                    criar leis nem políticas públicas, muito menos administrar a economia, a saúde, a educação e a
                    segurança
                    pública. Fazer leis (Poder Legislativo) e administrar (Poder Executivo) são funções de autoridades
                    eleitas pelo
                    povo. O povo escolhe vereadores, deputados, senadores, prefeitos, governadores e presidente; se não
                    ficar
                    satisfeito com os resultados, o povo os destitui na eleição seguinte.

                </p>
                <p class="drop-shadow-md text-justify m-[2px]">
                    Juízes não são eleitos – e são vitalícios. Quando eles usurpam as funções das autoridades eleitas,
                    estão na
                    verdade fraudando a democracia representativa e o voto popular.
                </p>
                <p class="drop-shadow-md text-justify m-[2px]">
                    Mas os juízes e tribunais ativistas não estão nem aí para o voto da maioria da população; aliás,
                    eles gostam
                    de ser “contra majoritários” (outro discurso enganador do ativismo judicial que este livro vai
                    explicar para
                    você).
                </p>
                <p class="drop-shadow-md text-justify m-[2px]">O tribunal ativista não quer aplicar a lei, e sim
                    impor sua visão
                    de mundo, suas convicções ideológicas – sobre aborto, drogas, segurança pública, algemas e até
                    sobre urnas
                    eletrônicas; se a lei não coincide com essas convicções, pior para a lei... Até crime os
                    ativistas do STF já
                    “criaram”, embora a Constituição diga expressamente (art. 5º, inciso XXXIX) que não há crime sem
                    lei
                    anterior que o defina (quem faz leis é o Legislativo, não um tribunal).
                </p>
                <p class="drop-shadow-md text-justify m-[2px]">Antonin Scalia, um dos maiores juízes que a Suprema
                    Corte dos
                    Estados Unidos já teve, disse uma vez que, “se fosse rei”, faria uma lei mandando para a prisão
                    quem
                    queimasse a bandeira americana em manifestações contra o governo; mas como sabia que não era
                    rei, e sim
                    juiz, tinha que aplicar a Constituição de seu país, que garante o direito à livre manifestação;
                    por isso,
                    mandou soltar o réu (contra suas convicções pessoais de patriota e conservador).
                </p>
                <p class="drop-shadow-md text-justify m-[2px]">
                    Ao que parece, os ativistas do STF não acham que são reis; eles têm certeza de que são deuses.
                </p>
                <p class="drop-shadow-md text-justify m-[2px]">
                    ~~ Marcelo Rocha Monteiro
                </p>


            </section>
        </Offcanvas>
        <Offcanvas v-model="showOffcreditos">
            <template #header>
                <h1 class="drop-shadow-md font-bold my-1 flex justify-center lg:prose-xl">OS TOLTECAS</h1>
            </template>
            <!-- <section v-for="i in 20" :key="i"> -->
            <section class="lg:prose-lg justify-center indent-4 mx-10">
                <p class="drop-shadow-md text-justify m-[2px]"> Milhares de anos atrás, no Sul do México, os toltecas
                    eram
                    conhecidos
                    como “homens e mulheres de sabedoria”. Antropólogos se referem a eles como
                    uma nação ou raça, mas na verdade eram cientistas e artistas que se associaram
                    para explorar e conservar a sabedoria espiritual e as práticas dos antigos.
                    Encontraram-se como mestres (nagual) e estudantes em Teotihuacán, a cidade
                    antiga das pirâmides, próxima à Cidade do México, conhecida como o lugar
                    onde o “Homem se Torna Deus”.</p>
                <p class="drop-shadow-md text-justify m-[2px]">
                    Ao longo dos milênios, os nagual foram obrigados a manter sua existência
                    na clandestinidade. A conquista europeia, combinada com o mau uso do poder
                    pessoal por alguns poucos aprendizes, tornou necessário ocultar o conhecimento
                    ancestral daqueles que não estavam preparados para usá-lo — ou que pretendiam
                    usá-lo apenas com objetivos pessoais.</p>
                <p class="drop-shadow-md text-justify m-[2px]">
                    Felizmente, a sabedoria esotérica tolteca estava incorporada e foi
                    transmitida por gerações de diferentes linhagens de nagual. Embora tenham
                    permanecido envoltas em segredo por centenas de anos, as antigas profecias
                    anunciavam a vinda de uma era em que seria necessário devolver a sabedoria ao
                    povo. Agora, Don Miguel Ruiz, um nagual da linhagem dos Cavaleiros da
                    Águia, foi indicado para compartilhar conosco os poderosos ensinamentos dos
                    toltecas.</p>
                <p class="drop-shadow-md text-justify m-[2px]">
                    Tal sabedoria se ergue da mesma unidade essencial de verdade de todas as
                    tradições esotéricas ao redor do mundo. Embora não seja uma religião, honra
                    todos os mestres espirituais que já ensinaram aqui na Terra. Por envolver o
                    espírito, é descrita com maior precisão como forma de vida, caracterizada como
                    fonte da felicidade e amor. </p>
            </section>
        </Offcanvas>
        <Offcanvas v-model="showOffcanvas">
            <template #header>
                <h1 class="drop-shadow-md font-bold my-1 flex justify-center lg:prose-xl">SUMÁRIO </h1>
            </template>
            <!-- <section v-for="i in 20" :key="i"> -->
            <section>
                <div class="my-5 text-justify">
                    <ul class="list-disc">
                        CAPÍTULO 1
                        ABORTO: O COLAPSO MORAL DA JUSTIÇA ...c 1 8
                        Henrique Cunha de Lima
                        CAPÍTULO 2
                        À BALADA DOS ONZE RESSENTIDOS........iiiis 53
                        Sandres &S
                        IL=-Por que a corte está em Crise? .csccusassasnsncansunneas 53
                        1l - O abuso de poder político por uma trilha estreita e perigosa
                        denominada afivismo Jedeeual:. een SNS 56
                        III - O processo judicial como território vedado ao estrelato do “juiz
                        SE f o e É MAmA 59
                        IV - A justiça contramajoritária como instrumento de imposição da
                        HOVAOL EM cA SNTNA 63
                        V - Os aspectos centrais da problemática: a crise dos valores e a
                        explosão dos ressentimentos pela via judicCial ......0iiicçao 65
                        VI - No meio do túnel, cavando com as mãos, em busca da luz 72
                        CAPÍTULO 3
                        FUNÇÃO CONTRAMAJORITÁRIA: A DITADURA QUE NASCE DA DEMOCRACIA .. 75
                        Márcia Luis Chila Ffgyes%
                        L [BEEOO AAAA sac S o RN ES 75
                        II- A função contramajoritária ......iciiiciiiiieiiieit ss 77
                        1T 5A DOSPINDEGNIAARE: eem aam e NTTA 80
                        IV - O neoconstitucionalismo ......iissseesesss 82
                        V A NONTAS eel SSSA ELESTEE: 86
                        VI- A democracia totalitária.......cicicceseiee iin 87
                        TT CONE RÃ iNE ee SSNA 91
                        CAPÍTULO 4
                        UNA VIRTUAES A'ROUPA/NOVA DO REI ssnA 93
                        CAPÍTULO 5
                        AÀ ATIVIDADE DE INTELIGÊNCIA E A “ARAPONGAGEM ...c 117
                        Fúábio Costa Peretira
                        I - Sobre quando as organizações criminosas, dentro das fronteiras
                        nacionais, expandiram a sua atuaçÇãO......icisccscôismsninsisanis. 117
                        II - O 11 de Setembro e o compartilhamento de informações.... 121

                    </ul>
                </div>
            </section>
        </Offcanvas>

    </div>
</template>
<script>
import Offcanvas from "vue-final-offcanvas";
export default {
    components: {
        Offcanvas,
    },
    data() {
        return {
            showOffdonmiguel: false,
            showOffcanvas: false,
            showOffcreditos: false,
            isDark: false,
        };
    },
    methods: {
        toggleOffdonmiguel() {
            this.showOffdonmiguel = !this.showOffdonmiguel;
        },
        toggleOffcanvas() {
            this.showOffcanvas = !this.showOffcanvas;
        },
        toggleOffcreditos() {
            this.showOffcreditos = !this.showOffcreditos;
        },
        toggleTheme() {
            this.isDark = !this.isDark;
            if (this.isDark) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        },
        sabedoria_tolteca() {
            //          let url = '/static/pdf/web/demo.pdf'
            //let url = "https://raw.githubusercontent.com/araguaci/o-apagar-das-luzes/main/static/pdf/web/inquerito_do_fim_do_mundo.pdf";
            let url = "/pdf/web/a-subversao-da-justica.pdf";
            window.open("/pdf/web/viewer.html?file=" + url);
        },
    },
};
</script>
<style>
/*
  html {
      background: hsla(143, 100%, 29%, 0.73);
      background: linear-gradient(0deg, hsla(52, 100%, 50%, 1) 0%, hsla(143, 100%, 29%, 1) 50%, hsla(220, 100%, 23%, 1) 100%);
      background: -moz-linear-gradient(0deg, hsla(52, 100%, 50%, 1) 0%, hsla(143, 100%, 29%, 1) 50%, hsla(220, 100%, 23%, 1) 100%);
      background: -webkit-linear-gradient(0deg, hsla(52, 100%, 50%, 1) 0%, hsla(143, 100%, 29%, 1) 50%, hsla(220, 100%, 23%, 1) 100%);
      filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#FEDD00", endColorstr="#009639", GradientType=1);
  }
*/
button {
    margin: 3px;
}
</style>