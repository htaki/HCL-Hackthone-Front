
export interface EnergyReductionPlanReadDto {
  id?: string;
  planNumber: number;
  name?: string;
  reductionInKw: number;
}

export interface PlanChoosedPerYearDto {
  year: number;
  plans: number[];
}

export interface ReductionPerYearDto {
  year: number;
  plans: number[];
  reductionOfCO2InKg: number;
  reductionInKWh: number;
  totalEnergyConsumed: number;
}
