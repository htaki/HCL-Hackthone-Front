import type { ElectricConsumptionDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElectricConsumptionsService {
  apiName = 'Default';
  

  deleteElectricConsumption = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/electric-consumptions/electric-consumption',
    },
    { apiName: this.apiName,...config });
  

  getElectricConsumption = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ElectricConsumptionDto[]>({
      method: 'GET',
      url: '/api/app/electric-consumptions/electric-consumption',
    },
    { apiName: this.apiName,...config });
  

  insertElectricConsumptionByElectricConsumptionDtos = (electricConsumptionDtos: ElectricConsumptionDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/electric-consumptions/electric-consumption',
      body: electricConsumptionDtos,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
