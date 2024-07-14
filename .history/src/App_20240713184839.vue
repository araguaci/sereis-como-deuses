<template>
    <div class="w-full h-4/5 dark:text-white dark:bg-gray-900 dark:text-white">
        <article class="lg:prose-xl justify-center indent-4 mx-10 center items-center my-7 h-4/5">
            <h2 class="drop-shadow-md font-bold my-1 flex justify-center">Os Quatro Compromissos - O livro da Filosofia
                Tolteca</h2>
            <h3 class="drop-shadow-md font-bold my-1 flex justify-center">Um guia prático para a liberdade pessoal</h3>
            <p class="drop-shadow-md text-justify m-[2px]">
                Um livro sobre hábitos e conceitos simples, que todos conhecemos, mas
                que, infelizmente, na rotina da vida moderna, deixamos de praticar. Sua obra
                consiste em compromissos e revelam os porquês dos nossos medos e as
                motivações secretas que impedem o progresso na vida atual.
            </p>
            <h2 class="drop-shadow-md font-bold my-1 flex justify-center">Oração</h2>
            <p class="drop-shadow-md text-justify m-[2px]">
                Obrigado, Criador do Universo, pelo presente da vida que me deu. Obrigado
                por me dar tudo o que eu realmente preciso. Obrigado pela oportunidade de
                experimentar este belo corpo e esta mente maravilhosa. Obrigado por viver em
                meu interior com todo o Seu amor, com todo o Seu espírito puro e livre, com o
                Seu calor e luz radiante..
            </p>
            <p class="drop-shadow-md text-justify m-[2px]">
                Obrigado por usar minhas palavras, meus olhos e meu coração para
                partilhar Seu amor aonde quer que eu vá.
            </p>
            <p class="drop-shadow-md text-justify m-[2px]">
                Amo Você da forma que É, e porque sou Sua criação, amo a mim mesmo da
                forma como sou. Ajude-me a manter o amor e a paz em meu coração e a tornar
                esse amor uma nova forma de vida, que poderei viver em amor pelo resto da
                minha existência. Amém.
            </p>
            <p class="drop-shadow-md  m-[2px]">
                O Velho na Beira do Rio
            </p>
        </article>
    </div>
    <div class="opacity-100 pb-5 dark:bg-gray-900 dark:text-white flex justify-center items-center h-full">
        <button @click="toggleOffdonmiguel"
            class="shadow-md px-5 py-3 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 rounded"> Don Miguel Ruiz
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
                <h1 class="drop-shadow-md font-bold my-1 flex justify-center lg:prose-xl">DON MIGUEL RUIZ</h1>
            </template>
            <!-- <section v-for="i in 20" :key="i"> -->
            <section class="lg:prose-lg justify-center indent-4 mx-10">
                <p class="drop-shadow-md text-justify m-[2px]"> Em Os quatro compromissos, Don Miguel Ruiz revela a
                    fonte de crenças
                    autolimitantes que nos roubam a alegria e criam sofrimentos desnecessários.Baseadas na sabedoria
                    ancestral
                    tolteca, as ideias contidas neste livro explicam de forma esclarecedora como nós somos influenciados
                    e
                    profundamente modificados de acordo com os padrões exigidos pela sociedade moderna.Por exemplo, Ruiz
                    diz que
                    todas as crianças nascem perfeitamente amorosas, divertidas e genuínas. No entanto, os pais ensinam
                    aos filhos
                    padrões de comportamento que os estes devem seguir para receber amor e evitar críticas.
                    Eventualmente, esses
                    padrões se tornam internalizados, um conjunto inconsciente de instruções para viver a vida.Segundo o
                    autor, a
                    maioria dessas crenças inconscientes é perfeitamente arbitrária. Muitos deles são irracionais e
                    desnecessariamente limitantes.</p>
                <p class="drop-shadow-md text-justify m-[2px]">
                    A chave para a liberdade é tomar consciência de nossos pensamentos irracionais e limitadores, para
                    que possamos
                    substituí-los por pensamentos saudáveis.Ruiz afirma que as crianças não sabem nada além de concordar
                    com as
                    realidades adultas nas quais são doutrinadas. As crianças não discutem com o significado das
                    palavras ou
                    gramática, pois estão aprendendo a língua. Se meus pais me dizem que sou inteligente e bonito,
                    acredito neles.
                    Se eles me disserem que sou burro e feio, acredito neles. As crianças não têm escolha senão
                    concordar. Eles são
                    como os prisioneiros, algemados e forçados a acreditar que sombras de objetos artificiais são
                    reais.Mas, à
                    medida que amadurecemos, podemos nos tornar guerreiros, libertando-nos dos grilhões de acordos com
                    nossas ideias
                    falsas e implantadas. Podemos aceitar compromissos mais saudáveis.Através dos quatro compromissos -
                    seja
                    impecável com sua palavra; não leve nada para o lado pessoal; não tire conclusões e dê sempre o
                    melhor de si -
                    este livro nos oferece um poderoso código de conduta que pode rapidamente transformar nossas vidas
                    em uma nova
                    experiência de liberdade verdadeira, felicidade e amor. </p>
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
                        <li class="ml-10">Agradecimentos</li>
                        <li class="ml-10">Os Toltecas</li>
                    </ul>
                    <ul class="list-disc">
                        <li class="ml-10">Introdução</li>
                        <li class="ml-10">O espelho enevoado</li>
                        <li class="ml-10">Domesticação e o sonho do planeta</li>
                        <li class="ml-10">Prelúdio de um novo sonho</li>
                        <li class="ml-10">O primeiro compromisso</li>
                        <li class="ml-10">Seja impecável com sua palavra</li>
                        <li class="ml-10">O segundo compromisso</li>
                        <li class="ml-10">Não leve nada para o lado pessoal</li>
                        <li class="ml-10">O terceiro compromisso</li>
                        <li class="ml-10">Não tire conclusões</li>
                        <li class="ml-10">O quarto compromisso</li>
                        <li class="ml-10">Dê sempre o melhor de si</li>
                        <li class="ml-10">O caminho tolteca para a liberdade</li>
                        <li class="ml-10">Quebrando velhos compromissos</li>
                        <li class="ml-10">A arte da transformação: o sonho da segunda atenção</li>
                        <li class="ml-10">A disciplina do guerreiro: controlando seu próprio comportamento</li>
                        <li class="ml-10">A iniciação dos mortos: abraçando o anjo da morte</li>
                        <li class="ml-10">O novo sonho</li>
                        <li class="ml-10">O céu na Terra</li>
                        <li class="ml-10">Orações</li>
                        <li class="ml-10">Oração pela liberdade</li>
                        <li class="ml-10">Oração pelo amor</li>
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