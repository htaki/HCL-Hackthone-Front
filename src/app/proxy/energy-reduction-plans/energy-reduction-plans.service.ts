import type { EnergyReductionPlanReadDto, PlanChoosedPerYearDto, ReductionPerYearDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnergyReductionPlansService {
  apiName = 'Default';
  

  createPlanByData = (data: PlanChoosedPerYearDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, ReductionPerYearDto[]>({
      method: 'POST',
      url: '/api/app/energy-reduction-plans/plan',
      body: data,
    },
    { apiName: this.apiName,...config });
  

  getAll = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, EnergyReductionPlanReadDto[]>({
      method: 'GET',
      url: '/api/app/energy-reduction-plans',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
