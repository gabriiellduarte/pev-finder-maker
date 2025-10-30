import { Hero } from "@/components/Hero";
import { PEVTable } from "@/components/PEVTable";
import { Recycle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-2 border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Recycle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-foreground">PEV</h2>
              <p className="text-xs text-muted-foreground">Coleta Voluntária</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">Meio Ambiente</p>
            <p className="text-xs text-muted-foreground">Sustentabilidade</p>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">Lista de Pontos de Coleta</h2>
            <p className="text-muted-foreground text-lg">
              Consulte e edite as informações dos pontos de entrega voluntária. Clique no botão de editar para atualizar os dados.
            </p>
          </div>
          
          <PEVTable />
        </section>
      </main>

      <footer className="bg-secondary/30 border-t-2 border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">© 2025 Pontos de Entrega Voluntária - Todos os direitos reservados</p>
            <p className="text-sm">Juntos por um planeta mais sustentável</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
