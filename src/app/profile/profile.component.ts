import { ListService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { ElectricConsumptionDto, ElectricConsumptionsService } from '@proxy/electric-consumptions';
import { EnergyReductionPlansService, PlanChoosedPerYearDto, ReductionPerYearDto } from '@proxy/energy-reduction-plans';
import { ReadProfileUpdateDto, UserProfileService, UserProfileUpdateDto } from '@proxy/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartOptions:  {
    responsive: true
  };
  public lineChartLabels: string[] = [];
  public lineChartData = [];



  isModalOpen = false; 
  isConsumptionOpen = false; 
  
  userReductions: ReductionPerYearDto[] = [];

  userProfile : ReadProfileUpdateDto = {location : "", isApartment : null, familySize :null}
  electricConsumption : ElectricConsumptionDto[] = [];
  updateUserProfile : UserProfileUpdateDto = {location : "", isApartment : true, familySize : 5};
  planChoosed: PlanChoosedPerYearDto[] = [
    {
      year : 2023,
      plans: [1]
    }
  ]

  constructor( 
    private profileService: UserProfileService, 
    private consumptionService : ElectricConsumptionsService,
    private enrgyReductionService : EnergyReductionPlansService) {
    this.initializePeriods();

    this.enrgyReductionService.createPlanByData(this.planChoosed).subscribe( response => {

      this.userReductions = response;
      this.lineChartData = [
        {
          data: response.map(d => d.reductionOfCO2InKg),
          label: 'CO2 Reduction (kg)'
        },
        {
          data: response.map(d => d.reductionInKWh),
          label: 'Energy Reduction (kWh)'
        },
        {
          data: response.map(d => d.totalEnergyConsumed),
          label: 'Total Energy Consumed'
        }
      ];
      this.lineChartLabels = response.map(d => d.year.toString());

    }
      
    );
    
  }

  ngOnInit() {
    this.profileService.get()
    .subscribe(response => this.userProfile = response);
  }

  updateProfile(){
    this.profileService.update(this.updateUserProfile)
    .subscribe(() => { this.isModalOpen = false; window.location.reload(); });
  }

  displayUpdateProfile(){
    this.isModalOpen = true;
  }
  displayConsumptionProfile(){
    this.isConsumptionOpen = true;
  }

  saveConsumption() {
    this.consumptionService.deleteElectricConsumption().subscribe(

      () => this.consumptionService.
      insertElectricConsumptionByElectricConsumptionDtos(this.electricConsumption)
      .subscribe(() => window.location.reload)
    );
  }

  initializePeriods() {
    for (let i = 0; i < 4; i++) {
      this.electricConsumption.push({
        startDate: null,
        endDate: null,
        energyConsumedInKwh: null
      });
    }
  }
  
}
