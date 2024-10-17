import Hero from "@/components/hero/hero";
import BlurFade from "@/components/ui/blur-fade";




export default function Home() {
  return (
    <>
      <Hero/>
      <div className="bg-[#0d0d0d] h-auto flex flex-col items-center pt-14 w-full">
          <div className="flex flex-col items-center gap-8">
                <BlurFade inView className="text-[#FFC700] font-bold text-2xl pb-1 ">sobre nós ,</BlurFade>
                <BlurFade inView delay={0.2} className="text-6xl text-white font-bold w-[800px] text-center">criadores de <span className="text-[#FFC700] ">experiencias</span> personalizadas.</BlurFade>
                <BlurFade inView delay={0.3} className="text-zinc-400  opacity-70 text-center w-[700px]">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!</BlurFade>
          </div>
          <video className="bg-[#1a1a1a] rounded-lg h-[372px] w-[701px] my-5" controls/>
          <div className="flex  h-auto w-full justify-center mt-[36px] gap-7">
            <BlurFade delay={0.2} inView className="w-auto flex flex-col gap-4 mt-5  bg-[#1a1a1a] relative border-t-2 rounded-lg border-[#FFC700]  p-5 h-[220px] ">
             <h2 className="text-[#FFC700] font-bold text-2xl">Eficiência</h2>
             <p className="text-zinc-400 w-[300px]  text-sm">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!</p>
             <p className="text-[#FFC700] font-bold text-sm">saiba mais</p>
            </BlurFade>
            <BlurFade  inView className="w-auto flex flex-col gap-4  bg-[#1a1a1a] relative border-t-2 rounded-lg border-[#FFC700]  p-5 h-[220px] ">
             <h2 className="text-[#FFC700] font-bold text-2xl">Experiencia</h2>
             <p className="text-zinc-400 w-[300px]  text-sm">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!</p>
             <p className="text-[#FFC700] font-bold text-sm">saiba mais</p>
            </BlurFade>
            <BlurFade delay={0.2}  inView className="w-auto flex flex-col gap-4 mt-5  bg-[#1a1a1a] relative border-t-2 rounded-lg border-[#FFC700]  p-5 h-[220px] ">
             <h2 className="text-[#FFC700] font-bold text-2xl">Capacidade Técnica</h2>
             <p className="text-zinc-400 w-[300px]  text-sm">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!</p>
             <p className="text-[#FFC700] font-bold text-sm">saiba mais</p>
            </BlurFade>

          </div>
      </div>
    </>
  );
}
