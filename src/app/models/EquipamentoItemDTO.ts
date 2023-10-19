export interface EquipamentoItemDTO {
    id: number; 
    numeroSerie: string;
    situacao: string; 
    equipamento: {
        id: number;
    } 
}