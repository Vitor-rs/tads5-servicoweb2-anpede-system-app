import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { insertView } from "@ionic/angular/directives/navigation/stack-utils";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { EquipamentoDTO } from "src/app/models/EquipamentoDTO";
import { EquipamentoItemDTO } from "src/app/models/EquipamentoItemDTO";

@Injectable()
export class EquipamentoItemService {

    constructor(public http: HttpClient){

    }

    insert(equipamentoItem: any){
        return this.http.post(`${API_CONFIG.baseUrl}/equipamentos_item`, 
                                equipamentoItem, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

/*
    findAll() : Observable<EquipamentoDTO[]> {
        return this.http.get<EquipamentoDTO[]>(`${API_CONFIG.baseUrl}/equipamentos`);
    }

    findById(id: number) : Observable<EquipamentoDTO> {
        return this.http.get<EquipamentoDTO>(
            `${API_CONFIG.baseUrl}/equipamentos/${id}`);
    }

    update(equipamento: EquipamentoDTO){
        return this.http.put(`${API_CONFIG.baseUrl}/equipamentos/${equipamento.id}`, 
                                equipamento, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/equipamentos/${id}`)
    }
    */
}