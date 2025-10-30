import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Edit2, Save, X } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PEV {
  id: number;
  local: string;
  endereco: string;
  coordenadas: string;
}

const initialPEVs: PEV[] = [
  { id: 1, local: "CEITI Irmã Maria Cordélia", endereco: "Rua Tabajara, s/n, bairro Nossa Sra de Fátima", coordenadas: '4°33\'10.48"S, 37°46\'8.73"O' },
  { id: 2, local: "EEFTI Raízes e Asas", endereco: "Rua da Tabajara, S/N, N. Sra. De Fátima", coordenadas: '4°33\'10.50"S, 37°46\'5.69"O' },
  { id: 3, local: "EEFTI Maria José Pinheiro", endereco: "Rua Abelardo Gurgel Costa Lima - Tabajara", coordenadas: '4°33\'6.97"S, 37°45\'55.70"O' },
  { id: 4, local: "CEI Maria Salete Morais", endereco: "Rua Abelardo Gurgel, S/N, Várzea da Matriz", coordenadas: '4°33\'12.84"S, 37°45\'56.54"O' },
  { id: 5, local: "CEI Ângela Clotilde", endereco: "Rua Abelardo Gurgel, S/N, Várzea da Matriz", coordenadas: '4°33\'18.69"S, 37°46\'0.62"O' },
  { id: 6, local: "CRECHE TI - Saskia Brígido", endereco: "Rua Padre Pacheco, S/N, Várzea da Matriz", coordenadas: '4°33\'28.68"S, 37°45\'48.41"O' },
  { id: 7, local: "EEFTI Colégio Municipal", endereco: "Rua Padre Pacheco, S/N, Várzea da Matriz", coordenadas: '4°33\'27.87"S, 37°45\'50.38"O' },
  { id: 8, local: "CEI Zilda Alexandre Gondim", endereco: "Rua Armando Praça, S/N, Várzea da Matriz", coordenadas: '4°33\'35.86"S, 37°45\'48.41"O' },
  { id: 9, local: "EEFTI Francisco Sabóia Barbosa", endereco: "Rua Duque de Caxias, 1999, Centro", coordenadas: '4°33\'49.06"S, 37°46\'4.14"O' },
  { id: 10, local: "CEI Maria Eridan de Freitas", endereco: "Rua Coronel Pompeu, 835, Centro", coordenadas: '4°34\'5.89"S, 37°46\'20.43"O' },
  { id: 11, local: "CEJA/EEFTI São Marcelino", endereco: "Rua Coronel Alexanzito, 1381, Centro", coordenadas: '4°34\'11.51"S, 37°46\'27.25"O' },
  { id: 12, local: "EEFTI Darcy Ribeiro", endereco: "Rua Teófilo Pinto, S/N, Farias Brito", coordenadas: '4°34\'7.02"S, 37°46\'36.41"O' },
  { id: 13, local: "CEI Maria Rodrigues Praça", endereco: "Vila São Cristóvão, S/N, Farias Brito", coordenadas: '4°34\'31.06"S, 37°46\'37.83"O' },
  { id: 14, local: "CEI Marlene Nepomuceno", endereco: "Rua João Adolfo Gurgel do Amaral, S/N, Castelo", coordenadas: '4°34\'23.10"S, 37°46\'20.63"O' },
  { id: 15, local: "CEI Rita Calixto Lima", endereco: "Rua Aldovandro Costa Lima, 133, N. Sra. De Lourdes", coordenadas: '4°34\'20.49"S, 37°45\'57.34"O' },
  { id: 16, local: "EEFTI Mirian Calixto", endereco: "Travessa Alexandre Lima, S/N, Aterro", coordenadas: '4°34\'28.10"S, 37°46\'1.73"O' },
  { id: 17, local: "EEF Antônio Monteiro", endereco: "Pedregal", coordenadas: '4°34\'26.73"S, 37°47\'34.32"O' },
  { id: 18, local: "Secretaria de Meio Ambiente e Controle Urbano", endereco: "Rua Leônidas Porto, 879 - Centro", coordenadas: '4°34\'12.37"S, 37°46\'12.93"O' },
  { id: 19, local: "EEF Raimundo Silvério Filho", endereco: "Cumbe", coordenadas: '4°29\'18.82"S, 37°46\'9.25"O' },
  { id: 20, local: "EEF Antônio Ponciano da Costa", endereco: "Córrego dos Rodrigues", coordenadas: '4°33\'26.40"S, 37°43\'21.92"O' },
  { id: 21, local: "EEF Zé Melancia", endereco: "Praia de Canoa Quebrada", coordenadas: '4°31\'35.37"S, 37°42\'5.06"O' },
  { id: 22, local: "EEF Antonieta Cals", endereco: "Praia de Majorlândia", coordenadas: '4°33\'13.99"S, 37°40\'24.02"O' },
  { id: 23, local: "EEF Heriberto Porto", endereco: "Praia de Quixaba", coordenadas: '4°34\'10.92"S, 37°39\'24.16"O' },
  { id: 24, local: "PEV Comunitário (Em construção)", endereco: "Aracati", coordenadas: '4°34\'6.32"S, 37°46\'33.31"O' },
  { id: 25, local: "Supermercado Mini Box", endereco: "Rua Adolfo Caminha, 265 – Centro", coordenadas: '4°34\'0.75"S 37°46\'12.81"O' },
  { id: 26, local: "Supermercado Mini Box", endereco: "Rua Dois de Novembro, 1742 - Centro", coordenadas: '4°33\'24.64"S 37°46\'3.80"O' },
  { id: 27, local: "PEV Comunitário (Em construção)", endereco: "", coordenadas: "" },
];

export function PEVTable() {
  const [pevs, setPevs] = useState<PEV[]>(initialPEVs);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<PEV | null>(null);

  const filteredPEVs = pevs.filter(
    (pev) =>
      pev.local.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pev.endereco.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (pev: PEV) => {
    setEditingId(pev.id);
    setEditForm({ ...pev });
  };

  const handleSave = () => {
    if (editForm) {
      setPevs(pevs.map((pev) => (pev.id === editForm.id ? editForm : pev)));
      setEditingId(null);
      setEditForm(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm(null);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Buscar por local ou endereço..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 border-2 transition-all focus:shadow-soft"
        />
      </div>

      <div className="rounded-lg border-2 border-border overflow-hidden bg-card shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50">
              <tr>
                <th className="px-4 py-4 text-left text-sm font-semibold text-secondary-foreground">Nº</th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-secondary-foreground">Local</th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-secondary-foreground">Endereço</th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-secondary-foreground">Coordenadas</th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-secondary-foreground">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredPEVs.map((pev) => (
                <tr key={pev.id} className="hover:bg-secondary/20 transition-colors">
                  <td className="px-4 py-4 text-sm font-medium text-foreground">{pev.id}</td>
                  <td className="px-4 py-4">
                    {editingId === pev.id ? (
                      <Input
                        value={editForm?.local || ""}
                        onChange={(e) =>
                          setEditForm(editForm ? { ...editForm, local: e.target.value } : null)
                        }
                        className="min-w-[250px]"
                      />
                    ) : (
                      <div className="text-sm font-medium text-foreground">{pev.local}</div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {editingId === pev.id ? (
                      <Input
                        value={editForm?.endereco || ""}
                        onChange={(e) =>
                          setEditForm(editForm ? { ...editForm, endereco: e.target.value } : null)
                        }
                        className="min-w-[300px]"
                      />
                    ) : (
                      <div className="text-sm text-muted-foreground flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span>{pev.endereco || "—"}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {editingId === pev.id ? (
                      <Input
                        value={editForm?.coordenadas || ""}
                        onChange={(e) =>
                          setEditForm(editForm ? { ...editForm, coordenadas: e.target.value } : null)
                        }
                        className="min-w-[200px]"
                      />
                    ) : (
                      <div className="text-sm font-mono text-muted-foreground">{pev.coordenadas || "—"}</div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {editingId === pev.id ? (
                        <>
                          <Button
                            size="sm"
                            onClick={handleSave}
                            className="bg-primary hover:bg-primary-glow"
                          >
                            <Save className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={handleCancel}>
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(pev)}
                          className="hover:bg-secondary"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredPEVs.length === 0 && (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">Nenhum ponto de coleta encontrado com esse termo.</p>
        </Card>
      )}

      <div className="text-sm text-muted-foreground text-center">
        Mostrando {filteredPEVs.length} de {pevs.length} pontos de coleta
      </div>
    </div>
  );
}
