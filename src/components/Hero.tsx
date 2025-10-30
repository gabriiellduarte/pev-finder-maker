import { Leaf, MapPin, Recycle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20 px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2LjVjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTUgMTUtNi43MTYgMTUtMTUtNi43MTYtMTUtMTUtMTV6TTMwIDMwYzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Recycle className="h-10 w-10 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Pontos de Entrega Voluntária
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contribua para um futuro sustentável. Encontre o PEV mais próximo e descarte seus materiais recicláveis de forma consciente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-card p-6 rounded-xl shadow-soft border-2 border-border hover:shadow-elevated transition-all hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Sustentabilidade</h3>
            <p className="text-muted-foreground">
              Ajude a preservar o meio ambiente através da coleta seletiva e reciclagem adequada
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-soft border-2 border-border hover:shadow-elevated transition-all hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-lg mb-4">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">27 Pontos</h3>
            <p className="text-muted-foreground">
              Locais estrategicamente distribuídos para facilitar seu acesso à coleta seletiva
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-soft border-2 border-border hover:shadow-elevated transition-all hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
              <Recycle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Fácil Acesso</h3>
            <p className="text-muted-foreground">
              Consulte endereços e coordenadas para encontrar o ponto mais próximo de você
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
